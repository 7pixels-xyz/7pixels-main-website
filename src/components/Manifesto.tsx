import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const text1Ref = useRef<HTMLHeadingElement>(null);
    const text2Ref = useRef<HTMLHeadingElement>(null);
    const text3Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=200%',
                    pin: true,
                    scrub: 1,
                }
            });

            // Text 1 fades in and out
            tl.fromTo(text1Ref.current,
                { opacity: 0, y: 50, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }
            )
                .to(text1Ref.current, { opacity: 0, y: -50, filter: 'blur(10px)', duration: 1 })

                // Text 2 fades in and out
                .fromTo(text2Ref.current,
                    { opacity: 0, y: 50, filter: 'blur(10px)' },
                    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }
                )
                .to(text2Ref.current, { opacity: 0, y: -50, filter: 'blur(10px)', duration: 1 })

                // Text 3 fades in and stays
                .fromTo(text3Ref.current,
                    { opacity: 0, y: 50, filter: 'blur(10px)' },
                    { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1 }
                );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-screen bg-[#1c2226] text-cream relative flex flex-col justify-center items-center px-4 md:px-24 overflow-hidden">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

            <div className="absolute top-12 left-12 flex items-center gap-4 opacity-50">
                <span className="w-2 h-2 rounded-full bg-cream animate-pulse"></span>
                <span className="font-mono text-xs tracking-widest uppercase">System Narrative</span>
            </div>

            <div className="relative w-full max-w-5xl h-[40vh] flex justify-center items-center">
                <h2 ref={text1Ref} className="absolute text-3xl md:text-6xl lg:text-7xl font-serif text-center leading-tight tracking-tight px-4 opacity-0">
                    You didn&apos;t come here for a <span className="italic text-cream/50">template.</span>
                </h2>

                <h2 ref={text2Ref} className="absolute text-3xl md:text-6xl lg:text-7xl font-serif text-center leading-tight tracking-tight px-4 opacity-0">
                    You&apos;re tired of digital noise and <span className="italic text-cream/50">slow execution.</span>
                </h2>

                <h2 ref={text3Ref} className="absolute text-3xl md:text-6xl lg:text-7xl font-serif text-center leading-tight tracking-tight px-4 opacity-0">
                    You need an architecture that <span className="border-b border-cream pb-2">scales.</span>
                </h2>
            </div>
        </section>
    );
}
