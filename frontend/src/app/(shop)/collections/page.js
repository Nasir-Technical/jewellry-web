"use client";

import { Container, PageHeader } from "@/components/layout";
import { CollectionCard } from "@/features/products/components";
import { COLLECTIONS } from "@/data/collections";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui";

export default function CollectionsPage() {
  return (
    <section className="pb-32 pt-48">
      <Container>
        <PageHeader
          eyebrow="Exquisite Categories"
          title="Curated"
          highlight="Collections"
          description="Each collection tells a distinct story of craftsmanship, heritage, and the pursuit of beauty beyond measure."
          align="center"
          className="mb-20"
        />

        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {COLLECTIONS.map((collection, index) => (
            <CollectionCard key={collection.slug} collection={collection} index={index} />
          ))}
        </div>

        <div className="border-t border-gold-500/10 pt-20 text-center">
          <p className="mb-8 font-cormorant text-xl italic text-gold-100/50">
            Seeking something entirely your own?
          </p>
          <Button href={ROUTES.shop} variant="outline" size="lg">
            Browse All Pieces
          </Button>
        </div>
      </Container>
    </section>
  );
}
