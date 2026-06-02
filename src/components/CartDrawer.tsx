import { useCart, buildWhatsAppOrder } from "@/lib/cart";
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, clear, totalItems, totalPrice, totalMrp } = useCart();

  return (
    <>
      <div onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-card shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}>
        <header className="flex items-center justify-between border-b border-border p-5">
          <div>
            <h2 className="font-display text-xl font-bold">Your Order</h2>
            <p className="text-xs text-muted-foreground">{totalItems} item{totalItems === 1 ? "" : "s"}</p>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close" className="rounded-full p-2 hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
              <ShoppingBag className="mb-4 h-12 w-12 text-gold" />
              <p className="font-semibold">Your cart is empty</p>
              <p className="mt-1 text-sm">Add crackers from the catalogue to build your order.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((i) => (
                <li key={i.id} className="flex gap-3 rounded-xl border border-border bg-background p-3">
                  <img src={i.image} alt="" className="h-20 w-20 flex-shrink-0 rounded-lg object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-semibold leading-snug">{i.name}</h3>
                      <button onClick={() => remove(i.id)} aria-label="Remove" className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      <span className="font-semibold text-gold">₹{i.price}</span>{" "}
                      <span className="line-through">₹{i.mrp}</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 rounded-full border border-border">
                        <button onClick={() => setQty(i.id, i.qty - 1)} aria-label="Decrease"
                          className="grid h-7 w-7 place-items-center rounded-full hover:bg-secondary">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm font-bold">{i.qty}</span>
                        <button onClick={() => setQty(i.id, i.qty + 1)} aria-label="Increase"
                          className="grid h-7 w-7 place-items-center rounded-full hover:bg-secondary">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="text-sm font-bold">₹{(i.qty * i.price).toLocaleString()}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-border p-5">
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>MRP total</span>
                <span className="line-through">₹{totalMrp.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gold">
                <span>You save</span>
                <span>− ₹{(totalMrp - totalPrice).toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2 text-base font-bold">
                <span>Order total</span>
                <span className="gradient-text">₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>
            <a href={buildWhatsAppOrder(items, totalPrice, totalMrp)} target="_blank" rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full gradient-gold-bg py-3.5 font-semibold text-primary-foreground glow transition-transform hover:scale-[1.02]">
              Place Order on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <button onClick={clear} className="mt-2 w-full text-center text-xs text-muted-foreground hover:text-destructive">
              Clear cart
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
