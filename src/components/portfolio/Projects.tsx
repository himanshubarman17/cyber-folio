import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import portscan from "@/assets/proj-portscan.jpg";
import vuln from "@/assets/proj-vulnscan.jpg";
import pw from "@/assets/proj-password.jpg";
import osint from "@/assets/proj-osint.jpg";
import sniffer from "@/assets/proj-sniffer.jpg";

const projects = [
  { title: "Port Scanner", img: portscan, desc: "Multithreaded TCP port scanner with service banner detection.", tech: ["Python", "Sockets", "Threading"] },
  { title: "Vulnerability Scanner", img: vuln, desc: "Automated web vulnerability scanner targeting OWASP Top 10.", tech: ["Python", "Requests", "BS4"] },
  { title: "Password Analyzer", img: pw, desc: "Strength meter with entropy analysis and breach lookup.", tech: ["Python", "HIBP API"] },
  { title: "OSINT Toolkit", img: osint, desc: "Aggregated recon utility — emails, usernames, domains.", tech: ["Python", "APIs", "CLI"] },
  { title: "Packet Sniffer", img: sniffer, desc: "Lightweight live packet capture and protocol parser.", tech: ["Scapy", "Python"] },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader kicker="// builds" title="Featured Projects" subtitle="Selected security tools I've built." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" width={1024} height={640} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md glass-strong text-[10px] font-mono text-primary">v1.0</div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-primary/10 text-primary border border-primary/20">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <a href="#" className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium glass border-primary/30 hover:border-primary hover:text-primary transition">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                <a href="#" className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium bg-primary/15 text-primary border border-primary/40 hover:bg-primary/25 transition">
                  <ExternalLink className="h-3.5 w-3.5" /> Demo
                </a>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: "0 0 40px oklch(0.86 0.22 145 / 0.25), inset 0 0 30px oklch(0.86 0.22 145 / 0.05)" }} />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
