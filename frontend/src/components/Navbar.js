"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Menu, X, User, Heart } from "@/components/Icons";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { selectCartCount } from "@/redux/slices/cartSlice";
import { selectWishlistItems } from "@/redux/slices/wishlistSlice";
import { ROUTES, ANCHORS } from "@/constants/routes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = useAppSelector(selectCartCount);
  const wishlistItems = useAppSelector(selectWishlistItems);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Shop", href: ROUTES.shop },
    { name: "Collections", href: ROUTES.collections },
    { name: "Our Story", href: ANCHORS.story },
    { name: "Wholesale", href: ROUTES.wholesale },
  ];

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled ? "glass border-b border-gold-500/10 py-4 shadow-lg" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <button
          type="button"
          className="text-gold-500 md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>

        <div className="hidden items-center space-x-12 md:flex">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-100/70 transition-colors hover:text-gold-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link href={ROUTES.home} className="absolute left-1/2 -translate-x-1/2">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="gold-text-gradient font-serif text-2xl uppercase tracking-[0.2em] md:text-3xl"
          >
            Aurelia
          </motion.h1>
        </Link>

        <div className="hidden items-center space-x-12 md:flex">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] uppercase tracking-[0.3em] text-gold-100/70 transition-colors hover:text-gold-500"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-6 border-l border-gold-500/20 pl-6">
            <button
              type="button"
              className="text-gold-500 transition-colors hover:text-gold-400"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <Link
              href={ROUTES.wishlist}
              className="relative text-gold-500 transition-colors hover:text-gold-400"
              aria-label="Wishlist"
            >
              <Heart size={18} strokeWidth={1.5} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold-600 text-[8px] font-bold text-black">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link
              href={ROUTES.cart}
              className="relative text-gold-500 transition-colors hover:text-gold-400"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold-600 text-[8px] font-bold text-black">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link
              href={ROUTES.account}
              className="text-gold-500 transition-colors hover:text-gold-400"
              aria-label="Account"
            >
              <User size={18} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <Link href={ROUTES.wishlist} className="text-gold-500" aria-label="Wishlist">
            <Heart size={20} strokeWidth={1.5} />
          </Link>
          <Link href={ROUTES.cart} className="relative text-gold-500" aria-label="Cart">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold-600 text-[8px] font-bold text-black">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] flex flex-col bg-matte-black p-8"
          >
            <div className="mb-16 flex items-center justify-between">
              <h2 className="gold-text-gradient font-serif text-xl uppercase tracking-widest">
                Aurelia
              </h2>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gold-500"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-gold-100 transition-colors hover:text-gold-500"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href={ROUTES.wishlist}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-gold-100 transition-colors hover:text-gold-500"
              >
                Wishlist
              </Link>
              <Link
                href={ROUTES.account}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-gold-100 transition-colors hover:text-gold-500"
              >
                Account
              </Link>
            </div>

            <div className="mt-auto border-t border-gold-500/20 pt-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold-900/60">
                © 2026 Aurelia Fine Jewelry
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
