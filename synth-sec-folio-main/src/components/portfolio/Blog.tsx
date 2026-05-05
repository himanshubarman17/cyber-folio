import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section, SectionHeader } from "./Section";
import { client } from "@/lib/sanity";
import { blogQuery } from "@/lib/queries";

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  platform: string;
  url: string;
  publishedAt: string;
  tags?: string[];

  coverImage?: {
    asset?: {
      url: string;
    };
  };
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(blogQuery)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <Section id="blog">
      <SectionHeader
        kicker="// writings"
        title="Blogs & Articles"
        subtitle="Thoughts, research and writeups across platforms."
      />

      {loading && (
        <div className="text-sm text-muted-foreground">
          Loading blogs...
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <motion.a
            key={post._id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
          >
            {post.coverImage?.asset?.url && (
              <img
                src={post.coverImage.asset.url}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-primary">
                  {post.platform}
                </span>

                <span className="text-xs text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}