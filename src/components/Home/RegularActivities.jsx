import React from 'react';

const RegularActivities = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-10 text-center md:text-left">
                Daily <span className="text-indigo-600 dark:text-indigo-400">Metrics</span>
            </h2>
            <div className="w-full max-w-md h-auto md:max-w-4xl flex flex-col justify-around">
                <a href="https://leetcode.com/u/adhishthanashok" target="_blank">
                    <img
                        className="object-cover object-center mb-10 h-auto md:h-auto w-96  mx-auto rounded-lg hover:scale-105 transition-all"
                        src="https://leetcard.jacoblin.cool/adhishthanashok?ext=contest"
                        alt="Leetcode activity"
                    />
                </a>
                <a href="https://github.com/AdhishthanAshok" target="_blank">
                    <img
                        className="object-cover object-center mb-10 h-auto md:h-50 w-auto  mx-auto rounded-lg hover:scale-105 transition-all"
                        src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=adhishthanashok&theme=aura_dark"
                        alt="Leetcode activity"
                    />
                </a>
            </div>
        </div>
    );
};

export default RegularActivities;