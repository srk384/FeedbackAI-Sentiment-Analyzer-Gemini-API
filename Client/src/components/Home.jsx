import React, { useState, useRef } from 'react'
import './Home.css'
import WelcomePage from './WelcomePage'

const Home = () => {
  const [Message, setMessage] = useState('')
  const [Analysis, setAnalysis] = useState('')
  const [Loading, setLoading] = useState(false)

  const textareaRef = useRef(null);
  let inputVal;
  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    inputVal = textarea.value;
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    if (textareaRef.current.value === "") {
      alert("Please enter your feedback");
      return;
    }
    setAnalysis('')
    setMessage('');

    setMessage(inputVal);

    setLoading(true)
    textareaRef.current.value = "";
    textareaRef.current.style.height = "auto";

    const question = inputVal;

    try {
      const response = await fetch(import.meta.env.VITE_API_BASE_URL+"/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      })

      const data = await response.json()
      // setResult([...Result, Message, data]);
      setAnalysis(data)
      // console.log(Result)

    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  }
  return (
    <div>
      <WelcomePage />
      <main className='flex flex-col gap-10'>
        {/* <h1 className='text-center mt-10'>Enter the text you want to search on Gemini</h1> */}
        <form id="form" className='flex flex-col items-center gap-5'>
          <label htmlFor="question">
            <textarea
              ref={textareaRef}
              onInput={() => { handleInput() }}
              className='sm:w-3xl w-[90vw] resize-none bg-black p-4 transition rounded-lg min-h-10 max-h-50 focus:ring-2 focus:ring-cyan-300 focus:outline-none'
              name="question"
              id="question"
              required
              placeholder="Enter your feedback for review...">
            </textarea>
          </label>
          <button
            onClick={formSubmit}
            id="submit"
            className='bg-black px-10 py-3 sm:px-14 sm:py-4 rounded-lg shadow-2xl shadow-cyan-300/50 transition mb-14 duration-400'
            disabled={Loading}>
            {Loading ? 'Analyzing...' : 'Submit'}
          </button>
        </form>
        <section>
          <div className='flex flex-col items-end p-2 mx-auto sm:w-3xl'>

            {Message && <div className='sm:max-w-xl bg-gray-700 p-4 rounded-tr-sm rounded-2xl shadow-2xl transition text-md mb-10'>{Message}</div>}

            {Analysis && <div>
              <div className='sm:w-3xl p-4 transition text-md mx-auto'><strong>Sentiment: </strong>{Analysis.sentiment ? Analysis.sentiment : " "}</div>
              <div className='sm:w-3xl p-4 transition text-md mx-auto'><strong>Explanation </strong>{Analysis.explanation ? Analysis.explanation.join("\n").split("\n").map((line, index) => (
                <li key={index} className='leading-8'>{line}</li>
              )) : " "}</div>
              <div className='sm:w-3xl p-4 transition text-md mx-auto'><strong>Key Points </strong>{Analysis.key_points ? Analysis.key_points.join("\n").split("\n").map((line, index) => (
                <li key={index} className='leading-8'>{line}</li>
              )) : " "}</div>
              <div className='sm:w-3xl p-4 transition text-md mx-auto'><strong>Suggested Responses </strong>{Analysis.suggested_responses ? Analysis.suggested_responses.map((item, index) => (
                <li key={index} className="leading-8">
                  <strong className="text-cyan-300">{item.option}:</strong>
                  <p className="">{item.response}</p>
                </li>
              )) : " "}</div>
            </div>}

          </div>
        </section>
      </main>
    </div>
  )
}

export default Home