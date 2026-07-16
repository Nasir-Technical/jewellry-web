"use client";

import { motion } from "framer-motion";

export default function StatCard({ label, value, icon: Icon, trend, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="border border-gold-500/10 p-8 glass"
    >
      <Icon size={24} className="mb-6 text-gold-500" />
      <p className="mb-2 font-sans text-[10px] uppercase tracking-widest text-gold-100/40">
        {label}
      </p>
      <p className="mb-2 font-serif text-3xl text-white">{value}</p>
      {trend && (
        <p className="text-[9px] uppercase tracking-widest text-gold-900/60">{trend}</p>
      )}
    </motion.div>
  );
}
