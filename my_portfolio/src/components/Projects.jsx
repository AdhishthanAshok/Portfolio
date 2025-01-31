import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import arrow from "../assets/down_arrow.gif";

// Project code will be edited again and agin on every new project

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold bg-gray-100 text-black pb-8 text-center  dark:text-white dark:bg-gray-900 transition-colors duration-300">
        <span className="shinny-text">
          ProJectS
        </span>
      </h2>
      <div className="mx-10 dark:text-gray-50">
        <p className="pb-4">
          <span className="font-bold font-3xl">Currently Learning : </span>{" "}
          <span className="text-blue-500 font-bold">AWS</span>{" "}
          <span className="text-gray-500">
            (Cloud Essentials from CourseEra)
          </span>
        </p>
        <h1 className="font-bold inline-block mr-4">
          Previously made projects{" "}
        </h1>
        <img
          src={arrow}
          alt=""
          className="inline-block"
          width={20}
          height={20}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 justify-items-center">
        <ProjectCard
          img="/PROJ5.png"
          title="Vroom : Calling and Meeting App"
          skills="Next.js, TypeScript, Shadcn/ui, TailwindCSS, Clerk, Stream"
          live_link="https://vroom-calling.vercel.app/"
          code_link="https://github.com/AdhishthanAshok/Vroom-Call"
        />
        <ProjectCard
          img="/PROJ1.png"
          title="Glam-Gait: Shoe Site"
          skills={
            <>
              MERN Stack, JavaScript, TailwindCSS, Toastify, Postman <br/>{" "}
              <a href="https://glamgait-admin.vercel.app" target="_blank" rel="noopener noreferrer" className="text-green-400 underline hover:scale-105 hover:text-green-700 ml-2">
                Admin Panel
              </a>
            </>
          }
          live_link="https://glamgait-shopping.vercel.app/"
          code_link="https://github.com/AdhishthanAshok/GlamGait_Ecommerce"
        />
        <ProjectCard
          img="/PROJ2.png"
          title="Chitra-Khoj"
          skills=" ReactJs, TailwindCSS , HTML , JavaScript , Api Integration, Postman "
          live_link="https://image-search-app-delta-beige.vercel.app/"
          code_link="https://github.com/AdhishthanAshok/Projects/tree/main/React%20Projects/Image%20Search%20App"
        />
        <ProjectCard
          img="/PROJ3.png"
          title="Text-Editor"
          skills="  HTML, CSS, JavaScript and Api Integration"
          live_link="https://text-editor-gilt.vercel.app/"
          code_link="https://github.com/AdhishthanAshok/Projects/tree/main/HTML-CSS%20JavaScript%20Projects/Text%20Editor"
        />
        <ProjectCard
          img="/PROJ4.png"
          title="Live Language Translator"
          skills=" HTML, CSS, JavaScript"
          live_link="https://languagetranslator-o1a33l5rj-adhishthan-ashoks-projects.vercel.app/"
          code_link="https://github.com/AdhishthanAshok/Projects/tree/main/HTML-CSS%20JavaScript%20Projects/Live_Language_Translation"
        />
      </div>
    </div>
  );
};

export default Projects;
