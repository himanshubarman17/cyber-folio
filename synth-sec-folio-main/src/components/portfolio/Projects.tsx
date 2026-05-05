import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section, SectionHeader } from "./Section";
import { Github, ExternalLink } from "lucide-react";

import { client, urlFor } from "@/lib/sanity";

interface Project {
  _id: string;
  title: string;
  description: string;
  github?: string;
  live?: string;
  tags?: string[];
  image?: any;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "project"] | order(_createdAt desc)`)
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  return (
    <Section id="projects">
      <SectionHeader
        kicker="// builds"
        title="Featured Projects"
        subtitle="Selected security tools I've built."
      />

      {/* LOADING STATE */}
      {loading && (
        <div className="text-sm text-muted-foreground">
          Loading projects...
        </div>
      )}

      {/* ERROR STATE */}
      {error && (
        <div className="text-sm text-red-400">
          {error}
        </div>
      )}

      {/* EMPTY STATE */}
      {!loading && !error && projects.length === 0 && (
        <div className="text-sm text-muted-foreground">
          No projects added yet in Sanity.
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative glass rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
          >
            {/* IMAGE */}
            {p.image && (
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={urlFor(p.image).url()}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                <div className="absolute top-3 right-3 px-2 py-1 rounded-md glass-strong text-[10px] font-mono text-primary">
                  v1.0
                </div>
              </div>
            )}

            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                {p.title}
              </h3>

              <p className="mt-1.5 text-sm text-muted-foreground">
                {p.description}
              </p>

              {/* TAGS */}
              {p.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* LINKS */}
              <div className="mt-4 flex gap-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium glass border-primary/30 hover:border-primary hover:text-primary transition"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                )}

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium bg-primary/15 text-primary border border-primary/40 hover:bg-primary/25 transition"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Demo
                  </a>
                )}
              </div>
            </div>

            {/* HOVER GLOW */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                boxShadow:
                  "0 0 40px oklch(0.86 0.22 145 / 0.25), inset 0 0 30px oklch(0.86 0.22 145 / 0.05)",
              }}
            />
          </motion.article>
        ))}
      </div>
    </Section>
  );
}