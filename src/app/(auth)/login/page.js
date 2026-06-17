"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Input, Card, CardHeader, CardBody, CardFooter } from "@/components/ui";
import AuthLayout from "@/components/layout/AuthLayout";

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            setError("Please fill in all fields");
            return;
        }
        // Mock validation
        console.log("Login attempt:", formData);
    };

    return (
        <AuthLayout>
            <Card className="border-gold-500/10 bg-black/40 backdrop-blur-xl">
                <CardHeader className="text-center">
                    <h1 className="text-2xl font-serif tracking-[0.2em] text-white uppercase">Welcome Back</h1>
                    <p className="mt-2 text-[10px] uppercase tracking-widest text-gold-500/60">Sign in to your luxury experience</p>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            error={error && !formData.email ? error : ""}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            error={error && !formData.password ? error : ""}
                            rightElement={
                                <Link href="/forgot-password" title="Forgot Password?" className="text-[9px] uppercase tracking-widest text-gold-500 hover:text-white transition-colors">
                                    Forgot?
                                </Link>
                            }
                        />
                        <Button type="submit" variant="primary" className="w-full mt-4">
                            Sign In
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="text-center flex flex-col space-y-4">
                    <p className="text-[10px] uppercase tracking-widest text-gold-900/60">
                        Don't have an account?{" "}
                        <Link href="/signup" title="Create Account" className="text-gold-500 hover:text-white transition-colors">
                            Create one
                        </Link>
                    </p>
                    <div className="pt-4 border-t border-gold-500/10">
                        <Link href="/wholesale" title="Wholesale Access" className="text-[9px] uppercase tracking-[0.2em] text-gold-500/40 hover:text-gold-500 transition-colors">
                            Wholesale Partner Access
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </AuthLayout>
    );
}
