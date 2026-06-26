import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const services = [
    { id: 1, title: 'Blueprint / Launch', desc: 'Architecting the flawless digital foundation. Structuring data and laying down the first components.', icon: '\u25A1' },
    { id: 2, title: 'Scale / Grow', desc: 'Expanding server limits and brand reach. We systematically construct pipelines for user acquisition.', icon: '\u25B3' },
    { id: 3, title: 'Refactor / Transform', desc: 'Deconstructing legacy systems and rebuilding them into high-performance, modern frameworks.', icon: '\u25CB' },
    { id: 4, title: 'Iterate / Refine', desc: 'Deploying continuous integration. Polishing micro-interactions and reinforcing security protocols.', icon: '\u25CA' },
];

export default function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray('.service-item') as HTMLElement[];

            const horizontalTween = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => "+=" + scrollWrapperRef.current?.offsetWidth
                }
            });

            // Text fade in
            sections.forEach((section: HTMLElement) => {
                const textWrapper = section.querySelector('.text-wrapper');
                gsap.fromTo(textWrapper,
                    { opacity: 0, y: 30, filter: 'blur(10px)' },
                    {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 1,
                        scrollTrigger: {
                            trigger: section,
                            containerAnimation: horizontalTween,
                            start: 'left center', // start animating when the left side of the section hits center of viewport
                        }
                    }
                );
            });

            // Icon rotations
            sections.forEach((section: HTMLElement) => {
                const icon = section.querySelector('.service-icon');
                gsap.to(icon, {
                    rotate: 360,
                    scrollTrigger: {
                        trigger: section,
                        containerAnimation: horizontalTween,
                        scrub: 1,
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="h-[100dvh] w-full bg-[#fcfbfa] overflow-hidden flex flex-col justify-center border-b border-brandBlue/10 relative">

            {/* Background architectural lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-between px-10">
                <div className="w-[1px] h-full bg-brandBlue"></div>
                <div className="w-[1px] h-full bg-brandBlue"></div>
                <div className="w-[1px] h-full bg-brandBlue bg-dashed"></div>
            </div>

            <div className="absolute top-8 md:top-12 left-6 md:left-24 z-10 flex items-center gap-4 md:gap-6">
                <div className="w-12 h-[1px] bg-brandBlue/40"></div>
                <h2 className="text-xl tracking-[0.3em] font-sans text-brandBlue/80 uppercase font-light">Our Philosophy</h2>
            </div>

            <div ref={scrollWrapperRef} className="flex relative w-[400vw] h-full items-center">
                {services.map((service, index) => (
                    <div key={service.id} className="service-item w-screen flex flex-col md:flex-row items-center justify-center h-full px-8 md:px-24 gap-12 md:gap-32 relative">

                        {/* Huge background number */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif text-brandBlue opacity-5 font-bold pointer-events-none italic z-0">
                            0{service.id}
                        </div>

                        {/* Visual Node */}
                        <div className="relative w-48 h-48 sm:w-80 sm:h-80 border border-brandBlue/30 flex items-center justify-center p-4 bg-white/50 backdrop-blur-sm shadow-xl organic-border shrink-0 z-10 overflow-hidden">
                            <div className="absolute top-2 left-3 font-mono text-[9px] text-brandBlue/40 uppercase tracking-widest">
                                Node_{index + 1}
                            </div>

                            <div className="w-[90%] h-[90%] border border-brandBlue/20 organic-border flex items-center justify-center">
                                <span className="service-icon text-7xl font-light text-brandBlue/20">{service.icon}</span>
                            </div>
                        </div>

                        {/* Text Block */}
                        <div className="text-wrapper max-w-xl z-10 relative">
                            <div className="mb-6 inline-block border-b border-brandBlue/20 pb-2">
                                <span className="font-mono text-sm tracking-widest uppercase text-brandBlue/60">Stage // 0{service.id}</span>
                            </div>
                            <h3 className="text-4xl md:text-6xl font-serif text-brandBlue mb-8 leading-tight tracking-tight">
                                {service.title}
                            </h3>
                            <p className="font-sans text-xl text-brandBlue/80 leading-relaxed font-light">
                                {service.desc}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            {/* Scroll Indication */}
            <div className="absolute bottom-12 right-24 hidden md:flex items-center gap-4 text-brandBlue/50 text-xs font-mono uppercase tracking-widest">
                <span>Hold shift & scroll</span>
                <div className="w-12 h-[1px] bg-brandBlue/30"></div>
                <span>Or swipe left</span>
            </div>
        </section>
    );
}
