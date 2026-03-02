import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Database, Zap, FileCode, Server } from "lucide-react";

const skills = [
    { name: "HTML / CSS", level: 95, icon: FileCode },
    { name: "JavaScript (ES6+)", level: 92, icon: Zap },
    { name: "React.js", level: 90, icon: Code2 },
    { name: "Tailwind CSS", level: 88, icon: Palette },
    { name: "Node.js / Express.js", level: 85, icon: Server },
    { name: "MongoDB", level: 82, icon: Database },
];

const AboutSection = () => {
    const ref = useRef(null);
    // Animates when the section is 100px into the viewport
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-padding relative py-20">
            <div className="max-w-7xl mx-auto px-4" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Side: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            I'm a passionate MERN Stack Developer with expertise in building
                            full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
                            I create responsive, scalable, and high-performance web solutions.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            From pixel-perfect frontends with HTML, CSS, and Tailwind to robust
                            backend APIs with Node.js and Express, I deliver complete web solutions.
                            I love turning ideas into reality with clean, maintainable code.
                        </p>
                    </motion.div>

                    {/* Right Side: Skills Progress Bars */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {skills.map((skill, i) => (
                            <div key={skill.name} className="group">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        {/* Render the Lucide icon dynamically */}
                                        <skill.icon size={18} className="text-primary" />
                                        <span className="text-sm font-medium">{skill.name}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground font-mono">
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Progress Bar Background */}
                                <div className="h-2.5 bg-secondary/30 rounded-full overflow-hidden">
                                    {/* Animated Progress Fill */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${skill.level}%` } : {}}
                                        transition={{ duration: 1.2, delay: 0.5 + i * 0.1 }}
                                        className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;