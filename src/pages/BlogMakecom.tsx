import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

type Post = Tables<"posts">;

const BlogMakecom = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false, nullsFirst: false })
        .order("created_at", { ascending: false });

      if (error) setError(error.message);
      else setPosts(data ?? []);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Blog / Make.com
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Automaticky publikované články
            </h1>
            <p className="text-muted-foreground text-lg">
              Příspěvky uložené v databázi se statusem „published“, seřazené od nejnovějšího.
            </p>
          </motion.div>

          {loading ? (
            <p className="text-muted-foreground">Načítám příspěvky…</p>
          ) : error ? (
            <p className="text-destructive">Příspěvky se nepodařilo načíst: {error}</p>
          ) : posts.length === 0 ? (
            <p className="text-muted-foreground">Zatím tu není žádný publikovaný článek.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post, i) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="h-full bg-background rounded-xl border border-border shadow-card overflow-hidden"
                >
                  {post.cover_image && (
                    <img
                      src={post.cover_image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-44 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.published_at ?? post.created_at).toLocaleDateString("cs-CZ")}
                    </div>
                    <h2 className="font-semibold text-lg mb-2 text-foreground">{post.title}</h2>
                    {post.content && (
                      <p className="text-sm text-muted-foreground line-clamp-4 whitespace-pre-line">
                        {post.content}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default BlogMakecom;