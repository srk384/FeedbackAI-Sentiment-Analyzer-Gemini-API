const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require('express');
const bodyParser = require("body-parser")
const dotenv = require("dotenv");
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
dotenv.config()

const connectDB = require('./db.js')
const FeedbackSchema = require('./models/Feedback.js')

connectDB();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });


const responseGenerator = async (question) => {
    try {
        const result = await model.generateContent(question);
        return result.response.text().replace(/```json|```/g, "").trim()
    } catch (error) {
        console.log(error)
    }
}


// Lightweight endpoint to keep the server warm
app.get('/wake', (req, res) => {
    res.status(200).json({ status: 'awake', time: new Date().toISOString() })
})

app.post('/submit', async (req, res) => {
    const prompt = `Analyze this user feedback:
  "${req.body.question}"
  - Determine the sentiment (Positive, Neutral, Negative)
  - Summarize the key points
  - Suggest a response

  Format your response in valid JSON like this:
      {
        "sentiment": "Neutral",
        "key_points": ["...", "..."],
        "suggested_responses": [
          {"option": "Casual", "response": "..."},
          {"option": "Formal", "response": "..."}
        ],
        "explanation": ["...", "..."]
      }`

    const response = await responseGenerator(prompt)

    const result = JSON.parse(response)
    const feedback = new FeedbackSchema({ message: req.body.question, ...result });
    feedback.save().then(() => {
        console.log("Feedback saved successfully");
    }).catch((err) => {
        console.log(err);
    })
    res.json(result);
})
app.get('/reviews', async (req, res) => {
    const result = await FeedbackSchema.find({ username: "Shahrukh" })
    res.json(result);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


