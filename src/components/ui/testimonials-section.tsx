"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GridPattern } from '@/components/ui/grid-pattern';

type Testimonial = {
    name: string;
    role: string;
    image: string;
    company: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300',
        name: 'David Chen',
        role: 'Growth Lead',
        company: 'TechFlow',
        quote: "Our meta ads were burning cash. AdCoach diagnosed the issue in 5 minutes. ROI jumped 3x in week one."
    },
    {
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300',
        name: 'Marcus Thorne',
        role: 'Founder',
        company: 'DTC Brands',
        quote: "I thought my creative was good. The AI proved me wrong and generated 5 variations that absolutely crushed it."
    },
    {
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300',
        name: 'Elena Rodriguez',
        role: 'CMO',
        company: 'StyleVibe',
        quote: "We scaled from $10k to $150k/month in ad spend without hiring an agency. The data clarity is insane."
    },
    {
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300',
        name: 'Sarah Kim',
        role: 'Ecom Manager',
        company: 'RetailPlus',
        quote: "Finally, a tool that speaks plain English. 'Fix this headline' is way better than a raw CSV export."
    },
    {
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300',
        name: 'James Wilson',
        role: 'VP Marketing',
        company: 'NexusCorp',
        quote: "The cross-platform view saved my team 10 hours a week. We monitor TikTok and Google in one glance."
    },
    {
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300',
        name: 'Michael Ross',
        role: 'Owner',
        company: 'Ross Media',
        quote: "I use this for all 15 of my clients. It catches budget bleed before I do. Indispensable."
    },
    {
        image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=300',
        name: 'Robert Fox',
        role: 'Founder',
        company: 'SaaSify',
        quote: "CAC dropped by 40% after implementing the audience suggestions. The AI just knows."
    },
    {
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300',
        name: 'William Turner',
        role: 'Director',
        company: 'GrowthLabs',
        quote: "It's like having a senior media buyer watching your account 24/7. Peace of mind is priceless."
    },
    {
        image: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=300',
        name: 'Emily Davis',
        role: 'Brand Manager',
        company: 'LuxeLiving',
        quote: "The video generation feature allows us to test 20 hooks a day. Our winning creative ratio doubled."
    },
    {
        image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300',
        name: 'Lisa Wong',
        role: 'Founder',
        company: 'StartUp Inc',
        quote: "I was about to give up on ads. AdCoach showed me that my landing page was the issue, not the ads."
    },
    {
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300',
        name: 'Jessica Lee',
        role: 'Marketing Lead',
        company: 'TrendSetters',
        quote: "Search ads were a black box until now. The keyword negations it suggested saved us thousands."
    },
    {
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300',
        name: 'Amanda Brown',
        role: 'Creator',
        company: 'SocialBoost',
        quote: "Boosting my organic posts with AdCoach is seamless. ROI is tracking 250% higher than Boost Post."
    },
    {
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300',
        name: 'James Carter',
        role: 'Freelancer',
        company: 'DigitalPro',
        quote: "I manage 5 small accounts and this tool saves me 15 hours a week. The automated reports are a lifesaver."
    },
    {
        image: 'https://images.unsplash.com/photo-1517423568366-697552ffbc78?q=80&w=300',
        name: 'Sarah Jenkins',
        role: 'Owner',
        company: 'FitLife',
        quote: "My costs per lead dropped 50% after following the audience recommendations. Incredible value."
    },
    {
        image: 'https://images.unsplash.com/photo-1534030347209-7147fd9e7fb6?q=80&w=300',
        name: 'Tom Reynolds',
        role: 'Founder',
        company: 'TechVision',
        quote: "We were flying blind before. Now we have granular visibility into every creative's performance."
    }
];

export function TestimonialsSection() {
    return (
        <section className="relative w-full pt-10 pb-20 px-4">
            <div aria-hidden className="absolute inset-0 isolate z-0 contain-strict opacity-30">
                <div className="bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)] absolute top-0 left-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full" />
                <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 [translate:5%_-50%] -rotate-45 rounded-full" />
                <div className="bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] absolute top-0 left-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full" />
            </div>
            <div className="mx-auto max-w-5xl space-y-12">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Real Results, Real Voices
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl font-sans">
                        See how businesses are thriving with AdCoach — real stories, real
                        impact, real growth.
                    </p>
                </div>
                <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map(({ name, role, company, quote, image }, index) => (
                        <motion.div
                            initial={{ translateY: 10, opacity: 0 }}
                            whileInView={{
                                translateY: 0,
                                opacity: 1,
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            key={index}
                            className="group border border-white/5 bg-zinc-900/40 relative flex flex-col gap-4 overflow-hidden p-6 rounded-2xl hover:bg-zinc-900/60 transition-colors duration-300 hover:border-white/10 shadow-lg"
                        >
                            <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="from-white/5 to-white/0 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                                    <GridPattern
                                        width={25}
                                        height={25}
                                        x={-12}
                                        y={4}
                                        strokeDasharray="3"
                                        className="stroke-white/20 absolute inset-0 h-full w-full mix-blend-overlay"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center gap-3 relative z-10">
                                <img
                                    alt={name}
                                    src={image}
                                    loading="lazy"
                                    className="size-10 rounded-full object-cover border border-white/10"
                                />
                                <div className="flex flex-col">
                                    <p className="text-base text-white font-semibold font-display">{name}</p>
                                    <span className="text-white/40 text-xs tracking-wide uppercase font-medium">
                                        {role} @ {company}
                                    </span>
                                </div>
                            </div>

                            <blockquote className="relative z-10">
                                <p className="text-white/80 text-base font-sans leading-relaxed tracking-normal">
                                    "{quote}"
                                </p>
                            </blockquote>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
