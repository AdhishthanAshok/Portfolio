import React from "react";
import BuyMeACoffeeButton from "./BuyMeACoffeeButton";
import "../Styles/Home.css";
import JokeOfTheDay from "./JokeOfTheDay";

const Footer = () => {
  const phoneNumber = "9068287133";
  const message =
    "Hello, I came across your portfolio and I would like to discuss potential opportunities.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center items-center md:justify-between text-center py-5 md:text-right">
      <div className="flex flex-row gap-5 justify-center items-center ml-5">
        <a href="https://github.com/AdhishthanAshok" target="_blank">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/github--v1.png"
            alt="github--v1"
            className="hover:scale-125 transition-all duration-100"
          />
        </a>
        <a href="https://www.linkedin.com/in/adhishthanashok/" target="_blank">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="linkedin"
            className="hover:scale-125 transition-all duration-100"
          />
        </a>
        <a href="https://leetcode.com/u/adhishthanashok/" target="_blank">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png"
            alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo"
            className="hover:scale-125 transition-all duration-100"
          />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/color/48/whatsapp--v1.png"
            alt="whatsapp"
            className="hover:scale-125 transition-all duration-100"
          />
        </a>
      </div>
      <JokeOfTheDay />
      <BuyMeACoffeeButton />
      <p className="text-gray-800 dark:text-green-300 text-xs md:mr-2 font-bold">
        {" "}
        Created by Adhishthan Ashok ☘️
      </p>
    </div>
  );
};

export default Footer;
