import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Award, Factory, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CracklingWorks" },
      { name: "description", content: "CracklingWorks is a Sivakasi-rooted crackers brand bringing premium festive joy to homes across India." },
      { property: "og:title", content: "About — CracklingWorks" },
      { property: "og:description", content: "Sivakasi-rooted premium crackers, delivered with care across India." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Our Story</div>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">Three generations of <span className="gradient-text">light</span></h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Born in the cracker capital of India — Sivakasi — CracklingWorks is a family-run brand that has been
          handcrafting fireworks for over four decades. We work directly with master artisans to bring you the
          purest sparkle, the loudest cheer, and the safest celebration — at honest prices.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { icon: Factory, label: "40+ years", sub: "in Sivakasi" },
            { icon: Heart, label: "10,000+", sub: "happy families" },
            { icon: Award, label: "ISO 9001", sub: "certified factories" },
            { icon: Sparkles, label: "150+ SKUs", sub: "in catalogue" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 text-center">
              <s.icon className="mx-auto h-6 w-6 text-gold" />
              <div className="mt-4 font-display text-3xl font-bold gradient-text">{s.label}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-10">
          <h2 className="font-display text-3xl font-bold gradient-text">Our promise</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every cracker we ship is hand-inspected for chemical balance, fuse quality, and packaging integrity.
            We never compromise on safety — and we never compromise on the magic.
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-10">
          <h2 className="font-display text-3xl font-bold gradient-text">Our craft</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            From the gold-spitting anars to the sky-painting aerials, each product is the result of decades of
            refinement by the same families who taught Sivakasi to glow.
          </p>
        </div>
      </section>
    </Layout>
  );
}
