import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} <span className="text-primary">Himanshu Barman</span> · Built with security in mind.
          </p>
          <div className="flex items-center gap-3">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <a href="#home" className="h-9 px-3 rounded-lg glass flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/40 transition">
              <ArrowUp className="h-3.5 w-3.5" /> TOP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
