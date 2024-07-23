import React from "react";
import buymeacoffee from "../assets/buymeacoffee.png";
const BuyMeACoffeeButton = () => {
  return (
    <div>
      <a href="https://buymeacoffee.com/adhishthanashok" target="_blank">
        <img src={buymeacoffee} className="h-10 w-32" />
      </a>
    </div>
  );
};

export default BuyMeACoffeeButton;
