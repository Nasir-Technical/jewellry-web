"use client";

import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import WholesaleLayout from "@/components/layout/WholesaleLayout";
import { Button } from "@/components/ui";
import { FadeIn } from "@/components/motion";

export default function WholesaleSuccessPage() {
    return (
        <WholesaleLayout className="py-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center py-20">
                    <FadeIn>
                        <div className="flex justify-center mb-12">
                            <div className="h-24 w-24 rounded-full border border-gold-500/20 flex items-center justify-center">
                                <svg className="w-10 h-10 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>

                        <h1 className="text-4xl font-serif text-white uppercase tracking-wider mb-6">Application Received</h1>
                        <p className="text-gold-100/60 font-cormorant text-xl italic leading-relaxed mb-12">
                            Your partnership request has been safely delivered to our specialized advisors.
                            We personally review each application and will reach out via the provided credentials within 3-5 business days.
                        </p>

                        <div className="flex flex-col md:flex-row gap-6 justify-center">
                            <Button href="/wholesale" variant="primary">Return to Wholesale</Button>
                            <Button href="/" variant="outline" className="border-gold-500/20 text-gold-500 hover:bg-gold-500/5">Visit Public Boutique</Button>
                        </div>
                    </FadeIn>
                </div>
            </Container>
        </WholesaleLayout>
    );
}
