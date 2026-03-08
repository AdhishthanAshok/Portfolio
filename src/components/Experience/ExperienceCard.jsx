import React from 'react';

const ExperienceCard = ({
    companyName,
    logoSrc,
    workDetails,
    isImageLeft = false,
    companyUrl,
}) => {
    return (
        <div className="w-full max-w-5xl mx-auto my-8 md:my-16 px-4 group">
            <div className={`flex flex-col ${isImageLeft ? 'md:flex-row-reverse' : 'md:flex-row'} 
                items-center gap-6 md:gap-10 p-5 md:p-10 rounded-2xl md:rounded-3xl 
                bg-white/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 
                backdrop-blur-xl transition-all duration-500 shadow-lg`}>

                {/* Logo Section - Smaller and centered on mobile */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="p-6 md:p-8 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 w-full max-w-[200px] md:max-w-none">
                        <img
                            src={logoSrc}
                            alt={`${companyName} Logo`}
                            className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Text Content - Center aligned on mobile, left on desktop */}
                <div className="w-full md:w-2/3 text-left">
                    <div className="mb-4 md:mb-6">
                        <h3 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                                {companyName}
                            </a>
                        </h3>
                        <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                            Software Engineer
                        </span>
                    </div>

                    <div className="space-y-3 md:space-y-4 text-slate-600 dark:text-slate-300 text-sm md:text-lg">
                        {workDetails.map((detail, index) => (
                            <div key={index} className="flex gap-2 md:gap-3">
                                <span className="text-indigo-500 font-bold">▹</span>
                                <div dangerouslySetInnerHTML={{ __html: detail }} className="leading-relaxed" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;