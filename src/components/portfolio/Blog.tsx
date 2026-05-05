import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  { tag: "CTF", title: "HTB: Cracking 'Pilgrimage' — From LFI to Root", read: "8 min", date: "Apr 2026" },
  { tag: "Web", title: "Understanding SSRF: From Theory to Real Exploits", read: "6 min", date: "Mar 2026" },
  { tag: "Linux", title: "10 Linux Privilege Escalation Tricks I Use Daily", read: "5 min", date: "Mar 2026" },
  { tag: "OSINT", title: "Building a Personal OSINT Workflow with Free Tools", read: "7 min", date: "Feb 2026" },
  { tag: "Network", title: "TCP Handshake Demystified — A Pentester's View", read: "4 min", date: "Jan 2026" },
  { tag: "Career", title: "My Journey Into Ethical Hacking", read: "6 min", date: "Dec 2025" },
];

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeader kicker="// blog" title="Latest Writeups" subtitle="Notes from the field." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p, i) => (
          <motion.a
            href="#"
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group glass rounded-2xl p-6 hover:border-primary/40 transition-all flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-primary/10 text-primary border border-primary/20">{p.tag}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">{p.title}</h3>
            <div className="mt-auto pt-5 flex items-center gap-3 text-xs text-muted-foreground font-mono">
              <Clock className="h-3 w-3" /> {p.read}
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              {p.date}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
