"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Delay showing to not overwhelm immediate load
            const timer = setTimeout(() => setShowConsent(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "true");
        setShowConsent(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "false");
        setShowConsent(false);
    };

    return (
        <AnimatePresence>
            {showConsent && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 md:max-w-md w-full md:w-auto"
                >
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl ring-1 ring-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4">
                            <button onClick={handleDecline} className="text-white/40 hover:text-white transition-colors">
                                <X size={16} />
                                <span className="sr-only">Close</span>
                            </button>
                        </div>

                        <h3 className="text-white font-semibold text-lg mb-2">We use cookies</h3>

                        <p className="text-white/70 text-sm mb-6 leading-relaxed">
                            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                onClick={handleAccept}
                                className="bg-white text-black hover:bg-zinc-200 font-medium rounded-xl flex-1"
                            >
                                Accept
                            </Button>
                            <Button
                                onClick={handleDecline}
                                variant="outline"
                                className="border-white/10 text-white hover:bg-white/5 hover:text-white font-medium rounded-xl flex-1 bg-transparent"
                            >
                                Decline
                            </Button>
                        </div>

                        {/* Glossy overlay effect */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
