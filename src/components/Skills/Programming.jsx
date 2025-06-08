const Programming = () => {
    return (
        <div className="w-full max-w-4xl px-4 md:px-8">
            <h1 className="text-2xl font-bold text-left italic py-8 text-gray-900 dark:text-white">
                Programming Skills:
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-20 pb-10">
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110 "
                        src="https://img.icons8.com/?size=100&id=40669&format=png"
                        alt="Skill 1"
                        data-tooltip-target="tooltip-skill-1"
                    />
                    <div
                        id="tooltip-skill-1"
                        role="tooltip"
                        className="tooltip-content"
                    >
                        C/C++
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110 "
                        src="http://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                        alt="Skill 2"
                        data-tooltip-target="tooltip-skill-2"
                    />
                    <div
                        id="tooltip-skill-2"
                        role="tooltip"
                        className="tooltip-content"
                    >
                        JavaScript
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110 "
                        src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
                        alt="Skill 3"
                        data-tooltip-target="tooltip-skill-3"
                    />
                    <div
                        id="tooltip-skill-3"
                        role="tooltip"
                        className="tooltip-content"
                    >
                        TypeScript
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110 "
                        src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
                        alt="Skill 4"
                        data-tooltip-target="tooltip-skill-4"
                    />
                    <div
                        id="tooltip-skill-4"
                        role="tooltip"
                        className="tooltip-content"
                    >
                        Python
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Programming;