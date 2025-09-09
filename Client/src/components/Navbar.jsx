import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// const links = ["Home", "Reviews", "About", "Contact"];
const links = [
  { name: "Home", path: "/", target: "" },
  { name: "Reviews", path: "/reviews", target: "" },
  { name: "About", path: "/about", target: ""  },
  { name: "Contact", path: "https://shahrukh-khan.netlify.app/", target: "_blank" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 fixed w-full top-0 shadow-md z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-cyan-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" >FeedbackAI</Link>

        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <motion.li
              key={index}
              className="hover:text-cyan-300 cursor-pointer mx-5"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to={link.path} target={link.target}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden mt-4 flex flex-col items-center bg-gray-800 py-4 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {links.map((link, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Link 
                to={link.path} 
                target={link.target}
                className="py-2 text-lg hover:text-cyan-300 cursor-pointer block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;