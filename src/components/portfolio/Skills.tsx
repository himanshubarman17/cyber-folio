import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    title: "Cybersecurity",
    items: [
      { name: "Burp Suite", level: 85 },
      { name: "Metasploit", level: 78 },
      { name: "Wireshark", level: 88 },
      { name: "OSINT", level: 82 },
    ],
  },
  {
    title: "Networking & OS",
    items: [
      { name: "Nmap", level: 90 },
      { name: "Linux", level: 92 },
      { name: "TCP/IP", level: 85 },
      { name: "Web Security", level: 80 },
    ],
  },
  {
    title: "Programming",
    items: [
      { name: "Python", level: 86 },
      { name: "Bash", level: 84 },
      { name: "JavaScript", level: 70 },
      { name: "C", level: 65 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader kicker="// arsenal" title="Skills & Tools" subtitle="The toolkit I work with daily." />
      <div className="grid md:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-primary/30 transition"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-5">{g.title}</h3>
            <div className="space-y-4">
              {g.items.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground">{s.name}</span>
                    <span className="font-mono text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_var(--neon)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
