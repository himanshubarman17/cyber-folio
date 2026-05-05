import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl mx-auto mb-14"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[11px] font-mono tracking-widest text-primary mb-4 uppercase">
        <span className="h-1 w-1 rounded-full bg-primary" /> {kicker}
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
        <span className="text-foreground">{title.split(" ").slice(0, -1).join(" ")} </span>
        <span className="text-gradient">{title.split(" ").slice(-1)}</span>
      </h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

export function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
