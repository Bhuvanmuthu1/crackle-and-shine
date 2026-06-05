import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function ProductCard({ p }: { p: Product }) {
  const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
  const { items, add, setQty } = useCart();
  const inCart = items.find((i) => i.id === p.id);
  const [open, setOpen] = useState(false);

  // Mobile back button should close the modal instead of leaving the page
  useEffect(() => {
    if (!open) return;
    const state = { productModal: p.id };
    window.history.pushState(state, "");
    const onPop = () => setOpen(false);
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("popstate", onPop);
      // If modal closed by other means (button/overlay), clean up the history entry
      if (window.history.state && (window.history.state as any).productModal === p.id) {
        window.history.back();
      }
    };
  }, [open, p.id]);

  const QtyControl = ({ size = "sm" }: { size?: "sm" | "lg" }) =>
    inCart ? (
      <div className={`flex items-center justify-between gap-1 rounded-full border border-[color:var(--gold)]/40 p-1 ${size === "lg" ? "p-1.5" : ""}`}>
        <button onClick={() => setQty(p.id, inCart.qty - 1)} aria-label="Decrease"
          className={`grid shrink-0 place-items-center rounded-full bg-secondary text-foreground hover:bg-[color:var(--gold)]/20 ${size === "lg" ? "h-10 w-10" : "h-7 w-7 sm:h-8 sm:w-8"}`}>
          <Minus className="h-4 w-4" />
        </button>
        <span className={`min-w-0 truncate text-center font-bold ${size === "lg" ? "text-base" : "text-[11px] sm:text-sm"}`}>{inCart.qty}{size === "lg" ? " in cart" : ""}</span>
        <button onClick={() => setQty(p.id, inCart.qty + 1)} aria-label="Increase"
          className={`grid shrink-0 place-items-center rounded-full gradient-gold-bg text-primary-foreground ${size === "lg" ? "h-10 w-10" : "h-7 w-7 sm:h-8 sm:w-8"}`}>
          <Plus className="h-4 w-4" />
        </button>
      </div>
    ) : (
      <button onClick={() => add({ id: p.id, name: p.name, price: p.price, mrp: p.mrp, image: p.image })}
        className={`flex w-full items-center justify-center gap-1.5 rounded-full gradient-gold-bg font-semibold text-primary-foreground transition-transform hover:scale-[1.02] ${size === "lg" ? "py-3 text-base" : "py-2 text-[11px] sm:text-sm"}`}>
        <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> <span className="sm:hidden">Add</span><span className="hidden sm:inline">Add to Cart</span>
      </button>
    );

  return (
    <>
      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:ember-glow">
        <button type="button" onClick={() => setOpen(true)} className="block w-full text-left" aria-label={`View details for ${p.name}`}>
          <div className="relative aspect-square overflow-hidden">
            <img src={p.image} alt={p.name} loading="lazy" width={400} height={400}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent" />
            {p.tag && (
              <span className="absolute left-3 top-3 rounded-full gradient-gold-bg px-3 py-1 text-xs font-bold text-primary-foreground">
                {p.tag}
              </span>
            )}
            <span className="absolute right-3 top-3 rounded-full bg-destructive px-3 py-1 text-xs font-bold text-destructive-foreground">
              {off}% OFF
            </span>
          </div>
          <div className="px-4 pt-4">
            <h3 className="text-sm font-semibold leading-snug min-h-[2.5rem]">{p.name}</h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-xl font-bold gradient-text">₹{p.price}</span>
              <span className="text-xs text-muted-foreground line-through">₹{p.mrp}</span>
            </div>
          </div>
        </button>
        <div className="p-4 pt-3">
          <QtyControl />
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl border-[color:var(--gold)]/30 bg-card p-0 overflow-hidden [&>button]:hidden">
          <button onClick={() => setOpen(false)} aria-label="Close"
            className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background/80 backdrop-blur hover:bg-background">
            <X className="h-4 w-4" />
          </button>
          <DialogTitle className="sr-only">{p.name}</DialogTitle>
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto">
              <img src={p.image} alt={p.name} className="absolute inset-0 h-full w-full object-cover" />
              {p.tag && (
                <span className="absolute left-4 top-4 rounded-full gradient-gold-bg px-3 py-1 text-xs font-bold text-primary-foreground">
                  {p.tag}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-gold">{p.category.replace("-", " ")}</div>
              <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">{p.name}</h2>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold gradient-text">₹{p.price}</span>
                <span className="text-sm text-muted-foreground line-through">₹{p.mrp}</span>
                <span className="rounded bg-destructive/20 px-2 py-0.5 text-xs font-bold text-destructive">{off}% OFF</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Authentic Sivakasi-made {p.name.toLowerCase()}. Manufactured in licensed factories
                following PESO safety norms. Stored and packed with utmost care for safe pan-India delivery.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-gold">✦</span> 100% original Sivakasi product</li>
                <li className="flex gap-2"><span className="text-gold">✦</span> Flat 70% off MRP</li>
                <li className="flex gap-2"><span className="text-gold">✦</span> Safe packing & quick dispatch</li>
              </ul>
              <div className="mt-auto pt-4">
                <QtyControl size="lg" />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
