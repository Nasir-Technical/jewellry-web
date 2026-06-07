import Link from "next/link";
import Container from "./Container";

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-matte-black selection:bg-gold-500 selection:text-black">
      <header className="py-8">
        <Container>
          <Link href="/" className="text-2xl font-serif uppercase tracking-[0.2em] gold-text-gradient">
            Aurelia
          </Link>
        </Container>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">{children}</div>
      </main>
    </div>
  );
}
