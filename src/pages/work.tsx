import Head from "next/head";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";


const projects = [
    {
        id: "01",
        title: "Botanical Echoes",
        category: "E-Commerce Architecture",
        desc: "A high-fidelity digital storefront built on a headless infrastructure, achieving 18ms latency and a flawless 100% Lighthouse score.",
        color: "bg-[#e5e1dc]",
        imagePlaceholder: true
    },
    {
        id: "02",
        title: "Aura Dynamics",
        category: "Enterprise System",
        desc: "Transforming legacy internal dashboards into a real-time responsive web application utilizing custom data streaming protocols.",
        color: "bg-[#dcdcdd]",
        imagePlaceholder: true
    },
    {
        id: "03",
        title: "Nexus Banking",
        category: "Fintech Platform",
        desc: "A secure, banking-grade visual interface leveraging zero-layout-shift techniques for uninterrupted user data intake.",
        color: "bg-[#e8e9e4]",
        imagePlaceholder: true
    }
];

export default function Work() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const ctx = gsap.context(() => {
            gsap.fromTo(".page-header",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
            );

            gsap.fromTo(".project-card",
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "expo.out", delay: 0.4 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <Head>
                <title>Our Work | 7pixels Digital Agency</title>
            </Head>
            <Cursor />
            <Header />
            <main ref={containerRef} className="min-h-[100dvh] relative font-sans w-full max-w-[100vw] overflow-x-hidden bg-cream pt-32 pb-24 border-b border-brandBlue/10">
                {/* Background grid */}
                <div className="absolute inset-0 receipt-edge opacity-5 pointer-events-none" style={{ backgroundSize: '60px 60px' }} />

                <div className="w-full max-w-7xl mx-auto px-4 md:px-16 relative z-10">

                    <header className="page-header mb-24 border-b border-brandBlue/10 pb-12 relative">
                        <div className="flex gap-4 items-center mb-6">
                            <div className="w-2 h-2 rounded-full bg-brandBlue animate-pulse"></div>
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-brandBlue/60">System Registry</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl text-brandBlue tracking-tight mb-6">Built to Outperform.</h1>
                        <p className="font-sans text-xl text-brandBlue/70 max-w-2xl font-light leading-relaxed">
                            A curated selection of digital architectures crafted entirely scratch. Zero templates, maximum conversion physics.
                        </p>
                    </header>

                    <div className="flex flex-col gap-32">
                        {projects.map((proj) => (
                            <div key={proj.id} className="project-card group cursor-pointer w-full flex flex-col md:flex-row items-center gap-12 md:gap-24 relative">
                                {/* Decorator node */}
                                <div className="hidden md:flex absolute -left-12 top-1/2 flex-col items-center gap-2 transform -translate-y-1/2">
                                    <span className="font-mono text-[10px] text-brandBlue/40 block -rotate-90 origin-center translate-y-8">NODE_EXEC</span>
                                    <div className="w-[1px] h-32 bg-brandBlue/10"></div>
                                </div>

                                {/* Image Preview */}
                                <div className="w-full md:w-3/5 aspect-[4/3] md:aspect-[16/10] overflow-hidden organic-border border border-brandBlue/20 relative shadow-2xl transition-all duration-700 ease-out group-hover:shadow-[0_40px_80px_-20px_rgba(27,63,85,0.2)]">
                                    {/* Placeholder solid background, replaces image */}
                                    <div className={`absolute inset-0 w-full h-full ${proj.color} transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105 flex items-center justify-center p-8`}>
                                        {/* Wireframe Placeholder lines */}
                                        <div className="w-full h-full border border-brandBlue/10 rounded overflow-hidden flex flex-col pointer-events-none">
                                            <div className="h-8 border-b border-brandBlue/10 flex items-center px-4 gap-2">
                                                <div className="w-2 h-2 rounded-full border border-brandBlue/20"></div>
                                            </div>
                                            <div className="flex-1 flex p-4 gap-4">
                                                <div className="w-1/3 h-full border border-brandBlue/5 border-dashed"></div>
                                                <div className="w-2/3 h-full border border-brandBlue/5 border-dashed flex flex-col gap-4">
                                                    <div className="h-1/2 w-full border border-brandBlue/5 border-dashed"></div>
                                                    <div className="h-1/2 w-full border border-brandBlue/5 border-dashed"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover overlay text */}
                                    <div className="absolute inset-0 bg-brandBlue/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <span className="font-mono text-sm tracking-[0.2em] uppercase text-cream border border-cream/30 px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            Initialize Preview
                                        </span>
                                    </div>
                                </div>

                                {/* Text Details */}
                                <div className="w-full md:w-2/5 flex flex-col items-start relative z-10 transition-transform duration-700 ease-out group-hover:translate-x-4">
                                    <span className="font-serif text-8xl md:text-9xl text-brandBlue opacity-5 absolute -top-16 -left-12 pointer-events-none italic">
                                        {proj.id}
                                    </span>
                                    <div className="mb-4 inline-block border-b border-brandBlue/20 pb-2 relative z-10">
                                        <span className="font-mono text-xs tracking-widest uppercase text-brandBlue/60">{proj.category}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif text-brandBlue mb-6 leading-tight tracking-tight relative z-10">
                                        {proj.title}
                                    </h2>
                                    <p className="font-sans text-lg text-brandBlue/80 leading-relaxed font-light mb-8 relative z-10">
                                        {proj.desc}
                                    </p>
                                    <button className="flex items-center gap-4 text-brandBlue font-mono text-xs uppercase tracking-widest group/btn border border-brandBlue/20 px-6 py-3 rounded-full hover:bg-brandBlue hover:text-cream transition-all duration-300">
                                        <span>Read Setup Protocol</span>
                                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
