const Database = () => {
    return (
        <div className="w-full max-w-4xl px-4 md:px-8">
            <h1 className="text-2xl font-bold text-left py-8 italic text-gray-900 dark:text-white">
                Databases:
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-20 pb-10">

                {/* SQL */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=QSjnrUKYMnxO&format=png&color=000000"
                        alt="SQL"
                        data-tooltip-target="tooltip-database-1"
                    />
                    <div id="tooltip-database-1" role="tooltip" className="tooltip-content">
                        SQL
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* MySQL */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000"
                        alt="MySQL"
                        data-tooltip-target="tooltip-database-2"
                    />
                    <div id="tooltip-database-2" role="tooltip" className="tooltip-content">
                        MySQL
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* PostgreSQL */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=38561&format=png"
                        alt="PostgreSQL"
                        data-tooltip-target="tooltip-database-3"
                    />
                    <div id="tooltip-database-3" role="tooltip" className="tooltip-content">
                        PostgreSQL
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* MongoDB */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000"
                        alt="MongoDB"
                        data-tooltip-target="tooltip-database-4"
                    />
                    <div id="tooltip-database-4" role="tooltip" className="tooltip-content">
                        MongoDB
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Firebase */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://img.icons8.com/?size=100&id=ROMfFZ1tMhpk&format=png&color=000000"
                        alt="Firebase"
                        data-tooltip-target="tooltip-database-5"
                    />
                    <div id="tooltip-database-5" role="tooltip" className="tooltip-content">
                        Firebase
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

                {/* Sequelize */}
                <div className="relative group">
                    <img
                        className="h-auto w-16 rounded-lg hover:scale-110"
                        src="https://icon.icepanel.io/Technology/svg/Sequelize.svg"
                        alt="Sequelize"
                        data-tooltip-target="tooltip-database-6"
                    />
                    <div id="tooltip-database-6" role="tooltip" className="tooltip-content">
                        Sequelize
                        <div className="tooltip-arrow"></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Database;
