import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useRef } from "react";

const newsItems = [
  { title: "ChatGPT o3 mění pravidla hry", desc: "Nová generace modelů přináší pokročilé reasoning schopnosti pro marketing.", tag: "GPT" },
  { title: "Google Gemini 2.5 pro kreativce", desc: "Multimodální AI od Google cílí na tvorbu vizuálního obsahu a kampaní.", tag: "Google" },
  { title: "AI personalizace v e-commerce", desc: "Jak velké e-shopy využívají AI k 40% nárůstu konverzí.", tag: "E-commerce" },
  { title: "Midjourney V7 – revoluce v grafice", desc: "Nová verze generátoru obrázků posouvá kvalitu na úroveň fotografií.", tag: "Grafika" },
  { title: "Sora od OpenAI – video z textu", desc: "Generování profesionálního videa z textového promptu je realitou.", tag: "Video" },
  { title: "EU AI Act v praxi", desc: "Co znamená nová regulace pro marketing a reklamu v Evropě.", tag: "Legislativa" },
];

const NewsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Aktuality</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI novinky ze světa marketingu</h2>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("left")} className="p-2 rounded-lg border border-border hover:bg-secondary hover:border-primary/30 transition-colors">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button onClick={() => scroll("right")} className="p-2 rounded-lg border border-border hover:bg-secondary hover:border-primary/30 transition-colors">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory -mx-2 px-2">
          {newsItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] max-w-[320px] snap-start bg-background rounded-xl border border-border p-6 shadow-card hover:border-primary/40 hover:shadow-glow transition-all group cursor-pointer flex-shrink-0"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">{item.tag}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Zobrazit více <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
