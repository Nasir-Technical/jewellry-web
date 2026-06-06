"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const collections = [
    {
        title: "High Jewelry",
        subtitle: "One-of-a-kind Masterpieces",
        image: "/images/hero.png",
        href: "/products?category=high-jewelry",
        span: "md:col-span-2",
    },
    {
        title: "Diamond Rings",
        subtitle: "Eternal Promises",
        image: "/images/collection-ring.png",
        href: "/products?category=rings",
        span: "md:col-span-1",
    },
    {
        title: "Bridal Couture",
        subtitle: "For Your Moments",
        image: "/images/product-necklace.png",
        href: "/products?category=bridal",
        span: "md:col-span-1",
    },
    {
        title: "Raw Diamonds",
        subtitle: "Uncut Brilliance",
        image: "/images/brand-story.png",
        href: "/wholesale",
        span: "md:col-span-2",
    },
];

export default function Collections() {
    return (
        <section id="collections" className="py-32 bg-matte-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-gold-500 font-cormorant italic text-xl mb-4"
                        >
                            Exquisite Categories
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl font-serif text-white tracking-tight"
                        >
                            Curated Collections
                        </motion.h3>
                    </div>
                    <Link
                        href="/products"
                        className="mt-8 md:mt-0 text-gold-500 text-xs uppercase tracking-[0.3em] border-b border-gold-500/30 pb-2 hover:border-gold-500 transition-all"
                    >
                        View All Series
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {collections.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden aspect-[4/5] md:aspect-auto ${item.span} h-[400px] md:h-[600px]`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />

                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end z-20">
                                <p className="text-gold-400 font-cormorant italic text-lg mb-2 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {item.subtitle}
                                </p>
                                <h4 className="text-3xl md:text-4xl font-serif text-white mb-6">
                                    {item.title}
                                </h4>
                                <Link
                                    href={item.href}
                                    className="w-fit text-[10px] uppercase tracking-[0.3em] text-white py-3 px-6 border border-white/20 hover:bg-white hover:text-black transition-all"
                                >
                                    Discover
                                </Link>
                            </div>

                            {/* Subtle Gold Border Hover */}
                            <div className="absolute inset-0 border border-gold-500/0 group-hover:border-gold-500/20 transition-all duration-700 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
