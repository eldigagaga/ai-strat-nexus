import { motion } from "framer-motion";
import { Play } from "lucide-react";

const topics = [
  { title: "Generativní AI", desc: "Základy generativní umělé inteligence a její využití v praxi." },
  { title: "Prompting", desc: "Jak efektivně komunikovat s AI modely a získat nejlepší výstupy." },
  { title: "AI v copywritingu", desc: "Tvorba textů, reklam a obsahu pomocí jazykových modelů." },
  { title: "AI grafika", desc: "Generování vizuálů, bannerů a brandingu s Midjourney a DALL-E." },
  { title: "AI video", desc: "Video obsah bez kamery – od Sora po Runway a HeyGen." },
  { title: "AI audio", desc: "Syntéza hlasu, podcasting a voice-over pomocí AI nástrojů." },
  { title: "Personalizace", desc: "Cílení obsahu a nabídek na míru každému zákazníkovi." },
  { title: "Automatizace", desc: "Workflows a procesy, které běží samy díky AI." },
  { title: "Etika a právo", desc: "Odpovědné použití AI, AI Act a autorská práva." },
  { title: "Fake news & deepfakes", desc: "Jak rozpoznat a bránit se dezinformacím a manipulaci." },
];

const colors = [
  "from-primary/20 to-primary/5",
  "from-accent/20 to-accent/5",
];

const VideosSection = () => (
  <section id="temata" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-14"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Video obsah</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">10 hlavních témat kurzu</h2>
        <p className="text-muted-foreground text-lg">
          Každé téma ve video formátu. Krátce, srozumitelně, s příklady z praxe.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-gradient-card rounded-xl border border-border overflow-hidden shadow-card hover:border-primary/30 transition-all group cursor-pointer"
          >
            <div className={`relative aspect-video bg-gradient-to-br ${colors[i % 2]} flex items-center justify-center`}>
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-primary-foreground ml-1" />
              </div>
              <span className="absolute top-3 left-3 text-xs font-bold bg-secondary/80 backdrop-blur-sm rounded-md px-2 py-1">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{topic.title}</h3>
              <p className="text-sm text-muted-foreground">{topic.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideosSection;
