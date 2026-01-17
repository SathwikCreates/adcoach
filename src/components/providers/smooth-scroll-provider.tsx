"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.35,        // "Goldilocks" zone: Smooth but not heavy
                duration: 0.75,    // Snappy
                smoothWheel: true,
                wheelMultiplier: 1.2 // Covers more pages per scroll (feels faster)
            }}
        >
            {children as any}
        </ReactLenis>
    );
}
