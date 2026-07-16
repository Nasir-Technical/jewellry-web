"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations/variants";
import { transitions, viewport } from "@/lib/animations/transitions";
import { cn } from "@/lib/cn";

export default function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = "normal",
  once = true,
  as = "div",
}) {
  const Component = motion[as] || motion.div;
  const variants = direction === "none" ? fadeIn : fadeInUp;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, once }}
      variants={variants}
      transition={{ ...transitions[duration], delay }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
