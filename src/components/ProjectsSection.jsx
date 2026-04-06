import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Image path gulo assets folder-er sathe mil thakte hobe
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";

const projects = [
    {
        title: "B2B Asset & Employee Management Platform",
        description: "A comprehensive B2B solution for business owners to manage company assets and employees. Features include role-based access control (Admin/Employee), real-time asset tracking, and secure authentication.",
        image: project1,
        tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
        github: "https://github.com/ayub660/Client-asset-verse",
        live: "https://asset-verse-clients.netlify.app",
    },
    {
        title: "Clean City - Urban Issue Reporting Portal",
        description: "A community-driven platform for reporting city damages like broken roads or waste issues. Features include real-time public reports, user contribution tracking, and secure Firebase authentication.",
        image: project2,
        tags: ["React", "Firebase Auth", "Tailwind CSS", "Context API"],
        github: "https://github.com/ayub660/b12-a10-clients",
        live: "https://reporting-portal-city.netlify.app/",
    },
];

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="section-padding relative py-20">
            <div className="max-w-7xl mx-auto px-4" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-mono text-sm mb-2">My work</p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                </motion.div>

                {/* Projects Container - Flexbox auto-adjust */}
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass-card overflow-hidden group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex-1 min-w-[300px] md:min-w-[400px] max-w-[550px] flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                            </div>

                            {/* Project Info Section */}
                            <div className="p-6 flex flex-col flex-grow">

                                {/* --- Link Buttons (Title-er Opore, Boro Grid Layout) --- */}
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    {/* GitHub Button - Black Property */}
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-200 hover:bg-white text-black text-sm font-bold transition-all border border-black/10 shadow-sm active:scale-95"
                                    >
                                        <Github size={18} strokeWidth={2.5} />
                                        <span>GitHub</span>
                                    </a>

                                    {/* Live Link Button */}
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-bold transition-all shadow-lg shadow-primary/20 active:scale-95"
                                    >
                                        <ExternalLink size={18} strokeWidth={2.5} />
                                        <span>Live Link</span>
                                    </a>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-primary/10 border border-primary/20 rounded text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;