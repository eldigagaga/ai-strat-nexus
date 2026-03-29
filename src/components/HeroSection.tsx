import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import vseLogo from "@/assets/vse-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
      </div>

      <div className="container relative z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <img src={vseLogo} alt="VŠE Praha" className="h-14 w-14 object-contain bg-background/90 rounded-full p-1" />
            <div className="text-sm text-primary-foreground/80">
              <p className="font-semibold text-primary-foreground">Vysoká škola ekonomická v Praze</p>
              <p>FPH · 3MG303 · ZS 2025/2026</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
            Umělá inteligence
            <br />
            v marketingu
            <br />
            a komunikaci firem
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mb-4">
            Praktický průvodce využitím AI v marketingu, komunikaci a tvorbě obsahu.
          </p>
          <p className="text-base text-primary-foreground/70 max-w-xl mb-10">
            Naučíte se používat generativní AI, vytvářet obsah pomocí promptů a automatizovat marketingové procesy. Žádná teorie navíc – jen to, co využijete hned.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#obsah"
              className="inline-flex items-center justify-center rounded-lg bg-background px-8 py-3.5 text-base font-semibold text-primary shadow-lg hover:bg-background/90 transition-all"
            >
              Prozkoumat obsah
            </a>
            <a
              href="#chatbot"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-all"
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
