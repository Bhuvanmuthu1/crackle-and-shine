import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  mrp: number;
  image: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  totalItems: number;
  totalPrice: number;
  totalMrp: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "cw_cart_v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items, hydrated]);

  const value = useMemo<CartCtx>(() => ({
    items,
    open,
    setOpen,
    add: (item, qty = 1) => {
      setItems((cur) => {
        const ex = cur.find((c) => c.id === item.id);
        if (ex) return cur.map((c) => c.id === item.id ? { ...c, qty: c.qty + qty } : c);
        return [...cur, { ...item, qty }];
      });
    },
    setQty: (id, qty) => setItems((cur) => qty <= 0 ? cur.filter((c) => c.id !== id) : cur.map((c) => c.id === id ? { ...c, qty } : c)),
    remove: (id) => setItems((cur) => cur.filter((c) => c.id !== id)),
    clear: () => setItems([]),
    totalItems: items.reduce((s, i) => s + i.qty, 0),
    totalPrice: items.reduce((s, i) => s + i.qty * i.price, 0),
    totalMrp: items.reduce((s, i) => s + i.qty * i.mrp, 0),
  }), [items, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}

export function buildWhatsAppOrder(items: CartItem[], totalPrice: number, totalMrp: number) {
  const lines = [
    "Hi CracklingWorks! I'd like to place an order:",
    "",
    ...items.map((i, idx) => `${idx + 1}. ${i.name} — ${i.qty} × ₹${i.price} = ₹${i.qty * i.price}`),
    "",
    `MRP Total: ₹${totalMrp}`,
    `You Save: ₹${totalMrp - totalPrice}`,
    `Order Total: ₹${totalPrice}`,
  ];
  return `https://wa.me/919095040509?text=${encodeURIComponent(lines.join("\n"))}`;
}
