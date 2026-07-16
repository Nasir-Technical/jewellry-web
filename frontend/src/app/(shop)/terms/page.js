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

export default function TermsPage() {
    return (
        <ShopLayout className="py-20">
            <PageHeader
                title="Terms of"
                highlight="Service"
                description="Review the governing principles and legal framework of the Aurelia luxury experience."
            />
            <Container className="max-w-4xl">
                <LegalSection
                    title="Acceptance of Terms"
                    content={[
                        "By accessing the Aurelia digital platform, you agree to be bound by these refined conditions of use and all applicable international laws.",
                        "Aurelia reserves the right to modify these terms at any time to reflect the evolving nature of our boutique services."
                    ]}
                />
                <LegalSection
                    title="Intellectual Property"
                    content={[
                        "All designs, imagery, and literature found on this platform are the exclusive intellectual property of Aurelia.",
                        "Unauthorized reproduction or distribution of our artistry is strictly prohibited and subject to legal recourse."
                    ]}
                />
                <LegalSection
                    title="Bespoke Orders"
                    content={[
                        "Custom consultations and bespoke piece creation are subject to individual agreements signed at the time of commission.",
                        "Variations in organic materials, such as gems and metals, contribute to the unique narrative of each piece."
                    ]}
                />
            </Container>
        </ShopLayout>
    );
}
