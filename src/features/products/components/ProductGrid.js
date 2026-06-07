"use client";

import ProductCard from "./ProductCard";
import { cn } from "@/lib/cn";

export default function ProductGrid({ products, className, columns = 4 }) {
  const columnClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  if (!products.length) {
    return (
      <div className="py-24 text-center">
        <p className="font-cormorant text-xl italic text-gold-100/50">
          No pieces match your selection.
        </p>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 gap-8", columnClass[columns], className)}>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
