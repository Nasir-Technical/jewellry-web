"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Input, Card, CardHeader, CardBody, CardFooter } from "@/components/ui";
import AuthLayout from "@/components/layout/AuthLayout";

export default function SignupPage() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            setError("Please fill in all fields");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        // Mock registration
        console.log("Signup attempt:", formData);
    };

    return (
        <AuthLayout>
            <Card className="border-gold-500/10 bg-black/40 backdrop-blur-xl">
                <CardHeader className="text-center">
                    <h1 className="text-2xl font-serif tracking-[0.2em] text-white uppercase">Join Aurelia</h1>
                    <p className="mt-2 text-[10px] uppercase tracking-widest text-gold-500/60">Enter the world of luxury jewelry</p>
                </CardHeader>
                <CardBody>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="Full Name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <Input
                            label="Confirm Password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            error={error}
                        />
                        <Button type="submit" variant="primary" className="w-full mt-4">
                            Create Account
                        </Button>
                    </form>
                </CardBody>
                <CardFooter className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-gold-900/60">
                        Already have an account?{" "}
                        <Link href="/login" title="Sign In" className="text-gold-500 hover:text-white transition-colors">
                            Sign In
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </AuthLayout>
    );
}
