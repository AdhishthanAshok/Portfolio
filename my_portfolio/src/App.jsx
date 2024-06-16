import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import Theme from "./components/Theme.jsx";

function App() {
  return (
    <Router>
      <div className="App pt-3 dark:bg-gray-900 transition-colors duration-300">
        <nav className="mb-4 space-x-2 flex justify-center text-gray-900 dark:text-white ">
          <Link to="/">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800">
              Home
            </button>
          </Link>
          <Link to="/projects">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800">
              Projects
            </button>
          </Link>
          <Link to="/about-me">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800">
              About Me
            </button>
          </Link>
          <Link to="/resume">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800">
              Resume
            </button>
          </Link>
          <Link to="/contact-me">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800">
              Contact Me
            </button>
          </Link>
          <Theme />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
