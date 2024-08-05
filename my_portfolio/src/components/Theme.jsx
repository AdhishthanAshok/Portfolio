import React from "react";
import { flushSync } from "react-dom";
import * as Switch from "@radix-ui/react-switch"; // Make sure the package is installed
import moonIcon from "../assets/moon.png";
import sunIcon from "../assets/sun.png";
import { useState, useEffect, useRef } from "react";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const ref = useRef(null);

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const toggleDarkMode = async () => {
    if (!ref.current) return;

    const newDarkMode = !darkMode;

    if (isSafari) {
      // Run the normal theme-changing code for Safari
      setDarkMode(newDarkMode);
      return;
    }

    if (!document.startViewTransition) {
      // Fallback for browsers that don't support startViewTransition
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
      className="bg-gray-100 dark:bg-gray-900 rounded-lg text-sm px-4 py-2 text-"
      ref={ref}
    >
      <button
        onClick={toggleDarkMode}
        className={`bg-${darkMode ? "gray-900" : "gray-50"} text-${
          darkMode ? "" : "gray-900"
        } dark:bg-${darkMode ? "" : "gray-900"} dark:text-${
          darkMode ? "gray-900" : "gray-50"
        } font-bold py-2 px-4 rounded-lg hover:bg-${
          darkMode ? "gray-900" : "gray-200"
        } dark:hover:bg-${
          darkMode ? "gray-200" : "gray-700"
        } transition duration-700`}
      >
        {darkMode ? (
          <>
            <img
              src={sunIcon}
              alt="Sun Icon"
              className="w-10 h-10 mr-1 border-white "
            />
          </>
        ) : (
          <>
            <img
              src={moonIcon}
              alt="Moon Icon"
              className="w-10 h-10 mr-1 border-black "
            />
          </>
        )}
      </button>
    </div>
  );
};

export default Theme;
