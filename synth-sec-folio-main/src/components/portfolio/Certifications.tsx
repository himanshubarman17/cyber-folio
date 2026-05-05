import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section, SectionHeader } from "./Section";
import { client } from "@/lib/sanity";
import { certificationsQuery } from "@/lib/queries";

interface Certificate {
  _id: string;
  title: string;
  issuer: string;
  issuedAt: string;
  credentialUrl?: string;
  verifyUrl?: string;

  image?: {
    asset?: {
      url: string;
    };
  };
}

export function Certifications() {
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(certificationsQuery)
      .then((data) => {
        setCerts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Section id="certifications">
      <SectionHeader
        kicker="// proof"
        title="Certifications"
        subtitle="Verified skills and achievements."
      />

      {loading && (
        <div className="text-sm text-muted-foreground">
          Loading certificates...
        </div>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {certs.map((cert, index) => (
          <motion.div
            key={cert._id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition group"
          >
            {/* IMAGE */}
            {cert.image?.asset?.url && (
              <img
                src={cert.image.asset.url}
                alt={cert.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
              />
            )}

            <div className="p-4">
              <h3 className="text-sm font-semibold group-hover:text-primary transition">
                {cert.title}
              </h3>

              <p className="text-xs text-muted-foreground mt-1">
                {cert.issuer}
              </p>

              <p className="text-xs text-muted-foreground">
                {cert.issuedAt}
              </p>

              {/* LINKS */}
              <div className="flex gap-2 mt-3">
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition"
                  >
                    Credential
                  </a>
                )}

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    className="text-xs px-2 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
                  >
                    Verify
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}