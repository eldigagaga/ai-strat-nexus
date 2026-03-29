import { motion } from "framer-motion";
import { BookOpen, Bell } from "lucide-react";
import book1Img from "@/assets/book1.jpg";
import book2Img from "@/assets/book2.jpg";

const books = [
  {
    title: "Umělá inteligence pro váš marketing",
    desc: "Praktický průvodce využitím AI v marketingové praxi. Od promptů po automatizaci celých kampaní.",
    badge: "200+ promptů",
    cta: "Zjistit více",
    ctaIcon: BookOpen,
    image: book1Img,
  },
  {
    title: "Značka, která přežije AI",
    desc: "Jak vybudovat brand odolný vůči změnám, které přináší umělá inteligence. Strategický pohled pro manažery.",
    badge: "Pro manažery",
    cta: "Upozornit na vydání",
    ctaIcon: Bell,
    image: book2Img,
  },
];

const BooksSection = () => (
  <section id="knihy" className="py-20 bg-secondary/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Doporučená literatura</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Knihy, které vás posunou dál</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {books.map((book, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-gradient-card rounded-2xl border border-border shadow-card overflow-hidden hover:border-primary/30 transition-all group"
          >
            <div className="aspect-[3/4] max-h-[320px] overflow-hidden">
              <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <span className="inline-block text-xs font-semibold bg-primary/15 text-primary px-3 py-1 rounded-full mb-3">
                {book.badge}
              </span>
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{book.desc}</p>
              <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all">
                <book.ctaIcon className="w-4 h-4" />
                {book.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BooksSection;
