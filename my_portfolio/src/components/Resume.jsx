import React, { useState, useEffect } from "react";
import Theme from "./Theme.jsx";
import resume from "../assets/Adhishthan_Ashok_Resume.pdf";

const Resume = () => {
  return (
    <div className=" h-auto bg-gradient-to-r text-center bg-gray-100 dark:bg-gray-900">
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

      <div className="py-14 ">
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
      <div className=" flex flex-col justify-around">
        {/* This is the section where all the Stat card will appear */}
        <a
          href="https://leetcode.card.workers.dev/adhishthanashok?theme=nord&font=baloo&extension=activity"
          target="_blank"
        >
          <img
            className="object-contain h-96 w-96  mx-auto hover:scale-105 transition-all duration-200"
            src="https://leetcode.card.workers.dev/adhishthanashok?theme=nord&font=baloo&extension=activity"
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
  );
};

export default Resume;
