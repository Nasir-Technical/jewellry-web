"use client";

import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import WholesaleLayout from "@/components/layout/WholesaleLayout";
import DealerApplicationForm from "@/features/wholesale/components/DealerApplicationForm";
import { FadeIn } from "@/components/motion";

export default function WholesaleRegisterPage() {
    return (
        <WholesaleLayout className="py-20">
            <PageHeader
                eyebrow="Global Partnerships"
                title="Wholesale"
                highlight="Registry"
                description="Expand your boutique's horizons by becoming an authorized Aurelia dealer."
            />

            <Container>
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        <div className="mb-16 text-center">
                            <p className="text-gold-100/60 font-cormorant text-xl italic leading-relaxed">
                                We select our partners with the same meticulous care we apply to our gems.
                                Complete the application below to begin the vetting process for the Aurelia Partner Program.
                            </p>
                        </div>

                        <DealerApplicationForm />
                    </FadeIn>
                </div>
            </Container>
        </WholesaleLayout>
    );
}
