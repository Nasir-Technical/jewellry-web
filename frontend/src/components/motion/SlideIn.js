"use client";

import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/lib/animations/variants";
import { transitions, viewport } from "@/lib/animations/transitions";
import { cn } from "@/lib/cn";

export default function SlideIn({
  children,
  className,
  from = "left",
  delay = 0,
  duration = "cinematic",
  once = true,
}) {
  const variants = from === "right" ? fadeInRight : fadeInLeft;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, once }}
      variants={variants}
      transition={{ ...transitions[duration], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
