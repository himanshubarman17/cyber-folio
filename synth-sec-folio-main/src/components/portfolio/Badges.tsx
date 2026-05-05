import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section, SectionHeader } from "./Section";
import { client } from "@/lib/sanity";
import { badgesQuery } from "@/lib/queries";

interface Badge {
  _id: string;
  title: string;
  issuer: string;
  description?: string;
  link?: string;

  image?: {
    asset?: {
      url: string;
    };
  };
}

export function Badges() {
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(badgesQuery)
      .then((data) => {
        setBadges(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Section id="badges">
      <SectionHeader
        kicker="// achievements"
        title="Badges"
        subtitle="Certifications, achievements & verifiable proofs."
      />

      {loading && (
        <div className="text-sm text-muted-foreground">
          Loading badges...
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {badges.map((badge, index) => (
          <motion.div
            key={badge._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass rounded-2xl p-5 border border-white/5 hover:border-primary/40 transition group"
          >
            {/* IMAGE OR FALLBACK */}
            <div className="flex justify-center mb-4">
              {badge.image?.asset?.url ? (
                <img
                  src={badge.image.asset.url}
                  alt={badge.title}
                  className="w-16 h-16 object-contain group-hover:scale-110 transition"
                />
              ) : (
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {badge.title.charAt(0)}
                </div>
              )}
            </div>

            <h3 className="text-sm font-semibold text-center group-hover:text-primary transition">
              {badge.title}
            </h3>

            <p className="text-xs text-muted-foreground text-center mt-1">
              {badge.issuer}
            </p>

            {badge.description && (
              <p className="text-xs text-muted-foreground text-center mt-2 line-clamp-2">
                {badge.description}
              </p>
            )}

            {/* LINK */}
            {badge.link && (
              <div className="mt-4 flex justify-center">
                <a
                  href={badge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition"
                >
                  View Badge
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}