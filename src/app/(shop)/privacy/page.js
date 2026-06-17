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

export default function PrivacyPage() {
    return (
        <ShopLayout className="py-20">
            <PageHeader
                title="Privacy"
                highlight="Policy"
                description="Aurelia's commitment to the security and confidentiality of our esteemed clientele's personal information."
            />
            <Container className="max-w-4xl">
                <LegalSection
                    title="Data Collection"
                    content={[
                        "At Aurelia, we collect only essential information required to provide our bespoke services and facilitate secure transactions.",
                        "This includes identifiers such as name, contact details, and preferences shared during your experience with us."
                    ]}
                />
                <LegalSection
                    title="Information Usage"
                    content={[
                        "Your data is used exclusively to process orders, enhance your personalized shopping experience, and communicate exclusive arrivals.",
                        "We do not disclose, trade, or share your private information with third parties for marketing purposes."
                    ]}
                />
                <LegalSection
                    title="Security Protocols"
                    content={[
                        "We implement advanced encryption and security measures to protect your digital identity and financial data.",
                        "Periodic audits are conducted to ensure our systems remain a impenetrable vault for your personal information."
                    ]}
                />
            </Container>
        </ShopLayout>
    );
}
