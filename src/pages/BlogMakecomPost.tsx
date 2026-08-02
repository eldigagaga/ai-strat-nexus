import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import NotFound from "./NotFound";

type Post = Tables<"posts">;

const BlogMakecomPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (error) setError(error.message);
      else setPost(data);
      setLoading(false);
    };

    load();
  }, [slug]);

  if (!loading && !error && !post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <Link
            to="/blog_makecom"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zpět na Blog / Make.com
          </Link>

          {loading ? (
            <p className="text-muted-foreground">Načítám článek…</p>
          ) : error ? (
            <p className="text-destructive">Článek se nepodařilo načíst: {error}</p>
          ) : post ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.published_at ?? post.created_at).toLocaleDateString("cs-CZ")}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">{post.title}</h1>

              {post.cover_image && (
                <img
                  src={post.cover_image}
                  alt={post.title}
                  className="w-full max-h-[28rem] object-cover rounded-xl mb-10"
                />
              )}

              <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
                <ReactMarkdown>{post.content ?? ""}</ReactMarkdown>
              </div>
            </motion.div>
          ) : null}
        </div>
      </article>
      <FooterSection />
    </div>
  );
};

export default BlogMakecomPost;
