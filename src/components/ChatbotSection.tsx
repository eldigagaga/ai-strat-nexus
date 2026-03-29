import { motion } from "framer-motion";
import { Bot, Send } from "lucide-react";

const ChatbotSection = () => (
  <section id="chatbot" className="py-20">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">AI Chatbot</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">AI chatbot trénovaný na obsah kurzu</h2>
        <p className="text-muted-foreground text-lg">
          Potřebujete rychlou odpověď? Chatbot zná obsah všech přednášek, doporučenou literaturu i praktické tipy.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-gradient-card rounded-2xl border border-border shadow-card overflow-hidden"
      >
        {/* Mock chat UI */}
        <div className="p-4 border-b border-border flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-sm">AI Asistent kurzu</p>
            <p className="text-xs text-accent">Online</p>
          </div>
        </div>

        <div className="p-6 min-h-[300px] space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-secondary rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
              <p className="text-sm">Ahoj! 👋 Jsem AI asistent kurzu 3MG303. Zeptej se mě na cokoliv o AI v marketingu – pomůžu ti s přípravou, prompty i praktickými úkoly.</p>
            </div>
          </div>

          <div className="flex gap-3 justify-end">
            <div className="bg-primary/15 rounded-2xl rounded-tr-md px-4 py-3 max-w-[80%]">
              <p className="text-sm">Jaké AI nástroje se naučím používat?</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-secondary rounded-2xl rounded-tl-md px-4 py-3 max-w-[80%]">
              <p className="text-sm">V kurzu pracujeme s <strong>ChatGPT, Claude, Midjourney, DALL-E, Sora, Runway, ElevenLabs</strong> a dalšími. Důraz je na praktické využití v marketingu – od psaní textů po tvorbu videí.</p>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Napište zprávu..."
              className="flex-1 bg-secondary rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-muted-foreground"
            />
            <button className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center hover:brightness-110 transition-all">
              <Send className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ChatbotSection;
