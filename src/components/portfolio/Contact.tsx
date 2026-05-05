import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Github, Linkedin, Mail, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <Section id="contact">
      <SectionHeader kicker="// contact" title="Let's Connect" subtitle="Open to opportunities, collaborations and CTF teams." />
      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-foreground">Reach Out</h3>
            <p className="text-sm text-muted-foreground mt-1">Drop a message — I usually reply within 24h.</p>
            <div className="mt-5 space-y-3">
              {[
                { icon: Mail, label: "himanshu@cyber.dev", href: "mailto:himanshu@cyber.dev" },
                { icon: Github, label: "github.com/himanshu", href: "#" },
                { icon: Linkedin, label: "linkedin.com/in/himanshu", href: "#" },
                { icon: Send, label: "Telegram @himanshu", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary text-sm group transition">
                  <span className="h-9 w-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:shadow-[0_0_15px_var(--neon)] transition">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="text-foreground">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass rounded-2xl p-6 space-y-4"
        >
          {[
            { name: "name", label: "Name", type: "text", placeholder: "Your name" },
            { name: "email", label: "Email", type: "email", placeholder: "you@domain.com" },
          ].map((f) => (
            <div key={f.name}>
              <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">{f.label}</label>
              <input
                required
                type={f.type}
                placeholder={f.placeholder}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_0_20px_oklch(0.86_0.22_145_/_0.25)] transition"
              />
            </div>
          ))}
          <div>
            <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:shadow-[0_0_20px_oklch(0.86_0.22_145_/_0.25)] transition resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_oklch(0.86_0.22_145_/_0.5)] transition-all disabled:opacity-70"
          >
            {sent ? (<><Check className="h-4 w-4" /> Sent</>) : (<><Send className="h-4 w-4" /> Transmit Message</>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
