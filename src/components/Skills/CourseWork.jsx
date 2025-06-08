const CourseWork = () => {
    return (
        <div className="w-full max-w-4xl px-4 md:px-8">
            <h1 className="text-2xl font-bold text-left italic py-8 text-gray-900 dark:text-white">
                Course Work:
            </h1>
            {/* Database Management Systems */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-20 pb-10">
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110 "
                        src="http://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYa9My90p3Q9A1QyePpnOwjkDF32u7soAavbj4Z8FSurBnT2eBysMsCCpKWZS0D9hshyk4ausmKpJASepoNDHWS7qkdNlvflRp2U7-FFfg1uQm9CHNHvV-k-OeN04VsQuyXnuHx_-EvNU/s320/DBMS1.png"
                        alt="Database Management Systems"
                        data-tooltip-target="tooltip-coursework-1"
                    />
                    <div
                        id="tooltip-coursework-1"
                        role="tooltip"
                        className="tooltip-content"
                    >
                        Database Management Systems
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Object Oriented Programming */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.myloview.com/stickers/object-oriented-programming-icon-vector-700-153232805.jpg"
                        alt="Object Oriented Programming"
                        data-tooltip-target="tooltip-coursework-2"
                    />
                    <div
                        id="tooltip-coursework-2"
                        role="tooltip"
                        className="tooltip-content"
                    >
                        Object Oriented Programming
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Operating System */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=QGeedI2KhNCQ&format=png&color=000000"
                        alt="Operating System"
                        data-tooltip-target="tooltip-coursework-3"
                    />
                    <div
                        id="tooltip-coursework-3"
                        role="tooltip"
                        className="tooltip-content"
                    >
                        Operating System
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Computer Networks */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://static.vecteezy.com/system/resources/previews/008/681/148/non_2x/computer-network-internet-technologies-icon-vector.jpg"
                        alt="Computer Networks"
                        data-tooltip-target="tooltip-coursework-4"
                    />
                    <div
                        id="tooltip-coursework-4"
                        role="tooltip"
                        className="tooltip-content"
                    >
                        Computer Networks
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseWork;