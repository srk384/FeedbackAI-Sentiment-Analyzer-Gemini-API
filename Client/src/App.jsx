import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Reviews from './pages/Reviews'

function App() {

  return (
    <>
      <Router>
        <div className='bg-gray-800 min-h-screen text-white relative'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="*" element={<h1 className='flex justify-center items-center min-h-[70vh] text-3xl text-gray-400'>404 - Page Not Found</h1>} />
          </ Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
