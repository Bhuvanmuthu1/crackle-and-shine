import type { Product } from "@/lib/products";

export function ProductCard({ p }: { p: Product }) {
  const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
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
        <h3 className="text-sm font-semibold leading-snug">{p.name}</h3>
        <div className="mt-3 flex items-end justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold gradient-text">₹{p.price}</span>
              <span className="text-xs text-muted-foreground line-through">₹{p.mrp}</span>
            </div>
          </div>
          <a href={`https://wa.me/919095040509?text=I%27d%20like%20to%20order%20${encodeURIComponent(p.name)}`}
            target="_blank" rel="noreferrer"
            className="rounded-full border border-[color:var(--gold)]/40 px-3 py-1.5 text-xs font-semibold text-gold transition-colors hover:bg-[color:var(--gold)]/10">
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
