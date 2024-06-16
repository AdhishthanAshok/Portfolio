import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import profile_pic from "../assets/pic1.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="smooth-scroll">
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl p-5 md:p-10">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-2xl md:text-2xl font-bold text-gray-900 dark:text-white inline-block">
              Hello , I'm {"\u00A0"}
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-600 ">
              <Typewriter
                options={{
                  strings: [" Adhishthan Ashok"],
                  autoStart: true,
                  loop: true,
                  delete: false,
                }}
              />
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white ">
              I'm a{"\u00A0"} <br />
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-600 inline-block">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer",
                    "Open Source Contributer",
                    "Tech Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  delete: false,
                }}
              />
            </h1>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={profile_pic}
              alt="Placeholder"
              className="rounded-full w-60 h-60 md:w-80 md:h-80 border-4 border-white dark:border-gray-900"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
