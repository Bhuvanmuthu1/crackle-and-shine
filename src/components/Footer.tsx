import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MessageCircle, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-[color:var(--surface)]/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-gold-bg">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-display text-xl font-bold">Crackling<span className="gradient-text">Works</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Sivakasi's finest crackers — crafted with tradition, delivered with care across India.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gold">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-foreground">All Products</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Combo Offers</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Gift Boxes</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gold">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gold">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><a href="https://wa.me/919095040509" className="flex items-center gap-2 hover:text-foreground"><MessageCircle className="h-4 w-4" /> 90950 40509</a></li>
            <li><a href="tel:+919095040509" className="flex items-center gap-2 hover:text-foreground"><Phone className="h-4 w-4" /> 90950 40509</a></li>
            <li><a href="https://instagram.com/bhuvan_mafia_002" className="flex items-center gap-2 hover:text-foreground"><Instagram className="h-4 w-4" /> @bhuvan_mafia_002</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} CracklingWorks · Sivakasi, Tamil Nadu · Crackers sold as per government regulations.
      </div>
    </footer>
  );
}
