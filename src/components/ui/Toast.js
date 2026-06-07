"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearToast, selectToast } from "@/redux/slices/uiSlice";
import { cn } from "@/lib/cn";

export default function Toast() {
  const dispatch = useAppDispatch();
  const toast = useAppSelector(selectToast);

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => dispatch(clearToast()), 3000);
    return () => clearTimeout(timer);
  }, [toast, dispatch]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 z-[100] -translate-x-1/2"
        >
          <div
            className={cn(
              "border px-8 py-4 text-[10px] uppercase tracking-[0.2em] glass luxury-shadow",
              toast.type === "success" && "border-gold-500/40 text-gold-300",
              toast.type === "info" && "border-gold-500/20 text-gold-100/80",
              toast.type === "error" && "border-red-500/40 text-red-300"
            )}
          >
            {toast.message}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
