import React from "react";
import Typewriter from "typewriter-effect";
import profile_pic from "../assets/pic1.png";
import leetcode_image from "../assets/LC.png";

const Home = () => {
  return (
    <div className="smooth-scroll flex flex-col items-center bg-gray-50 dark:bg-gray-900">
      <div className="px-0 mx-0 min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl p-5 md:p-10">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white inline-block">
              Hello, I'm{"\u00A0"}
            </h1>
            <h1 className="text-2xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-600">
              Adhishthan Ashok
            </h1>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              I'm a{"\u00A0"} <br />
            </h1>
            <h1 className="text-2xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-600 inline-block">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer",
                    "Open Source Contributor",
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
              alt="Profile"
              className="rounded-full w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 border-4 border-white dark:border-gray-900"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-20">
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=lkh3AbJLmFpp&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto w-16 rounded-lg"
              src="https://img.icons8.com/?size=100&id=23045&format=png&color=000000"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-3xl font-bold text-center py-8 dark:text-white">
            Days I Code
          </h1>
          <div className="w-full max-w-md md:max-w-4xl">
            <img
              className="object-cover object-center mb-10 h-auto md:h-auto w-full mx-auto transition-all duration-500 rounded-lg blur-sm hover:blur-none"
              src={leetcode_image}
              alt="Leetcode activity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
