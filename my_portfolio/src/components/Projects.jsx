import React from "react";
import img1 from "../assets/image.png";
import img2 from "../assets/PROJ2.png";
import img3 from "../assets/PROJ3.png";
import img4 from "../assets/PROJ4.png";
import ProjectCard from "./ProjectCard.jsx";
import arrow from "../assets/down_arrow.gif";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r transition-colors duration-300 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold bg-gray-100 text-black pb-8 text-center  dark:text-white dark:bg-gray-900 transition-colors duration-300">
        Projects
      </h2>
      <div className="mx-10 dark:text-gray-50">
        <p className="pb-4">
          <span className="font-bold font-3xl">Currently Working on : </span>{" "}
          <span className="text-blue-500  ">Vroom Call</span>{" "}
          <span className="text-gray-500">
            (A Video calling and meeting app)
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        <ProjectCard
          img={img1}
          title="Glam-Gait: Shoe Site"
          skills=" ReactJs , Node.js , MongoDb , ExpressJS , TailwindCSS , HTML , JavaScript , Postman "
          live_link="https://glamgait-shopping.vercel.app/"
          code_link="https://github.com/AdhishthanAshok/GlamGait_Ecommerce"
        />
        <ProjectCard
          img={img2}
          title="Image Search App"
          skills=" ReactJs, TailwindCSS , HTML , JavaScript , Api Integration, Postman "
          live_link="https://image-search-app-delta-beige.vercel.app/"
          code_link="https://github.com/AdhishthanAshok/Projects/tree/main/React%20Projects/Image%20Search%20App"
        />
        <ProjectCard
          img={img3}
          title="Text-Editor"
          skills="  HTML, CSS, JavaScript "
          live_link="https://text-editor-gilt.vercel.app/"
          code_link="https://github.com/AdhishthanAshok/Projects/tree/main/HTML-CSS%20JavaScript%20Projects/Text%20Editor"
        />
        <ProjectCard
          img={img4}
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
