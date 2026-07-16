"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "@/components/Icons";
import { Input } from "@/components/ui";
import { ROUTES, ANCHORS } from "@/constants/routes";

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/10 bg-matte-black pb-12 pt-32">
      <div className="container mx-auto px-6">
        <div className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h2 className="mb-8 font-serif text-4xl uppercase tracking-widest gold-text-gradient">
              Aurelia
            </h2>
            <p className="mb-8 max-w-sm font-cormorant text-lg leading-relaxed text-gold-100/50">
              Curating brilliance since 1924. We are dedicated to the pursuit of beauty, quality,
              and the world&apos;s most exceptional treasures.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gold-500 transition-colors hover:text-gold-300">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gold-500 transition-colors hover:text-gold-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gold-500 transition-colors hover:text-gold-300">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-xl text-white">Boutique</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href={ROUTES.shop}
                  className="font-sans text-xs uppercase tracking-widest text-gold-100/40 transition-colors hover:text-gold-500"
                >
                  Shop All
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.collections}
                  className="font-sans text-xs uppercase tracking-widest text-gold-100/40 transition-colors hover:text-gold-500"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.wishlist}
                  className="font-sans text-xs uppercase tracking-widest text-gold-100/40 transition-colors hover:text-gold-500"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href={ANCHORS.story}
                  className="font-sans text-xs uppercase tracking-widest text-gold-100/40 transition-colors hover:text-gold-500"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-serif text-xl text-white">Concierge</h4>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold-100/40">
              Join Our Inner Circle
            </p>
            <Input
              type="email"
              placeholder="EMAIL ADDRESS"
              rightElement={
                <button type="button" className="text-gold-500" aria-label="Subscribe">
                  <Mail size={18} />
                </button>
              }
              className="mb-8"
            />
            <ul className="space-y-4">
              <li>
                <Link
                  href={ROUTES.account}
                  className="font-sans text-xs uppercase tracking-widest text-gold-100/40 transition-colors hover:text-gold-500"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.orders}
                  className="font-sans text-xs uppercase tracking-widest text-gold-100/40 transition-colors hover:text-gold-500"
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link
                  href={ROUTES.wholesale}
                  className="font-sans text-xs uppercase tracking-widest text-gold-100/40 transition-colors hover:text-gold-500"
                >
                  Wholesale Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between border-t border-gold-500/10 pt-12 text-[10px] uppercase tracking-[0.3em] text-gold-900/50 md:flex-row">
          <p>© 2026 Aurelia Maison de Haute Joaillerie. All Rights Reserved.</p>
          <div className="mt-4 flex space-x-8 md:mt-0">
            <Link href="#" className="hover:text-gold-500">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gold-500">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
