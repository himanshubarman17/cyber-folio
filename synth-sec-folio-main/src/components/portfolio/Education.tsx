import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section, SectionHeader } from "./Section";
import { client } from "@/lib/sanity";
import { educationQuery } from "@/lib/queries";

interface Education {
  _id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  description?: string;
  grade?: string;
}

export function Education() {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(educationQuery).then((data) => {
      setEducation(data);
      setLoading(false);
    });
  }, []);

  return (
    <Section id="education">
      <SectionHeader
        kicker="// academics"
        title="Education"
        subtitle="My academic background."
      />

      {loading && (
        <div className="text-sm text-muted-foreground">
          Loading education...
        </div>
      )}

      <div className="space-y-6">
        {education.map((edu, i) => (
          <motion.div
            key={edu._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-primary/30 transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-sm text-primary">
                  {edu.institution}
                </p>
              </div>

              <span className="text-xs font-mono text-muted-foreground">
                {edu.duration}
              </span>
            </div>

            <p className="text-sm text-muted-foreground mt-2">
              {edu.field}
            </p>

            {edu.description && (
              <p className="text-sm text-muted-foreground mt-3">
                {edu.description}
              </p>
            )}

            {edu.grade && (
              <p className="text-xs mt-3 text-primary font-mono">
                Grade: {edu.grade}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}