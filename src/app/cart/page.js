"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowRight } from "@/components/Icons";
import Link from "next/link";

export default function CartPage() {
    const cartItems = [
        {
            id: 1,
            name: "Elysian Emerald Necklace",
            price: 45000,
            image: "/images/product-necklace.png",
            category: "High Jewelry",
        },
    ];

    return (
        <main className="bg-matte-black min-h-screen">
            <Navbar />

            <section className="pt-48 pb-32">
                <div className="container mx-auto px-6">
                    <header className="mb-16">
                        <h1 className="text-5xl md:text-6xl font-serif text-white tracking-tight">Shopping <span className="gold-text-gradient">Cart</span></h1>
                        <p className="text-gold-500/60 font-cormorant text-xl italic mt-4">1 Piece Selected</p>
                    </header>

                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-12">
                            {cartItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8 py-8 border-b border-gold-500/10"
                                >
                                    <div className="relative w-full md:w-48 aspect-square glass border border-gold-500/10 overflow-hidden">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>

                                    <div className="flex-1">
                                        <p className="text-[10px] uppercase tracking-widest text-gold-500 mb-2">{item.category}</p>
                                        <h3 className="text-2xl font-serif text-white mb-2">{item.name}</h3>
                                        <p className="text-gold-100/40 text-xs uppercase tracking-widest">Handcrafted in Geneva</p>
                                    </div>

                                    <div className="flex items-center space-x-6">
                                        <div className="flex items-center border border-gold-500/20 px-4 py-2 space-x-6">
                                            <button className="text-gold-500/50 hover:text-gold-500"><Minus size={14} /></button>
                                            <span className="text-sm font-sans text-white">1</span>
                                            <button className="text-gold-500/50 hover:text-gold-500"><Plus size={14} /></button>
                                        </div>
                                        <p className="text-xl font-sans font-light text-gold-400 min-w-[120px] text-right">
                                            ${item.price.toLocaleString()}
                                        </p>
                                        <button className="text-gold-900/40 hover:text-red-900 transition-colors">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}

                            <Link href="/products" className="inline-block pt-8 text-[10px] uppercase tracking-[0.3em] text-gold-500 hover:text-gold-300 transition-colors border-b border-gold-500/30 pb-2">
                                ← Continue Browsing
                            </Link>
                        </div>

                        {/* Summary */}
                        <div className="glass p-8 md:p-12 border border-gold-500/20 h-fit luxury-shadow">
                            <h4 className="text-2xl font-serif text-white mb-12">Order Summary</h4>

                            <div className="space-y-6 mb-12">
                                <div className="flex justify-between text-gold-100/60 uppercase tracking-widest text-[10px]">
                                    <span>Subtotal</span>
                                    <span className="text-white">$45,000.00</span>
                                </div>
                                <div className="flex justify-between text-gold-100/60 uppercase tracking-widest text-[10px]">
                                    <span>Insured Shipping</span>
                                    <span className="text-green-500">Complimentary</span>
                                </div>
                                <div className="flex justify-between text-gold-100/60 uppercase tracking-widest text-[10px]">
                                    <span>Tax Estimate</span>
                                    <span className="text-white">$3,600.00</span>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gold-500/10 mb-12">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-gold-500 mb-1">Estimated Total</p>
                                        <p className="text-4xl font-serif text-white">$48,600.00</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-gold-600 text-black py-6 uppercase tracking-[0.4em] font-bold hover:bg-gold-500 transition-all flex items-center justify-center group shadow-[0_0_30px_rgba(212,175,55,0.2)]">
                                Secure Checkout
                                <ArrowRight size={18} className="ml-4 transform group-hover:translate-x-2 transition-transform" />
                            </button>

                            <p className="mt-8 text-center text-gold-900/40 text-[9px] uppercase tracking-widest">
                                Payment processed via encrypted private banking networks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
