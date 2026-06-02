import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { Minus, Plus, ShoppingBag } from "lucide-react";

export function ProductCard({ p }: { p: Product }) {
  const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
  const { items, add, setQty } = useCart();
  const inCart = items.find((i) => i.id === p.id);

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-[color:var(--gold)]/40 hover:ember-glow">
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
      <div className="p-4">
        <h3 className="text-sm font-semibold leading-snug min-h-[2.5rem]">{p.name}</h3>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold gradient-text">₹{p.price}</span>
          <span className="text-xs text-muted-foreground line-through">₹{p.mrp}</span>
        </div>
        <div className="mt-4">
          {inCart ? (
            <div className="flex items-center justify-between rounded-full border border-[color:var(--gold)]/40 p-1">
              <button onClick={() => setQty(p.id, inCart.qty - 1)} aria-label="Decrease"
                className="grid h-8 w-8 place-items-center rounded-full bg-secondary text-foreground hover:bg-[color:var(--gold)]/20">
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-sm font-bold">{inCart.qty} in cart</span>
              <button onClick={() => setQty(p.id, inCart.qty + 1)} aria-label="Increase"
                className="grid h-8 w-8 place-items-center rounded-full gradient-gold-bg text-primary-foreground">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button onClick={() => add({ id: p.id, name: p.name, price: p.price, mrp: p.mrp, image: p.image })}
              className="flex w-full items-center justify-center gap-2 rounded-full gradient-gold-bg py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
