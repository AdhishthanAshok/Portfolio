import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="h-screen p-10 bg-gradient-to-r text-center">
      <h2 className="text-4xl font-bold text-black dark:text-white ">
        About Me
      </h2>
      <p className="text-black dark:text-white mt-4">
        Write something about yourself here.
      </p>
    </div>
  );
};

export default AboutMe;
