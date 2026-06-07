"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Container, PageHeader } from "@/components/layout";
import { ProductFilters, ProductGrid } from "@/features/products/components";
import { Skeleton } from "@/components/ui";
import { PRODUCTS, PRODUCT_CATEGORIES, getProductsByCollection } from "@/data/products";
import { getCollectionBySlug } from "@/data/collections";

function ShopContent() {
  const searchParams = useSearchParams();
  const collectionSlug = searchParams.get("collection");
  const initialCategory = searchParams.get("category");

  const collection = collectionSlug ? getCollectionBySlug(collectionSlug) : null;

  const [activeCategory, setActiveCategory] = useState(
    initialCategory
      ? PRODUCT_CATEGORIES.find(
          (cat) => cat.toLowerCase().replace(/\s+/g, "-") === initialCategory
        ) ?? "All Pieces"
      : "All Pieces"
  );

  const products = useMemo(() => {
    let result = collectionSlug ? getProductsByCollection(collectionSlug) : PRODUCTS;

    if (activeCategory !== "All Pieces") {
      result = result.filter((product) => product.category === activeCategory);
    }

    return result;
  }, [collectionSlug, activeCategory]);

  return (
    <>
      <PageHeader
        eyebrow={collection ? collection.subtitle : "The Maison Boutique"}
        title={collection ? collection.title : "The"}
        highlight={collection ? undefined : "Shop"}
        description={
          collection
            ? collection.description
            : "Explore our complete catalog of finished masterpieces, from haute joaillerie to haute horlogerie."
        }
        align="center"
        className="mb-16"
      />

      <ProductFilters
        categories={PRODUCT_CATEGORIES}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
        className="mb-20"
      />

      <p className="mb-12 text-center text-[10px] uppercase tracking-[0.3em] text-gold-500/50">
        {products.length} {products.length === 1 ? "Piece" : "Pieces"}
      </p>

      <ProductGrid products={products} columns={4} />
    </>
  );
}

function ShopFallback() {
  return (
    <div className="space-y-8">
      <Skeleton className="mx-auto h-12 w-64" />
      <Skeleton className="mx-auto h-6 w-96" />
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[3/4] w-full" />
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <section className="pb-32 pt-48">
      <Container>
        <Suspense fallback={<ShopFallback />}>
          <ShopContent />
        </Suspense>
      </Container>
    </section>
  );
}
