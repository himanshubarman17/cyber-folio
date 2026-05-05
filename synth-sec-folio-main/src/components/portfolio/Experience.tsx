import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section, SectionHeader } from "./Section";
import { client } from "@/lib/sanity";
import { experienceQuery } from "@/lib/queries";

interface Experience {
  _id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  tech?: string[];
}

export function Experience() {
  const [experience, setExperience] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
      setLoading(false);
    });
  }, []);

  return (
    <Section id="experience">
      <SectionHeader
        kicker="// career"
        title="Experience"
        subtitle="My professional journey so far."
      />

      {loading && (
        <div className="text-sm text-muted-foreground">
          Loading experience...
        </div>
      )}

      <div className="relative border-l border-primary/20 ml-3 space-y-10">
        {experience.map((exp, i) => (
          <motion.div
            key={exp._id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="pl-6 relative"
          >
            {/* dot */}
            <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_var(--neon)]" />

            <div className="glass p-5 rounded-xl hover:border-primary/30 transition">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono text-muted-foreground">
                  {exp.duration}
                </span>
              </div>

              <p className="text-sm text-primary mt-1">{exp.company}</p>

              <p className="text-sm text-muted-foreground mt-3">
                {exp.description}
              </p>

              {/* tech stack */}
              {exp.tech?.length ? (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}