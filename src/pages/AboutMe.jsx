import React from "react";
import AboutmeCard from "../components/AboutmeCard.jsx";
import {
  Code, Terminal, GraduationCap, Briefcase, Award, Rocket
} from "lucide-react"; // I recommend using lucide-react for icons

const milestones = [
  {
    title: "Introduced to HTML",
    date: "2016",
    description: "The spark that started it all. Began exploring the building blocks of the web.",
    icon: Code,
    position: "left"
  },
  {
    title: "First Program: Train Reservation",
    date: "2018",
    description: "Built a functional reservation form using pure HTML and CSS. My first step into logic and UI.",
    icon: Terminal,
    position: "right"
  },
  {
    title: "Academic Excellence",
    date: "2019 - 2021",
    description: "Completed 10th and 12th from Modern Public School (CBSE) with over 92% aggregate score.",
    icon: GraduationCap,
    position: "left"
  },
  {
    title: "B.Tech at JSSATE Noida",
    date: "2021 - 2025",
    description: "Pursued B.Tech in Information Technology, graduating with Honors and an 8.4 CGPA.",
    icon: Rocket,
    position: "right"
  },
  {
    title: "DSA Mastery & Problem Solving",
    date: "2022 - Present",
    description: "Mastered C++ and Data Structures & Algorithms. Solved 800+ problems and achieved a LeetCode rating of 1719.",
    icon: Code,
    position: "left"
  },
  {
    title: "IEEE Xplore Publication",
    date: "2025",
    description: "Published research paper 'Decentralized File Sharing using Blockchain' at IEEE OTCON 4.0 conference.",
    icon: Award,
    position: "right"
  },
  {
    title: "Software Engineer @ TecoreLabs",
    date: "Apr 2025 - Sep 2025",
    description: "Designed a microservices-based AI analytics platform and developed compliance automation tools using Node.js and Python.",
    icon: Briefcase,
    position: "left"
  },
  {
    title: "Software Engineer @ RavenCast Labs",
    date: "Oct 2025 - Present",
    description: "Architecting LLM-powered agents and engineering high-frequency AWS S3-based data pipelines for real-time market analytics.",
    icon: Briefcase,
    position: "right"
  }
];

const AboutMe = () => {
  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden transition-colors duration-500
                    bg-zinc-50 dark:bg-slate-950">

      {/* Decorative Background Glows (Subtle in light, vibrant in dark) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-indigo-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold mb-4 text-slate-900 dark:text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Journey
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full shadow-sm" />
        </div>

        <div className="relative">
          {/* Adaptive Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full 
                          bg-gradient-to-b from-transparent via-slate-800 dark:via-indigo-500/50 to-transparent" />

          <div className="space-y-4">
            {milestones.map((item, index) => (
              <AboutmeCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;