// Function to generate gradient text
export const gradientText = (text) =>
    `<span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">${text}</span>`;

// Company Logos
export const companyLogos = [
    {
        href: "https://ravencast.io/",
        src: "https://ravencast.io/assets/img/logo_transparent.png",
        alt: "RavenCast Labs",
        customClass: "w-32 md:w-36",
    },
    {
        href: "https://tecorelabs.com/",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgX-LZ6rHTTyai09vGPP_iK0CvE2Mohet1g&s",
        alt: "TecoreLabs",
        customClass: "w-32 md:w-36",
    }
];

// Current Experience
export const currentExperience = {
    companyName: "RavenCast Labs",
    logoSrc: "https://ravencast.io/assets/img/logo_transparent.png",
    certificateUrl: "https://drive.google.com/file/d/1AzefJF28qkz_1KIPbH7TnOX0TD4fKcVW/view",
    workDetails: [
        `<p class="mt-2 text-left"> Architected an <b>LLM-powered Telegram agent</b> using <b>Python, OpenAI tool calling, and real-time APIs</b> to process 500+ daily conversational queries for Solana token, wallet, and market analytics.</p>`, //[cite: 8]
        `<p class="mt-2 text-left"> Engineered high-frequency <b>AWS S3-based data pipelines</b> to ingest Betfair live exchange order-book data stored in Parquet format, training <b>LightGBM models</b> that reduced short-horizon tick and price prediction error by 14%.</p>`, //[cite: 8]
        `<p class="mt-2 text-left"> Prepared <b>real-time Python data pipelines</b> combining live GPS/KML telemetry with 10-level order-book data to analyze market liquidity and trading volume across 1,700+ high-frequency observations.</p>`, //[cite: 8]
        `<p class="mt-2 text-left"> Deployed <b>TradeVision AI</b>, a bulk chart-processing analytics system integrated with <b>Google Cloud Storage and Telegram</b>, cutting manual report generation time by 80%.</p>` //[cite: 8]
    ],
    isImageLeft: false,
    companyUrl: "https://ravencast.io/",
};

// Previous Experiences
export const previousExperiences = [
    {
        companyName: "TecoreLabs Pvt Ltd",
        logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgX-LZ6rHTTyai09vGPP_iK0CvE2Mohet1g&s",
        certificateUrl: "https://drive.google.com/file/d/1ADElB0-4SXZEJ-wzsWama3pH5m63Manw/view",
        workDetails: [
            `<p class="mt-2 text-left"> Designed a <b>microservices-based AI analytics platform</b> with <b>Python/Node.js services</b> for multi-source data ingestion and natural-language querying, reducing query turnaround time by 90% across 20+ enterprise datasets.</p>`, //[cite: 8]
            `<p class="mt-2 text-left"> Developed <b>compliance automation tools</b> using <b>Node.js and Python</b> to ingest organizational evidence, map it against regulatory frameworks, and auto-generate evaluation reports for 5 supporting microservices.</p>`, //[cite: 8]
            `<p class="mt-2 text-left"> Implemented <b>enterprise security and communication modules</b>, including <b>role-based access control (RBAC)</b> across 10+ application modules and integrated Twilio SMS/Email services via <b>RESTful APIs</b>.</p>` //[cite: 8]
        ],
        isImageLeft: false,
        companyUrl: "https://www.linkedin.com/company/tecorelabs",
    }
];