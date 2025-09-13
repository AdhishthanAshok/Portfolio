import React from 'react';

const ExperienceCard = ({
    companyName,
    logoSrc,
    certificateUrl,
    workDetails,
    isImageLeft = false,
}) => {
    const TextContent = () => (
        <div className="w-full md:w-1/2 px-6 py-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                My Work at <span className="text-indigo-600 dark:text-indigo-400 underline">{companyName}</span>
            </h3>
            <div className="space-y-5 text-gray-700 dark:text-gray-200 text-[17px] leading-relaxed">
                {workDetails.map((detail, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: detail }} />
                ))}
            </div>
        </div>
    );

    const ImageContent = () => (
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-6 p-6">
            <div className="group relative">
                <img
                    src={logoSrc}
                    alt={`${companyName} Logo`}
                    className="w-28 md:w-36 h-auto transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10"
            >
                <button className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm md:text-base">
                    View Certificate
                </button>
            </a>
        </div>
    );

    return (
        <div className="w-full max-w-6xl mx-auto my-12 px-4">
            <div
                className={`flex flex-col ${isImageLeft ? 'md:flex-row-reverse' : 'md:flex-row'
                    } bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl overflow-hidden transition-transform`}
            >
                {ImageContent()}
                {TextContent()}
            </div>
        </div>
    );
};

export default ExperienceCard;
