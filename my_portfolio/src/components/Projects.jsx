import React from "react";
import img1 from "../assets/image.png";
import img2 from "../assets/PROJ2.png";
import img3 from "../assets/PROJ3.png";
import img4 from "../assets/PROJ4.png";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r flex flex-col items-center transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold bg-gray-50 text-black pb-8 text-center  dark:text-white dark:bg-gray-900 transition-colors duration-300">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={img1} alt="" className="object-fill h-48 w-96 " />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Glam-Gait: Shoe Site
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Made with :{" "}
              <span className="font-semibold">
                {" "}
                ReactJs , Node.js , MongoDb , ExpressJS , TailwindCSS , HTML ,
                JavaScript, Postman{" "}
              </span>
            </p>
            <div className="flex justify-between">
              <a
                href="https://glamgait-shopping.vercel.app/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700  dark:text-black dark:bg-gray-50 dark:hover:bg-gray-300"
                target="_blank"
              >
                Live Demo
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/AdhishthanAshok/GlamGait_Ecommerce"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800  rounded-lg hover:underline  dark:text-white"
                target="_blank"
              >
                Go to Code
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={img2} alt="" className="object-fill h-48 w-96 " />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Image Search App
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Made with :{" "}
              <span className="font-semibold">
                {" "}
                ReactJs, TailwindCSS , HTML , JavaScript , Api Integration,
                Postman{" "}
              </span>
            </p>
            <div className="flex justify-between">
              <a
                href="https://image-search-app-delta-beige.vercel.app/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700  dark:text-black dark:bg-gray-50 dark:hover:bg-gray-300"
                target="_blank"
              >
                Live Demo
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/AdhishthanAshok/Projects/tree/main/React%20Projects/Image%20Search%20App"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800  rounded-lg hover:underline  dark:text-white"
                target="_blank"
              >
                Go to Code
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={img3} alt="" className="object-fill h-48 w-96 " />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Text-Editor
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Made with :{" "}
              <span className="font-semibold"> HTML, CSS, JavaScript </span>
            </p>
            <div className="flex justify-between">
              <a
                href="https://text-editor-gilt.vercel.app/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700  dark:text-black dark:bg-gray-50 dark:hover:bg-gray-300"
                target="_blank"
              >
                Live Demo
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/AdhishthanAshok/Projects/tree/main/HTML-CSS%20JavaScript%20Projects/Text%20Editor"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800  rounded-lg hover:underline  dark:text-white"
                target="_blank"
              >
                Go to Code
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={img4} alt="" className="object-fill h-48 w-96 " />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Live Language Translator
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Made with :{" "}
              <span className="font-semibold"> HTML, CSS, JavaScript </span>
            </p>
            <div className="flex justify-between">
              <a
                href="https://languagetranslator-o1a33l5rj-adhishthan-ashoks-projects.vercel.app/"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700  dark:text-black dark:bg-gray-50 dark:hover:bg-gray-300"
                target="_blank"
              >
                Live Demo
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/AdhishthanAshok/Projects/tree/main/HTML-CSS%20JavaScript%20Projects/Live_Language_Translation"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-800  rounded-lg hover:underline  dark:text-white"
                target="_blank"
              >
                Go to Code
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
