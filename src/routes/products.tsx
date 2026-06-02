import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";
import { useState } from "react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — CracklingWorks" },
      { name: "description", content: "Browse our complete catalogue of premium Sivakasi crackers: sparklers, rockets, flower pots, bombs, sky shots and gift boxes." },
      { property: "og:title", content: "Products — CracklingWorks" },
      { property: "og:description", content: "Browse our complete catalogue of premium Sivakasi crackers." },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[image:var(--gradient-radial-glow)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Catalogue 2026</div>
          <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">The full <span className="gradient-text">collection</span></h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Flat 70% off MRP. Order any item directly via WhatsApp.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap justify-center gap-2">
          <FilterBtn active={active === "all"} onClick={() => setActive("all")}>All</FilterBtn>
          {categories.map((c) => (
            <FilterBtn key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>{c.name}</FilterBtn>
          ))}
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </Layout>
  );
}

function FilterBtn({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
        active ? "border-transparent gradient-gold-bg text-primary-foreground glow" : "border-border text-muted-foreground hover:border-[color:var(--gold)]/40 hover:text-foreground"
      }`}>
      {children}
    </button>
  );
}
