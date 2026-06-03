import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { categories, products } from "@/lib/products";
import { Download, Printer, MessageCircle, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/price-list")({
  head: () => ({
    meta: [
      { title: "Price List 2026 — CracklingWorks Sivakasi Crackers" },
      { name: "description", content: "Download the complete CracklingWorks Sivakasi crackers price list 2026. Flat 70% off on MRP across sparklers, rockets, bombs, sky shots & gift boxes." },
      { property: "og:title", content: "CracklingWorks Price List 2026" },
      { property: "og:description", content: "Full Sivakasi crackers catalogue with MRP, our price & discount." },
    ],
  }),
  component: PriceList,
});

function PriceList() {
  const total = products.reduce((s, p) => s + p.price, 0);
  const mrpTotal = products.reduce((s, p) => s + p.mrp, 0);

  return (
    <Layout>
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        {/* Top actions — hidden on print */}
        <div className="print:hidden mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to products
          </Link>
          <div className="flex flex-wrap gap-3">
            <a href="https://wa.me/919095040509" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-[color:var(--gold)]/10">
              <MessageCircle className="h-4 w-4" /> Order on WhatsApp
            </a>
            <button onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full gradient-gold-bg px-5 py-2.5 text-sm font-semibold text-primary-foreground glow">
              <Download className="h-4 w-4" /> Download / Print
            </button>
          </div>
        </div>

        {/* Printable area */}
        <div id="price-list-print" className="rounded-3xl border border-[color:var(--gold)]/30 bg-card p-6 md:p-10 print:border-0 print:bg-white print:text-black">
          <header className="border-b border-[color:var(--gold)]/30 pb-6 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Diwali 2026 · Sivakasi</div>
            <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
              Crackling<span className="gradient-text">Works</span> Price List
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">Flat 70% off on MRP · WhatsApp / Call: 90950 40509</p>
          </header>

          {categories.map((cat) => {
            const items = products.filter((p) => p.category === cat.id);
            if (items.length === 0) return null;
            return (
              <section key={cat.id} className="mt-8">
                <h2 className="font-display text-2xl font-bold text-gold print:text-orange-700">{cat.name}</h2>
                <div className="mt-3 overflow-hidden rounded-xl border border-border print:border-gray-300">
                  <table className="w-full text-sm">
                    <thead className="bg-[color:var(--surface)]/60 text-xs uppercase tracking-wider text-muted-foreground print:bg-gray-100 print:text-gray-700">
                      <tr>
                        <th className="px-4 py-2 text-left">#</th>
                        <th className="px-4 py-2 text-left">Product</th>
                        <th className="px-4 py-2 text-right">MRP</th>
                        <th className="px-4 py-2 text-right">Our Price</th>
                        <th className="px-4 py-2 text-right">Save</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((p, i) => {
                        const off = Math.round(((p.mrp - p.price) / p.mrp) * 100);
                        return (
                          <tr key={p.id} className="border-t border-border print:border-gray-200">
                            <td className="px-4 py-2.5 text-muted-foreground">{i + 1}</td>
                            <td className="px-4 py-2.5 font-medium">{p.name}</td>
                            <td className="px-4 py-2.5 text-right text-muted-foreground line-through">₹{p.mrp}</td>
                            <td className="px-4 py-2.5 text-right font-bold text-gold print:text-orange-700">₹{p.price}</td>
                            <td className="px-4 py-2.5 text-right text-xs font-semibold text-destructive">{off}%</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}

          <footer className="mt-10 grid gap-4 border-t border-[color:var(--gold)]/30 pt-6 text-sm text-muted-foreground sm:grid-cols-2 print:text-gray-700">
            <div>
              <div className="font-semibold text-foreground print:text-black">Catalogue MRP total: <span className="line-through">₹{mrpTotal.toLocaleString()}</span></div>
              <div className="font-bold text-gold print:text-orange-700">Your total at 70% off: ₹{total.toLocaleString()}</div>
            </div>
            <div className="sm:text-right">
              <div>WhatsApp: 90950 40509</div>
              <div>Phone: 90950 40509</div>
              <div>Instagram: @bhuvan_mafia_002</div>
            </div>
          </footer>
          <p className="mt-6 text-center text-xs text-muted-foreground print:text-gray-600">
            Crackers sold as per Government of India & Tamil Nadu regulations. Prices valid until 31 Dec 2026.
          </p>
        </div>
      </div>

      <style>{`
        @media print {
          @page { size: A4; margin: 12mm; }
          body { background: white !important; }
          header, footer, nav, .print\\:hidden { display: none !important; }
          #price-list-print { box-shadow: none !important; }
        }
      `}</style>
    </Layout>
  );
}
