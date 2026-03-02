import React from "react";
// Import gulo check korun—ei file gulo oboshoy src/components/ folder-e thakte hobe
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen bg-background relative overflow-x-hidden">
            {/* Global background gradient - Fixed and blurred for modern look */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
            </div>

            <Navbar />
            <main className="relative z-10">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <ServicesSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Index;