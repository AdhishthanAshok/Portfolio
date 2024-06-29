import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r dark:bg-gray-900 transition-colors duration-300 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold bg-gray-50 text-black pb-8 text-center  dark:text-white transition-colors duration-300">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Project 1</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Project 2</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Project 3</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Project 4</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
