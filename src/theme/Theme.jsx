import React, { useState, useEffect, useRef } from "react";
import moonIcon from "../assets/moon.png";
import sunIcon from "../assets/sun.png";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(true);
  const ref = useRef(null);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const toggleDarkMode = () => {
    if (!ref.current) return;

    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (isSafari || !document.body.animate) return;

    requestAnimationFrame(() => {
      const rect = ref.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const maxX = Math.max(rect.left, window.innerWidth - rect.left);
      const maxY = Math.max(rect.top, window.innerHeight - rect.top);
      const maxRadius = Math.hypot(maxX, maxY);

      document.body.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 1200,
          easing: "ease-out",
        }
      );
    });
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div ref={ref}>
      <button
        onClick={toggleDarkMode}
        className="flex items-center gap-2 p-2 rounded-lg transition-all duration-500 ease-in-out 
                   bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-700"
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
