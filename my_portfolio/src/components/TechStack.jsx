import React from 'react';
import NextJS_Logo from "../assets/NextJS_Logo.png";

const TechStack = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-20">
            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110 animate-spin-slow"
                    src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
                    alt="Skill 1"
                    data-tooltip-target="tooltip-skill-1"
                />
                <div
                    id="tooltip-skill-1"
                    role="tooltip"
                    className="tooltip-content"
                >
                    React
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110"
                    src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                    alt="Skill 3"
                    data-tooltip-target="tooltip-skill-3"
                />
                <div
                    id="tooltip-skill-3"
                    role="tooltip"
                    className="tooltip-content"
                >
                    Node
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110"
                    src="https://img.icons8.com/fluency/48/mysql-logo.png"
                    alt="Skill 3"
                    data-tooltip-target="tooltip-skill-3"
                />
                <div
                    id="tooltip-skill-3"
                    role="tooltip"
                    className="tooltip-content"
                >
                    MySQL/SQL
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-20 rounded-lg hover:scale-110"
                    src={NextJS_Logo}
                    alt="Skill 2"
                    data-tooltip-target="tooltip-skill-2"
                />
                <div
                    id="tooltip-skill-2"
                    role="tooltip"
                    className="tooltip-content"
                >
                    Next.js
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110"
                    src="https://img.icons8.com/?size=100&id=9Gfx4Dfxl0JK&format=png&color=000000"
                    alt="Skill 4"
                    data-tooltip-target="tooltip-skill-4"
                />
                <div
                    id="tooltip-skill-4"
                    role="tooltip"
                    className="tooltip-content"
                >
                    ExpressJS
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110 "
                    src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                    alt="Skill 5"
                    data-tooltip-target="tooltip-skill-5"
                />
                <div
                    id="tooltip-skill-5"
                    role="tooltip"
                    className="tooltip-content"
                >
                    MongoDB
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110"
                    src="https://img.icons8.com/?size=100&id=v8RpPQUwv0N8&format=png&color=000000"
                    alt="Skill 6"
                    data-tooltip-target="tooltip-skill-6"
                />
                <div
                    id="tooltip-skill-6"
                    role="tooltip"
                    className="tooltip-content"
                >
                    HTML
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110"
                    src="https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000"
                    alt="Skill 7"
                    data-tooltip-target="tooltip-skill-7"
                />
                <div
                    id="tooltip-skill-7"
                    role="tooltip"
                    className="tooltip-content"
                >
                    CSS
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110"
                    src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                    alt="Skill 8"
                    data-tooltip-target="tooltip-skill-8"
                />
                <div
                    id="tooltip-skill-8"
                    role="tooltip"
                    className="tooltip-content"
                >
                    JavaScript
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110"
                    src="https://img.icons8.com/?size=100&id=lkh3AbJLmFpp&format=png&color=000000"
                    alt="Skill 9"
                    data-tooltip-target="tooltip-skill-9"
                />
                <div
                    id="tooltip-skill-9"
                    role="tooltip"
                    className="tooltip-content"
                >
                    Github
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110"
                    src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
                    alt="Skill 10"
                    data-tooltip-target="tooltip-skill-10"
                />
                <div
                    id="tooltip-skill-10"
                    role="tooltip"
                    className="tooltip-content"
                >
                    Git
                    <div className="tooltip-arrow"></div>
                </div>
            </div>

            <div className="relative group">
                <img
                    className="h-auto w-16 rounded-lg hover:scale-110 animate-spin-slow"
                    src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                    alt="Skill 12"
                    data-tooltip-target="tooltip-skill-12"
                />
                <div
                    id="tooltip-skill-12"
                    role="tooltip"
                    className="tooltip-content"
                >
                    TailwindCSS
                    <div className="tooltip-arrow"></div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;