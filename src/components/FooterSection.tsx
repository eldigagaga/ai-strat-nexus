import { GraduationCap } from "lucide-react";

const FooterSection = () => (
  <footer className="py-12 border-t border-border">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap className="w-6 h-6 text-primary" />
            <span className="font-bold">3MG303</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Umělá inteligence v marketingu a komunikaci firem
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Navigace</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#obsah" className="hover:text-foreground transition-colors">O předmětu</a></li>
            <li><a href="#prednasky" className="hover:text-foreground transition-colors">Přednášky</a></li>
            <li><a href="#temata" className="hover:text-foreground transition-colors">Video témata</a></li>
            <li><a href="#chatbot" className="hover:text-foreground transition-colors">AI Chatbot</a></li>
            <li><a href="#knihy" className="hover:text-foreground transition-colors">Literatura</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Kontakt</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Vysoká škola ekonomická v Praze</li>
            <li>Fakulta managementu</li>
            <li>vyucujici@vse.cz</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} VŠE Praha · 3MG303</p>
        <p>Vytvořeno s ❤️ a AI</p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
