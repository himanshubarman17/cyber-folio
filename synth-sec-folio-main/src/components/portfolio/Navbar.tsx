import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["home", "about", "projects", "blog", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`glass-strong rounded-2xl px-5 py-3 flex items-center justify-between transition-all ${scrolled ? "shadow-elegant" : ""}`}>
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Shield className="h-6 w-6 text-primary group-hover:drop-shadow-[0_0_8px_var(--neon)] transition" />
            </div>
            <span className="font-mono text-sm tracking-widest text-foreground">
              <span className="text-primary">{"<"}</span>HB<span className="text-accent">{"/>"}</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const id = l.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <span className={isActive ? "text-primary" : ""}>{l.label}</span>
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-accent origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono text-primary border border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_20px_oklch(0.86_0.22_145_/_0.3)] transition-all"
          >
            ./hire_me
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-white/5"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:text-primary transition"
                >
                  {l.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
