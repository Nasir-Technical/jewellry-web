"use client";

import ShopLayout from "@/components/layout/ShopLayout";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import { FadeIn, StaggerChildren } from "@/components/motion";

export default function AboutPage() {
    return (
        <ShopLayout className="py-20">
            <PageHeader
                eyebrow="The Aurelia Heritage"
                title="Timeless"
                highlight="Elegance"
                description="Crafting more than jewelry—we curate moments of pure luxury and artistic expression."
            />

            <Container>
                <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-serif text-white uppercase tracking-wider">Our Story</h2>
                            <p className="text-gold-100/60 leading-relaxed font-cormorant text-lg italic">
                                Founded on the principles of artisanal excellence and rare beauty, Aurelia began as a small atelier reserved for those who seek the extraordinary.
                            </p>
                            <p className="text-gold-100/60 leading-relaxed font-cormorant text-lg italic">
                                Every piece in our collection is a testament to our commitment to perfection, crafted with ethically sourced gems and precious metals.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn>
                        <div className="relative aspect-[4/5] bg-gold-900/10 border border-gold-500/20 rounded-sm flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 to-transparent" />
                            <p className="text-[10px] uppercase tracking-[0.4em] text-gold-500/40">Luxury Visual Placeholder</p>
                        </div>
                    </FadeIn>
                </StaggerChildren>

                <div className="mt-32 text-center max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl font-serif text-white uppercase tracking-wider mb-8">The Philosophy</h2>
                        <p className="text-gold-100/60 leading-relaxed font-cormorant text-xl italic">
                            &ldquo;We believe that true luxury is found in the details&mdash;those infinitesimal moments where light meets metal, and soul meets story.&rdquo;
                        </p>
                    </FadeIn>
                </div>
            </Container>
        </ShopLayout>
    );
}
