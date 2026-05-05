import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { GraduationCap } from "lucide-react";

const items = [
  { title: "B.Tech — Computer Science", org: "University of Technology", period: "2023 — 2027", desc: "Major in CS with focus on cybersecurity, networking and systems." },
  { title: "Higher Secondary (Science)", org: "Senior Secondary School", period: "2021 — 2023", desc: "PCM with Computer Science. Foundation in math, logic and programming." },
  { title: "Self-Learning Path", org: "TryHackMe · HTB · Coursera", period: "2022 — Present", desc: "Continuous learning across pentesting, OSINT and red-team paths." },
];

export function Education() {
  return (
    <Section id="education">
      <SectionHeader kicker="// education" title="Academic Path" />
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-accent/40 transition"
          >
            <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-4">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="font-mono text-[11px] text-accent">{it.period}</span>
            <h3 className="mt-1 font-semibold text-foreground">{it.title}</h3>
            <p className="text-sm text-primary">{it.org}</p>
            <p className="text-sm text-muted-foreground mt-2">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
