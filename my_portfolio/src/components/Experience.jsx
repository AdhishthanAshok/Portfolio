import React from "react";

const Experience = () => {
    return (
        <div className="h-auto bg-gradient-to-r text-center bg-gray-100 dark:bg-gray-900 px-4 py-8">
            {/* Heading */}
            <h2 className="text-2xl font-bold bg-gray-100 text-black pb-8 text-center dark:text-white dark:bg-gray-900 transition-colors duration-300">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                    Companies I worked for:
                </span>
            </h2>

            {/* Companies Section */}
            <div className="flex flex-col md:flex-row items-center justify-evenly ">
                <div className="flex flex-wrap justify-center items-center gap-8 ">
                    <a href="https://educase.io/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="h-auto w-32 md:w-36 rounded-lg hover:scale-110 transition-transform duration-300"
                            src="https://educase.io/wp-content/uploads/2022/09/120x630.webp"
                            alt="EduCase India"
                        />
                    </a>
                    <a href="https://www.fitnessbellindia.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="h-auto w-12 md:w-14 rounded-lg hover:scale-110 transition-transform duration-300"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wWdN0xxPNLfyvONl2UOVsHd7MgIcmfx50w&s"
                            alt="Fitness Bell India"
                        />
                    </a>
                    <a href="https://internship.codeclause.com/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="h-auto w-14 md:w-16 rounded-lg hover:scale-110 transition-transform duration-300"
                            src="https://app.internship.codeclause.com/utilities/assets/img/logo/codeclause1.png"
                            alt="Code Clause"
                        />
                    </a>
                </div>
            </div>

            {/* Details Section for Educase India Internship */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mt-8 p-2 border-t-2  border-gray-500 rounded-lg">
                {/* Left Card */}
                <div className="text-gray-900 dark:text-white rounded-lg p-2 w-full md:w-1/2">
                    <div className="flex flex-col md:gap-14 items-center">
                        <img
                            className="h-auto w-44 md:w-56 rounded-lg hover:scale-110 transition-transform duration-300"
                            src="https://educase.io/wp-content/uploads/2022/09/120x630.webp"
                            alt="EduCase Certificate"
                        />
                        <div className="mt-4">
                            <a href="https://drive.google.com/file/d/1KxXnC5hZK9GPvdnHKUu4Y3Wl6K05_6vZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <button
                                    type="button"
                                    className="md:h-16 md:w-32 text-white bg-green-700 hover:bg-green-800 rounded md:font-medium text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 transition duration-300"
                                >
                                    Certificate
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Card */}
                <div className="text-gray-900 dark:text-white rounded-lg pt-4 w-full md:w-1/2">
                    <h3 className="text-lg font-semibold">My Work at <span className="underline ">EduCase India</span></h3>
                    <p className="mt-2 text-left">
                        <b>•</b> Enhanced backend performance with Node.js, achieving
                        <b> <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                            &nbsp;60% faster response times
                        </span></b>  using industry-standard coding
                        practices and documentation.
                    </p>
                    <p className="mt-2 text-left">
                        <b>•</b> Improved SQL query performance by refining queries and indexing,
                        <b> <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                            &nbsp; reducing execution time by 30%
                        </span></b>  and gaining
                        expertise in complex queries and schemas.
                    </p>
                    <p className="mt-2 text-left">
                        <b>•</b>
                        <b> <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                            Tested and validated 130+ APIs
                        </span></b> using Postman, ensuring robustness and reliability through collaboration with senior
                        developers.
                    </p>
                    <p className="mt-2 text-left">
                        <b>•</b> Implemented performance improvements that led to a
                        <b><span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                            &nbsp; 50% increase in system efficiency
                        </span></b>   and successfully
                        deployed the refined code to production for live use.
                    </p>
                </div>
            </div>

            {/* Details Section for FirnessBell India Internship */}
            <div className="flex flex-col-reverse md:flex-row justify-center gap-6 mt-4 p-2 border-t-2 border-b-2 border-gray-500">
                {/* Left Card */}
                <div className="text-gray-900 dark:text-white rounded-lg p-4 w-full md:w-1/2">
                    <h3 className="text-lg font-semibold">My Work at <span className="underline ">FitnessBell India</span></h3>
                    <p className="mt-2 text-left">
                        <b>•</b>  Improved website design by
                        <b> <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                            &nbsp;70% using Wix Studios, Web Flow, Figma, and Pixels
                        </span></b> for responsive design.
                    </p>
                    <p className="mt-2 text-left">
                        <b>•</b> Collaborated with the CEO to achieve
                        <b> <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                            &nbsp;60% faster development results
                        </span></b>  in production and <b> <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                            &nbsp;30% faster updates.
                        </span></b>
                    </p>
                </div>

                {/* Right Card */}

                <div className="text-gray-900 dark:text-white rounded-lg pt-8 w-full md:w-1/2">
                    <div className="flex flex-col md:gap-14 items-center">
                        <img
                            className="h-auto w-20 md:w-36 rounded-lg hover:scale-110 transition-transform duration-300"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wWdN0xxPNLfyvONl2UOVsHd7MgIcmfx50w&s"
                            alt="EduCase Certificate"
                        />
                        <div className="mt-4">
                            <a href="https://docs.google.com/document/d/1GFyVqSxVxjaoOk7CAzHwI_843HlEbsmd/edit?usp=sharing&ouid=111516820465981204391&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                                <button
                                    type="button"
                                    className="md:h-16 md:w-32 text-white bg-green-700 hover:bg-green-800 rounded md:font-medium text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 transition duration-300"
                                >
                                    Certificate
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Experience;
