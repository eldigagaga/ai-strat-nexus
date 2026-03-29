import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import avatarImg from "@/assets/ai-avatar.jpg";

const AvatarSection = () => (
  <section id="avatar" className="py-20">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Interaktivní AI</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Zeptej se vyučujícího</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Interaktivní AI avatar, který odpovídá na otázky ke kurzu. Zeptejte se na cokoliv – od promptů po zkouškové otázky. Odpovídá 24/7.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-glow hover:brightness-110 transition-all">
            <MessageCircle className="w-5 h-5" />
            Spustit konverzaci
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-border shadow-card">
            <img src={avatarImg} alt="AI Avatar vyučujícího" className="w-full h-full object-cover" loading="lazy" width={800} height={800} />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AvatarSection;
