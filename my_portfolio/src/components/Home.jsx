import React from "react";
import Typewriter from "typewriter-effect";
// import profile_pic from "../assets/pic1.png";
import profile_pic from "../assets/test_pic11.webp";
import NextJS_Logo from "../assets/NextJS_Logo.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="smooth-scroll flex flex-col items-center bg-gray-100 dark:bg-gray-900 h-auto">
      <div className="px-0 mx-0 h-auto flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between w-full max-w-4xl py-8">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white inline-block">
              Hello, I'm{"\u00A0"}
            </h1>
            <h1 className="text-2xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-600">
              Adhishthan Ashok
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              I do {"\u00A0"} <br />
            </h1>
            <h1 className="text-2xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-600 inline-block">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developement",
                    "Open Source Contribution",
                  ],
                  autoStart: true,
                  loop: true,
                  delete: false,
                }}
              />
            </h1>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* <img
              src={profile_pic}
              alt="Profile"
              className="rounded-full w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 border-4 border-gray-100 dark:border-gray-900"
            /> */}
            <img
              src={profile_pic}
              alt="Profile"
              className="rounded-full w-44 h-44 md:w-60 md:h-60 lg:w-80 lg:h-80 border-4 hover:scale-105 border-gray-100 dark:border-gray-900 transition-all duration-300 "
            />
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-20">
          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110 animate-spin-slow"
              src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
              alt="Skill 1"
              data-tooltip-target="tooltip-skill-1"
            />
            <div
              id="tooltip-skill-1"
              role="tooltip"
              className="tooltip-content"
            >
              React
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-20 rounded-lg hover:scale-110"
              src={NextJS_Logo}
              alt="Skill 2"
              data-tooltip-target="tooltip-skill-2"
            />
            <div
              id="tooltip-skill-2"
              role="tooltip"
              className="tooltip-content"
            >
              Next.js
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110"
              src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
              alt="Skill 3"
              data-tooltip-target="tooltip-skill-3"
            />
            <div
              id="tooltip-skill-3"
              role="tooltip"
              className="tooltip-content"
            >
              Node
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110"
              src="https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000"
              alt="Skill 4"
              data-tooltip-target="tooltip-skill-4"
            />
            <div
              id="tooltip-skill-4"
              role="tooltip"
              className="tooltip-content"
            >
              ExpressJS
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110"
              src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
              alt="Skill 5"
              data-tooltip-target="tooltip-skill-5"
            />
            <div
              id="tooltip-skill-5"
              role="tooltip"
              className="tooltip-content"
            >
              MongoDB
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110"
              src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"
              alt="Skill 6"
              data-tooltip-target="tooltip-skill-6"
            />
            <div
              id="tooltip-skill-6"
              role="tooltip"
              className="tooltip-content"
            >
              HTML
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110"
              src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
              alt="Skill 7"
              data-tooltip-target="tooltip-skill-7"
            />
            <div
              id="tooltip-skill-7"
              role="tooltip"
              className="tooltip-content"
            >
              CSS
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110"
              src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
              alt="Skill 8"
              data-tooltip-target="tooltip-skill-8"
            />
            <div
              id="tooltip-skill-8"
              role="tooltip"
              className="tooltip-content"
            >
              JavaScript
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110"
              src="https://img.icons8.com/?size=100&id=lkh3AbJLmFpp&format=png&color=000000"
              alt="Skill 9"
              data-tooltip-target="tooltip-skill-9"
            />
            <div
              id="tooltip-skill-9"
              role="tooltip"
              className="tooltip-content"
            >
              Github
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110"
              src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
              alt="Skill 10"
              data-tooltip-target="tooltip-skill-10"
            />
            <div
              id="tooltip-skill-10"
              role="tooltip"
              className="tooltip-content"
            >
              Git
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110"
              src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000"
              alt="Skill 11"
              data-tooltip-target="tooltip-skill-11"
            />
            <div
              id="tooltip-skill-11"
              role="tooltip"
              className="tooltip-content"
            >
              Docker
              <div className="tooltip-arrow"></div>
            </div>
          </div>

          <div className="relative group">
            <img
              className="h-auto w-16 rounded-lg hover:scale-110"
              src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
              alt="Skill 12"
              data-tooltip-target="tooltip-skill-12"
            />
            <div
              id="tooltip-skill-12"
              role="tooltip"
              className="tooltip-content"
            >
              TailwindCSS
              <div className="tooltip-arrow"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full h-auto">
          <h1 className="text-3xl font-bold text-center py-8 dark:text-white">
            Days I Code
          </h1>
          <div className="w-full max-w-md h-auto md:max-w-4xl flex flex-col justify-around">
            <a href="https://leetcode.com/u/adhishthanashok" target="_blank">
              <img
                className="object-cover object-center mb-10 h-64 md:h-50 w-96  mx-auto rounded-lg hover:scale-105 transition-all"
                src="https://leetcard.jacoblin.cool/adhishthanashok?ext=heatmap"
                alt="Leetcode activity"
              />
            </a>
            <a href="https://github.com/AdhishthanAshok" target="_blank">
              <img
                className="object-cover object-center mb-10 h-auto md:h-50 w-auto  mx-auto rounded-lg hover:scale-105 transition-all"
                src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=adhishthanashok&theme=aura_dark"
                alt="Leetcode activity"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
