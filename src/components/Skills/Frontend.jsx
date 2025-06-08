const Frontend = () => {
    return (
        <div className="w-full max-w-4xl px-4 md:px-8">
            <h1 className="text-2xl font-bold text-left italic py-8 text-gray-900 dark:text-white">
                Frontend Technologies:
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-20 pb-10">

                {/* React.js */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"
                        alt="React"
                        data-tooltip-target="tooltip-frontend-1"
                    />
                    <div id="tooltip-frontend-1" role="tooltip" className="tooltip-content">
                        React.js
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Next.js */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=228BE6"
                        alt="Next.js"
                        data-tooltip-target="tooltip-frontend-2"
                    />
                    <div id="tooltip-frontend-2" role="tooltip" className="tooltip-content">
                        Next.js
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Redux */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=b6vIINYN0kfW&format=png&color=000000"
                        alt="Redux"
                        data-tooltip-target="tooltip-frontend-3"
                    />
                    <div id="tooltip-frontend-3" role="tooltip" className="tooltip-content">
                        Redux
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Tailwind CSS */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
                        alt="Tailwind CSS"
                        data-tooltip-target="tooltip-frontend-4"
                    />
                    <div id="tooltip-frontend-4" role="tooltip" className="tooltip-content">
                        Tailwind CSS
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Material UI */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000"
                        alt="Material UI"
                        data-tooltip-target="tooltip-frontend-5"
                    />
                    <div id="tooltip-frontend-5" role="tooltip" className="tooltip-content">
                        Material UI
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Bootstrap - Placeholder */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000"
                        alt="Bootstrap"
                        data-tooltip-target="tooltip-frontend-6"
                    />
                    <div id="tooltip-frontend-6" role="tooltip" className="tooltip-content">
                        Bootstrap
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>


                {/* Figma */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
                        alt="Figma"
                        data-tooltip-target="tooltip-tools-3"
                    />
                    <div id="tooltip-tools-3" role="tooltip" className="tooltip-content">
                        Figma
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;
