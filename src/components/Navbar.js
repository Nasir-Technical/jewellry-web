"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, User } from "@/components/Icons";
import Link from "next/link";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Collections", href: "/#collections" },
        { name: "Bespoke", href: "/#bespoke" },
        { name: "Wholesale", href: "/wholesale" },
        { name: "Our Story", href: "/#story" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4 glass border-b border-gold-500/10 shadow-lg" : "py-8 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gold-500"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu size={24} />
                </button>

                {/* Desktop Links - Left */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.slice(0, 2).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] uppercase tracking-[0.3em] font-sans text-gold-100/70 hover:text-gold-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Center Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-serif tracking-[0.2em] gold-text-gradient uppercase"
                    >
                        Aurelia
                    </motion.h1>
                </Link>

                {/* Desktop Links - Right */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.slice(2).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[10px] uppercase tracking-[0.3em] font-sans text-gold-100/70 hover:text-gold-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-6 pl-6 border-l border-gold-500/20">
                        <button className="text-gold-500 hover:text-gold-400 transition-colors">
                            <Search size={18} strokeWidth={1.5} />
                        </button>
                        <Link href="/cart" className="text-gold-500 hover:text-gold-400 transition-colors relative">
                            <ShoppingBag size={18} strokeWidth={1.5} />
                            <span className="absolute -top-2 -right-2 text-[8px] bg-gold-600 text-black rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                0
                            </span>
                        </Link>
                        <Link href="/wholesale" className="text-gold-500 hover:text-gold-400 transition-colors">
                            <User size={18} strokeWidth={1.5} />
                        </Link>
                    </div>
                </div>

                {/* Mobile Icons */}
                <div className="flex md:hidden items-center space-x-4">
                    <Link href="/cart" className="text-gold-500">
                        <ShoppingBag size={20} strokeWidth={1.5} />
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-matte-black p-8 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <h2 className="text-xl font-serif gold-text-gradient tracking-widest uppercase">Aurelia</h2>
                            <button onClick={() => setMobileMenuOpen(false)} className="text-gold-500">
                                <X size={32} />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-2xl font-serif text-gold-100 hover:text-gold-500 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto pt-8 border-t border-gold-500/20">
                            <Link href="/wholesale" className="flex items-center space-x-4 text-gold-500 mb-8">
                                <User size={20} />
                                <span className="text-sm uppercase tracking-widest">Account / Wholesale</span>
                            </Link>
                            <p className="text-[10px] text-gold-900/60 uppercase tracking-[0.2em]">© 2026 Aurelia Fine Jewelry</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
