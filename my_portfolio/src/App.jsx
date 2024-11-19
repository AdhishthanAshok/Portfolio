import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import ContactMe from "./components/ContactMe";
import Theme from "./components/Theme.jsx";
import header_logo from "./assets/AA_New.png";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App  dark:bg-gray-900 transition-colors duration-300 bg-gray-100">
        <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={header_logo}
                className="h-8 dark:bg-gray"
                alt="Adhishthan Logo"
              />
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Theme />
              <button
                onClick={toggleMenu}
                className="inline-flex items-center my-4 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-expanded={isMenuOpen ? "true" : "false"}
                aria-label="Toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:block md:items-center md:w-auto w-full`}
              id="navbar-cta"
            >
              <ul className="flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    activeclassname="bg-blue-700 text-white"
                    className="border-b-2 border-b-gray-800 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/experience"
                    activeclassname="bg-blue-700 text-white"
                    className="border-b-2 border-b-gray-800 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    activeclassname="bg-blue-700 text-white"
                    className="border-b-2 border-b-gray-800 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/resume"
                    activeclassname="bg-blue-700 text-white"
                    className="border-b-2 border-b-gray-800 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Resume
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-me"
                    activeclassname="bg-blue-700 text-white"
                    className="border-b-2 border-b-gray-800 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Me
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact-me"
                    activeclassname="bg-blue-700 text-white"
                    className="border-b-2 border-b-gray-800 block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact Me
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
