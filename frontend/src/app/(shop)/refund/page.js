"use client";

import ShopLayout from "@/components/layout/ShopLayout";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";

const LegalSection = ({ title, content }) => (
    <section className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.3em] text-gold-500 mb-6">{title}</h2>
        <div className="text-gold-100/60 font-cormorant text-lg italic leading-relaxed space-y-4">
            {content.map((p, i) => <p key={i}>{p}</p>)}
        </div>
    </section>
);

export default function RefundPage() {
    return (
        <ShopLayout className="py-20">
            <PageHeader
                title="Returns &"
                highlight="Exchange"
                description="Our refined commitment to ensuring your absolute satisfaction with your Aurelia acquisition."
            />
            <Container className="max-w-4xl">
                <LegalSection
                    title="Return Eligibility"
                    content={[
                        "Standard collection pieces in pristine, unworn condition may be returned within 14 days of receipt.",
                        "The security seal and original Aurelia certificate of authenticity must remain intact for eligibility."
                    ]}
                />
                <LegalSection
                    title="Bespoke Exclusions"
                    content={[
                        "Due to their personal nature, custom commissions and engraved pieces are considered final sale and are not eligible for return.",
                        "We offer complimentary adjustments for bespoke pieces to ensure a perfect fit and finish."
                    ]}
                />
                <LegalSection
                    title="The Process"
                    content={[
                        "To initiate an exchange or return, please contact our private concierge to receive your insured transport labels.",
                        "Once received at our atelier, pieces undergo a meticulous authentication and condition appraisal before credit is issued."
                    ]}
                />
            </Container>
        </ShopLayout>
    );
}
