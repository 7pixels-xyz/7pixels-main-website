import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { useAudio } from '@/context/AudioContext';

const services = ["web architecture", "e-commerce logic", "digital systems"];

const MagneticButton = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 }); // 0.3 is the pull strength
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="group relative px-8 py-4 bg-brandBlue text-cream rounded-full font-mono text-xs uppercase tracking-[0.2em] overflow-hidden flex items-center gap-4 transition-colors hover:bg-brandBlue/90 shadow-2xl shadow-brandBlue/20"
        >
            <span className="relative z-10">{children}</span>
            <div className="w-6 h-6 rounded-full bg-cream/10 flex items-center justify-center relative z-10 group-hover:bg-cream/20 transition-colors">
                <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </div>

            {/* Magnetic background flare */}
            <motion.div
                className="absolute w-12 h-12 bg-cream/20 rounded-full blur-xl pointer-events-none"
                animate={{ x: position.x * 2, y: position.y * 2 }}
                transition={{ type: "spring", stiffness: 100 }}
            />
        </motion.button>
    );
};

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [serviceIndex, setServiceIndex] = useState(0);
    const [typedCode, setTypedCode] = useState('');
    const { isPlaying, togglePlay } = useAudio();

    const fullCodeString = "export const Build = {\n  latency: '<50ms',\n  templates: 0,\n  fidelity: 'highest'\n};";

    // Service Scrambler Interval
    useEffect(() => {
        const interval = setInterval(() => {
            setServiceIndex((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Living Syntax Block Typer
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedCode(fullCodeString.slice(0, index));
            index++;
            if (index > fullCodeString.length + 30) {
                index = 0; // Reset after a pause
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const ctx = gsap.context(() => {
            // Entry animation for structural pieces
            gsap.fromTo('.struct-piece',
                { opacity: 0, y: 30, scale: 0.98 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    stagger: 0.1,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: 0.2
                }
            );

            // Subtle continuous floating
            gsap.to('.struct-float', {
                y: -15,
                duration: 3,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                stagger: 0.5
            });

            // Parallax effect on scroll
            gsap.to('.struct-parallax', {
                y: -100,
                rotate: 2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '+=100%',
                    scrub: 0.5,
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="min-h-[100dvh] w-full relative overflow-hidden bg-cream border-b border-brandBlue/10 flex flex-col pt-24 md:pt-32 pb-8">

            {/* Background grid */}
            <div className="absolute inset-0 receipt-edge opacity-5 pointer-events-none" style={{ backgroundSize: '60px 60px' }} />

            {/* Typography Section (Top) */}
            <div className="z-30 w-full px-4 md:px-24 mb-4 flex flex-col md:flex-row justify-between items-start gap-8 pointer-events-auto shrink-0 md:pb-8 relative mt-0 md:mt-2">
                <div className="max-w-4xl shrink">
                    <h1 className="struct-piece font-serif text-4xl md:text-7xl lg:text-[5rem] tracking-tight text-brandBlue leading-[1.05] mb-6">
                        You deserve more than a drag-and-drop template.
                    </h1>
                    <div className="struct-piece flex flex-col gap-8 items-start">
                        <p className="font-sans text-lg md:text-xl text-brandBlue/70 leading-relaxed font-light flex flex-wrap gap-2">
                            <span>We craft custom</span>
                            <span className="font-serif italic text-brandBlue inline-block w-[240px]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={serviceIndex}
                                        initial={{ opacity: 0, y: 10, filter: 'blur(5px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, y: -10, filter: 'blur(5px)' }}
                                        transition={{ duration: 0.4 }}
                                        className="inline-block"
                                    >
                                        {services[serviceIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                            <span>that scales.</span>
                        </p>

                        {/* Magnetic CTA */}
                        <Link href="/contact">
                            <MagneticButton>Initialize Project</MagneticButton>
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex md:w-1/4 pt-4 shrink-0 flex-col gap-6 items-end text-right">

                    {/* Old Style Music Player Widget */}
                    <div className="border border-brandBlue/30 bg-[#f4eff3] p-4 flex flex-col gap-3 mr-2 shadow-[4px_4px_0_0_rgba(27,63,85,0.1)] w-full max-w-[200px]">
                        <div className="flex justify-between items-center border-b border-brandBlue/20 pb-2">
                            <span className="font-mono text-[9px] uppercase tracking-widest text-brandBlue/70">Audio Deck v1.0</span>
                            <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                            {/* Graphic spinning record/tape */}
                            <div className={`w-8 h-8 rounded-full border-2 border-brandBlue/40 flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
                                <div className="w-2 h-2 rounded-full bg-brandBlue/80"></div>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="font-serif text-sm text-brandBlue italic">L. Boccherini</span>
                                <span className="font-mono text-[8px] uppercase tracking-widest text-brandBlue/50">String Quintet</span>
                            </div>
                        </div>
                        <button
                            onClick={togglePlay}
                            className="mt-2 w-full py-1.5 border border-brandBlue/30 hover:bg-brandBlue hover:text-cream transition-colors font-mono text-[9px] uppercase tracking-[0.2em] text-brandBlue flex justify-center items-center gap-2"
                        >
                            {isPlaying ? (
                                <><span>||</span> PAUSE</>
                            ) : (
                                <><span>▶</span> PLAY</>
                            )}
                        </button>
                    </div>

                    <div className="flex flex-col items-end mt-4">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brandBlue/40">
                            System Integrity: 100%
                        </p>
                        <div className="h-[1px] w-full max-w-[150px] bg-brandBlue/20 mt-6"></div>
                    </div>
                </div>
            </div>

            {/* Architect Workspace Section */}
            <div className="relative flex-1 w-full flex items-center justify-center pointer-events-none pb-12 mt-8 md:mt-0 px-4 md:px-0">

                <div className="struct-parallax w-[100%] md:w-[85%] max-w-7xl relative flex items-center justify-center pointer-events-auto mt-4 md:mt-0 pt-6 md:pt-0">

                    {/* The Giant Monitor */}
                    <div className="struct-piece z-20 w-full md:w-[70%] h-[50vh] md:h-[55vh] lg:h-[70vh] border border-brandBlue/30 bg-cream/90 backdrop-blur-md rounded-xl shadow-[0_20px_60px_rgba(27,63,85,0.08)] relative flex flex-col organic-border overflow-hidden group">

                        {/* Monitor Top bar */}
                        <div className="w-full h-10 border-b border-brandBlue/20 flex items-center px-6 justify-between bg-white/30 shrink-0">
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-brandBlue/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-brandBlue/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full border border-brandBlue/40"></div>
                            </div>
                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-brandBlue/40">Canvas_01.tsx</span>
                        </div>

                        {/* Monitor Content */}
                        <div className="flex-1 w-full relative bg-[#fcfbfa] flex items-center justify-center p-4">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--brand-blue)_1px,transparent_1px)] [background-size:20px_20px]" />
                            <div className="w-full h-full relative">
                                <Image
                                    src="/img3_drawing.png"
                                    alt="Digital Architecture wireframe"
                                    fill
                                    className="object-contain mix-blend-multiply opacity-90 scale-[1.1] md:scale-[1.3] pt-4"
                                    priority
                                />
                            </div>

                            {/* Interactive Tooltip 1 - Hidden on mobile to prevent overflow/distraction */}
                            <div className="absolute top-[35%] left-[25%] opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 cursor-none z-30 group/tooltip hidden md:block">
                                <div className="w-3 h-3 bg-brandBlue rounded-full animate-pulse"></div>
                                <div className="absolute top-4 -left-20 w-48 bg-white/90 backdrop-blur-md border border-brandBlue/20 p-4 rounded-md shadow-xl opacity-0 md:group-hover/tooltip:opacity-100 transition-all duration-300 transform scale-95 md:group-hover/tooltip:scale-100 origin-top-left pointer-events-none">
                                    <p className="font-mono text-[9px] uppercase tracking-widest text-brandBlue/60 mb-2 border-b border-brandBlue/10 pb-1">Layout Node</p>
                                    <p className="font-sans text-xs text-brandBlue">Zero layout shift skeleton pre-rendered organically.</p>
                                </div>
                            </div>

                            {/* Interactive Tooltip 2 - Hidden on mobile */}
                            <div className="absolute bottom-[40%] right-[30%] opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-300 cursor-none z-30 group/tooltip hidden md:block">
                                <div className="w-3 h-3 bg-brandBlue rounded-full animate-pulse"></div>
                                <div className="absolute bottom-4 -right-20 w-48 bg-white/90 backdrop-blur-md border border-brandBlue/20 p-4 rounded-md shadow-xl opacity-0 md:group-hover/tooltip:opacity-100 transition-all duration-300 transform scale-95 md:group-hover/tooltip:scale-100 origin-bottom-right pointer-events-none">
                                    <p className="font-mono text-[9px] uppercase tracking-widest text-brandBlue/60 mb-2 border-b border-brandBlue/10 pb-1">Data Hook</p>
                                    <p className="font-sans text-xs text-brandBlue">Asynchronous module injection for maximum runtime speed.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Living Syntax Block Floating Left */}
                    <div className="struct-piece struct-float absolute left-2 md:left-8 top-1/3 md:top-1/4 z-30 w-56 md:w-64 border border-brandBlue/30 bg-[#1b3f55] bg-opacity-95 backdrop-blur-md p-5 rounded-lg shadow-2xl organic-border md:block transform -rotate-2 group pointer-events-none">
                        <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-2">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-cream opacity-60">{"// schema.ts"}</span>
                            <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                            </div>
                        </div>
                        <div className="h-[80px] w-full">
                            <pre className="font-mono text-[10px] sm:text-xs text-cream opacity-90 whitespace-pre">
                                {typedCode}
                                <span className="animate-pulse inline-block w-1.5 h-3 bg-cream opacity-80 ml-1 translate-y-0.5"></span>
                            </pre>
                        </div>
                    </div>

                    {/* Nodes line connecting elements */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-10 hidden md:block" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 10 50 Q 50 10 90 50" stroke="var(--brand-blue)" fill="transparent" strokeWidth="1" strokeDasharray="5,5" />
                        <line x1="20%" y1="30%" x2="40%" y2="60%" stroke="var(--brand-blue)" strokeWidth="1" />
                        <circle cx="20%" cy="30%" r="3" fill="var(--brand-blue)" />
                        <circle cx="40%" cy="60%" r="4" fill="var(--brand-blue)" />

                        <line x1="80%" y1="20%" x2="60%" y2="50%" stroke="var(--brand-blue)" strokeWidth="1" />
                        <circle cx="80%" cy="20%" r="3" fill="var(--brand-blue)" />
                        <circle cx="60%" cy="50%" r="4" fill="var(--brand-blue)" />
                    </svg>
                </div>
            </div>

            {/* Marquee System Status Trust Bar */}
            <div className="absolute bottom-0 left-0 w-full h-8 bg-[#1b3f55] border-t border-brandBlue flex items-center overflow-hidden z-40">
                <motion.div
                    className="flex whitespace-nowrap text-cream/80 font-mono text-[10px] uppercase tracking-[0.3em]"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                >
                    <div className="flex gap-16 px-8 items-center">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div> SYSTEM STATUS: ONLINE</span>
                        <span>AVG LATENCY: 24ms</span>
                        <span>DEPLOYMENTS: 100+ CRAFTED</span>
                        <span>QUALITY: ZERO TEMPLATES</span>
                        <span>RUNTIME: FLAWLESS</span>
                    </div>
                    {/* Duplicate for seamless infinite loop */}
                    <div className="flex gap-16 px-8 items-center">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div> SYSTEM STATUS: ONLINE</span>
                        <span>AVG LATENCY: 24ms</span>
                        <span>DEPLOYMENTS: 100+ CRAFTED</span>
                        <span>QUALITY: ZERO TEMPLATES</span>
                        <span>RUNTIME: FLAWLESS</span>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
