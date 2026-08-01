import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import vseLogo from "@/assets/vse-logo.png";

const links = [
  { label: "O předmětu", href: "#obsah" },
  { label: "Přednášky", href: "#prednasky" },
  { label: "Témata", href: "#temata" },
  { label: "AI Avatar", href: "#avatar" },
  { label: "Chatbot", href: "#chatbot" },
  { label: "Knihy", href: "#knihy" },
  { label: "Blog", href: "/blog", isRoute: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src={vseLogo} alt="VŠE Praha" className="h-10 w-10 object-contain" />
          <span className="font-bold text-sm sm:text-base text-foreground">AI v marketingu</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) =>
            l.isRoute ? (
              <Link key={l.href} to={l.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary">
                {l.label}
              </Link>
            ) : (
              <a key={l.href} href={l.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary">
                {l.label}
              </a>
            ),
          )}
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container py-4 space-y-1">
            {links.map((l) =>
              l.isRoute ? (
                <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary">
                  {l.label}
                </Link>
              ) : (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg hover:bg-secondary">
                  {l.label}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
