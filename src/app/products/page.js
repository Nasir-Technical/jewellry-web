"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import ProductShowcase from "@/sections/ProductShowcase";
import { motion } from "framer-motion";

export default function ProductsPage() {
    return (
        <main className="bg-matte-black min-h-screen">
            <Navbar />

            {/* Page Header */}
            <section className="pt-48 pb-20 border-b border-gold-500/10">
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6 uppercase tracking-widest"
                    >
                        The <span className="gold-text-gradient">Collections</span>
                    </motion.h1>
                    <div className="flex items-center justify-center space-x-8 text-gold-500/60 uppercase tracking-[0.2em] text-[10px]">
                        <button className="hover:text-gold-400 border-b border-gold-500 pb-1">All Pieces</button>
                        <button className="hover:text-gold-400 pb-1">High Jewelry</button>
                        <button className="hover:text-gold-400 pb-1">Engagement</button>
                        <button className="hover:text-gold-400 pb-1">Watches</button>
                    </div>
                </div>
            </section>

            {/* Reusing Product Showcase as the grid for now, but in a real app this would have filters */}
            <ProductShowcase />

            <Footer />
        </main>
    );
}
