// Function to generate gradient text
export const gradientText = (text) =>
    `<span class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">${text}</span>`;

// Company Logos
export const companyLogos = [
    {
        href: "https://tecorelabs.com/",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgX-LZ6rHTTyai09vGPP_iK0CvE2Mohet1g&s",
        alt: "TecoreLabs",
        customClass: "w-32 md:w-36",
    },
    {
        href: "https://educase.io/",
        src: "https://educase.io/wp-content/uploads/2022/09/120x630.webp",
        alt: "EduCase India",
        customClass: "w-32 md:w-36",
    },
];

// Current Experience
export const currentExperience = {
    companyName: "Tecore Labs",
    logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXgX-LZ6rHTTyai09vGPP_iK0CvE2Mohet1g&s",
    certificateUrl: "https://drive.google.com/file/d/15Zt-uJjI4SyJwxYhzcdE0HDuKeUCZBET/view",
    workDetails: [
        `<p class="mt-2 text-left"><b>•</b> Led the design and deployment of scalable full-stack and microservices-based platforms using <b>Node.js, Python, and PostgreSQL</b>, focusing on performance and modular architecture.</p>`,
        `<p class="mt-2 text-left"><b>•</b> Implemented secure user access, AI-driven services, and CI/CD automation using <b>Docker, Kubernetes, and GCP</b>, collaborating in an <b>Agile, cross-functional</b> team environment.</p>`
    ],
    isImageLeft: false,
};

// Previous Experiences
export const previousExperiences = [
    {
        companyName: "EduCase India",
        logoSrc: "https://educase.io/wp-content/uploads/2022/09/120x630.webp",
        certificateUrl: "https://drive.google.com/file/d/1KxXnC5hZK9GPvdnHKUu4Y3Wl6K05_6vZ/view?usp=sharing",
        workDetails: [
            `<p class="mt-2 text-left"><b>•</b> Improved backend performance by <b>60%</b> through SQL optimization, API testing, and system efficiency enhancements.</p>`,
            `<p class="mt-2 text-left"><b>•</b> Contributed to <b>13+ modules</b> including Attendance, E-learning, and Kit Ordering, collaborating with senior developers and deploying production-ready code.</p>`
        ],
        isImageLeft: true,
    },
];
