"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@/components/ui";

export default function DealerApplicationForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        businessName: "",
        ownerName: "",
        email: "",
        phone: "",
        country: "",
        businessType: "",
        taxId: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission logic
        console.log("Wholesale Application Submitted:", formData);
        router.push("/wholesale/register/success");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-gold-900/5 p-8 md:p-12 border border-gold-500/10 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                    label="Business Name"
                    name="businessName"
                    placeholder="Aurelia Partners Ltd."
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Owner/Representative Name"
                    name="ownerName"
                    placeholder="Jane Doe"
                    value={formData.ownerName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                    label="Business Email"
                    name="email"
                    type="email"
                    placeholder="partners@business.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                    label="Country"
                    name="country"
                    placeholder="United Kingdom"
                    value={formData.country}
                    onChange={handleChange}
                    required
                />
                <Input
                    label="Business Type"
                    name="businessType"
                    placeholder="Retailer / Boutique"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                />
            </div>

            <Input
                label="Tax ID / VAT Number"
                name="taxId"
                placeholder="GB123456789"
                value={formData.taxId}
                onChange={handleChange}
                required
            />

            <div className="w-full">
                <label className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gold-100/60">Professional Inquiry / Message</label>
                <textarea
                    name="message"
                    className="w-full border-b border-gold-500/30 bg-transparent py-3 text-xs tracking-widest text-white outline-none transition-colors placeholder:text-gold-900/40 focus:border-gold-500 min-h-[120px] resize-none"
                    placeholder="Tell us about your boutique..."
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <Button type="submit" variant="primary" className="w-full">Submit Partnership Application</Button>
        </form>
    );
}
