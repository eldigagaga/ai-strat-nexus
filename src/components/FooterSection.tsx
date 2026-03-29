import vseLogo from "@/assets/vse-logo.png";

const FooterSection = () => (
  <footer className="py-12 border-t border-border bg-muted/30">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={vseLogo} alt="VŠE Praha" className="h-10 w-10 object-contain" />
            <span className="font-bold text-foreground">3MG303</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Umělá inteligence v marketingu a komunikaci firem
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-foreground">Navigace</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#obsah" className="hover:text-primary transition-colors">O předmětu</a></li>
            <li><a href="#prednasky" className="hover:text-primary transition-colors">Přednášky</a></li>
            <li><a href="#temata" className="hover:text-primary transition-colors">Video témata</a></li>
            <li><a href="#chatbot" className="hover:text-primary transition-colors">AI Chatbot</a></li>
            <li><a href="#knihy" className="hover:text-primary transition-colors">Literatura</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-foreground">Kontakt</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Vysoká škola ekonomická v Praze</li>
            <li>Fakulta podnikohospodářská</li>
            <li>Garant: prof. Ing. Miroslav Karlíček, Ph.D.</li>
            <li>Vyučující: Ing. Vítězslav Klement, MBA</li>
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
