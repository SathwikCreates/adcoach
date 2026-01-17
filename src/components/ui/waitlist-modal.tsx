"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { triggerConfetti } from "@/components/ui/easter-egg-listener";

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            triggerConfetti(); // Celebrate!
            // Close modal automatically after a few seconds of delight
            setTimeout(() => {
                onClose();
                setStatus("idle");
                setEmail("");
            }, 3000);
        }, 1500);
    };

    if (!isOpen) return null;

    // Portal logic can be added here if needed, but for now specific placement in page or layout is fine. 
    // Ideally we use a Portal (body) to avoid z-index issues, similar to PricingModal.
    // I will write it to use Portal immediately since we learned that lesson with PricingModal.

    return (
        <WaitlistPortal>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-10"
                            >
                                <X size={16} />
                            </button>

                            <div className="p-8 flex flex-col items-center text-center">
                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-8 flex flex-col items-center"
                                    >
                                        <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 ring-1 ring-emerald-500/20">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
                                        <p className="text-zinc-400 max-w-xs">
                                            Keep an eye on your inbox. We'll verify your spot shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 ring-1 ring-white/10">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h3>
                                        <p className="text-zinc-400 mb-8 max-w-xs">
                                            Be the first to know when we launch AI-driven autonomy features.
                                        </p>

                                        <form onSubmit={handleSubmit} className="w-full space-y-4">
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="name@company.com"
                                                    required
                                                    disabled={status === "loading"}
                                                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 pl-11 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all disabled:opacity-50"
                                                />
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="w-full bg-white text-black hover:bg-zinc-200 font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                                            >
                                                {status === "loading" ? (
                                                    <span className="flex items-center gap-2">
                                                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                        Joining...
                                                    </span>
                                                ) : (
                                                    <>
                                                        Join Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                        <p className="mt-4 text-xs text-zinc-600">
                                            No spam. Unsubscribe anytime.
                                        </p>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </WaitlistPortal>
    );
};

// Simple Portal wrapper
import { createPortal } from "react-dom";
import { useEffect } from "react";

const WaitlistPortal = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return createPortal(children, document.body);
};
