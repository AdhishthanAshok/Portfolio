import React from 'react';

const RecentActivities = () => {
    return (
        <div className="mt-5 bg-gray-100 dark:bg-gray-900 w-11/12 max-w-md h-auto md:max-w-4xl flex flex-col justify-around">
            <h1 className="text-3xl font-bold text-center py-8 text-gray-900 dark:text-white">
                My Recent AchieveMents
            </h1>

            <div className="overflow-x-auto rounded-lg border-2 border-gray-700 dark:border-gray-400">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 text-left font-semibold text-indigo-600 border-b-2 border-r-2 border-gray-700 dark:border-gray-400">Details</th>
                            <th className="py-2 px-4 text-left font-semibold text-indigo-600 dark:text-green-600 border-b-2 border-gray-700 dark:border-gray-400">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2">
                            <td className="py-2 px-4 text-gray-900 dark:text-white border-b-2 border-r-2 border-gray-700 dark:border-gray-400">
                                Published and presented the review paper <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text"> "Decentralized File Sharing using Blockchain" </span> at the 2025 4th OPJU International Technology Conference (OTCON 4.0); <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">officially published in IEEE Xplore</span>.
                            </td>
                            <td className="py-2 px-2  border-b-2 border-gray-700 dark:border-gray-400">
                                <a href="https://ieeexplore.ieee.org/document/11070915" className="text-indigo-600 dark:text-green-600 underline" target="_blank"><b>Link-1</b></a><br /><br />
                                <a href="https://drive.google.com/file/d/1vOiAuzf1cjIsuejtULYPw86dBrkDcwrr/view" className="text-indigo-600 dark:text-green-600 underline" target="_blank"><b>Link-2</b></a>
                            </td>
                        </tr>
                        <tr className="border-b-2">
                            <td className="py-2 px-4 text-gray-900 dark:text-white border-b-2 border-r-2 border-gray-700 dark:border-gray-400">
                                Successfully <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">graduated with an Honors degree in B.Tech Information Technology</span>, demonstrating academic excellence and a strong foundation in computing principles, systems, and applied technologies.
                            </td>
                            <td className="py-2 px-4 border-b-2 border-gray-700 dark:border-gray-400">
                                <a href="https://drive.google.com/file/d/1ul-6Qc254aVrbWeRvkv1y6SIRwJpXUKh/view" className="text-indigo-600 dark:text-green-600 underline" target="_blank"><b>Link</b></a>
                            </td>
                        </tr>

                        <tr className="border-b ">
                            <td className="py-2 px-4 text-gray-900 dark:text-white border-r-2 border-gray-700 dark:border-gray-400">
                                Successfully sold the <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">Vroom Calling project</span> to <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">Course Compass</span>, a Mumbai-based <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">Ed-Tech startup</span>. Following the acquisition, I was offered the position of <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">backend lead</span> for the app’s ongoing development and scalability.
                            </td>
                            <td className="py-2 px-4">
                                <a href="https://github.com/AdhishthanAshok/Vroom" target="_blank" className="text-indigo-600 dark:text-green-600 underline"><b>Link</b></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentActivities;
