"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/layout";
import { ProductGrid } from "@/features/products/components";
import { PRODUCTS } from "@/data/products";
import { ROUTES } from "@/constants/routes";

export default function ProductShowcase() {
  const featured = PRODUCTS.filter((product) => product.isBestseller).slice(0, 4);

  return (
    <section className="border-y border-gold-500/5 bg-matte-black py-32">
      <Container>
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-cormorant text-xl italic text-gold-500"
          >
            Signature Pieces
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl tracking-tight text-white md:text-6xl"
          >
            The Radiant Collection
          </motion.h3>
        </div>

        <ProductGrid products={featured} columns={4} />

        <div className="mt-20 text-center">
          <Link
            href={ROUTES.shop}
            className="inline-block border border-gold-500 px-12 py-5 text-[10px] uppercase tracking-[0.4em] text-gold-500 transition-all duration-500 hover:bg-gold-500 hover:text-black"
          >
            Discover Full Catalog
          </Link>
        </div>
      </Container>
    </section>
  );
}
