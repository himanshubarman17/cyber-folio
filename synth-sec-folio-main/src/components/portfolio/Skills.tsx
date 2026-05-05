import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section, SectionHeader } from "./Section";
import { client } from "@/lib/sanity";
import { skillsQuery } from "@/lib/queries";

interface SkillItem {
  name: string;
  icon?: {
    asset?: {
      url: string;
    };
  };
}

interface SkillGroup {
  _id: string;
  category: string;
  items: SkillItem[];
}

export function Skills() {
  const [groups, setGroups] = useState<SkillGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(skillsQuery)
      .then((data) => {
        setGroups(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Section id="skills">
      <SectionHeader
        kicker="// arsenal"
        title="Skills & Stack"
        subtitle="Technologies and tools I work with."
      />

      {loading && (
        <div className="text-sm text-muted-foreground">
          Loading skills...
        </div>
      )}

      <div className="space-y-10">
        {groups.map((group, gi) => (
          <motion.div
            key={group._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.1 }}
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-5">
              {group.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {group.items?.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  className="glass rounded-2xl p-4 border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex flex-col items-center justify-center text-center gap-3">
                    {skill.icon?.asset?.url ? (
                      <img
                        src={skill.icon.asset.url}
                        alt={skill.name}
                        className="w-10 h-10 object-contain"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-lg font-bold">
                        {skill.name.charAt(0)}
                      </div>
                    )}

                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}