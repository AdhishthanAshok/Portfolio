import { useState } from 'react';

const JokeOfTheDay = () => {
    const [joke, setJoke] = useState(null);
    const [showJokeWindow, setShowJokeWindow] = useState(false);
    const [revealPunchline, setRevealPunchline] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
            const data = await response.json();
            setJoke(data[0]);  // Set the new joke
            console.log(data);
            setShowJokeWindow(true); // Show the joke window
            setRevealPunchline(false); // Hide punchline initially
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    // Handle the reveal punchline logic with animation
    const handleRevealPunchline = () => {
        setIsShaking(true);
        setTimeout(() => {
            setRevealPunchline(true);
            setIsShaking(false);
        }, 500);
    };

    // Handle showing another joke when "Another Joke?" is clicked
    const handleAnotherJoke = () => {
        setRevealPunchline(false);
        fetchJoke();  // Fetch a new joke 
    };

    return (
        <div className="flex justify-center items-center p-4">
            {/* Joke of the Day Button */}
            <button
                onClick={fetchJoke}
                className="px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:text-gray-200"
            >
                Joke of the Day
            </button>

            {/* Floating Window with the Joke */}
            {showJokeWindow && joke && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 dark:bg-opacity-80">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300">Joke of the Day 😁😜</h3>
                        <p className="mt-4 text-lg text-gray-800 dark:text-gray-200 italic">  <strong>{joke.setup}</strong>🤔</p>
                        {revealPunchline && (
                            <h3 className="mt-2 text-lg text-indigo-600 dark:text-indigo-400">
                                <strong>{joke.punchline}</strong>🤣😂
                            </h3>
                        )}
                        {revealPunchline ?
                            <button
                                onClick={handleAnotherJoke}
                                className={`mt-4 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 ${isShaking ? 'animate-shake' : 'bg-green-600 hover:bg-green-700'} dark:bg-green-500 dark:hover:bg-green-600 dark:text-gray-900`}
                            >
                                Another Joke?
                            </button> : <button
                                onClick={handleRevealPunchline}
                                className={`mt-4 px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 ${isShaking ? 'animate-shake' : 'bg-indigo-600 hover:bg-indigo-700'} dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:text-gray-200`}
                            >
                                Reveal Punchline!
                            </button>
                        }

                        <button
                            onClick={() => setShowJokeWindow(false)}
                            className="mt-2 px-6 py-2 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-all"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JokeOfTheDay;
