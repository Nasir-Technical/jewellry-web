import Link from "next/link";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-matte-black px-6 text-center">
      <Container>
        <p className="mb-4 font-cormorant text-xl italic text-gold-500">Lost in the Atelier</p>
        <h1 className="mb-6 text-6xl font-serif text-white md:text-8xl">
          <span className="gold-text-gradient">404</span>
        </h1>
        <p className="mx-auto mb-12 max-w-md font-cormorant text-lg text-gold-100/60">
          The piece you seek is not in our collection. Allow us to guide you back to timeless elegance.
        </p>
        <Button href="/" variant="outline" size="lg">
          Return Home
        </Button>
      </Container>
    </div>
  );
}
