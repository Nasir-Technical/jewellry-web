"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export default function ProductGallery({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryImages = images?.length ? images : ["/images/hero.png"];

  return (
    <div className="space-y-6">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-square overflow-hidden border border-gold-500/10 glass"
      >
        <Image
          src={galleryImages[activeIndex]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>

      <div className="grid grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative aspect-square overflow-hidden border transition-colors glass",
              activeIndex === index
                ? "border-gold-500/60"
                : "border-gold-500/10 hover:border-gold-500/40"
            )}
          >
            <Image
              src={image}
              alt={`${alt} view ${index + 1}`}
              fill
              sizes="120px"
              className={cn("object-cover", activeIndex !== index && "opacity-60")}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
