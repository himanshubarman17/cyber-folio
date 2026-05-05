import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Terminal, Network, Bug, Search, Flag, BookOpen } from "lucide-react";

const cards = [
  { icon: Terminal, title: "Ethical Hacking", desc: "Hands-on with offensive security, exploit dev, and red-team thinking." },
  { icon: Network, title: "Networking", desc: "TCP/IP, routing, packet analysis and protocol-level deep dives." },
  { icon: Bug, title: "Vulnerability Research", desc: "Spotting, reporting and weaponising real-world bugs responsibly." },
  { icon: Search, title: "OSINT", desc: "Open-source intelligence gathering, recon and digital footprinting." },
  { icon: Flag, title: "CTF Player", desc: "Active on TryHackMe & Hack The Box across web, pwn, forensics." },
  { icon: BookOpen, title: "Always Learning", desc: "Reading CVEs, writeups, and pushing my craft every single day." },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader kicker="// about" title="Who I Am" subtitle="A short brief from the terminal." />
      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 glass rounded-2xl p-6 font-mono text-sm"
        >
          <div className="flex gap-1.5 mb-4">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
            <span className="ml-3 text-xs text-muted-foreground">~/about.sh</span>
          </div>
          <p className="text-muted-foreground"><span className="text-primary">$</span> cat profile.json</p>
          <pre className="mt-3 text-xs sm:text-sm text-foreground whitespace-pre-wrap leading-relaxed">
{`{
  "name": "Himanshu Barman",
  "role": "Cybersecurity Enthusiast",
  "focus": [
    "Penetration Testing",
    "OSINT",
    "Network Security"
  ],
  "stack": ["Linux", "Python", "Bash"],
  "ctf": ["TryHackMe", "HTB"],
  "mission": "Break to defend."
}`}
          </pre>
          <p className="mt-4 text-muted-foreground">
            <span className="text-primary">$</span> <span className="animate-pulse">_</span>
          </p>
        </motion.div>

        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group glass rounded-2xl p-5 hover:border-primary/40 transition-all"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-3 group-hover:shadow-[0_0_20px_oklch(0.86_0.22_145_/_0.4)] transition">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
