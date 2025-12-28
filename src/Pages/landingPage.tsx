import { Layout } from "@/layout/layout.tsx";
import Hero from "@/sections/hero.tsx";
import About from "@/sections/about.tsx";
import Skills from "@/sections/skills.tsx";
import Experience from "@/sections/experience.tsx";
import Projects from "@/sections/projects.tsx";
import Contact from "@/sections/contact.tsx";

function LandingPage() {
    return (
        <Layout>
            <div id="hero">
                <Hero />
            </div>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
        </Layout>
    );
}

export { LandingPage };