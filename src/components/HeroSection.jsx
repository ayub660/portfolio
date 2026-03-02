import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
// Image import path ta check korben, apnar assets folder e thakte hobe
import profileImg from "../assets/profile.jpg";

const titles = ["MERN Stack Developer", "Full Stack Developer", "React Specialist", "Node.js Expert"];

const HeroSection = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = titles[titleIndex];
        let timeout; // TypeScript er ReturnType shoreye deya hoyeche

        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2000);
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        } else if (deleting && displayed.length === 0) {
            setDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }

        return () => clearTimeout(timeout);
    }, [displayed, deleting, titleIndex]);

    return (
        <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden py-20">
            {/* Background gradient orbs - Visual effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-primary font-mono text-sm mb-4">Hello, I'm</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                        Shahriar <span className="gradient-text">Ayub</span>
                    </h1>

                    {/* Typewriter Effect Container */}
                    <div className="h-10 md:h-12 mb-6">
                        <span className="text-xl md:text-2xl font-mono text-muted-foreground">
                            {displayed}
                            <span className="border-r-2 border-primary ml-1 animate-pulse">&nbsp;</span>
                        </span>
                    </div>

                    <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
                        Building full-stack web applications with MongoDB, Express.js, React.js & Node.js.
                        I turn complex problems into elegant, scalable solutions.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-lg transition-all duration-300 shadow-lg shadow-primary/20"
                        >
                            <Mail size={18} /> Hire Me
                        </motion.a>

                        <motion.a
                            href="/resume.pdf" // Public folder e resume.pdf thakle kaj korbe
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-foreground font-medium rounded-lg hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                        >
                            <Download size={18} /> Download CV
                        </motion.a>
                    </div>
                </motion.div>

                {/* Profile Image with Glow Effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        {/* Soft Glow behind image */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-500 blur-2xl opacity-30 animate-pulse" />
                        <img
                            src={profileImg}
                            alt="Profile Portrait"
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <ArrowDown className="text-muted-foreground opacity-50" size={24} />
            </motion.div>
        </section>
    );
};

export default HeroSection;