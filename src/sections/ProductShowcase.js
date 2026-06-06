"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ShoppingBag } from "@/components/Icons";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Elysian Emerald Necklace",
        price: "$45,000",
        image: "/images/product-necklace.png",
        category: "High Jewelry",
    },
    {
        id: 2,
        name: "Golden Solstice Ring",
        price: "$12,800",
        image: "/images/collection-ring.png",
        category: "Engagement",
    },
    {
        id: 3,
        name: "Celestial Diamond Drops",
        price: "$28,500",
        image: "/images/hero.png",
        category: "Earrings",
    },
    {
        id: 4,
        name: "Aurora Gold Cuff",
        price: "$18,200",
        image: "/images/brand-story.png",
        category: "Bracelets",
    },
];

export default function ProductShowcase() {
    return (
        <section className="py-32 bg-matte-black border-y border-gold-500/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-gold-500 font-cormorant italic text-xl mb-4"
                    >
                        Signature Pieces
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-serif text-white tracking-tight"
                    >
                        The Radiant Collection
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative aspect-[3/4] bg-luxury-gray mb-6 overflow-hidden glass border border-gold-500/10 group-hover:border-gold-500/30 transition-all duration-500">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay Controls */}
                                <div className="absolute top-4 right-4 flex flex-col space-y-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                    <button className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black transition-all">
                                        <Heart size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-black transition-all">
                                        <ShoppingBag size={18} />
                                    </button>
                                </div>

                                {/* Bottom Reveal Button */}
                                <Link
                                    href={`/products/${product.id}`}
                                    className="absolute bottom-0 left-0 w-full py-4 bg-gold-600/90 backdrop-blur-sm text-black text-[10px] uppercase tracking-[0.3em] font-bold text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                >
                                    View Details
                                </Link>
                            </div>

                            <div className="text-center">
                                <p className="text-gold-500/60 font-cormorant text-sm uppercase tracking-widest mb-1">
                                    {product.category}
                                </p>
                                <h4 className="text-white font-serif text-xl mb-2 group-hover:text-gold-300 transition-colors">
                                    {product.name}
                                </h4>
                                <p className="text-gold-500 font-sans font-light tracking-widest text-lg">
                                    {product.price}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        href="/products"
                        className="inline-block px-12 py-5 border border-gold-500 text-gold-500 text-[10px] uppercase tracking-[0.4em] hover:bg-gold-500 hover:text-black transition-all duration-500"
                    >
                        Discover Full Catalog
                    </Link>
                </div>
            </div>
        </section>
    );
}
