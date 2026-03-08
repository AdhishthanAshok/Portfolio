import React from "react";

const AboutmeCard = ({ title, date, description, position, icon: Icon }) => {
  const isLeft = position === "left";

  return (
    <div className="relative mb-12 last:mb-0 group">
      {/* Central Timeline Dot & Icon */}
      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full 
                      bg-white dark:bg-slate-900 
                      border-2 border-indigo-500 
                      flex items-center justify-center z-10 
                      shadow-md dark:shadow-[0_0_15px_rgba(99,102,241,0.5)] 
                      group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
      </div>

      <div className={`flex items-center w-full ${isLeft ? "justify-start" : "justify-end"}`}>
        <div className={`w-full sm:w-[45%] ${isLeft ? "sm:text-right text-left" : "text-left"}`}>
          {/* Glass Card */}
          <div className="p-6 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl
                          bg-white/80 dark:bg-white/5 
                          border border-slate-200 dark:border-white/10 
                          backdrop-blur-md hover:border-indigo-500/50 group-hover:bg-white dark:group-hover:bg-white/10">

            {/* Adaptive Date Tag */}
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider uppercase rounded-full 
                             bg-indigo-100 dark:bg-indigo-500/20 
                             text-indigo-700 dark:text-indigo-300 
                             border border-indigo-200 dark:border-indigo-500/30">
              {date}
            </span>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
              {title}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutmeCard;