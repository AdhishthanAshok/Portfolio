import React from "react";

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
          />
        </a>
        <a href="https://www.linkedin.com/in/adhishthanashok/" target="_blank">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a href="https://leetcode.com/u/adhishthanashok/" target="_blank">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo.png"
            alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo"
          />
        </a>
        <a href="https://www.codechef.com/users/adhishthan123" target="_blank">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/plasticine/100/codechef.png"
            alt="codechef"
          />
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/000000/apple-phone.png"
            alt="apple-phone"
          />
        </a>
      </div>
      <p className="text-gray-800 dark:text-green-300 text-xs mr-5 font-bold">
        {" "}
        Created by Adhishthan Ashok ☘️
      </p>
    </div>
  );
};

export default Footer;
