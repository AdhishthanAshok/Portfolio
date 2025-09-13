import React from "react";

import CompanyLogo from "../components/Experience/CompanyLogo";
import ExperienceCard from "../components/Experience/ExperienceCard";

import { companyLogos, currentExperience, previousExperiences } from "../Constants/Experience";

const Experience = () => {
    return (
        <div className="h-auto bg-gray-100 dark:bg-gray-900 px-4 pb-8 text-center">

            {/* Heading */}
            <h2 className="text-4xl pb-8 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Companies I've worked for:
            </h2>

            {/* Company Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8">
                {companyLogos.map((logo, index) => (
                    <CompanyLogo key={index} {...logo} />
                ))}
            </div>

            {/* Current Experience */}
            <h2 className="text-xl mt-8 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Current Company:
            </h2>
            <ExperienceCard {...currentExperience} />

            {/* Previous Experiences */}
            <h2 className="text-xl mt-8 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Previous Companies:
            </h2>
            {previousExperiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
            ))}
        </div>
    );
};

export default Experience;
