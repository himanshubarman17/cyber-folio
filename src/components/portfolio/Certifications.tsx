import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Award, BookOpen, FileCheck, Building2 } from "lucide-react";

const tabs = [
  {
    title: "Certifications",
    icon: Award,
    items: ["Google Cybersecurity Cert", "CEH (Practical)", "TryHackMe Pre-Security", "HTB Bug Bounty Hunter"],
  },
  {
    title: "Courses",
    icon: BookOpen,
    items: ["Coursera: IBM Cybersecurity", "Udemy: Web Pentesting", "Cisco: Intro to Cybersecurity", "TCM: Practical Ethical Hacking"],
  },
  {
    title: "Internships",
    icon: Building2,
    items: ["SecureLayer Labs — Pentest Intern", "CyberX — SOC Trainee", "InfoSec Hub — Research"],
  },
  {
    title: "Licenses",
    icon: FileCheck,
    items: ["Cisco Networking Academy", "AWS Cloud Practitioner", "EC-Council Membership"],
  },
];

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader kicker="// credentials" title="Courses & Certifications" subtitle="Continuous learning, verified." />
      <div className="grid md:grid-cols-2 gap-6">
        {tabs.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-primary/40 transition"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">{t.title}</h3>
            </div>
            <ul className="space-y-2">
              {t.items.map((it) => (
                <li key={it} className="flex items-center gap-3 text-sm text-muted-foreground p-3 rounded-lg bg-secondary/40 hover:bg-secondary hover:text-foreground transition group">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:shadow-[0_0_8px_var(--neon)]" />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
