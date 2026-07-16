"use client";

import { Minus, Plus } from "@/components/Icons";

export default function QuantityStepper({ value, onDecrease, onIncrease, min = 1 }) {
  return (
    <div className="flex items-center space-x-6 border border-gold-500/20 px-4 py-2">
      <button
        type="button"
        onClick={onDecrease}
        disabled={value <= min}
        className="text-gold-500/50 transition-colors hover:text-gold-500 disabled:opacity-30"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="min-w-[1rem] text-center font-sans text-sm text-white">{value}</span>
      <button
        type="button"
        onClick={onIncrease}
        className="text-gold-500/50 transition-colors hover:text-gold-500"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
