"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Diamond, Gem } from "@/components/Icons";
import { useAppDispatch } from "@/redux/hooks";
import { setShopMode, SHOP_MODES } from "@/redux/slices/shopModeSlice";
import { saveShopModeToStorage } from "@/services/storage/shopModeStorage";
import { ROUTES } from "@/constants/routes";

export default function ShopModal() {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        const hasSeenModal = sessionStorage.getItem("hasSeenShopModal");
        if (!hasSeenModal) {
            const timer = setTimeout(() => setIsOpen(true), 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleSelection = (mode, href) => {
        sessionStorage.setItem("hasSeenShopModal", "true");
        dispatch(setShopMode(mode));
        saveShopModeToStorage({ mode, hasSelectedMode: true });
        setIsOpen(false);
        if (href) router.push(href);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[90] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={() => handleSelection(SHOP_MODES.RETAIL)}
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-4xl glass luxury-shadow p-8 md:p-12 text-center border border-gold-500/20"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif mb-4 gold-text-gradient">
                            How Would You Like To Shop?
                        </h2>
                        <p className="text-gold-100/60 font-cormorant text-lg mb-12 tracking-wide">
                            Select your preference for a personalized luxury experience
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Wholesale Option */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSelection(SHOP_MODES.WHOLESALE, ROUTES.wholesale)}
                                className="group relative p-8 glass gold-border-glow text-left overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Gem size={80} className="text-gold-500" />
                                </div>
                                <h3 className="text-2xl font-serif mb-4 text-gold-400 group-hover:text-gold-300 transition-colors">
                                    Wholesale Raw Materials
                                </h3>
                                <p className="text-gold-100/50 font-cormorant text-sm leading-relaxed">
                                    Access our exclusive inventory of certified raw diamonds, precious gemstones, and high-purity gold for manufacturers and private ateliers.
                                </p>
                                <div className="mt-8 flex items-center text-xs uppercase tracking-[0.2em] text-gold-500 group-hover:animate-gold-glow">
                                    Enter Depot <span className="ml-2">→</span>
                                </div>
                            </motion.button>

                            {/* Jewelry Collection Option */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleSelection(SHOP_MODES.RETAIL, ROUTES.shop)}
                                className="group relative p-8 glass gold-border-glow text-left overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Diamond size={80} className="text-gold-500" />
                                </div>
                                <h3 className="text-2xl font-serif mb-4 text-gold-400 group-hover:text-gold-300 transition-colors">
                                    Luxury Jewelry Collection
                                </h3>
                                <p className="text-gold-100/50 font-cormorant text-sm leading-relaxed">
                                    Discover our curated selection of finished masterpieces. Handcrafted necklaces, rings, and timepieces designed for the extraordinary.
                                </p>
                                <div className="mt-8 flex items-center text-xs uppercase tracking-[0.2em] text-gold-500 group-hover:animate-gold-glow">
                                    Examine Pieces <span className="ml-2">→</span>
                                </div>
                            </motion.button>
                        </div>

                        <button
                            onClick={() => handleSelection(SHOP_MODES.RETAIL)}
                            className="mt-12 text-gold-500/40 hover:text-gold-500 text-xs uppercase tracking-widest transition-colors"
                        >
                            Skip and browse all
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
