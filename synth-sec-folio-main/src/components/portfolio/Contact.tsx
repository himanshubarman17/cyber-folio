import { useEffect, useState } from "react";
import { Section, SectionHeader } from "./Section";
import { client } from "@/lib/sanity";
import { contactQuery } from "@/lib/queries";

import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Send,
} from "lucide-react";

interface ContactData {
  email?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  twitter?: string;
}

export function Contact() {
  const [data, setData] = useState<ContactData | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    client.fetch(contactQuery).then(setData);
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    await client.create({
      _type: "messages",
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    });

    setName("");
    setEmail("");
    setMessage("");

    alert("Message sent 🚀");
  };

  const SocialLink = ({
    href,
    icon: Icon,
    label,
  }: {
    href?: string;
    icon: any;
    label: string;
  }) => {
    if (!href) {
      return (
        <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10 opacity-60">
          <Icon className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            {label} (not set)
          </span>
        </div>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition"
      >
        <Icon className="h-4 w-4 text-primary" />
        <span className="text-sm text-muted-foreground hover:text-primary transition">
          {label}
        </span>
      </a>
    );
  };

  return (
    <Section id="contact">
      <SectionHeader
        kicker="// contact"
        title="Let's Connect"
        subtitle="Open to opportunities, collaborations and CTF teams."
      />

      <div className="grid lg:grid-cols-2 gap-8 mt-8">

        {/* LEFT PANEL */}
        <div className="glass rounded-2xl p-6 space-y-4">

          <h3 className="text-lg font-semibold">Reach Out</h3>

          <p className="text-sm text-muted-foreground">
            Drop a message — usually reply within 24h.
          </p>

          <div className="space-y-3 mt-6">

            {/* EMAIL */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                {data?.email || "email not set"}
              </span>
            </div>

            {/* SOCIAL LINKS */}
            <SocialLink href={data?.github} icon={Github} label="GitHub" />
            <SocialLink href={data?.linkedin} icon={Linkedin} label="LinkedIn" />
            <SocialLink href={data?.instagram} icon={Instagram} label="Instagram" />
            <SocialLink href={data?.twitter} icon={Twitter} label="Twitter / X" />

          </div>
        </div>

        {/* RIGHT PANEL (FORM) */}
        <form
          onSubmit={sendMessage}
          className="glass rounded-2xl p-6 space-y-4"
        >

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-transparent border border-primary/10 text-sm outline-none"
            required
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full p-3 rounded-lg bg-transparent border border-primary/10 text-sm outline-none"
            required
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            className="w-full p-3 rounded-lg bg-transparent border border-primary/10 text-sm outline-none resize-none h-24"
            required
          />

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-black font-medium hover:opacity-90 transition"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>

        </form>
      </div>
    </Section>
  );
}