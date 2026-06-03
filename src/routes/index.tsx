import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Fireworks } from "@/components/Fireworks";
import { ProductCard } from "@/components/ProductCard";
import { categories, products, combos } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { ArrowRight, Download, Star, Shield, Truck, Award, ChevronDown, ShoppingBag } from "lucide-react";
import hero from "@/assets/hero-fireworks.jpg";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CracklingWorks — Premium Sivakasi Crackers Online" },
      { name: "description", content: "Shop premium Sivakasi crackers from CracklingWorks. Sparklers, rockets, sky shots, flower pots, bombs & curated gift boxes — up to 70% off MRP. WhatsApp ordering." },
      { property: "og:title", content: "CracklingWorks — Premium Sivakasi Crackers" },
      { property: "og:description", content: "Premium Sivakasi crackers with up to 70% off. Order on WhatsApp." },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const testimonials = [
  { name: "Priya R.", city: "Chennai", text: "The gift box was stunning — packaging felt like a luxury brand. Crackers were top quality.", rating: 5 },
  { name: "Arjun M.", city: "Bengaluru", text: "Ordered for Diwali on WhatsApp, delivered in 4 days. The sky shots were the highlight of our terrace party.", rating: 5 },
  { name: "Sneha K.", city: "Hyderabad", text: "70% off felt unreal but everything was authentic Sivakasi. Will reorder every year.", rating: 5 },
];

const faqs = [
  { q: "Is shipping legal across India?", a: "Yes — we ship via licensed road transport partners as per PESO and state-wise regulations." },
  { q: "What discount do you offer?", a: "Flat 70% off on MRP across our entire catalogue. Combo boxes have additional savings." },
  { q: "What is the minimum order value?", a: "₹2,500 for delivery outside Tamil Nadu. No minimum within TN." },
  { q: "How do I place an order?", a: "Browse the catalogue, click 'Order' on any product, and you'll be redirected to WhatsApp to confirm." },
  { q: "Are the crackers safe?", a: "All products are manufactured in licensed Sivakasi factories meeting safety norms." },
];

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" fetchPriority="high" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <Fireworks />
        <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-44">
          <div className="mx-auto max-w-3xl text-center" style={{ animation: "var(--animate-rise)" }}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              <Star className="h-3 w-3 fill-current" /> Diwali 2026 Catalogue Live
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] md:text-7xl">
              Light the sky in <span className="shimmer-text">pure gold</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Handcrafted Sivakasi crackers — sparklers, rockets, sky shots & curated gift boxes — at flat 70% off MRP.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/products" className="group inline-flex items-center gap-2 rounded-full gradient-gold-bg px-7 py-3.5 font-semibold text-primary-foreground glow transition-transform hover:scale-105">
                Explore Catalogue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="/price-list.pdf" download className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 px-7 py-3.5 font-semibold text-gold backdrop-blur transition-colors hover:bg-[color:var(--gold)]/10">
                <Download className="h-4 w-4" /> Price List
              </a>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { icon: Award, label: "ISO Certified" },
                { icon: Shield, label: "100% Safe" },
                { icon: Truck, label: "Pan-India Delivery" },
                { icon: Star, label: "10K+ Happy Customers" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
                  <s.icon className="h-5 w-5 text-gold" />
                  {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Categories" title="Shop by celebration" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.id} to="/products" className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              <img src={c.image} alt={c.name} loading="lazy" width={800} height={1000}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-gold">{c.count} items</div>
                <h3 className="mt-1 font-display text-3xl font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Browse <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Combo offers */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[image:var(--gradient-radial-glow)]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Limited Time" title="Curated combo boxes" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {combos.map((c) => <ComboCard key={c.id} c={c} />)}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Bestsellers" title="Customer favourites" />
        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5 lg:grid-cols-4">
          {products.slice(0, 8).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
        <div className="mt-12 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 px-7 py-3 font-semibold text-gold hover:bg-[color:var(--gold)]/10">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Reviews" title="Loved across India" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-8">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[color:var(--gold)] text-gold" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.city}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeader eyebrow="FAQ" title="Frequently asked" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--gold)]/30 p-12 text-center md:p-20">
          <div className="absolute inset-0 bg-[image:var(--gradient-radial-glow)]" />
          <div className="relative">
            <h2 className="font-display text-4xl font-bold md:text-5xl">Ready to <span className="gradient-text">light the night</span>?</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              WhatsApp us your list — we'll confirm in minutes and dispatch within 24 hours.
            </p>
            <a href="https://wa.me/919095040509" target="_blank" rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full gradient-gold-bg px-8 py-4 font-semibold text-primary-foreground glow hover:scale-105">
              Start your order
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ComboCard({ c }: { c: typeof combos[number] }) {
  const off = Math.round(((c.mrp - c.price) / c.mrp) * 100);
  const { items, add, setQty, setOpen } = useCart();
  const inCart = items.find((i) => i.id === c.id);
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-[color:var(--gold)]/20 bg-card p-8 transition-all hover:border-[color:var(--gold)]/60 hover:ember-glow">
      <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30">
        <img src={c.image} alt="" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="relative">
        {c.tag && <span className="rounded-full gradient-gold-bg px-3 py-1 text-xs font-bold text-primary-foreground">{c.tag}</span>}
        <h3 className="mt-4 font-display text-2xl font-bold">{c.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{c.items} premium items</p>
        <div className="mt-8 flex items-baseline gap-3">
          <span className="text-4xl font-bold gradient-text">₹{c.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground line-through">₹{c.mrp.toLocaleString()}</span>
          <span className="rounded bg-destructive/20 px-2 py-0.5 text-xs font-bold text-destructive">{off}% OFF</span>
        </div>
        {inCart ? (
          <div className="mt-8 flex items-center justify-between rounded-full border border-[color:var(--gold)]/40 p-1.5">
            <button onClick={() => setQty(c.id, inCart.qty - 1)} className="grid h-9 w-9 place-items-center rounded-full bg-secondary">−</button>
            <span className="font-bold">{inCart.qty} in cart</span>
            <button onClick={() => setQty(c.id, inCart.qty + 1)} className="grid h-9 w-9 place-items-center rounded-full gradient-gold-bg text-primary-foreground">+</button>
          </div>
        ) : (
          <button onClick={() => { add({ id: c.id, name: c.name, price: c.price, mrp: c.mrp, image: c.image }); setOpen(true); }}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-gold-bg py-3 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
            <ShoppingBag className="h-4 w-4" /> Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">{title}</h2>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between p-5 text-left">
        <span className="font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 text-gold transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground" style={{ animation: "var(--animate-fade-in)" }}>{a}</div>}
    </div>
  );
}
