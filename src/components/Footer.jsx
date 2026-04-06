import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    // Social icons list (Icon name gulo dynamically render hobe)
    const socialLinks = [
        { Icon: Github, href: "https://github.com/ayub660" },
        { Icon: Linkedin, href: "https://www.linkedin.com/in/shahriar-ayub" },
        { Icon: Twitter, href: "https://x.com/ayub0070" },
    ];

    return (
        <footer className="border-t border-white/10 py-12 px-4 bg-[#0f172a]/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Copyright Text */}
                <span className="text-sm text-muted-foreground font-mono">
                    © {new Date().getFullYear()} Shahriar Ayub. Built with passion.
                </span>

                {/* Social Icons Loop */}
                <div className="flex gap-4">
                    {socialLinks.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl bg-secondary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 border border-white/5"
                        >
                            <item.Icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;