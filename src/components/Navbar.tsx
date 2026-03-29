import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

const links = [
  { label: "O předmětu", href: "#obsah" },
  { label: "Přednášky", href: "#prednasky" },
  { label: "Témata", href: "#temata" },
  { label: "AI Avatar", href: "#avatar" },
  { label: "Chatbot", href: "#chatbot" },
  { label: "Knihy", href: "#knihy" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold">
          <GraduationCap className="w-6 h-6 text-primary" />
          <span className="hidden sm:inline">AI v marketingu</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50">
              {l.label}
            </a>
          ))}
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container py-4 space-y-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
