import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems, setOpen: setCartOpen } = useCart();
  const CartButton = ({ className = "" }: { className?: string }) => (
    <button onClick={() => setCartOpen(true)} aria-label="Open cart"
      className={`relative grid h-10 w-10 place-items-center rounded-full border border-[color:var(--gold)]/40 hover:bg-[color:var(--gold)]/10 ${className}`}>
      <ShoppingBag className="h-5 w-5 text-gold" />
      {totalItems > 0 && (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-[1.25rem] place-items-center rounded-full gradient-gold-bg px-1 text-[10px] font-bold text-primary-foreground">
          {totalItems}
        </span>
      )}
    </button>
  );
  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full gradient-gold-bg glow">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Crackling<span className="gradient-text">Works</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-gold" }} activeOptions={{ exact: l.to === "/" }}>
              {l.label}
            </Link>
          ))}
          <CartButton />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <CartButton />
          <button onClick={() => setOpen(!open)} aria-label="Menu" className="grid h-10 w-10 place-items-center">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary">
                {l.label}
              </Link>
            ))}
            <button onClick={() => { setOpen(false); setCartOpen(true); }}
              className="mt-2 rounded-full gradient-gold-bg px-5 py-2 text-center text-sm font-semibold text-primary-foreground">
              View Cart ({totalItems})
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
