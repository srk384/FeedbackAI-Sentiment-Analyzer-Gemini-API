import { motion } from "motion/react"
import { useState, useEffect } from "react";

const words = ["Sentiment Analysis", "Summarization", "AI-Powered Replies "," Spam Detection"];


const WelcomePage = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 2000); // Change text every 2 seconds
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex flex-col gap-8 items-center justify-center h-[40vh] text-white pt-16">
        <h1 className="text-2xl sm:text-6xl font-bold flex">
        Explore{" "}
          <motion.span
            key={index}
            className="text-cyan-300 ml-2"
            initial={{ opacity: 0, y:-10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {words[index]}
          </motion.span>
        </h1>
        <h3 className="text-gray-300 ">Feedback AI transforms raw feedback into actionable insights using AI-driven analysis.</h3>
      </div>
    );
}

export default WelcomePage