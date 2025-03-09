import { useState, React } from "react";
import Typewriter from "typewriter-effect";
import RegularActivities from "./RegularActivities";
import "./Home.css";
import TechStack from "./TechStack";
import RecentActivities from "./RecentActivities";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);  // State to track image load

  const handleImageLoad = () => {
    setIsLoaded(true);  // Set to true when the image is loaded
  };
  return (
    <div className="smooth-scroll flex flex-col items-center bg-gray-100 dark:bg-gray-900 h-auto">
      <p className="italic text-lg md:text-lg font-bold text-green-600 dark:text-green-600">{"<!-- An Engineer, not a Frameworker -->"}</p>
      <div className="px-0 mx-0 h-auto flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl py-4">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
            <p className=" text-2xl md:text-2xl font-bold text-gray-900 dark:text-white inline-block">
              Hello, I'm{"\u00A0"}
            </p>
            <h1 className="text-3xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-600">
              Adhishthan Ashok
            </h1>
            <h1 className="text-2xl md:text-2xl font-bold text-gray-900 dark:text-white">
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
            <img
              src="https://iili.io/26cIrcG.md.png"
              alt="Profile"
              onLoad={handleImageLoad}  // Detect when image has loaded
              className={`rounded-full transition-all duration-500 
                          ${isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"} 
                          hover:scale-105 border-4 
                          border-gray-100 dark:border-gray-900 
                          w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80`}
            />
          </div>
        </div>


        <TechStack />

        <RecentActivities />

        <RegularActivities />
      </div>
    </div>
  );
};

export default Home;
