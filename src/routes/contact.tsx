import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MessageCircle, Phone, Instagram, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CracklingWorks" },
      { name: "description", content: "Reach CracklingWorks via WhatsApp 9095040509, phone or Instagram @bhuvan_mafia_002. Sivakasi, Tamil Nadu." },
      { property: "og:title", content: "Contact — CracklingWorks" },
      { property: "og:description", content: "Reach CracklingWorks via WhatsApp, phone or Instagram." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Get in touch</div>
        <h1 className="mt-3 font-display text-5xl font-bold md:text-6xl">Let's <span className="gradient-text">connect</span></h1>
        <p className="mt-6 text-lg text-muted-foreground">We reply on WhatsApp within minutes during business hours.</p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-6 pb-20 md:grid-cols-3">
        <ContactCard icon={MessageCircle} label="WhatsApp" value="90950 40509" href="https://wa.me/919095040509" highlight />
        <ContactCard icon={Phone} label="Call" value="90950 40509" href="tel:+919095040509" />
        <ContactCard icon={Instagram} label="Instagram" value="@bhuvan_mafia_002" href="https://instagram.com/bhuvan_mafia_002" />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid gap-6 rounded-3xl border border-border bg-card p-10 md:grid-cols-2">
          <div className="flex gap-4">
            <MapPin className="h-6 w-6 shrink-0 text-gold" />
            <div>
              <div className="font-semibold">Visit us</div>
              <p className="mt-1 text-sm text-muted-foreground">Sivakasi, Virudhunagar District<br />Tamil Nadu, India</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="h-6 w-6 shrink-0 text-gold" />
            <div>
              <div className="font-semibold">Business hours</div>
              <p className="mt-1 text-sm text-muted-foreground">Mon – Sat · 9:00 AM – 8:00 PM<br />Sundays: WhatsApp only</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ContactCard({ icon: Icon, label, value, href, highlight }: { icon: any; label: string; value: string; href: string; highlight?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className={`group rounded-3xl border p-8 text-center transition-all hover:-translate-y-1 ${
        highlight ? "border-[color:var(--gold)]/40 bg-card ember-glow" : "border-border bg-card hover:border-[color:var(--gold)]/40"
      }`}>
      <Icon className="mx-auto h-8 w-8 text-gold transition-transform group-hover:scale-110" />
      <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-2xl font-bold">{value}</div>
    </a>
  );
}
