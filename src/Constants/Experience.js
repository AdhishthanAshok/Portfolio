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
        `<p class="mt-2 text-left"> Built and deployed an <b>AI-powered vision analysis pipeline using Vertex AI</b> to process <b>7,000+ trading chart images</b>, generating automated insights integrated into a <b>real-time chat-based trading assistant</b>.</p>`,

        `<p class="mt-2 text-left"> Developed and enhanced a <b>Python-based AI agent system</b> integrated with a <b>blockchain-powered trading platform</b>, enabling <b>real-time data analysis</b> and responses to dynamic user queries.</p>`,

        `<p class="mt-2 text-left"> Designed and implemented backend services using <b>TypeScript and Node.js</b>, strengthening <b>system reliability, scalability, and data handling</b> within a <b>microservices architecture</b>.</p>`,

        `<p class="mt-2 text-left"> Contributed to <b>real-time analytics pipelines</b> and backend optimizations to support <b>high-throughput, low-latency trading workflows</b>.</p>`
    ],
    isImageLeft: false,
    companyUrl: "https://ravencast.io/",
};

// Previous Experiences
export const previousExperiences = [
    {
        companyName: "Tecore Labs",
        logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgX-LZ6rHTTyai09vGPP_iK0CvE2Mohet1g&s",
        certificateUrl: "https://drive.google.com/file/d/1ADElB0-4SXZEJ-wzsWama3pH5m63Manw/view",
        workDetails: [
            `<p class="mt-2 text-left"> Engineered and deployed <b>full-stack applications</b> using <b>Node.js, Python, and PostgreSQL</b>, improving backend performance through <b>asynchronous processing, query optimization, and database indexing</b>.</p>`,

            `<p class="mt-2 text-left"> Built a <b>role-based user platform</b> supporting <b>secure multi-session access, 2FA authentication, and access control</b>, strengthening user security and platform reliability.</p>`,

            `<p class="mt-2 text-left"> Developed and maintained a <b>compliance platform</b> with <b>five Node.js microservices</b> and an <b>AI-driven Python service</b> for intelligent validation and cross-service data analysis.</p>`,

            `<p class="mt-2 text-left"> Built <b>Python-based microservices</b> for <b>AI-powered video and documentation workflows</b>, enabling cross-service communication using <b>Kafka and HTTP</b> within a microservices architecture.</p>`,

            `<p class="mt-2 text-left"> Containerized and deployed services on <b>GCP using Docker, Helm, and Kubernetes</b>, while collaborating in an <b>Agile environment</b> using <b>Jira and Confluence</b> to deliver documented, production-ready releases.</p>`
        ],
        isImageLeft: false,
        companyUrl: "https://www.linkedin.com/company/tecorelabs",
    }
];
