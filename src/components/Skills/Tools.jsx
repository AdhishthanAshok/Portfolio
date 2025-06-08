const Tools = () => {
    return (
        <div className="w-full max-w-4xl px-4 md:px-8">
            <h1 className="text-2xl font-bold text-left py-8 italic text-gray-900 dark:text-white">
                Tools:
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-20 pb-10">

                {/* Git */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
                        alt="Git"
                        data-tooltip-target="tooltip-tools-1"
                    />
                    <div id="tooltip-tools-1" role="tooltip" className="tooltip-content">
                        Git
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* GitHub */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000"
                        alt="GitHub"
                        data-tooltip-target="tooltip-tools-2"
                    />
                    <div id="tooltip-tools-2" role="tooltip" className="tooltip-content">
                        GitHub
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Postman */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000"
                        alt="Postman"
                        data-tooltip-target="tooltip-tools-3"
                    />
                    <div id="tooltip-tools-3" role="tooltip" className="tooltip-content">
                        Postman
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* ChatGPT */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=kTuxVYRKeKEY&format=png&color=000000"
                        alt="ChatGPT"
                        data-tooltip-target="tooltip-tools-4"
                    />
                    <div id="tooltip-tools-4" role="tooltip" className="tooltip-content">
                        ChatGPT
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Jira */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000"
                        alt="Jira"
                        data-tooltip-target="tooltip-tools-4"
                    />
                    <div id="tooltip-tools-4" role="tooltip" className="tooltip-content">
                        Jira
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Confluence */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=gYRR6rys6REq&format=png&color=000000"
                        alt="Confluence"
                        data-tooltip-target="tooltip-tools-4"
                    />
                    <div id="tooltip-tools-4" role="tooltip" className="tooltip-content">
                        Confluence
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Figma */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
                        alt="Figma"
                        data-tooltip-target="tooltip-tools-5"
                    />
                    <div id="tooltip-tools-5" role="tooltip" className="tooltip-content">
                        Figma
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* WIX */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=RRvk6iXBvEXO&format=png&color=000000"
                        alt="WIX"
                        data-tooltip-target="tooltip-tools-6"
                    />
                    <div id="tooltip-tools-6" role="tooltip" className="tooltip-content">
                        WIX
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Vercel */}
                <div className="relative group">
                    <img
                        className="h-16 w-20 rounded-lg hover:scale-110"
                        src="https://logowik.com/content/uploads/images/vercel1868.jpg"
                        alt="Vercel"
                        data-tooltip-target="tooltip-tools-7"
                    />
                    <div id="tooltip-tools-7" role="tooltip" className="tooltip-content">
                        Vercel
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Excel */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=117561&format=png&color=000000"
                        alt="Excel"
                        data-tooltip-target="tooltip-tools-8"
                    />
                    <div id="tooltip-tools-8" role="tooltip" className="tooltip-content">
                        Excel
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Tools;
