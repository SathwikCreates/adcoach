"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Magnetic } from "@/components/ui/magnetic";
import { HeroSection } from "@/components/ui/hero-section-with-smooth-bg-shader";

// Zod Schema
const signupSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

type SignupValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupValues>({
        resolver: zodResolver(signupSchema),
    });

    const onSubmit = async (data: SignupValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Signup Data:", data);
        setIsSubmitting(false);
        // Redirect to dashboard or home (simulated)
        router.push("/");
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Shader - Reusing styling from Home for consistency */}
            <div className="absolute inset-0 z-0">
                <HeroSection
                    title=""
                    highlightText=""
                    description=""
                    buttonClassName="hidden"
                    colors={["#2e1065", "#7e22ce", "#be185d", "#831843", "#4c1d95", "#db2777"]} // Dark Lavender & Pink Gradient
                    speed={0.2}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-full max-w-md mx-auto p-4"
            >
                <div className="bg-zinc-950 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black ring-1 ring-white/5 relative overflow-hidden">
                    {/* Top Highlight Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

                    <div className="text-center mb-8 relative z-10">
                        <h1 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Create Account</h1>
                        <p className="text-zinc-400 text-sm font-medium">
                            Join thousands of marketers scaling with AdCoach.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                        <div className="space-y-4">
                            {/* Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-zinc-300 text-xs uppercase tracking-wider font-bold">Full Name</Label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    disabled={isSubmitting}
                                    {...register("name")}
                                    className="bg-black/50 border-white/10 text-white placeholder:text-zinc-600 focus:bg-black focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all duration-300 h-12 font-medium"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs font-semibold">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-zinc-300 text-xs uppercase tracking-wider font-bold">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@company.com"
                                    disabled={isSubmitting}
                                    {...register("email")}
                                    className="bg-black/50 border-white/10 text-white placeholder:text-zinc-600 focus:bg-black focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all duration-300 h-12 font-medium"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-xs font-semibold">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-zinc-300 text-xs uppercase tracking-wider font-bold">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    disabled={isSubmitting}
                                    {...register("password")}
                                    className="bg-black/50 border-white/10 text-white placeholder:text-zinc-600 focus:bg-black focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all duration-300 h-12 font-medium"
                                />
                                {errors.password && (
                                    <p className="text-red-400 text-xs font-semibold">{errors.password.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="pt-2 flex justify-center">
                            <Magnetic>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full h-12 bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-wider text-sm transition-all shadow-lg shadow-white/5 border-0"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Account...
                                        </>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Get Started <ArrowRight className="w-4 h-4" />
                                        </span>
                                    )}
                                </Button>
                            </Magnetic>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-white/40 text-xs">
                            Already have an account?{" "}
                            <Link href="/login" className="text-white hover:underline">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
