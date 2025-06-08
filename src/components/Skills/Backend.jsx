const Backend = () => {
    return (
        <div className="w-full max-w-4xl px-4 md:px-8">
            <h1 className="text-2xl font-bold text-left py-8 italic text-gray-900 dark:text-white">
                Backend Technologies:
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-16 pb-10">

                {/* Node.js */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
                        alt="Node.js"
                        data-tooltip-target="tooltip-backend-1"
                    />
                    <div id="tooltip-backend-1" role="tooltip" className="tooltip-content">
                        Node.js
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Express.js */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000"
                        alt="Express.js"
                        data-tooltip-target="tooltip-backend-2"
                    />
                    <div id="tooltip-backend-2" role="tooltip" className="tooltip-content">
                        Express.js
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* REST APIs */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110 bg-white p-1"
                        src="https://img.icons8.com/?size=100&id=21896&format=png&color=000000"
                        alt="REST API"
                        data-tooltip-target="tooltip-backend-3"
                    />
                    <div id="tooltip-backend-3" role="tooltip" className="tooltip-content">
                        REST APIs
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* JWT */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110 bg-white p-1"
                        src="https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000"
                        alt="JWT"
                        data-tooltip-target="tooltip-backend-4"
                    />
                    <div id="tooltip-backend-4" role="tooltip" className="tooltip-content">
                        JWT
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* ngrok */}
                <div className="relative group">
                    <img
                        className="h-16 w-24 rounded-lg hover:scale-110 bg-white p-1"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__T_dwXVMR6ItgMGjN_lkkG3cRm3-Qb_3EA&s"
                        alt="ngrok"
                        data-tooltip-target="tooltip-backend-5"
                    />
                    <div id="tooltip-backend-5" role="tooltip" className="tooltip-content">
                        ngrok
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* GCP */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110    bg-white p-1"
                        src="https://img.icons8.com/?size=100&id=20774&format=png&color=000000"
                        alt="GCP"
                        data-tooltip-target="tooltip-backend-6"
                    />
                    <div id="tooltip-backend-6" role="tooltip" className="tooltip-content">
                        GCP
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* AWS */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110    bg-white p-1"
                        src="https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000"
                        alt="AWS"
                        data-tooltip-target="tooltip-backend-7"
                    />
                    <div id="tooltip-backend-7" role="tooltip" className="tooltip-content">
                        AWS
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Backend;
