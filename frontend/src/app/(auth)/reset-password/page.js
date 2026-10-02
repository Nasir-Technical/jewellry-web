"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Input, Card, CardHeader, CardBody, CardFooter } from "@/components/ui";
import AuthLayout from "@/components/layout/AuthLayout";

export default function ResetPasswordPage() {
    const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.password) {
            setError("Please enter a new password");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setError("");
        setIsSuccess(true);
    };

    return (
        <AuthLayout>
            <Card className="border-gold-500/10 bg-black/40 backdrop-blur-xl">
                <CardHeader className="text-center">
                    <h1 className="text-2xl font-serif tracking-[0.2em] text-white uppercase">New Password</h1>
                    <p className="mt-2 text-[10px] uppercase tracking-widest text-gold-500/60">Set your new luxury vault key</p>
                </CardHeader>
                <CardBody>
                    {!isSuccess ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input
                                label="New Password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <Input
                                label="Confirm New Password"
                                type="password"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                error={error}
                            />
                            <Button type="submit" variant="primary" className="w-full mt-4">
                                Update Password
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-sm tracking-widest text-white leading-relaxed mb-6">
                                Your password has been successfully updated.
                            </p>
                            <Button href="/login" variant="primary" className="w-full">
                                Sign In Now
                            </Button>
                        </div>
                    )}
                </CardBody>
            </Card>
        </AuthLayout>
    );
}
