import React from 'react';

const RecentActivities = () => {
    return (
        <div className="mt-5 bg-gray-100 dark:bg-gray-900 w-full max-w-md h-auto md:max-w-4xl flex flex-col justify-around">
            <h1 className="text-3xl font-bold text-center py-8 text-gray-900 dark:text-white">
                My Recent Achievements
            </h1>

            <div className="overflow-x-auto rounded-lg border-2 border-gray-700 dark:border-gray-400">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 text-left font-semibold text-indigo-600 border-b-2 border-r-2 border-gray-700 dark:border-gray-400">Details</th>
                            <th className="py-2 px-4 text-left font-semibold text-indigo-600  border-b-2 border-gray-700 dark:border-gray-400">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2">
                            <td className="py-2 px-4 text-gray-900 dark:text-white border-b-2 border-r-2 border-gray-700 dark:border-gray-400">
                                Research paper on <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">“Decentralized File Sharing System using Blockchain”</span> was accepted for oral presentation at the <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">2025 4th OPJU International Technology Conference (OTCON)</span>. The paper is also eligible for <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">IEEE Xplore publication</span>.
                            </td>
                            <td className="py-2 px-4  border-b-2 border-gray-700 dark:border-gray-400">
                                <a href="https://drive.google.com/file/d/1ZJ-Il-Hn6WCV9dkTOCmRVaOM3rNLrzEg/view" className="text-indigo-600 underline" target="_blank"><b>Link</b></a>
                            </td>
                        </tr>
                        <tr className="border-b ">
                            <td className="py-2 px-4 text-gray-900 dark:text-white border-r-2 border-gray-700 dark:border-gray-400">
                                Successfully sold the <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">Vroom Calling project</span> to <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">Course Compass</span>, a Mumbai-based <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">Ed-Tech startup</span>. Following the acquisition, I was offered the position of <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">backend lead</span> for the app’s ongoing development and scalability.
                            </td>
                            <td className="py-2 px-4">
                                <a href="https://github.com/AdhishthanAshok/Vroom" target="_blank" className="text-indigo-600 underline"><b>Link</b></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentActivities;
