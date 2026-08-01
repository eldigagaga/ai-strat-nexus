import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { getPostBySlug } from "@/lib/blog";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Zpět na blog
            </Link>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("cs-CZ")}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{post.title}</h1>

            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </motion.div>
        </div>
      </article>
      <FooterSection />
    </div>
  );
};

export default BlogPost;
