import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import profile from "@/assets/profile.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-primary/30 text-xs font-mono text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            AVAILABLE FOR OPPORTUNITIES
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="block text-foreground">Himanshu</span>
            <span className="block text-gradient">Barman</span>
          </h1>

          <p className="mt-5 text-lg text-muted-foreground max-w-xl">
            Aspiring Penetration Tester · Cybersecurity Enthusiast · Security Researcher
          </p>

          <div className="mt-6 font-mono text-base sm:text-lg text-foreground flex items-center gap-2">
            <span className="text-accent">$</span>
            <span className="text-muted-foreground">whoami →</span>
            <span className="text-primary">
              <TypeAnimation
                sequence={[
                  "Ethical Hacker", 1800,
                  "Pentester", 1800,
                  "OSINT Researcher", 1800,
                  "Security Analyst", 1800,
                ]}
                wrapper="span"
                cursor
                repeat={Infinity}
              />
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:shadow-[0_0_30px_oklch(0.86_0.22_145_/_0.5)] transition-all"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border-primary/30 text-foreground hover:border-primary hover:text-primary transition-all"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass border-accent/30 text-foreground hover:border-accent hover:text-accent transition-all"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "20+", v: "CTFs Solved" },
              { k: "15+", v: "Certifications" },
              { k: "10+", v: "Projects" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-gradient">{s.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative flex items-center justify-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px]">
            {/* aura */}
            <div className="absolute -inset-10 bg-[radial-gradient(circle,_oklch(0.86_0.22_145_/_0.25),_transparent_70%)] blur-2xl" />
            {/* rotating rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" style={{ borderStyle: "dashed" }} />
            <div className="absolute -inset-4 rounded-full border border-accent/20 animate-spin-reverse" style={{ borderStyle: "dotted" }} />
            <div className="absolute -inset-10 rounded-full border border-primary/10 animate-spin-slow" />

            {/* orbit dots */}
            {[0, 72, 144, 216, 288].map((deg, i) => (
              <div
                key={i}
                className="absolute inset-0 animate-spin-slow"
                style={{ animationDuration: `${14 + i * 2}s` }}
              >
                <div
                  className="absolute top-1/2 left-1/2 h-2 w-2 -mt-1 -ml-1 rounded-full bg-primary shadow-[0_0_12px_var(--neon)]"
                  style={{ transform: `rotate(${deg}deg) translateX(${i % 2 ? 230 : 200}px)` }}
                />
              </div>
            ))}

            {/* image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-6 rounded-full overflow-hidden glass-strong neon-border animate-pulse-glow"
            >
              <img
                src={profile}
                alt="Himanshu Barman portrait"
                width={1024}
                height={1024}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </motion.div>

            {/* corner brackets */}
            {[
              "top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl",
              "top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl",
              "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl",
              "bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl",
            ].map((c, i) => (
              <div key={i} className={`absolute h-8 w-8 border-primary ${c}`} />
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition flex flex-col items-center gap-1"
      >
        <span className="text-[10px] font-mono tracking-widest">SCROLL</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
