import Head from "next/head";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";


const pricingTiers = [
    {
        name: "Foundation",
        desc: "Essential digital architecture for growing brands.",
        price: "$4,500",
        features: ["Custom Next.js Frontend", "Tailwind Design System", "Basic GSAP Animations", "CMS Integration", "Standard Support"]
    },
    {
        name: "Enterprise System",
        desc: "High-performance ecosystem with complex data flows.",
        price: "$12,000",
        features: ["Headless Architecture", "Advanced Frame Animations", "E-commerce Routing", "Custom Webhooks", "Priority Engineering"]
    },
    {
        name: "Retainer Protocol",
        desc: "Ongoing structural improvements and feature injections.",
        price: "Custom",
        features: ["A/B Conversion Testing", "Latency Optimization", "Monthly Refactoring", "Dedicated SRE", "24/7 Monitoring"]
    }
];

export default function Pricing() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const ctx = gsap.context(() => {
            gsap.fromTo(".pricing-header",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
            );

            gsap.fromTo(".pricing-card",
                { opacity: 0, scale: 0.95, y: 50 },
                { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.2)", delay: 0.5 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <Head>
                <title>Pricing Matrix | 7pixels Digital Agency</title>
            </Head>
            <Cursor />
            <Header />
            <main ref={containerRef} className="min-h-[100dvh] relative font-sans w-full max-w-[100vw] overflow-x-hidden bg-cream pt-32 pb-24 border-b border-brandBlue/10">
                {/* Background grid */}
                <div className="absolute inset-0 receipt-edge opacity-5 pointer-events-none" style={{ backgroundSize: '60px 60px' }} />

                <div className="w-full max-w-7xl mx-auto px-4 md:px-16 relative z-10">

                    <header className="pricing-header mb-16 md:mb-24 flex flex-col items-center text-center">
                        <div className="flex gap-4 items-center mb-6 border-b border-brandBlue/20 pb-2 px-6">
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brandBlue/60">Investment Protocol</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl text-brandBlue tracking-tight mb-8">
                            Transparent Architecture.
                        </h1>
                        <p className="font-sans text-xl text-brandBlue/70 max-w-2xl font-light leading-relaxed">
                            No hidden dependencies. We provide clear, structured investment metrics for engineering your custom digital ecosystem.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
                        {/* Connecting background line */}
                        <div className="hidden md:block absolute top-[45%] left-0 w-full h-[1px] bg-brandBlue/10 z-0"></div>

                        {pricingTiers.map((tier, idx) => (
                            <div key={idx} className="pricing-card group relative z-10 bg-cream border border-brandBlue/20 p-8 flex flex-col organic-border shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(27,63,85,0.15)] transition-all duration-500 hover:-translate-y-2">

                                {/* Top corner screw visual */}
                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full border border-brandBlue/30 flex items-center justify-center">
                                    <div className="w-[1px] h-full bg-brandBlue/30 rotate-45"></div>
                                </div>

                                <div className="mb-8">
                                    <h3 className="font-serif text-2xl text-brandBlue mb-2">{tier.name}</h3>
                                    <p className="font-sans text-sm text-brandBlue/60 font-light h-10">{tier.desc}</p>
                                </div>

                                <div className="mb-8 border-b border-brandBlue/10 pb-8 flex items-baseline gap-2 text-brandBlue">
                                    <span className="font-mono text-4xl md:text-5xl">{tier.price}</span>
                                    {tier.price !== "Custom" && <span className="font-mono text-xs text-brandBlue/40 uppercase tracking-widest">/ Project</span>}
                                </div>

                                <ul className="flex flex-col gap-4 mb-10 flex-1">
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex gap-3 items-start font-sans text-sm text-brandBlue/80">
                                            <svg className="w-4 h-4 text-brandBlue mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/contact" className="w-full py-4 text-center border border-brandBlue text-brandBlue font-mono text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-brandBlue hover:text-cream transition-colors duration-300">
                                    Initialize Matrix
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
