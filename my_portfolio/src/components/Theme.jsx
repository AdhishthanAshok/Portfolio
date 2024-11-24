import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import moonIcon from "../assets/moon.png";
import sunIcon from "../assets/sun.png";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(true); // Default theme as dark
  const ref = useRef(null);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const toggleDarkMode = async () => {
    if (!ref.current) return;

    const newDarkMode = !darkMode;

    if (isSafari) {
      setDarkMode(newDarkMode);
      return;
    }

    if (!document.startViewTransition) {
      setDarkMode(newDarkMode);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setDarkMode(newDarkMode);
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 rounded-lg text-sm px-4 py-2"
      ref={ref}
    >
      <button
        onClick={toggleDarkMode}
        className={`${darkMode
          ? "bg-gray-900 text-gray-100 hover:bg-gray-700"
          : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          } dark:bg-gray-900 dark:text-gray-100 font-bold py-2 px-4 rounded-lg transition duration-700`}
      >
        {darkMode ? (
          <img
            src={sunIcon}
            alt="Sun Icon"
            className="w-10 h-10 mr-1 border-white"
          />
        ) : (
          <img
            src={moonIcon}
            alt="Moon Icon"
            className="w-10 h-10 mr-1 border-black"
          />
        )}
      </button>
    </div>
  );
};

export default Theme;
