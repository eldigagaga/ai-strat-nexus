import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            VŠE Praha · 3MG303
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Umělá inteligence
            <br />
            <span className="text-gradient-accent">v marketingu</span>
            <br />
            a komunikaci firem
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4">
            Praktický průvodce využitím AI v marketingu, komunikaci a tvorbě obsahu.
          </p>
          <p className="text-base text-muted-foreground max-w-xl mb-10">
            Naučíte se používat generativní AI, vytvářet obsah pomocí promptů a automatizovat marketingové procesy. Žádná teorie navíc – jen to, co využijete hned.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#obsah"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition-all"
            >
              Prozkoumat obsah
            </a>
            <a
              href="#chatbot"
              className="inline-flex items-center justify-center rounded-lg border border-accent/30 bg-accent/10 px-8 py-3.5 text-base font-semibold text-accent hover:bg-accent/20 transition-all"
            >
              Zeptat se AI
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
