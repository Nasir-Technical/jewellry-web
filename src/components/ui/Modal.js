"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { modal, overlay } from "@/lib/animations/variants";
import { transitions } from "@/lib/animations/transitions";
import { cn } from "@/lib/cn";
import { X } from "@/components/Icons";

export default function Modal({
  isOpen,
  onClose,
  children,
  className,
  overlayClassName,
  showClose = true,
  closeOnOverlay = true,
  title,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose?.();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlay}
            transition={transitions.normal}
            className={cn("absolute inset-0 bg-black/80 backdrop-blur-md", overlayClassName)}
            onClick={closeOnOverlay ? onClose : undefined}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modal}
            transition={transitions.spring}
            className={cn(
              "relative w-full max-w-4xl glass luxury-shadow border border-gold-500/20 p-8 md:p-12",
              className
            )}
            onClick={(event) => event.stopPropagation()}
          >
            {(title || showClose) && (
              <div className="mb-6 flex items-start justify-between gap-4">
                {title && <h2 className="text-2xl font-serif gold-text-gradient">{title}</h2>}
                {showClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="ml-auto text-gold-500/60 transition-colors hover:text-gold-500"
                    aria-label="Close dialog"
                  >
                    <X size={24} />
                  </button>
                )}
              </div>
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
