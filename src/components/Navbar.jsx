import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Projects", "Services", "Contact"];

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navItems.map((item) => {
                const el = document.getElementById(item.toLowerCase());
                if (!el) return { name: item, top: 0 };
                return { name: item, top: el.offsetTop - 120 };
            });

            const current = sections.filter((s) => window.scrollY >= s.top).pop();
            if (current) setActive(current.name);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        const targetId = id.toLowerCase();
        const el = document.getElementById(targetId);

        if (el) {
            setMenuOpen(false);
            setTimeout(() => {
                const offset = 80;
                const elementPosition = el.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 300);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                ? "bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10 py-2 shadow-xl"
                : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
                <motion.span
                    className="text-2xl font-bold gradient-text cursor-pointer font-mono"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollTo("home")}
                >
                    {"ShahriarAyub"}
                </motion.span>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className={`relative text-sm font-bold transition-colors duration-300 ${active === item
                                    ? "text-primary" // Active thakle shob shomoy primary color
                                    : scrolled
                                        ? "text-white/90 hover:text-white" // Scroll korle White text
                                        : "text-black hover:text-primary" // Scroll na korle (Home-e) Black text
                                }`}
                        >
                            {item}
                            {active === item && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Mobile toggle button color adjustment */}
                <button
                    className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? "text-white" : "text-black"
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[#0f172a] border-t border-white/10 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-2 p-6">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item)}
                                    className={`text-left text-lg font-medium transition-all duration-300 p-4 rounded-xl flex items-center justify-between ${active === item
                                            ? "text-primary bg-primary/10"
                                            : "text-white hover:bg-white/5"
                                        }`}
                                >
                                    <span>{item}</span>
                                    {active === item && (
                                        <motion.div
                                            layoutId="activeMobileIndicator"
                                            className="w-1.5 h-6 bg-primary rounded-full"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;