import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "./Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () =>{
    return<div>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        

        <ThemeToggle />

        <StarBackground />

        <Navbar />

        <main>
            <HomeSection />
            <AboutSection />
            <SkillSection />
            <ProjectSection />
            <ContactSection />
        </main>

        <Footer />

        </div>
    </div>
    
};