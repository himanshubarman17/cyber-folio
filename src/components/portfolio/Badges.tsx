import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Shield, Trophy, Star, Target, Flame, Zap } from "lucide-react";

const badges = [
  { icon: Shield, name: "TryHackMe", sub: "Top 5%", color: "primary" },
  { icon: Trophy, name: "HTB", sub: "Hacker Rank", color: "accent" },
  { icon: Star, name: "0x100 Streak", sub: "Daily Hacker", color: "primary" },
  { icon: Target, name: "Bug Hunter", sub: "5 CVEs", color: "accent" },
  { icon: Flame, name: "CTF Champion", sub: "Top 10 Finish", color: "primary" },
  { icon: Zap, name: "Fast Solver", sub: "First Blood x3", color: "accent" },
];

export function Badges() {
  return (
    <Section id="badges">
      <SectionHeader kicker="// achievements" title="Badges & Trophies" subtitle="Earned across platforms and CTFs." />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {badges.map((b, i) => {
          const isPrimary = b.color === "primary";
          return (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`group relative glass rounded-2xl p-5 text-center transition-all ${isPrimary ? "hover:border-primary/50" : "hover:border-accent/50"}`}
            >
              <div className={`mx-auto h-14 w-14 rounded-full flex items-center justify-center mb-3 transition ${
                isPrimary
                  ? "bg-primary/10 border border-primary/40 text-primary group-hover:shadow-[0_0_25px_var(--neon)]"
                  : "bg-accent/10 border border-accent/40 text-accent group-hover:shadow-[0_0_25px_var(--cyan-glow)]"
              }`}>
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{b.name}</h3>
              <p className="text-[11px] font-mono text-muted-foreground mt-0.5">{b.sub}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
