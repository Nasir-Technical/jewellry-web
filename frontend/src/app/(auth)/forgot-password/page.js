"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Input, Card, CardHeader, CardBody, CardFooter } from "@/components/ui";
import AuthLayout from "@/components/layout/AuthLayout";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
        }
    };

    return (
        <AuthLayout>
            <Card className="border-gold-500/10 bg-black/40 backdrop-blur-xl">
                <CardHeader className="text-center">
                    <h1 className="text-2xl font-serif tracking-[0.2em] text-white uppercase">Recovery</h1>
                    <p className="mt-2 text-[10px] uppercase tracking-widest text-gold-500/60">Restore your access to Aurelia</p>
                </CardHeader>
                <CardBody>
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input
                                label="Email Address"
                                type="email"
                                placeholder="Enter your registered email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button type="submit" variant="primary" className="w-full mt-4">
                                Send Reset Link
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-sm tracking-widest text-white leading-relaxed">
                                If an account exists for <span className="text-gold-500 font-bold">{email}</span>, you will receive reset instructions shortly.
                            </p>
                        </div>
                    )}
                </CardBody>
                <CardFooter className="text-center">
                    <Link href="/login" title="Back to Login" className="text-[10px] uppercase tracking-widest text-gold-500 hover:text-white transition-colors">
                        Back to Sign In
                    </Link>
                </CardFooter>
            </Card>
        </AuthLayout>
    );
}
