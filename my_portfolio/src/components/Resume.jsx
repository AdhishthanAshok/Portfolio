import React from "react";
import { Link } from "react-router-dom";
import resume from "../assets/Adhishthan_Ashok_Resume.pdf";

const Resume = () => {
  return (
    <div className=" h-[calc(100vh-12rem)] md:h-[calc(100vh-9rem)] bg-gradient-to-r text-center bg-gray-50 dark:bg-gray-900">
      {/* <h2 className="text-4xl font-bold text-black  dark:text-white mb-8">
        Resume
      </h2> */}
      <p className="text-black dark:text-white mb-4">
        Click here to Download <span className="font-bold ">Resume</span>.
      </p>
      <a
        href={resume}
        download="Adhishthan_Ashok_Resume.pdf"
        className="mt-8 bg-black dark:bg-gray-100 dark:text-black hover:px-5 hover:py-2 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-black active:border-collapse transition-all duration-300"
      >
        Download Resume
      </a>

      <div className="py-20">
        <div className="group flex space-x-16 overflow-hidden">
          <div className="group-hover:paused flex animate-loop-scroll space-x-16">
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 1"
            />

            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 2"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 3"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 4"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 5"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 6"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 7"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=lkh3AbJLmFpp&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 8"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 9"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 10"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 11"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=23045&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 12"
            />
          </div>
          <div className="group-hover:paused flex animate-loop-scroll space-x-16">
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 1"
            />

            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 2"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 3"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 4"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 5"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 6"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 7"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=lkh3AbJLmFpp&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 8"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 9"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=22813&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 10"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 11"
            />
            <img
              loading="lazy"
              src="https://img.icons8.com/?size=100&id=23045&format=png&color=000000"
              className="max-w-none w-16"
              alt="Image 12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
