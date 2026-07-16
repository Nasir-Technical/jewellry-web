"use client";

import { Container, PageHeader } from "@/components/layout";
import { ProductGrid } from "@/features/products/components";
import { Button } from "@/components/ui";
import { ROUTES } from "@/constants/routes";
import { useAppSelector } from "@/redux/hooks";
import { selectWishlistItems } from "@/redux/slices/wishlistSlice";

export default function WishlistPage() {
  const items = useAppSelector(selectWishlistItems);

  return (
    <section className="pb-32 pt-48">
      <Container>
        <PageHeader
          align="left"
          title="Your"
          highlight="Wishlist"
          description={
            items.length
              ? `${items.length} treasured ${items.length === 1 ? "piece" : "pieces"} saved for later`
              : "Save the pieces that capture your imagination"
          }
          className="mb-16"
        />

        {items.length === 0 ? (
          <div className="py-24 text-center">
            <p className="mb-6 font-cormorant text-xl italic text-gold-500">A blank canvas</p>
            <h2 className="mb-6 font-serif text-3xl text-white md:text-4xl">
              No favorites <span className="gold-text-gradient">yet</span>
            </h2>
            <p className="mx-auto mb-12 max-w-md font-cormorant text-lg text-gold-100/50">
              Tap the heart on any piece to build your personal collection of desires.
            </p>
            <Button href={ROUTES.shop} size="lg">
              Discover Pieces
            </Button>
          </div>
        ) : (
          <ProductGrid products={items} columns={4} />
        )}
      </Container>
    </section>
  );
}
