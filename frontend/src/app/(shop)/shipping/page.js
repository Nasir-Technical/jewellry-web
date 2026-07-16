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

export default function ShippingPage() {
    return (
        <ShopLayout className="py-20">
            <PageHeader
                title="Shipping"
                highlight="Logistics"
                description="Understanding our white-glove delivery procedures for global transport of Aurelia treasures."
            />
            <Container className="max-w-4xl">
                <LegalSection
                    title="Global Delivery"
                    content={[
                        "Aurelia facilitates insured, high-priority delivery to over 50 countries worldwide using specialized luxury couriers.",
                        "All shipments are tracked in real-time and require a secure signature upon arrival at the destination."
                    ]}
                />
                <LegalSection
                    title="Insurance & Care"
                    content={[
                        "Each treasure is fully insured from the moment it leaves our vault until it is safely in your possession.",
                        "Pieces are housed in our signature protective packaging designed to withstand the rigors of global transit while maintaining presentation."
                    ]}
                />
                <LegalSection
                    title="Handling Times"
                    content={[
                        "Standard collection pieces typically undergo a 48-hour inspection period before dispatch.",
                        "Custom and personalized creations have specific handling timelines discussed during the design consultation phase."
                    ]}
                />
            </Container>
        </ShopLayout>
    );
}
