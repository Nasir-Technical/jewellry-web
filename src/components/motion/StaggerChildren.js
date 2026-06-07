"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations/variants";
import { transitions, viewport } from "@/lib/animations/transitions";
import { cn } from "@/lib/cn";

export function StaggerChildren({ children, className, once = true }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewport, once }}
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }) {
  return (
    <motion.div variants={staggerItem} transition={transitions.normal} className={cn(className)}>
      {children}
    </motion.div>
  );
}
