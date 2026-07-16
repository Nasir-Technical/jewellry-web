"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Instagram } from "@/components/Icons";

export function Testimonials() {
    const reviews = [
        {
            name: "Victoria Harrison",
            role: "Private Collector",
            content: "The craftsmanship is unparalleled. Aurelia doesn't just sell jewelry; they sell future heirlooms of incredible beauty.",
        },
        {
            name: "Marcus Thorne",
            role: "Luxury Aficionado",
            content: "Transacting for raw materials was seamless. Their transparency and certification standards are the benchmark of the industry.",
        },
    ];

    return (
        <section className="py-32 bg-matte-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <Star className="text-gold-500 mb-6 fill-gold-500/20" size={32} />
                    <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight">Voices of Distinction</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={rev.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }}
                            className="p-12 glass gold-border-glow border-gold-500/20 relative"
                        >
                            <p className="text-gold-100/70 font-cormorant text-2xl italic leading-relaxed mb-8">
                                "{rev.content}"
                            </p>
                            <div>
                                <p className="text-gold-400 font-serif text-xl">{rev.name}</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-900/60">{rev.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function InstagramGallery() {
    return (
        <section className="py-32 bg-matte-black">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl font-serif text-white uppercase tracking-widest">Aurelia World</h2>
                    <div className="flex items-center space-x-2 text-gold-500">
                        <Instagram size={20} />
                        <span className="text-xs uppercase tracking-widest">@aurelia_finejewelry</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 0.98 }}
                            className="relative aspect-square overflow-hidden cursor-pointer group"
                        >
                            <Image
                                src={`/images/${i % 2 === 0 ? "hero.png" : "product-necklace.png"}`}
                                alt="Gallery Image"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gold-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Instagram className="text-white" size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
