"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-matte-black px-6 text-center">
      <Container>
        <p className="mb-4 font-cormorant text-xl italic text-gold-500">An Unexpected Interruption</p>
        <h1 className="mb-6 text-4xl font-serif text-white md:text-5xl">
          Something went <span className="gold-text-gradient">awry</span>
        </h1>
        <p className="mx-auto mb-12 max-w-md font-cormorant text-lg text-gold-100/60">
          Our artisans are attending to the matter. Please try again.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button onClick={reset} size="lg">
            Try Again
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
