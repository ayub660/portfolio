import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Image path gulo apnar assets folder er sathe mil thakte hobe
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
    {
        title: "B2B Asset & Employee Management Platform",
        description: "A comprehensive B2B solution for business owners to manage company assets and employees. Features include role-based access control (Admin/Employee), real-time asset tracking, automated request systems, and secure authentication.",
        image: project1,
        tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
        github: "https://github.com/ayub660/Client-asset-verse",
        live: "https://asset-verse-clients.netlify.app ",
    },
    {
        title: "Clean City - Urban Issue Reporting Portal",
        description: "A community-driven platform for reporting city damages like broken roads or waste issues. Features include real-time public reports, user contribution tracking, and secure Firebase authentication for seamless community participation.",
        image: project2,
        tags: ["React", "Firebase Auth", "Tailwind CSS", "Context API"],
        github: "https://github.com/ayub660/b12-a10-clients",
        live: "https://reporting-portal-city.netlify.app/",
    },
    {
        title: "ToyTopia - Kids' Toy Wonderland",
        description: "An interactive toy store showcasing a wide range of products loaded via dynamic JSON data. Features secure Firebase Authentication with Google Login, detailed product views, and a responsive UI designed for an engaging shopping experience.",
        image: project3,
        tags: ["React", "Firebase Auth", "JSON", "Tailwind CSS"],
        github: "https://github.com/ayub660/Toy-Topia",
        live: "https://toy-topia-f6ccd.web.app",
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

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="glass-card overflow-hidden group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            {/* Image Container with Hover Overlay */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors"
                                    >
                                        <Github size={20} />
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
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