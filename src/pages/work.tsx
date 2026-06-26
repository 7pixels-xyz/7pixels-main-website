import Head from "next/head";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type ProjectInfo = {
    id: string;
    title: string;
    desc: string;
    color: string;
    isDark?: boolean;
};

type MuseumCategory = {
    id: string;
    label: string;
    projects: ProjectInfo[];
};

const museumCategories: MuseumCategory[] = [
    {
        id: "interior",
        label: "Interior Design",
        projects: [
            {
                id: "INT-01",
                title: "Urban Nest",
                desc: "Cinematic architecture portfolio with WebGL depth-sorting layers.",
                color: "bg-[#e5e1dc]",
            },
            {
                id: "INT-02",
                title: "Aura Dynamics",
                desc: "High-end spatial layout rendering engine capturing minimalist scale.",
                color: "bg-[#dcdcdd]",
            }
        ]
    },
    {
        id: "dentists",
        label: "Dentists",
        projects: [
            {
                id: "DNT-01",
                title: "Smile Architecture",
                desc: "Trust-centric geometric layouts for premium regional clinics.",
                color: "bg-[#e8e9e4]",
            }
        ]
    },
    {
        id: "tattoo",
        label: "Tattoo Artists",
        projects: [
            {
                id: "TAT-01",
                title: "Ink & Iron",
                desc: "Dark-mode, high-contrast visual portfolio bridging physical art to digital.",
                color: "bg-[#1c2226]",
                isDark: true
            }
        ]
    },
    {
        id: "creators",
        label: "Creators",
        projects: [
            {
                id: "CRT-01",
                title: "Creator Engine",
                desc: "Personality-driven routing structures maximizing audience conversion parameters.",
                color: "bg-[#f4efe8]",
            }
        ]
    },
    {
        id: "portfolios",
        label: "Portfolios",
        projects: [
            {
                id: "PRT-01",
                title: "Minimal Protocol",
                desc: "Strictly architectural bento-box layouts highlighting uncompressed visual data.",
                color: "bg-[#dcdcdd]",
            }
        ]
    }
];

export default function Work() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {

            // Foyer text cinematic entry
            gsap.fromTo(".foyer-word",
                { opacity: 0, scale: 1.05, y: 30 },
                { opacity: 1, scale: 1, y: 0, duration: 1.8, stagger: 0.15, ease: "power4.out", delay: 0.1 }
            );

            // Stagger individual rooms appearing
            gsap.utils.toArray<HTMLElement>(".project-card").forEach((card) => {
                gsap.fromTo(card,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1, y: 0,
                        duration: 1.2,
                        ease: "expo.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom-=50",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Sticky nav highlighting via ScrollTrigger
            museumCategories.forEach((cat) => {
                ScrollTrigger.create({
                    trigger: `#section-${cat.id}`,
                    start: "top center+=100",
                    end: "bottom center-=100",
                    toggleClass: { targets: `#nav-${cat.id}`, className: "active-nav-item" }
                });
            });

        }, containerRef);
        return () => {
            ScrollTrigger.killAll(); // ensure multiple navigations don't ghost triggers
            ctx.revert();
        };
    }, []);

    return (
        <>
            <Head>
                <title>The Museum Library | 7pixels Digital Agency</title>
            </Head>
            <Cursor />
            <Header />
            <main ref={containerRef} className="min-h-[100dvh] relative font-sans w-full max-w-[100vw] overflow-x-hidden bg-cream pt-32 pb-48 border-b border-brandBlue/10">
                {/* Background grid */}
                <div className="absolute inset-0 receipt-edge opacity-5 pointer-events-none" style={{ backgroundSize: '60px 60px' }} />

                {/* The Foyer */}
                <div className="w-full min-h-[50vh] md:min-h-[70vh] flex flex-col justify-center items-center relative z-10 px-4 mb-24 md:mb-32">
                    <div className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none text-brandBlue tracking-tighter text-center overflow-hidden flex flex-wrap justify-center gap-2 md:gap-4">
                        <span className="foyer-word inline-block origin-bottom">The</span>
                        <span className="foyer-word inline-block origin-bottom">Museum</span>
                        <span className="foyer-word inline-block origin-bottom">Library.</span>
                    </div>
                    <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-brandBlue/50 mt-12 foyer-word text-center">
                        Curated Structural Configurations / 2026 Archive
                    </p>
                </div>

                {/* The Museum Floor */}
                <div className="museum-floor w-full max-w-7xl mx-auto px-4 md:px-16 flex flex-col relative z-10">

                    <div className="flex flex-col md:flex-row w-full relative">

                        {/* Left Column: Sticky Index */}
                        <div className="w-full md:w-1/3 relative z-20 hidden md:block">
                            <div className="flex flex-col sticky top-40 gap-5 pr-12">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/40 border-b border-brandBlue/10 pb-4 mb-4">Exhibition Index</span>
                                {museumCategories.map((cat) => (
                                    <a href={`#section-${cat.id}`} key={`nav-${cat.id}`} id={`nav-${cat.id}`} className="font-serif text-xl lg:text-2xl text-brandBlue/30 hover:text-brandBlue/70 transition-all duration-500 transform origin-left">
                                        {cat.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Exhibits */}
                        <div className="w-full md:w-2/3 flex flex-col">
                            {museumCategories.map((cat) => (
                                <div id={`section-${cat.id}`} key={cat.id} className="mb-32 md:mb-64 flex flex-col gap-16 md:gap-32 w-full">

                                    {/* Mobile category header (hidden on pure desktop) */}
                                    <h2 className="font-serif text-4xl text-brandBlue border-b border-brandBlue/10 pb-4 md:hidden">{cat.label}</h2>

                                    {cat.projects.map((proj) => (
                                        <div key={proj.id} className="project-card group cursor-pointer w-full flex flex-col items-start gap-8 relative border border-brandBlue/10 p-4 md:p-8 bg-white/20 backdrop-blur-sm organic-border hover:bg-white/40 transition-colors duration-500 shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(27,63,85,0.1)]">

                                            {/* Decorative Corner */}
                                            <div className="absolute top-4 right-4 w-2 h-2 rounded-full border border-brandBlue/30 flex items-center justify-center opacity-50">
                                                <div className="w-[1px] h-full bg-brandBlue/30 rotate-45"></div>
                                            </div>

                                            {/* Image Preview Window */}
                                            <div className={`w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden organic-border relative ${proj.color} flex items-center justify-center transform -rotate-1 group-hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]`}>

                                                {/* Textual 'Image' representation for cinematic wireframe aesthetic */}
                                                <span className={`font-serif text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight transform group-hover:scale-105 transition-transform duration-1000 ${proj.isDark ? 'text-cream/10' : 'text-brandBlue/10'}`}>
                                                    {proj.title}
                                                </span>

                                                {/* Wireframe overlay to maintain digital architect theme */}
                                                <div className="absolute inset-0 border border-brandBlue/5 m-4 pointer-events-none"></div>
                                                <div className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-widest opacity-20 pointer-events-none">Visual Render 1.0</div>
                                            </div>

                                            {/* Plaque / Text Details */}
                                            <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-end border-t border-brandBlue/10 pt-6 gap-6 md:gap-0">
                                                <div className="flex flex-col w-full md:w-3/4">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <span className="font-mono text-[9px] bg-brandBlue text-cream px-2 py-0.5 rounded-sm uppercase tracking-wider">{proj.id}</span>
                                                        <span className="font-mono text-[9px] uppercase tracking-widest text-brandBlue/40">Execution Protocol</span>
                                                    </div>
                                                    <h3 className="font-serif text-3xl text-brandBlue">{proj.title}</h3>
                                                    <p className="font-sans text-brandBlue/70 text-sm md:text-md mt-2 max-w-sm leading-relaxed">{proj.desc}</p>
                                                </div>
                                                <button className="flex justify-center items-center w-full md:w-auto font-mono text-[10px] uppercase tracking-widest border border-brandBlue/20 px-6 py-3 hover:bg-brandBlue hover:text-white rounded-full transition-colors duration-300">
                                                    Observe
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </main>
            <Footer />

            <style jsx global>{`
                .active-nav-item {
                    color: var(--brand-blue) !important;
                    opacity: 1 !important;
                    transform: scale(1.05) translateX(10px) !important;
                    text-shadow: 0 4px 20px rgba(27,63,85, 0.1);
                }
            `}</style>
        </>
    );
}
