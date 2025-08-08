import { useState } from "react";

const Resume = () => {
  const [loading, setLoading] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const link = document.createElement("a");
      link.href =
        "https://drive.google.com/uc?export=download&id=1TJYRqpklylvsuWxOjhL55KJ69vk77qmx";
      link.download = "Adhishthan_Ashok_Resume.pdf";
      link.click();
    }, 2000);
  };

  return (
    <div className="pt-6">
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`relative flex items-center justify-center bg-blue-500 dark:bg-blue-500 dark:text-black text-white font-bold py-2 px-4 rounded-lg shadow-lg transition-all duration-300
        ${loading ? "opacity-80 cursor-wait" : "hover:px-5 hover:py-2 hover:bg-gray-800"}`}
      >
        {loading ? (
          <div className="flex items-center space-x-2">
            <span className="spinner"></span>
            <span>Downloading...</span>
          </div>
        ) : (
          "Download Resume"
        )}
      </button>

      {/* Spinner Animation Styles */}
      <style>
        {`
          .spinner {
            width: 1.2rem;
            height: 1.2rem;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-top: 3px solid white;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }

          @media (prefers-color-scheme: dark) {
            .spinner {
              border: 3px solid rgba(0, 0, 0, 0.2);
              border-top: 3px solid black;
            }
          }

          @keyframes spin {
            0%   { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Resume;
