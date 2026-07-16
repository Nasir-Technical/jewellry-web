"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui";
import { WholesaleHeader, InventoryTable } from "@/features/wholesale/components";
import { ProductFilters } from "@/features/products/components";
import { WHOLESALE_CATEGORIES, getWholesaleProductsByCategory } from "@/data/wholesale/products";
import { cn } from "@/lib/cn";

export default function WholesaleProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Materials");

  const products = useMemo(
    () => getWholesaleProductsByCategory(activeCategory),
    [activeCategory]
  );

  return (
    <Container className="pb-20 pt-12 md:pt-16">
      <WholesaleHeader
        title="Raw Material"
        highlight="Catalog"
        description="Certified precious metals and gemstones available for authorized procurement. All lots include full traceability documentation."
        action={
          <Button size="md">New Quote Request</Button>
        }
      />

      <ProductFilters
        categories={WHOLESALE_CATEGORIES}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
        className="mb-12"
      />

      <p className="mb-8 text-[10px] uppercase tracking-[0.3em] text-gold-500/50">
        {products.length} {products.length === 1 ? "Lot" : "Lots"} Available
      </p>

      <InventoryTable items={products} showActions />

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <article
            key={product.id}
            className={cn(
              "border border-gold-500/10 p-6 glass transition-colors hover:border-gold-500/20 md:hidden"
            )}
          >
            <p className="mb-1 font-mono text-[10px] text-gold-500">{product.id}</p>
            <h3 className="mb-2 font-serif text-lg text-white">{product.type}</h3>
            <p className="mb-4 font-cormorant text-sm text-gold-100/50">{product.description}</p>
            <p className="text-[10px] uppercase tracking-widest text-gold-100/40">
              {product.certification}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
