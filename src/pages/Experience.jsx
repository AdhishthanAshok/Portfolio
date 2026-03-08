import React from "react";
import CompanyLogo from "../components/Experience/CompanyLogo";
import ExperienceCard from "../components/Experience/ExperienceCard";
import { companyLogos, currentExperience, previousExperiences } from "../Constants/Experience";

const Experience = () => {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-slate-950 px-4 py-20 relative overflow-hidden transition-colors duration-500">

            {/* Background Decorative Blobs */}
            <div className="absolute top-20 right-0 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Main Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold mb-4 text-slate-900 dark:text-white">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">Experience</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full shadow-sm" />
                </div>

                {/* Company Logos Grid */}
                <div className="flex flex-wrap justify-center items-center gap-12 mb-20 opacity-70 hover:opacity-100 transition-opacity duration-500">
                    {companyLogos.map((logo, index) => (
                        <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110">
                            <CompanyLogo {...logo} />
                        </div>
                    ))}
                </div>

                {/* Section Divider: Current Experience */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">Current Role</h3>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                </div>

                <ExperienceCard {...currentExperience} isImageLeft={false} />

                {/* Section Divider: Previous Experience */}
                <div className="flex items-center gap-4 mt-20 mb-10">
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Previous Roles</h3>
                    <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
                </div>

                <div className="space-y-0">
                    {previousExperiences.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            {...exp}
                            isImageLeft={index % 2 !== 0} // Automatically alternates sides
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;