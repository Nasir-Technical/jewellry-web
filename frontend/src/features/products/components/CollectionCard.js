"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";

export default function CollectionCard({ collection, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "group relative h-[400px] overflow-hidden md:h-[600px] md:aspect-auto",
        collection.span
      )}
    >
      <Image
        src={collection.image}
        alt={collection.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-80"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
        <p className="mb-2 -translate-y-4 font-cormorant text-lg italic text-gold-400 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {collection.subtitle}
        </p>
        <h3 className="mb-2 font-serif text-3xl text-white md:text-4xl">{collection.title}</h3>
        <p className="mb-6 max-w-md font-cormorant text-sm text-gold-100/50">
          {collection.pieceCount} Pieces
        </p>
        <Link
          href={`${ROUTES.shop}?collection=${collection.slug}`}
          className="w-fit border border-white/20 px-6 py-3 text-[10px] uppercase tracking-[0.3em] text-white transition-all hover:bg-white hover:text-black"
        >
          Discover
        </Link>
      </div>

      <div className="pointer-events-none absolute inset-0 border border-gold-500/0 transition-all duration-700 group-hover:border-gold-500/20" />
    </motion.article>
  );
}
