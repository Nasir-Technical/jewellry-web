import Link from "next/link";
import Container from "./Container";

export default function CheckoutLayout({ children }) {
  return (
    <div className="min-h-screen bg-matte-black selection:bg-gold-500 selection:text-black">
      <header className="border-b border-gold-500/10 py-6">
        <Container className="flex items-center justify-between">
          <Link href="/" className="text-xl font-serif uppercase tracking-[0.2em] gold-text-gradient">
            Aurelia
          </Link>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500/60">Secure Checkout</p>
        </Container>
      </header>
      <main className="py-12 md:py-16">{children}</main>
    </div>
  );
}
