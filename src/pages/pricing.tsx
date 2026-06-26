import SEO from "@/components/SEO";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";


const pricingTiers = [
    {
        name: "Basic",
        desc: "For businesses that just need a professional online presence.",
        price: "₹4,000+",
        disclaimer: "Base layout estimate. Flexible based on scope.",
        features: ["Complete responsive website", "Mobile optimization", "Contact form", "WhatsApp button", "Domain setup assistance", "Hosting included", "Standard SEO Configuration", "2 weeks free revisions"],
        retainer: "After 2 weeks: Pay-as-you-go ₹700 / change",
        isPopular: false
    },
    {
        name: "Pro",
        desc: "Everything in Basic — built to bring leads in, not just look good.",
        price: "₹6,000+",
        disclaimer: "Base layout estimate. Flexible based on scope.",
        features: ["Includes Basic Configuration", "Newsletter setup", "Booking / appointment system", "Google Maps integration", "Priority support", "Weekly strategy call (2 mo)", "2 months free revisions"],
        retainer: "After 2 months: Website Care Plan ₹1,500/mo",
        isPopular: true
    },
    {
        name: "Advanced",
        desc: "A complete growth engine — not just a site, a system.",
        price: "₹8,000+",
        disclaimer: "Growth architecture estimate. Flexible based on scope.",
        features: ["Includes Pro Configuration", "Full SEO setup & Keyword research", "Google Business Profile optimization", "Speed architecture optimization", "Competitor analysis", "Monthly performance report", "3 months support"],
        retainer: "After 3 months: Website Care Plan ₹1,500/mo",
        isPopular: false
    },
    {
        name: "Custom Info",
        desc: "For unique functional requirements and intensive architectures.",
        price: "Custom",
        disclaimer: "Variable based on technical scope.",
        features: ["Bespoke Web App Development", "Advanced Backend Systems", "Complex E-Commerce routing", "3D WebGL / Interactive Canvas", "Dedicated Engineering Support"],
        retainer: "Dedicated SRE & Scaling Management",
        isPopular: false
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
            <SEO title="Pricing Matrix | 7pixels Digital Agency" description="Transparent architecture. No hidden dependencies. View our custom digital ecosystem investment metrics." />
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 xl:gap-8 relative">
                        {/* Connecting background line */}
                        <div className="hidden md:block absolute top-[45%] left-0 w-full h-[1px] bg-brandBlue/10 z-0"></div>

                        {pricingTiers.map((tier, idx) => (
                            <div key={idx} className={`pricing-card group relative z-10 bg-cream border p-6 xl:p-8 flex flex-col organic-border shadow-xl hover:shadow-[0_30px_60px_-15px_rgba(27,63,85,0.15)] transition-all duration-500 hover:-translate-y-2 ${tier.isPopular ? 'border-brandBlue shadow-[0_0_40px_rgba(27,63,85,0.1)] -translate-y-2' : 'border-brandBlue/20'}`}>

                                {tier.isPopular && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[1px] bg-brandBlue text-cream font-mono text-[9px] uppercase tracking-[0.2em] px-4 py-1.5 organic-border shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6 mt-4">
                                    <h3 className="font-serif text-2xl text-brandBlue mb-2">{tier.name}</h3>
                                    <p className="font-sans text-xs xl:text-sm text-brandBlue/60 font-light h-12 leading-relaxed">{tier.desc}</p>
                                </div>

                                <div className="mb-6 border-b border-brandBlue/10 pb-6 flex flex-col items-start text-brandBlue">
                                    <span className="font-mono text-3xl lg:text-3xl xl:text-4xl">{tier.price}</span>
                                    <span className="font-sans text-xs italic text-brandBlue/50 mt-1">{tier.disclaimer}</span>
                                </div>

                                <ul className="flex flex-col gap-3 mb-8 flex-1">
                                    {tier.features.map((feature, fIdx) => (
                                        <li key={fIdx} className={`flex gap-3 items-start font-sans text-sm text-brandBlue/80 ${feature.includes("Includes") ? 'font-medium pb-2 border-b border-brandBlue/5' : ''}`}>
                                            <svg className="w-4 h-4 text-brandBlue mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="leading-snug text-xs xl:text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mb-6 bg-brandBlue/5 p-4 rounded-sm border border-brandBlue/10">
                                    <span className="font-mono text-[9px] uppercase tracking-widest text-brandBlue/40 block mb-1">Post-Launch Support</span>
                                    <span className="font-sans text-xs text-brandBlue font-medium">{tier.retainer}</span>
                                </div>

                                <Link href="/contact" className="w-full py-4 text-center border border-brandBlue text-brandBlue font-mono text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-brandBlue hover:text-cream transition-colors duration-300 bg-cream/50 backdrop-blur-sm relative z-20">
                                    Initialize Build
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
