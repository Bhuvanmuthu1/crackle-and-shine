import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { CartDrawer } from "./CartDrawer";
import { CartProvider } from "@/lib/cart";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
