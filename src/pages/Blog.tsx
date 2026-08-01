import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { getAllPosts } from "@/lib/blog";

const Blog = () => {
  const posts = getAllPosts();

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
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Blog</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Články o AI v marketingu</h1>
            <p className="text-muted-foreground text-lg">
              Postřehy, novinky a praktické tipy k umělé inteligenci v marketingu a komunikaci firem.
            </p>
          </motion.div>

          {posts.length === 0 ? (
            <p className="text-muted-foreground">Zatím tu není žádný článek.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="block h-full bg-background rounded-xl border border-border p-6 shadow-card hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("cs-CZ")}
                    </div>
                    <h2 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Blog;
