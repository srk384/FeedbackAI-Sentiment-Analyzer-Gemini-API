import React from 'react'

const Footer = () => {
    const date= new Date();
    
  return (
    <div className='pt-30'>
        <footer>
            <div className="bg-gray-900 text-white text-sm px-6 py-4 absolute w-full bottom-0 shadow-md">
                <div className="flex justify-center items-center max-w-6xl sm:w-full mx-auto">
                <p>© {date.getFullYear()} FeedbackAI. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer