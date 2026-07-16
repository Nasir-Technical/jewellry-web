"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const variants = {
  default: "text-gold-500 hover:text-gold-400",
  filled: "bg-black/60 text-gold-500 backdrop-blur-md hover:bg-gold-500 hover:text-black",
  outline: "border border-gold-500/30 text-gold-500 hover:bg-gold-500/10",
};

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const IconButton = forwardRef(function IconButton(
  { className, variant = "default", size = "md", href, label, children, ...props },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full transition-all duration-300",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link ref={ref} href={href} className={classes} aria-label={label} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} type="button" className={classes} aria-label={label} {...props}>
      {children}
    </button>
  );
});

export default IconButton;
