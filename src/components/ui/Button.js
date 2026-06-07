"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { buttonVariants } from "@/constants/theme";

const sizes = {
  sm: "px-4 py-2 text-[9px] tracking-[0.2em]",
  md: "px-8 py-4 text-[10px] tracking-[0.3em]",
  lg: "px-10 py-5 text-xs tracking-[0.3em]",
  xl: "px-12 py-6 text-[10px] tracking-[0.4em]",
};

const Button = forwardRef(function Button(
  {
    className,
    variant = "primary",
    size = "md",
    href,
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props
  },
  ref
) {
  const classes = cn(
    "inline-flex items-center justify-center font-sans font-bold uppercase transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
    buttonVariants[variant] ?? buttonVariants.primary,
    sizes[size],
    className
  );

  const content = (
    <>
      {leftIcon && <span className="mr-3 inline-flex">{leftIcon}</span>}
      {isLoading ? "Loading..." : children}
      {rightIcon && <span className="ml-3 inline-flex">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link ref={ref} href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button ref={ref} className={cn("group", classes)} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
});

export default Button;
