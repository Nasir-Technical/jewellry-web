"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "@/components/Icons";

export default function Footer() {
    return (
        <footer className="bg-matte-black pt-32 pb-12 border-t border-gold-500/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Info */}
                    <div className="md:col-span-2">
                        <h2 className="text-4xl font-serif gold-text-gradient tracking-widest uppercase mb-8">Aurelia</h2>
                        <p className="text-gold-100/50 font-cormorant text-lg max-w-sm mb-8 leading-relaxed">
                            Curating brilliance since 1924. We are dedicated to the pursuit of beauty, quality, and the world's most exceptional treasures.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="#" className="text-gold-500 hover:text-gold-300 transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="text-gold-500 hover:text-gold-300 transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="text-gold-500 hover:text-gold-300 transition-colors"><Twitter size={20} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6">Maison</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gold-100/40 hover:text-gold-500 text-xs uppercase tracking-widest transition-colors font-sans">Our Story</Link></li>
                            <li><Link href="#" className="text-gold-100/40 hover:text-gold-500 text-xs uppercase tracking-widest transition-colors font-sans">Artisanship</Link></li>
                            <li><Link href="#" className="text-gold-100/40 hover:text-gold-500 text-xs uppercase tracking-widest transition-colors font-sans">Bespoke Service</Link></li>
                            <li><Link href="#" className="text-gold-100/40 hover:text-gold-500 text-xs uppercase tracking-widest transition-colors font-sans">World of Aurelia</Link></li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className="text-white font-serif text-xl mb-6">Concierge</h4>
                        <p className="text-gold-100/40 text-xs uppercase tracking-[0.2em] mb-4">Join Our Inner Circle</p>
                        <div className="relative mb-8">
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                className="w-full bg-transparent border-b border-gold-500/30 py-3 text-xs tracking-widest outline-none focus:border-gold-500 transition-colors placeholder:text-gold-900/40"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gold-500">
                                <Mail size={18} />
                            </button>
                        </div>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gold-100/40 hover:text-gold-500 text-xs uppercase tracking-widest transition-colors font-sans">Contact Us</Link></li>
                            <li><Link href="#" className="text-gold-100/40 hover:text-gold-500 text-xs uppercase tracking-widest transition-colors font-sans">Shipping & Returns</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-gold-500/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-gold-900/50">
                    <p>© 2026 Aurelia Maison de Haute Joaillerie. All Rights Reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-gold-500">Privacy Policy</Link>
                        <Link href="#" className="hover:text-gold-500">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
