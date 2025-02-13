import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer.jsx";
import { Analytics } from "@vercel/analytics/react"
import Experience from "./components/Experience.jsx";

function App() {

  return (
    <Router>
      <div className="App dark:bg-gray-900 transition-colors duration-300 bg-gray-100">
        <Navbar />
        <Analytics />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
