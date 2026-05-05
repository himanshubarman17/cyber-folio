import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Briefcase } from "lucide-react";

const items = [
  { role: "Cybersecurity Intern", org: "SecureLayer Labs", period: "2025 — Present", desc: "Performing web app pentests, writing reports, and triaging vulnerabilities for client systems." },
  { role: "Freelance Security Researcher", org: "Independent", period: "2024 — Present", desc: "Bug bounty hunting on responsible disclosure programs across web targets." },
  { role: "CTF Team Member", org: "Community", period: "2023 — Present", desc: "Active in TryHackMe and Hack The Box challenges across multiple categories." },
  { role: "Self-taught Pentester", org: "Home Lab", period: "2022 — Present", desc: "Built a personal lab for hands-on practice with vulnerable VMs and active directory." },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader kicker="// experience" title="Career Timeline" subtitle="Where I've operated." />
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        {items.map((it, i) => (
          <motion.div
            key={it.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`relative mb-10 md:w-1/2 pl-12 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}
          >
            <div className={`absolute top-3 h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_var(--neon)] left-3 md:left-auto ${i % 2 ? "md:-left-1.5" : "md:-right-1.5"}`} />
            <div className="glass rounded-2xl p-5 hover:border-primary/30 transition">
              <div className={`flex items-center gap-2 text-primary mb-1 ${i % 2 ? "" : "md:justify-end"}`}>
                <Briefcase className="h-4 w-4" />
                <span className="font-mono text-xs">{it.period}</span>
              </div>
              <h3 className="font-semibold text-foreground">{it.role}</h3>
              <p className="text-sm text-accent">{it.org}</p>
              <p className="text-sm text-muted-foreground mt-2">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
