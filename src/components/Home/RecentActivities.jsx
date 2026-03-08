import React from 'react';
import { ExternalLink, Award, GraduationCap, DollarSign } from 'lucide-react';

const ActivityCard = ({ title, description, links, icon: Icon }) => (
    <div className="p-6 md:p-8 rounded-3xl bg-white/70 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-sm hover:shadow-indigo-500/5 hover:border-indigo-500/50 transition-all duration-300 group">
        <div className="flex gap-6">
            <div className="hidden sm:flex h-12 w-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Icon size={24} />
            </div>
            <div className="flex-1 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                    {title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                    {description}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                    {links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
                            {link.label} <ExternalLink size={14} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const RecentActivities = () => {
    const activities = [
        {
            title: "Blockchain Research Publication",
            description: "Published 'Decentralized File Sharing using Blockchain' at OTCON 4.0; now officially live in IEEE Xplore.",
            icon: Award,
            links: [
                { label: "View Paper", url: "https://ieeexplore.ieee.org/document/11070915" },
                { label: "View Certificate", url: "https://drive.google.com/file/d/1vOiAuzf1cjIsuejtULYPw86dBrkDcwrr/view" }
            ]
        },
        {
            title: "Honors Degree Graduation",
            description: "Graduated with B.Tech Honors in Information Technology, specializing in core computing principles.",
            icon: GraduationCap,
            links: [{ label: "View Certificate", url: "https://drive.google.com/file/d/1ul-6Qc254aVrbWeRvkv1y6SIRwJpXUKh/view" }]
        },
        {
            title: "Project Acquisition & Lead Role",
            description: "Successfully sold 'Vroom Calling' to Course Compass (Ed-Tech Startup). Appointed as Backend Lead for scalability.",
            icon: DollarSign,
            links: [{ label: "GitHub Repo", url: "https://github.com/AdhishthanAshok/Vroom" }]
        }
    ];

    return (
        <div className="flex flex-col justify-center items-center w-full h-auto mt-10">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center md:text-left">
                Recent <span className="text-indigo-600 dark:text-indigo-400">Achievements</span>
            </h2>
            <div className="grid grid-cols-1 gap-6">
                {activities.map((act, idx) => <ActivityCard key={idx} {...act} />)}
            </div>
        </div>
    );
};

export default RecentActivities;