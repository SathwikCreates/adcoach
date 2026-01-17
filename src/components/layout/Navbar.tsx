"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Platform", href: "/" },
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* Desktop: Floating Pill (Hidden on Mobile) */}
            <header className="fixed top-6 left-0 right-0 z-50 justify-center items-center pointer-events-none hidden md:flex">
                <nav className="pointer-events-auto flex items-center gap-1 bg-black/50 border border-white/10 rounded-full p-1 shadow-lg backdrop-blur-xl">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "relative px-6 py-2 text-sm font-medium transition-colors rounded-full",
                                    isActive
                                        ? "text-white"
                                        : "text-white/60 hover:text-white"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="bubble"
                                        className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop Logo */}
                <div className="absolute left-8 top-2 pointer-events-auto">
                    <Link href="/" className="text-xl font-bold tracking-tight text-white/90 hover:text-white transition-colors font-display">
                        AdCoach
                    </Link>
                </div>

                {/* Desktop Get Started */}
                <div className="absolute right-8 top-0 pointer-events-auto">
                    <Link
                        href="/pricing"
                        className="inline-flex h-10 items-center justify-center rounded-full bg-white px-6 font-medium text-neutral-900 transition-colors hover:bg-neutral-200"
                    >
                        Get Started
                    </Link>
                </div>
            </header>

            {/* Mobile: Top Bar (Logo + Hamburger) */}
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:hidden pointer-events-auto bg-gradient-to-b from-black/80 to-transparent">
                <Link href="/" className="text-xl font-bold tracking-tight text-white font-display">
                    AdCoach
                </Link>
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 text-white/80 hover:text-white bg-white/5 rounded-full backdrop-blur-md border border-white/10"
                >
                    <Menu className="w-6 h-6" />
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col p-6 md:hidden"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-xl font-bold text-white font-display">AdCoach</span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-white/80 hover:text-white bg-white/5 rounded-full border border-white/10"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "text-2xl font-medium transition-colors",
                                        pathname === link.href ? "text-white" : "text-white/50"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="w-full h-px bg-white/10 my-4" />
                            <Link
                                href="/pricing"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-full py-4 rounded-xl bg-white text-center text-black font-bold text-lg"
                            >
                                Get Started
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
