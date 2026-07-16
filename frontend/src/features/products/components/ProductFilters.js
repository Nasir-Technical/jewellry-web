"use client";

import { cn } from "@/lib/cn";

export default function ProductFilters({ categories, activeCategory, onChange, className }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 md:gap-8",
        className
      )}
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={cn(
              "pb-1 text-[10px] uppercase tracking-[0.2em] transition-colors",
              isActive
                ? "border-b border-gold-500 text-gold-400"
                : "text-gold-500/60 hover:text-gold-400"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
