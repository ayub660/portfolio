import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // State for floating label effect
    const [focused, setFocused] = useState(null);

    const contactInfo = [
        { icon: MapPin, label: "Dhaka, Bangladesh" },
        { icon: Mail, label: "md.ayub0070@gmail.com" },
        { icon: Phone, label: "+880 1701 000467" },
    ];

    return (
        <section id="contact" className="section-padding relative py-20">
            <div className="max-w-7xl mx-auto px-4" ref={ref}>
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-mono text-sm mb-2">Get in touch</p>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Contact <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <p className="text-muted-foreground leading-relaxed">
                            I'm always open to new opportunities and interesting projects.
                            Whether you have a question or just want to say hi, feel free to reach out!
                        </p>
                        <div className="space-y-6">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-colors group-hover:bg-primary/20">
                                        <item.icon size={20} className="text-primary" />
                                    </div>
                                    <span className="text-muted-foreground text-sm font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side with Web3Forms Integration */}
                    <motion.form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass-card p-8 space-y-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                    >
                        {/* 1. Web3Forms Access Key  */}
                        <input type="hidden" name="access_key" value="1cf6d579-cdee-42ba-be39-95d723e40da7" />

                        {/* 2. Success Page Redirect (ঐচ্ছিক) */}
                        <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                        {["Name", "Email", "Message"].map((field) => (
                            <div key={field} className="relative">
                                <label
                                    className={`absolute left-4 transition-all duration-300 pointer-events-none font-mono text-xs ${focused === field
                                        ? "-top-2.5 text-primary bg-[#0f172a] px-2"
                                        : "top-3.5 text-muted-foreground"
                                        }`}
                                >
                                    {field}
                                </label>

                                {field === "Message" ? (
                                    <textarea
                                        name="message" // Critical: field name for web3forms
                                        required
                                        rows={4}
                                        className="w-full bg-secondary/20 border border-white/10 rounded-lg px-4 pt-4 pb-2 text-foreground text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                                        onFocus={() => setFocused(field)}
                                        onBlur={(e) => !e.target.value && setFocused(null)}
                                    />
                                ) : (
                                    <input
                                        name={field.toLowerCase()} // Critical: field name for web3forms
                                        required
                                        type={field === "Email" ? "email" : "text"}
                                        className="w-full bg-secondary/20 border border-white/10 rounded-lg px-4 py-3.5 text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                                        onFocus={() => setFocused(field)}
                                        onBlur={(e) => !e.target.value && setFocused(null)}
                                    />
                                )}
                            </div>
                        ))}

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all duration-300"
                        >
                            <Send size={18} /> Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;