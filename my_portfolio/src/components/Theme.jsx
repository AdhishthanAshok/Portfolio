import React, { useState, useEffect, useRef } from "react";
import moonIcon from "../assets/moon.png";
import sunIcon from "../assets/sun.png";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(true); // Default theme as dark
  const ref = useRef(null);

  // Check if the browser is Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const toggleDarkMode = () => {
    if (!ref.current) return;

    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (isSafari || !document.startViewTransition) {
      return;
    }

    requestAnimationFrame(() => {
      const { top, left, width, height } = ref.current.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

      document.body.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 1200, // Reduced duration for a snappier animation
          easing: "ease-out", // Makes the transition feel smoother
        }
      );
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-2 transition-all duration-500 ease-in-out"
      ref={ref}
    >
      <button
        onClick={toggleDarkMode}
        className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-500 ease-in-out
          ${darkMode ? "bg-gray-900 text-gray-100 hover:bg-gray-700" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}
      >
        <img
          src={darkMode ? sunIcon : moonIcon}
          alt="Theme Toggle Icon"
          className="w-10 h-10"
        />
      </button>
    </div>
  );
};

export default Theme;
