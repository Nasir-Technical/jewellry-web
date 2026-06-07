"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout";
import { CollectionCard } from "@/features/products/components";
import { COLLECTIONS } from "@/data/collections";
import { ROUTES } from "@/constants/routes";

export default function Collections() {
  return (
    <section id="collections" className="bg-matte-black py-32">
      <Container>
        <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-4 font-cormorant text-xl italic text-gold-500"
            >
              Exquisite Categories
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl tracking-tight text-white md:text-5xl"
            >
              Curated Collections
            </motion.h3>
          </div>
          <Link
            href={ROUTES.collections}
            className="mt-8 border-b border-gold-500/30 pb-2 text-xs uppercase tracking-[0.3em] text-gold-500 transition-all hover:border-gold-500 md:mt-0"
          >
            View All Series
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {COLLECTIONS.map((collection, index) => (
            <CollectionCard key={collection.slug} collection={collection} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
