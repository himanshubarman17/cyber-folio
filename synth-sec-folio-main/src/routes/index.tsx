import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Blog } from "@/components/portfolio/Blog";
import { Certifications } from "@/components/portfolio/Certifications";
import { Badges } from "@/components/portfolio/Badges";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CyberBackground } from "@/components/portfolio/CyberBackground";
import { CursorGlow } from "@/components/portfolio/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himanshu Barman — Cybersecurity Portfolio" },
      { name: "description", content: "Aspiring penetration tester and security researcher. Projects, writeups, certifications and badges from CTFs and bug bounty work." },
      { property: "og:title", content: "Himanshu Barman — Cybersecurity Portfolio" },
      { property: "og:description", content: "Penetration testing · OSINT · Security research." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <CyberBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Blog />
        <Certifications />
        <Badges />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
