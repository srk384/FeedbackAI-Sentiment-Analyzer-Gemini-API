# 🚧 This product is still in development. Features and functionality may change. 🚧

# FeedBackAI - Sentiment Analyzer | Gemini API

FeedBackAI is a full-stack web application designed to help businesses and platforms automatically analyze and respond to user feedback and reviews. Imagine you are running a website like Amazon or any platform where users post reviews and feedback. This application enables you to:

- **Collect and analyze user reviews:** Users submit their feedback or reviews through the app. The system processes each review, analyzing the sentiment (positive, negative, or neutral) for every message.
- **Extract key points:** The app goes through the feedback line by line, identifying the main points or highlights from each user's message.
- **Suggest automated responses:** Based on the sentiment and content of the feedback, the app suggests appropriate replies that can be sent to users. For example, if a review is positive, it can generate a thank you message; if negative, it can suggest a response asking what went wrong or offering help—all without manual intervention.
- **Business insights:** By aggregating sentiment data, the application helps you understand overall customer satisfaction, identify trends, and generate actionable business insights. You can see how many users are happy, dissatisfied, or neutral at a glance.

### Future Vision
In the future, the goal is to make this application even more powerful and useful by:
- **Plugin support:** Allowing integration with various websites and platforms so they can use this sentiment analysis engine directly for their own feedback and review systems.
- **Automated business actions:** Generating lists, reports, and insights to help businesses address problem areas, improve products, and optimize sales or purchases.
- **Reply automation:** Fully automating the process of responding to user feedback, saving time and ensuring every customer receives a timely and relevant reply.

With FeedbackAI, businesses can streamline their feedback management, improve customer engagement, and make data-driven decisions—all with minimal manual effort.

---

## Features

### 🌐 Client (Frontend)
- **Modern UI**: Built with React, Vite, and styled using Tailwind CSS for a responsive and clean interface.
- **Feedback Submission**: Users can submit their feedback through an intuitive form.
- **Sentiment Analysis Display**: Instantly see the sentiment (positive, negative, neutral) of submitted feedback.
- **Reviews Page**: View a list of all feedback and their analyzed sentiments.


### 🛠️ Backend (API)
- **Express.js Server**: Handles API requests from the frontend.
- **MongoDB Integration**: Stores user feedback and sentiment results.
- **Gemini API Integration**: Sends feedback to the Gemini API for sentiment analysis and returns the result.
- **RESTful Endpoints**: For submitting and retrieving feedback data.

---

## Folder Structure

```
Backend/
  index.js           # Express server setup
  db.js              # MongoDB connection
  models/Feedback.js # Mongoose model for feedback
  package.json       # Backend dependencies

Client/
  src/
    components/      # Reusable UI components
    pages/           # App pages (e.g., Reviews)
    App.jsx          # Main React component
    ...
  public/            # Static assets
  package.json       # Frontend dependencies
  tailwind.config.js # Tailwind CSS config
  vite.config.js     # Vite config
```

---

## Getting Started

### 1. Clone the repository
```powershell
git clone https://github.com/srk384/FeedbackAI-Sentiment-Analyzer-Gemini-API.git
cd "FeedbackAI"
```

### 2. Install dependencies
- **Backend**
  ```powershell
  cd Backend
  npm install
  ```
- **Client**
  ```powershell
  cd ../Client
  npm install
  ```

### 3. Configure Environment Variables
- Set up your Gemini API key and MongoDB URI in the backend (e.g., using a `.env` file).

### 4. Run the app
- **Backend**
  ```powershell
  npm start
  ```
- **Client**
  ```powershell
  npm run dev
  ```

---

## Functionality Overview
- **Submit Feedback**: Users enter feedback, which is sent to the backend.
- **Analyze Sentiment**: Backend sends feedback to Gemini API, receives sentiment, and stores it.
- **View Reviews**: All feedback and their sentiments are displayed on the Reviews page.

---

## Technologies Used
- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **API**: Gemini API for sentiment analysis

---

## License
MIT License
