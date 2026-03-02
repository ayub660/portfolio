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
            // 50px scroll korle navbar-er background change hobe
            setScrolled(window.scrollY > 50);

            // Current section detect kora
            const sections = navItems.map((item) => {
                const el = document.getElementById(item.toLowerCase());
                if (!el) return { name: item, top: 0 };
                return { name: item, top: el.offsetTop - 100 };
            });

            const current = sections.filter((s) => window.scrollY >= s.top).pop();
            if (current) setActive(current.name);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Smooth scroll function (TS type shoreye deya hoyeche)
    const scrollTo = (id) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10 py-2"
                    : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <motion.span
                    className="text-2xl font-bold gradient-text cursor-pointer font-mono"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => scrollTo("home")}
                >
                    {"<Dev />"}
                </motion.span>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className={`relative text-sm font-medium transition-colors duration-300 ${active === item ? "text-primary" : "text-muted-foreground hover:text-foreground"
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

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0f172a] border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item)}
                                    className={`text-left text-base font-medium transition-colors ${active === item ? "text-primary" : "text-muted-foreground"
                                        }`}
                                >
                                    {item}
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