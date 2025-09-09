const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    username: { type: String, default: "Shahrukh" },
    message: { type: String, required: [true, "Feedback message is required"], trim: true },
    sentiment: { type: String, enum: ["Positive", "Neutral", "Negative"], default: "Neutral" },
    key_points: { type: Array, default: [] },
    explanation: { type: Array, default: [] },
    suggested_responses: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now },
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;
