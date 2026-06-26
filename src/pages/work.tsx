import Head from "next/head";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type ProjectInfo = {
    id: string;
    title: string;
    desc: string;
};

type MuseumCategory = {
    id: string;
    label: string;
    tagline: string;
    color: string;
    isDark?: boolean;
    projects: ProjectInfo[];
};

const museumCategories: MuseumCategory[] = [
    {
        id: "interior",
        label: "Interior Design",
        tagline: "Spatial aesthetics & geometric layouts",
        color: "bg-[#e5e1dc]",
        projects: [
            { id: "INT-01", title: "Urban Nest", desc: "Cinematic architecture portfolio with WebGL depth-sorting layers." },
            { id: "INT-02", title: "Aura Dynamics", desc: "High-end spatial layout rendering engine capturing minimalist scale." },
            { id: "INT-03", title: "Studio V", desc: "Brutalist concrete-inspired layout for a premium NY agency." },
            { id: "INT-04", title: "Lumina Homes", desc: "Light-driven interaction models mapped to 3D interiors." },
            { id: "INT-05", title: "Echo Architects", desc: "Horizontal scroll matrix depicting physical floorplans." }
        ]
    },
    {
        id: "dentists",
        label: "Clinical & Dental",
        tagline: "Trust-centric patient interfaces",
        color: "bg-[#e8e9e4]",
        projects: [
            { id: "DNT-01", title: "Smile Architecture", desc: "Geometric layouts for premium regional clinics." },
            { id: "DNT-02", title: "Dr. Luminous", desc: "Appointment-driven conversion funnel in sterile white mode." },
            { id: "DNT-03", title: "Apex Dental", desc: "Orthodontic 3D modeling showcase for invisalign alternatives." },
            { id: "DNT-04", title: "Pure Veneers", desc: "High contrast luxury dental cosmetic portfolio." },
            { id: "DNT-05", title: "Nova Clinic", desc: "Responsive native app-like patient portal interface." }
        ]
    },
    {
        id: "tattoo",
        label: "Tattoo Artists",
        tagline: "Dark-mode, high-contrast visual galleries",
        color: "bg-[#1c2226]",
        isDark: true,
        projects: [
            { id: "TAT-01", title: "Ink & Iron", desc: "Dark-mode visual portfolio bridging physical art to digital." },
            { id: "TAT-02", title: "Void Studio", desc: "Pitch black aesthetic with scarlet hover states." },
            { id: "TAT-03", title: "Sacred Geometry", desc: "Line-art driven architectural SVG animations." },
            { id: "TAT-04", title: "Needle & Thread", desc: "Grunge-inspired WebGL texture masking." },
            { id: "TAT-05", title: "Blackwork Society", desc: "Minimalist grid of high-fidelity stencil scans." }
        ]
    },
    {
        id: "creators",
        label: "Digital Creators",
        tagline: "Personality-driven dynamic structures",
        color: "bg-[#f4efe8]",
        projects: [
            { id: "CRT-01", title: "Creator Engine", desc: "Routing structures maximizing audience conversion parameters." },
            { id: "CRT-02", title: "Vlog Matrix", desc: "YouTube API synced video carousel architecture." },
            { id: "CRT-03", title: "The Daily Post", desc: "Editorial-style masonry blog with infinite scroll." },
            { id: "CRT-04", title: "Stream Labs", desc: "Twitch-integrated live stats overlay dashboard." },
            { id: "CRT-05", title: "Influence Sync", desc: "Media kit automated PDF generation interface." }
        ]
    },
    {
        id: "portfolios",
        label: "SaaS & Tech",
        tagline: "Strictly architectural conversion systems",
        color: "bg-[#dcdcdd]",
        projects: [
            { id: "PRT-01", title: "Minimal Protocol", desc: "Strictly architectural bento-box layouts highlighting uncompressed visual data." },
            { id: "PRT-02", title: "DevFlow", desc: "Dark-mode documentation site with live code execution environments." },
            { id: "PRT-03", title: "Cloud Sync", desc: "Data visualization dashboard with real-time D3.js physics mapping." },
            { id: "PRT-04", title: "SaaS Boilerplate", desc: "High-converting single-page landing product with integrated Stripe checkout." },
            { id: "PRT-05", title: "Crypto Ledger", desc: "Secure Web3 connection interface with wallet integrations." }
        ]
    }
];

const CategoryModal = ({ category, onClose }: { category: MuseumCategory, onClose: () => void }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(modalRef.current,
                { y: "100vh" },
                { y: "0vh", duration: 1.2, ease: "expo.inOut" }
            );

            gsap.fromTo(".modal-header-elem",
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.8, stagger: 0.1, ease: "power3.out" }
            );

            gsap.fromTo(".modal-project",
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, delay: 1, stagger: 0.15, ease: "expo.out" }
            );
        }, modalRef);

        document.body.style.overflow = "hidden";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const w = window as any;
        if (typeof window !== 'undefined' && w.lenis) {
            w.lenis.stop();
        }

        return () => {
            document.body.style.overflow = "auto";
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const w = window as any;
            if (typeof window !== 'undefined' && w.lenis) {
                w.lenis.start();
            }
            ctx.revert();
        };
    }, []);

    const handleClose = () => {
        gsap.to(modalRef.current, {
            y: "100vh",
            duration: 1,
            ease: "expo.inOut",
            onComplete: onClose
        });
    };

    return (
        <div ref={modalRef} data-lenis-prevent="true" className={`fixed inset-0 z-[9999] ${category.color} overflow-y-auto overflow-x-hidden flex flex-col font-sans`}>
            {/* Modal Header */}
            <div className={`sticky top-0 w-full z-50 px-6 py-6 border-b flex justify-between items-center backdrop-blur-md bg-opacity-90 ${category.isDark ? 'border-cream/10 bg-[#1c2226]' : 'border-brandBlue/10 bg-[#e5e1dc]'}`}>
                <div className="flex flex-col">
                    <span className={`font-mono text-[10px] uppercase tracking-[0.3em] modal-header-elem ${category.isDark ? 'text-cream/50' : 'text-brandBlue/50'}`}>Exhibition Wing</span>
                    <h2 className={`font-serif text-3xl md:text-5xl modal-header-elem ${category.isDark ? 'text-cream' : 'text-brandBlue'}`}>{category.label}</h2>
                </div>

                <button
                    onClick={handleClose}
                    className={`modal-header-elem font-mono text-[10px] uppercase tracking-widest px-6 py-3 rounded-full border transition-colors duration-300 flex items-center gap-2
                        ${category.isDark ? 'border-cream/30 text-cream hover:bg-cream hover:text-[#1c2226]' : 'border-brandBlue/30 text-brandBlue hover:bg-brandBlue hover:text-cream'}
                    `}
                >
                    <span>Close Portal</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Modal Projects Grid */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32 flex flex-col gap-16 md:gap-32">
                {category.projects.map((proj) => (
                    <div key={proj.id} className="modal-project group flex flex-col md:flex-row gap-8 md:gap-16 items-center w-full relative">

                        {/* Decorative wire */}
                        <div className={`hidden md:block absolute left-[45%] top-1/2 w-32 h-[1px] transform -translate-y-1/2 ${category.isDark ? 'bg-cream/10' : 'bg-brandBlue/10'}`}></div>

                        <div className={`w-full md:w-1/2 aspect-[4/3] border organic-border relative overflow-hidden shadow-2xl flex items-center justify-center p-8 
                            ${category.isDark ? 'border-cream/20 bg-black/20' : 'border-brandBlue/20 bg-white/20'}`}>

                            {/* Inner architectural skeleton */}
                            <div className={`absolute inset-0 m-4 border pointer-events-none transition-transform duration-1000 group-hover:scale-95 ${category.isDark ? 'border-cream/10' : 'border-brandBlue/10'}`}></div>

                            <span className={`font-serif text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-center relative z-10 transition-transform duration-700 group-hover:scale-105 ${category.isDark ? 'text-cream/20' : 'text-brandBlue/20'}`}>
                                {proj.title}
                            </span>
                        </div>

                        <div className="w-full md:w-1/2 flex flex-col items-start relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`font-mono text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-wider ${category.isDark ? 'bg-cream text-[#1c2226]' : 'bg-brandBlue text-cream'}`}>{proj.id}</span>
                            </div>
                            <h3 className={`font-serif text-4xl md:text-5xl mb-4 ${category.isDark ? 'text-cream' : 'text-brandBlue'}`}>{proj.title}</h3>
                            <p className={`font-sans text-sm md:text-lg max-w-md leading-relaxed font-light mb-8 ${category.isDark ? 'text-cream/70' : 'text-brandBlue/70'}`}>{proj.desc}</p>

                            <button className={`font-mono text-[10px] uppercase tracking-[0.2em] relative overflow-hidden group/btn pb-2 ${category.isDark ? 'text-cream' : 'text-brandBlue'}`}>
                                <span className="relative z-10">Access Archive Data</span>
                                <div className={`absolute bottom-0 left-0 w-full h-[1px] transform origin-left transition-transform duration-300 group-hover/btn:scale-x-0 ${category.isDark ? 'bg-cream/50' : 'bg-brandBlue/50'}`}></div>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Footer spacing */}
            <div className="py-24 w-full flex justify-center">
                <div className={`w-[1px] h-32 ${category.isDark ? 'bg-cream/20' : 'bg-brandBlue/20'}`}></div>
            </div>
        </div>
    );
};

export default function Work() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState<MuseumCategory | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const ctx = gsap.context(() => {
            gsap.fromTo(".foyer-word",
                { opacity: 0, scale: 1.05, y: 30 },
                { opacity: 1, scale: 1, y: 0, duration: 1.8, stagger: 0.15, ease: "power4.out", delay: 0.1 }
            );

            gsap.fromTo(".museum-wing",
                { opacity: 0, scale: 0.95, y: 80 },
                { opacity: 1, scale: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "expo.out", delay: 0.8 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <Head>
                <title>The Museum Library | 7pixels Digital Agency</title>
            </Head>
            <Cursor />
            <Header />
            <main ref={containerRef} className="min-h-[100dvh] relative font-sans w-full max-w-[100vw] overflow-x-hidden bg-cream pt-32 pb-48 border-b border-brandBlue/10">
                <div className="absolute inset-0 receipt-edge opacity-5 pointer-events-none" style={{ backgroundSize: '60px 60px' }} />

                {/* The Foyer */}
                <div className="w-full min-h-[40vh] md:min-h-[60vh] flex flex-col justify-center items-center relative z-10 px-4 mb-16 md:mb-24">
                    <div className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none text-brandBlue tracking-tighter text-center overflow-hidden flex flex-wrap justify-center gap-2 md:gap-4">
                        <span className="foyer-word inline-block origin-bottom">The</span>
                        <span className="foyer-word inline-block origin-bottom">Museum</span>
                        <span className="foyer-word inline-block origin-bottom">Library.</span>
                    </div>
                    <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-brandBlue/50 mt-12 foyer-word text-center">
                        Select a wing below to browse specific visual architectures.
                    </p>
                </div>

                {/* Museum Wings Grid */}
                <div className="w-full max-w-7xl mx-auto px-4 md:px-16 relative z-10 flex flex-col">

                    {/* Masonry or staggered Grid for Categories */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
                        {museumCategories.map((cat, idx) => (
                            <div
                                key={cat.id}
                                onClick={() => setActiveCategory(cat)}
                                className={`museum-wing group cursor-pointer w-full aspect-[4/3] relative flex flex-col justify-between organic-border overflow-hidden p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2
                                    ${cat.color} ${cat.isDark ? 'text-cream shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]' : 'text-brandBlue shadow-[0_30px_60px_-15px_rgba(27,63,85,0.1)]'}
                                    ${idx === 0 ? 'md:col-span-2 aspect-[16/9] md:aspect-[21/9]' : ''}
                                `}
                            >
                                {/* Background wireframe effect on hover */}
                                <div className={`absolute inset-0 border border-transparent transition-colors duration-500 m-4 pointer-events-none ${cat.isDark ? 'group-hover:border-cream/10' : 'group-hover:border-brandBlue/10'}`}></div>

                                <div className="flex justify-between items-start relative z-10">
                                    <span className={`font-mono text-[10px] uppercase tracking-widest ${cat.isDark ? 'text-cream/50' : 'text-brandBlue/50'}`}>Wing 0{idx + 1}</span>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className={`font-mono text-[9px] uppercase tracking-[0.2em] ${cat.isDark ? 'text-cream/70' : 'text-brandBlue/70'}`}>Enter Portal</span>
                                        <div className={`w-2 h-2 rounded-full animate-pulse ${cat.isDark ? 'bg-cream' : 'bg-brandBlue'}`}></div>
                                    </div>
                                </div>

                                <div className="flex flex-col relative z-10 transition-transform duration-500 transform group-hover:translate-x-4">
                                    <h2 className={`font-serif text-4xl md:text-5xl lg:text-7xl tracking-tight mb-2 ${cat.isDark ? 'text-cream' : 'text-brandBlue'}`}>{cat.label}</h2>
                                    <p className={`font-sans text-sm md:text-lg font-light ${cat.isDark ? 'text-cream/70' : 'text-brandBlue/70'}`}>{cat.tagline}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
            <Footer />

            {/* Portal Overlay Renderer */}
            {activeCategory && <CategoryModal category={activeCategory} onClose={() => setActiveCategory(null)} />}
        </>
    );
}
