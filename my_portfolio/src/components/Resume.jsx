import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div className="h-screen p-10 bg-gradient-to-r text-center">
      <h2 className="text-4xl font-bold text-black dark:text-white mb-8">
        Resume
      </h2>
      <p className="text-black dark:text-white mb-4">
        Add your resume details here.
      </p>
      <a
        href="/resume.pdf"
        download="resume.pdf"
        className="mt-8 bg-black dark:bg-gray-100 dark:text-black hover:px-5 hover:py-3 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-black active:border-collapse transition-all duration-300"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
