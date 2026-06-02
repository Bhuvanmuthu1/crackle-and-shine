import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919095040509?text=Hi%20CracklingWorks%2C%20I%27d%20like%20to%20order"
      target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white shadow-2xl shadow-[#25D366]/40 transition-transform hover:scale-110"
      style={{ animation: "float 3s ease-in-out infinite" }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
