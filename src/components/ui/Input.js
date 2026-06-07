"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/cn";

const Input = forwardRef(function Input(
  { className, label, error, helperText, rightElement, ...props },
  ref
) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gold-100/60">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          className={cn(
            "w-full border-b border-gold-500/30 bg-transparent py-3 text-xs tracking-widest text-white outline-none transition-colors placeholder:text-gold-900/40 focus:border-gold-500",
            error && "border-red-500/50 focus:border-red-500",
            rightElement && "pr-10",
            className
          )}
          {...props}
        />
        {rightElement && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2">{rightElement}</div>
        )}
      </div>
      {(error || helperText) && (
        <p className={cn("mt-2 text-[10px] uppercase tracking-widest", error ? "text-red-400" : "text-gold-900/60")}>
          {error || helperText}
        </p>
      )}
    </div>
  );
});

export default Input;
