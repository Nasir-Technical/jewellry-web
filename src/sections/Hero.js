"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax */}
            <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-matte-black z-10" />
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="/images/hero.png"
                    alt="Luxury Jewelry"
                    fill
                    className="object-cover object-center"
                    priority
                />
            </motion.div>

            {/* Floating Elements / Particle Effects (Mocked with CSS) */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-700/5 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 relative z-20 pt-15">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <h2 className="text-gold-500 font-cormorant italic text-xl md:text-2xl mb-2 tracking-wide">
                            The Artisan Collection
                        </h2>
                        <h1 className="text-4xl md:text-8xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-none">
                            Defining <br />
                            <span className="gold-text-gradient">Timeless</span> Elegance
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1.5 }}
                        className="text-gold-100/60 font-cormorant text-lg md:text-xl max-w-xl mb-12 leading-relaxed tracking-wide"
                    >
                        Journey through a world where every gemstone tells a story and every design is a testament to extraordinary craftsmanship.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8"
                    >
                        <button className="relative group overflow-hidden px-10 py-5 bg-gold-600 text-black font-sans text-xs uppercase tracking-[0.3em] font-bold transition-all hover:bg-gold-500 luxury-shadow w-full sm:w-auto">
                            Explore Collection
                            <motion.div
                                className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                            />
                        </button>
                        <button className="px-10 py-5 border border-gold-500/30 text-gold-500 font-sans text-xs uppercase tracking-[0.3em] hover:bg-gold-500/10 transition-all w-full sm:w-auto">
                            Book Appointment
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Floating Jewelry (Small Parallax Element) */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
                className="absolute right-[10%] top-[25%] hidden lg:block z-30"
            >
                <div className="relative w-48 h-48 animate-float">
                    <div className="absolute inset-0 bg-gold-500/20 blur-[40px] rounded-full" />
                    <Image
                        src="/images/collection-ring.png"
                        alt="Floating Ring"
                        width={200}
                        height={200}
                        className="object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    />
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-gold-500/40 text-[10px] uppercase tracking-[0.3em] mb-4">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500/40 to-transparent" />
            </motion.div>
        </section>
    );
}
