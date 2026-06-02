import sparklers from "@/assets/cat-sparklers.jpg";
import rockets from "@/assets/cat-rockets.jpg";
import flowerpots from "@/assets/cat-flowerpots.jpg";
import bombs from "@/assets/cat-bombs.jpg";
import skyshots from "@/assets/cat-skyshots.jpg";
import giftbox from "@/assets/cat-giftbox.jpg";

export const categories = [
  { id: "sparklers", name: "Sparklers", image: sparklers, count: 18, blurb: "Hand-held brilliance — gold, electric & color sparklers." },
  { id: "rockets", name: "Rockets", image: rockets, count: 12, blurb: "Whistling sky rockets and signal flares." },
  { id: "flower-pots", name: "Flower Pots", image: flowerpots, count: 14, blurb: "Anar fountains erupting golden petals." },
  { id: "bombs", name: "Bombs", image: bombs, count: 10, blurb: "Lakshmi, atom & hydro — the classic thunder." },
  { id: "sky-shots", name: "Sky Shots", image: skyshots, count: 16, blurb: "Multi-shot aerials painting the night." },
  { id: "gift-boxes", name: "Gift Boxes", image: giftbox, count: 8, blurb: "Curated assortments wrapped in luxury." },
];

export type Product = {
  id: string; name: string; category: string; mrp: number; price: number; image: string; tag?: string;
};

export const products: Product[] = [
  { id: "p1", name: "7cm Electric Sparklers (10 pcs)", category: "sparklers", mrp: 60, price: 18, image: sparklers, tag: "Bestseller" },
  { id: "p2", name: "15cm Gold Sparklers (5 pcs)", category: "sparklers", mrp: 120, price: 36, image: sparklers },
  { id: "p3", name: "30cm Color Sparklers", category: "sparklers", mrp: 180, price: 54, image: sparklers },
  { id: "p4", name: "Whistling Sky Rocket (10 pcs)", category: "rockets", mrp: 250, price: 75, image: rockets },
  { id: "p5", name: "Signal Rocket (5 pcs)", category: "rockets", mrp: 180, price: 54, image: rockets, tag: "New" },
  { id: "p6", name: "Flower Pot Big (5 pcs)", category: "flower-pots", mrp: 200, price: 60, image: flowerpots },
  { id: "p7", name: "Color Koti Flower Pot", category: "flower-pots", mrp: 320, price: 96, image: flowerpots },
  { id: "p8", name: "Lakshmi Bomb (10 pcs)", category: "bombs", mrp: 220, price: 66, image: bombs },
  { id: "p9", name: "Atom Bomb (10 pcs)", category: "bombs", mrp: 280, price: 84, image: bombs, tag: "Hot" },
  { id: "p10", name: "25 Shots Sky Aerial", category: "sky-shots", mrp: 480, price: 144, image: skyshots, tag: "Trending" },
  { id: "p11", name: "60 Shots Premium Aerial", category: "sky-shots", mrp: 1200, price: 360, image: skyshots },
  { id: "p12", name: "Family Pack Gift Box", category: "gift-boxes", mrp: 3500, price: 1050, image: giftbox, tag: "Premium" },
];

export const combos = [
  { id: "c1", name: "Mini Diwali Pack", items: 32, mrp: 2400, price: 720, image: giftbox },
  { id: "c2", name: "Family Festive Box", items: 65, mrp: 5800, price: 1740, image: giftbox, tag: "Most Loved" },
  { id: "c3", name: "Grand Celebration Box", items: 120, mrp: 12000, price: 3600, image: giftbox, tag: "Premium" },
];
