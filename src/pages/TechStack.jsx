import React from 'react';
import Programming from '../components/Skills/Programming';
import Frontend from '../components/Skills/Frontend';
import Backend from '../components/Skills/Backend';
import Database from '../components/Skills/Database';
import Tools from '../components/Skills/Tools';
import CourseWork from '../components/Skills/CourseWork';

const TechStack = () => {
    return (
        <div className="h-auto flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <h1 className="text-4xl font-bold transition-colors duration-300  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animated-gradient-text">
                Tech Stack
            </h1>
            <Programming />
            <Backend />
            <Frontend />
            <Database />
            <Tools />
            <CourseWork />

            <div className="w-full flex justify-center mt-10 px-4">
                <div className="max-w-3xl w-full bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 dark:from-blue-900 dark:via-blue-800 dark:to-blue-900 rounded-xl p-6 shadow-lg border border-green-300 dark:border-green-700">
                    <h2 className="text-xl md:text-2xl font-bold text-green-800 dark:text-green-200 mb-2">
                        📌 Note
                    </h2>
                    <p className="font-bold italic text-md md:text-lg text-gray-800 dark:text-gray-200">
                        Not just limited to these skills — I'm always learning, exploring, and pushing boundaries to grow as a developer.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default TechStack;