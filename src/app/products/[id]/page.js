"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import ProductShowcase from "@/sections/ProductShowcase";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ShoppingBag, ShieldCheck, Truck, RotateCcw } from "@/components/Icons";

export default function ProductDetails({ params }) {
    return (
        <main className="bg-matte-black min-h-screen">
            <Navbar />

            <section className="pt-32 md:pt-48 pb-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Image Gallery */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div className="relative aspect-square glass border border-gold-500/10 overflow-hidden">
                                <Image
                                    src="/images/product-necklace.png"
                                    alt="Product Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="aspect-square glass border border-gold-500/10 hover:border-gold-500/40 transition-colors cursor-pointer relative overflow-hidden">
                                        <Image src="/images/hero.png" alt="Thumb" fill className="object-cover opacity-60" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col"
                        >
                            <p className="text-gold-500 font-cormorant italic text-xl mb-4">High Jewelry Collection</p>
                            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">Elysian Emerald <br />Masterpiece</h1>
                            <p className="text-3xl font-sans font-light text-gold-400 mb-8 tracking-widest">$45,000</p>

                            <div className="space-y-6 text-gold-100/60 font-cormorant text-lg leading-relaxed mb-12">
                                <p>
                                    A breathtaking celebration of nature's beauty, featuring a 25-carat Zambian emerald suspended from a cascade of pear-shaped D-color diamonds. Handcrafted in 18k white gold.
                                </p>
                                <ul className="space-y-3 text-sm uppercase tracking-widest font-sans list-disc pl-5 decoration-gold-500">
                                    <li>GIA Certified Grade</li>
                                    <li>Conflict-Free Diamonds</li>
                                    <li>Limited Production</li>
                                </ul>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
                                <button className="flex-1 bg-gold-600 text-black py-5 uppercase tracking-[0.3em] font-bold hover:bg-gold-500 transition-colors flex items-center justify-center space-x-3">
                                    <ShoppingBag size={18} />
                                    <span>Add to Collection</span>
                                </button>
                                <button className="px-8 border border-gold-500 text-gold-500 hover:bg-gold-500/10 transition-colors flex items-center justify-center">
                                    <Heart size={20} />
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-gold-500/10">
                                <div className="flex flex-col items-center text-center space-y-2">
                                    <ShieldCheck size={24} className="text-gold-500/60" />
                                    <p className="text-[10px] uppercase tracking-widest text-gold-100/40">Secure Transaction</p>
                                </div>
                                <div className="flex flex-col items-center text-center space-y-2">
                                    <Truck size={24} className="text-gold-500/60" />
                                    <p className="text-[10px] uppercase tracking-widest text-gold-100/40">Insured Delivery</p>
                                </div>
                                <div className="flex flex-col items-center text-center space-y-2">
                                    <RotateCcw size={24} className="text-gold-500/60" />
                                    <p className="text-[10px] uppercase tracking-widest text-gold-100/40">Lifetime Service</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Suggested Pieces */}
            <ProductShowcase />

            <Footer />
        </main>
    );
}
