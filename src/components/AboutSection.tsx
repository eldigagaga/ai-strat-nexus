import { motion } from "framer-motion";
import { Brain, PenTool, BarChart3, Zap } from "lucide-react";

const features = [
  { icon: Brain, title: "AI nástroje", desc: "Naučíte se pracovat s ChatGPT, Midjourney, DALL-E, Sora a dalšími." },
  { icon: PenTool, title: "Tvorba obsahu", desc: "Texty, grafika, video, audio – vše s pomocí umělé inteligence." },
  { icon: BarChart3, title: "Marketingové strategie", desc: "Jak AI začlenit do reálných kampaní a procesů." },
  { icon: Zap, title: "Automatizace", desc: "Ušetřete čas automatizací rutinních úkolů v marketingu." },
];

const AboutSection = () => (
  <section id="obsah" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-14"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">O předmětu</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Méně teorie. Víc praxe.</h2>
        <p className="text-muted-foreground text-lg">
          Předmět 3MG303 vás provede praktickým využitím AI v marketingu. Žádné suché přednášky – pracujete s reálnými nástroji, tvoříte obsah a řešíte konkrétní úkoly. Výstupem je portfolio, které můžete ukázat zaměstnavateli.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-card rounded-xl border border-border p-6 shadow-card hover:border-accent/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <f.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
