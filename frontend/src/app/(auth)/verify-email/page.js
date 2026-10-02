"use client";

import Link from "next/link";
import { Button, Card, CardHeader, CardBody, CardFooter } from "@/components/ui";
import AuthLayout from "@/components/layout/AuthLayout";

export default function VerifyEmailPage() {
    return (
        <AuthLayout>
            <Card className="border-gold-500/10 bg-black/40 backdrop-blur-xl">
                <CardHeader className="text-center">
                    <h1 className="text-2xl font-serif tracking-[0.2em] text-white uppercase">Verify Identity</h1>
                    <p className="mt-2 text-[10px] uppercase tracking-widest text-gold-500/60">Confirm your email to enter Aurelia</p>
                </CardHeader>
                <CardBody className="text-center py-8">
                    <div className="mb-8 flex justify-center">
                        <div className="h-16 w-16 rounded-full border border-gold-500/20 flex items-center justify-center">
                            <div className="h-8 w-8 rounded-full bg-gold-500 animate-pulse" />
                        </div>
                    </div>
                    <p className="text-sm tracking-widest text-white leading-relaxed">
                        We&apos;ve sent a verification link to your inbox. Please follow the instructions to activate your account.
                    </p>
                </CardBody>
                <CardFooter className="text-center flex flex-col space-y-4">
                    <Button variant="primary" className="w-full">
                        Resend Email
                    </Button>
                    <Link href="/login" title="Back to Login" className="text-[10px] uppercase tracking-widest text-gold-900/60 hover:text-gold-500 transition-colors">
                        Back to Sign In
                    </Link>
                </CardFooter>
            </Card>
        </AuthLayout>
    );
}
