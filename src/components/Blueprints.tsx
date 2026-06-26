import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const blueprints = [
    { id: 1, title: 'Your Website = Your World', img: '/img1_door.png', desc: 'Crafting immersive digital entranceways.' },
    { id: 2, title: 'Tactile Architecture', img: '/img2_hands.png', desc: 'High-fidelity wireframing and structure matching.' },
    { id: 3, title: 'E-Commerce & Service Nodes', img: '/img4_shops.png', desc: 'Specialized schemas for varied business logic.' },
    { id: 4, title: 'Continuous Deployment', img: '/img5_construction.png', desc: 'Constructing robust pipelines from draft to production.' },
];

export default function Blueprints() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo('.blueprint-card',
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 70%',
                    }
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-8 md:px-24 bg-cream border-t border-brandBlue/10 relative overflow-hidden">

            <div className="absolute inset-0 opacity-[0.02] pattern-diagonal-lines pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="max-w-2xl relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-brandBlue"></span>
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brandBlue/60">Creative Process</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif text-brandBlue tracking-tight leading-[1.1]">
                            Visualizing the Blueprint
                        </h2>
                    </div>
                    <p className="font-sans text-xl text-brandBlue/70 max-w-sm md:text-right font-light relative z-10 leading-relaxed">
                        Every scalable system begins with a visionary sketch. This is how we map out your digital infrastructure before a single line of code is written.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
                    {/* Architectural center line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-brandBlue/20 transform -translate-x-1/2"></div>

                    {blueprints.map((bp, i) => (
                        <div key={bp.id} className={`blueprint-card flex flex-col organic-border border border-brandBlue/20 bg-white/50 backdrop-blur-sm p-8 shadow-xl shadow-brandBlue/5 ${i % 2 !== 0 ? 'md:mt-32' : ''}`}>
                            <div className="w-full relative h-[40vh] md:h-[50vh] bg-[#fcfbfa] organic-border border border-brandBlue/10 flex items-center justify-center p-8 overflow-hidden group">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--brand-blue)_1px,transparent_1px)] [background-size:15px_15px]" />
                                <Image
                                    src={bp.img}
                                    alt={bp.title}
                                    fill
                                    className="object-contain p-4 mix-blend-multiply opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                                <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest uppercase text-brandBlue/30 bg-cream/80 px-2 py-1">Schema_0{i + 1}.draft</span>
                            </div>

                            <div className="mt-8 border-t border-brandBlue/10 pt-6">
                                <h3 className="font-serif text-3xl text-brandBlue mb-3">{bp.title}</h3>
                                <p className="font-sans text-brandBlue/70 font-light">{bp.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
