"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    // Spotlight Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Parallax Logic
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Header moves slightly faster/slower to create depth
    const headerY = useTransform(scrollYProgress, [0, 1], [0, -20]);

    return (
        <div
            ref={ref}
            className={cn(
                "row-span-1 rounded-3xl group/bento hover:shadow-2xl transition duration-300 shadow-none p-6 bg-zinc-900 border border-white/10 flex flex-col space-y-4 relative overflow-hidden min-h-[22rem]",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/bento:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                          800px circle at ${mouseX}px ${mouseY}px,
                          rgba(255,255,255,0.05),
                          transparent 80%
                        )
                    `,
                }}
            />
            <div className="relative z-10 h-full flex flex-col">
                <motion.div style={{ y: headerY }} className="transition-transform duration-200 ease-out flex-1">
                    {header}
                </motion.div>
                <div className="transition duration-200 mt-6 relative z-20">
                    <div className="mb-2 w-fit rounded-lg p-2 bg-white/5 border border-white/5 text-zinc-300">
                        {icon}
                    </div>
                    <div className="font-heading font-semibold text-zinc-100 text-lg mb-2 mt-2 font-display tracking-tight">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-zinc-400 text-sm leading-relaxed">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};
