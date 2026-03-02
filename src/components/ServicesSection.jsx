import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Database, Layers } from "lucide-react";

const services = [
    {
        icon: Code2,
        title: "Frontend Development",
        description: "Crafting responsive and interactive UIs with React.js, HTML5, CSS3, and Tailwind CSS. Expertise in integrating Firebase and JWT for secure user authentication.",
    },
    {
        icon: Server,
        title: "Backend Development",
        description: "Building scalable server-side applications and robust RESTful APIs using Node.js and Express.js with clean, maintainable code.",
    },
    {
        icon: Database,
        title: "Database Design",
        description: "Efficient MongoDB database modeling and performing CRUD operations with optimized queries to ensure data integrity and performance.",
    },
    {
        icon: Layers,
        title: "Full Stack Solutions",
        description: "Delivering end-to-end MERN stack applications, focusing on seamless user experience, secure backend logic, and successful deployment.",
    },
];

const ServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="services" className="section-padding relative py-20">
            <div className="max-w-7xl mx-auto px-4" ref={ref}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-mono text-sm mb-2">What I offer</p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        My <span className="gradient-text">Services</span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)"
                            }}
                            className="glass-card p-8 text-center group cursor-default rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            {/* Icon Container */}
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <service.icon className="text-primary group-hover:text-white transition-colors" size={28} />
                            </div>

                            <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;