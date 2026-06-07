"use client";

import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { Button } from "@/components/ui";
import { formatPrice } from "@/lib/formatters";
import { ROUTES } from "@/constants/routes";

export default function CartSummary({
  subtotal,
  shipping = 0,
  taxRate = 0.08,
  checkoutHref = ROUTES.checkout,
  showCheckout = true,
  className,
}) {
  const tax = Math.round(subtotal * taxRate);
  const total = subtotal + shipping + tax;

  return (
    <div className={`h-fit border border-gold-500/20 p-8 glass luxury-shadow md:p-12 ${className ?? ""}`}>
      <h4 className="mb-12 font-serif text-2xl text-white">Order Summary</h4>

      <div className="mb-12 space-y-6">
        <div className="flex justify-between text-[10px] uppercase tracking-widest text-gold-100/60">
          <span>Subtotal</span>
          <span className="text-white">{formatPrice(subtotal)}</span>
        </div>
        <div className="flex justify-between text-[10px] uppercase tracking-widest text-gold-100/60">
          <span>Insured Shipping</span>
          <span className={shipping === 0 ? "text-green-500" : "text-white"}>
            {shipping === 0 ? "Complimentary" : formatPrice(shipping)}
          </span>
        </div>
        <div className="flex justify-between text-[10px] uppercase tracking-widest text-gold-100/60">
          <span>Tax Estimate</span>
          <span className="text-white">{formatPrice(tax)}</span>
        </div>
      </div>

      <div className="mb-12 border-t border-gold-500/10 pt-8">
        <p className="mb-1 text-[10px] uppercase tracking-widest text-gold-500">Estimated Total</p>
        <p className="font-serif text-4xl text-white">{formatPrice(total)}</p>
      </div>

      {showCheckout && (
        <Button
          href={checkoutHref}
          size="xl"
          className="w-full shadow-[0_0_30px_rgba(212,175,55,0.2)]"
          rightIcon={<ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />}
        >
          Secure Checkout
        </Button>
      )}

      <p className="mt-8 text-center text-[9px] uppercase tracking-widest text-gold-900/40">
        Payment processed via encrypted private banking networks.
      </p>
    </div>
  );
}
