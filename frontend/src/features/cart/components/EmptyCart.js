import Link from "next/link";
import { Button } from "@/components/ui";
import { ROUTES } from "@/constants/routes";

export default function EmptyCart({ title = "Your cart awaits", message }) {
  return (
    <div className="py-24 text-center">
      <p className="mb-4 font-cormorant text-xl italic text-gold-500">{title}</p>
      <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl">
        No pieces <span className="gold-text-gradient">selected</span>
      </h2>
      <p className="mx-auto mb-12 max-w-md font-cormorant text-lg text-gold-100/50">
        {message ??
          "Explore our curated collections and discover treasures crafted for the extraordinary."}
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href={ROUTES.shop} size="lg">
          Explore Shop
        </Button>
        <Button href={ROUTES.collections} variant="outline" size="lg">
          View Collections
        </Button>
      </div>
    </div>
  );
}
