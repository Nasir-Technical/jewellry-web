"use client";

import ShopLayout from "@/components/layout/ShopLayout";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import { Button, Input } from "@/components/ui";
import { FadeIn, StaggerChildren } from "@/components/motion";

export default function ContactPage() {
    return (
        <ShopLayout className="py-20">
            <PageHeader
                eyebrow="Connect With Us"
                title="Personal"
                highlight="Concierge"
                description="Our private advisors are at your service to assist with collections, custom orders, or any inquiries."
            />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <FadeIn className="lg:col-span-1 space-y-12">
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.3em] text-gold-500 mb-4">Mailing Address</h3>
                            <p className="text-white font-serif text-lg leading-relaxed">
                                742 Luxe Avenue<br />
                                Mayfair, London<br />
                                United Kingdom
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xs uppercase tracking-[0.3em] text-gold-500 mb-4">Direct Contact</h3>
                            <p className="text-white font-serif text-lg leading-relaxed">
                                concierge@aurelia.com<br />
                                +44 20 7946 0123
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn className="lg:col-span-2">
                        <form className="space-y-8 bg-gold-900/5 p-8 md:p-12 border border-gold-500/10 rounded-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Input label="Full Name" placeholder="Your Name" />
                                <Input label="Email Address" type="email" placeholder="email@example.com" />
                            </div>
                            <Input label="Subject" placeholder="General Inquiry" />
                            <div className="w-full">
                                <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gold-100/60">Message</label>
                                <textarea
                                    className="w-full border-b border-gold-500/30 bg-transparent py-3 text-xs tracking-widest text-white outline-none transition-colors placeholder:text-gold-900/40 focus:border-gold-500 min-h-[150px] resize-none"
                                    placeholder="How may we assist you?"
                                />
                            </div>
                            <Button variant="primary" className="w-full">Initialize Contact</Button>
                        </form>
                    </FadeIn>
                </div>
            </Container>
        </ShopLayout>
    );
}
