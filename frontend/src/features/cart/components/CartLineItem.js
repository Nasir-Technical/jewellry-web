"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2 } from "@/components/Icons";
import { formatPrice } from "@/lib/formatters";
import { ROUTES } from "@/constants/routes";
import QuantityStepper from "./QuantityStepper";

export default function CartLineItem({ item, onUpdateQuantity, onRemove, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex flex-col space-y-6 border-b border-gold-500/10 py-8 md:flex-row md:items-center md:space-x-8 md:space-y-0"
    >
      <Link
        href={ROUTES.product(item.slug)}
        className="relative aspect-square w-full overflow-hidden border border-gold-500/10 glass md:w-48"
      >
        <Image src={item.image} alt={item.name} fill className="object-cover" sizes="192px" />
      </Link>

      <div className="flex-1">
        <p className="mb-2 text-[10px] uppercase tracking-widest text-gold-500">{item.category}</p>
        <Link href={ROUTES.product(item.slug)}>
          <h3 className="mb-2 font-serif text-2xl text-white transition-colors hover:text-gold-300">
            {item.name}
          </h3>
        </Link>
        <p className="text-xs uppercase tracking-widest text-gold-100/40">
          Handcrafted · {item.origin ?? "Geneva, Switzerland"}
        </p>
      </div>

      <div className="flex items-center space-x-6">
        <QuantityStepper
          value={item.quantity}
          onDecrease={() => onUpdateQuantity(item.id, item.quantity - 1)}
          onIncrease={() => onUpdateQuantity(item.id, item.quantity + 1)}
        />
        <p className="min-w-[120px] text-right font-sans text-xl font-light text-gold-400">
          {formatPrice(item.price * item.quantity)}
        </p>
        <button
          type="button"
          onClick={() => onRemove(item.id)}
          className="text-gold-900/40 transition-colors hover:text-red-400"
          aria-label={`Remove ${item.name}`}
        >
          <Trash2 size={18} />
        </button>
      </div>
    </motion.div>
  );
}
