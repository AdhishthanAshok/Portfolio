import React from "react";
import buymeacoffee from "../assets/buymeacoffee.png";
const BuyMeACoffeeButton = () => {
  return (
    <div>
      <a href="https://buymeacoffee.com/adhishthanashok" target="_blank">
        <img
          src={buymeacoffee}
          className="h-10 w-32 hover:scale-110 transition-all duration-200"
        />
      </a>
    </div>
  );
};

export default BuyMeACoffeeButton;
