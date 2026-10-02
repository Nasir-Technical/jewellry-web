"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
    return (
        <section id="story" className="py-32 bg-matte-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden luxury-shadow">
                            <Image
                                src="/images/brand-story.png"
                                alt="Craftsmanship"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gold-950/10 mix-blend-overlay" />
                        </div>
                        {/* Floating Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 glass border border-gold-500/20 hidden md:flex items-center justify-center p-8 z-20">
                            <p className="text-gold-500 font-serif text-sm italic text-center">
                                Est. 1924 <br />
                                <span className="text-[10px] uppercase tracking-[0.2em] not-italic opacity-60">Geneva, Switzerland</span>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h2 className="text-gold-500 font-cormorant italic text-xl mb-6">Our Legacy</h2>
                        <h3 className="text-5xl md:text-7xl font-serif text-white mb-10 tracking-tight leading-tight">
                            A Century of <br />
                            <span className="gold-text-gradient">Heritage</span> & Heart
                        </h3>
                        <div className="space-y-6 text-gold-100/60 font-cormorant text-lg md:text-xl leading-relaxed">
                            <p>
                                Founded in the heart of Geneva, Aurelia began as a small boutique atelier dedicated to the pursuit of perfection. For three generations, we have mastered the art of transformation&mdash;taking the world&apos;s rarest materials and breathing life into them.
                            </p>
                            <p>
                                Every Aurelia piece is a dialogue between tradition and innovation. Our master artisans combine century-old techniques with modern precision to create jewelry that transcends time.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-2 gap-8 py-8 border-y border-gold-500/10">
                            <div>
                                <p className="text-3xl font-serif text-gold-400 mb-1">100+</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-900/60 font-sans">Artisans</p>
                            </div>
                            <div>
                                <p className="text-3xl font-serif text-gold-400 mb-1">24k</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-900/60 font-sans">Pure Excellence</p>
                            </div>
                        </div>

                        <button className="mt-12 text-white text-xs uppercase tracking-[0.4em] flex items-center group">
                            Read Our Full Story
                            <span className="ml-4 w-12 h-[1px] bg-gold-500 group-hover:w-24 transition-all duration-500" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
