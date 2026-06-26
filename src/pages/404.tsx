import SEO from "@/components/SEO";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from 'next/link';

export default function Custom404() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const ctx = gsap.context(() => {
            gsap.fromTo(".error-stagger",
                { opacity: 0, y: 30, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
            );

            // Subtle, continuous glitch effect on the massive 404 typography
            gsap.to(".glitch-text", {
                x: () => Math.random() * 4 - 2,
                y: () => Math.random() * 4 - 2,
                opacity: () => Math.random() * 0.3 + 0.7, // Fluctuate opacity between 0.7 and 1.0
                duration: 0.1,
                repeat: -1,
                repeatRefresh: true,
                ease: "none"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <SEO title="Node Offline | 7pixels Digital Agency" description="The architectural path you specified does not exist in the current layout." />

            <Cursor />
            <Header />

            {/* Hyper-minimalist isolated matrix view */}
            <main ref={containerRef} className="min-h-[100dvh] relative font-sans w-full flex items-center justify-center overflow-hidden bg-cream border-brandBlue/10">

                {/* Background drafting grid */}
                <div className="absolute inset-0 receipt-edge opacity-5 pointer-events-none" style={{ backgroundSize: '60px 60px' }} />

                {/* Technical targeting overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="var(--brand-blue)" strokeWidth="1" strokeDasharray="10,10" />
                        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="var(--brand-blue)" strokeWidth="1" strokeDasharray="10,10" />
                    </svg>
                </div>

                <div className="z-10 flex flex-col items-center text-center px-4 max-w-2xl mt-12 md:mt-0">

                    {/* Error Terminal Block */}
                    <div className="error-stagger inline-flex items-center gap-4 border border-red-500/30 bg-red-500/5 px-6 py-2 rounded-full mb-8">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-red-500">Critical Pipeline Failure</span>
                    </div>

                    {/* Massive Graphic Typography */}
                    <h1 className="error-stagger glitch-text font-serif text-[10rem] md:text-[15rem] leading-none text-brandBlue/10 tracking-tighter mb-4 select-none relative">
                        404
                    </h1>

                    <h2 className="error-stagger font-sans text-2xl md:text-3xl text-brandBlue mb-4 font-light">
                        Requested Node Offline.
                    </h2>

                    <p className="error-stagger font-mono text-xs uppercase tracking-widest text-brandBlue/50 mb-12">
                        The architectural path you specified does not exist in the current layout.
                    </p>

                    {/* Return Action */}
                    <div className="error-stagger">
                        <Link href="/" className="group flex items-center justify-center gap-4 bg-brandBlue text-cream px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-brandBlue/90 transition-colors cursor-pointer shadow-[0_10px_30px_rgba(27,63,85,0.2)] hover:shadow-[0_10px_40px_rgba(27,63,85,0.3)]">
                            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Return to Base</span>
                        </Link>
                    </div>

                </div>
            </main>
        </>
    );
}
