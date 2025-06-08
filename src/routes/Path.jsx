import { Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Projects from "../pages/Projects";
import AboutMe from "../pages/AboutMe";
import TechStack from "../pages/TechStack";
import ContactMe from "../pages/ContactMe.jsx";
import Experience from "../pages/Experience.jsx";

const Path = () => ([
    <Route path="/" element={<Home />} key="home" />,
    <Route path="/projects" element={<Projects />} key="projects" />,
    <Route path="/experience" element={<Experience />} key="experience" />,
    <Route path="/about-me" element={<AboutMe />} key="about" />,
    <Route path="/skills" element={<TechStack />} key="TechStack" />,
    <Route path="/contact-me" element={<ContactMe />} key="contact" />,
]);

export default Path