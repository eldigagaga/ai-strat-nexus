import { motion } from "framer-motion";
import { Play, Pause, Clock } from "lucide-react";
import { useState } from "react";

const lectures = [
  { title: "Úvod do AI v marketingu", desc: "Co je generativní AI a proč mění marketing.", duration: "8:30" },
  { title: "Jak fungují velké jazykové modely", desc: "Základy LLM – od GPT po open-source modely.", duration: "10:15" },
  { title: "Prompt engineering 101", desc: "Jak psát prompty, které dávají kvalitní výstupy.", duration: "9:45" },
  { title: "AI copywriting v praxi", desc: "Tvorba textů, emailů a reklamních copy pomocí AI.", duration: "7:20" },
  { title: "Generování grafiky a vizuálů", desc: "Midjourney, DALL-E, Stable Diffusion pro marketing.", duration: "11:00" },
  { title: "AI video a animace", desc: "Sora, Runway, HeyGen – video obsah bez kamery.", duration: "8:50" },
  { title: "Audio a voice AI", desc: "Syntéza hlasu, podcasty, voice-over s AI.", duration: "6:40" },
  { title: "Personalizace a segmentace", desc: "Jak AI cílí obsah na správné publikum.", duration: "9:10" },
  { title: "Automatizace workflows", desc: "Make, Zapier, n8n – automatizace s AI.", duration: "7:55" },
  { title: "Etika, právo a AI Act", desc: "Regulace, autorská práva, transparentnost.", duration: "10:30" },
  { title: "Fake news a deepfakes", desc: "Rozpoznávání dezinformací a manipulace.", duration: "8:15" },
  { title: "Budoucnost AI marketingu", desc: "Trendy 2025+ a jak se připravit.", duration: "6:50" },
];

const LecturesSection = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section id="prednasky" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-14"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Audio shrnutí</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Shrnutí přednášek</h2>
          <p className="text-muted-foreground text-lg">
            Poslechněte si klíčové body z každé přednášky. Ideální na cestě, před zkouškou nebo jako rychlé opakování.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {lectures.map((lecture, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 bg-background rounded-xl border border-border p-4 shadow-card hover:border-primary/40 transition-all group"
            >
              <button
                onClick={() => setPlaying(playing === i ? null : i)}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                {playing === i ? (
                  <Pause className="w-5 h-5 text-primary" />
                ) : (
                  <Play className="w-5 h-5 text-primary ml-0.5" />
                )}
              </button>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate text-foreground group-hover:text-primary transition-colors">
                  {i + 1}. {lecture.title}
                </h3>
                <p className="text-xs text-muted-foreground truncate">{lecture.desc}</p>
                {playing === i && (
                  <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-1/3 animate-pulse" />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0">
                <Clock className="w-3.5 h-3.5" />
                {lecture.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LecturesSection;
