"use client";

import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations/variants";
import { transitions, viewport } from "@/lib/animations/transitions";
import { cn } from "@/lib/cn";

export default function ScaleIn({
  children,
  className,
  delay = 0,
  duration = "normal",
  once = true,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, once }}
      variants={scaleIn}
      transition={{ ...transitions[duration], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
