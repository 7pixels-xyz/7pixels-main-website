import Head from "next/head";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);
    const formContainerRef = useRef<HTMLDivElement>(null);
    const successRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);

    const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const ctx = gsap.context(() => {
            gsap.fromTo(".contact-stagger",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Start GSAP form transmission sequence
        setStatus('sending');

        const ctx = gsap.context(() => {
            // 1. Collapse the natural form
            gsap.to(formContainerRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: () => {
                    if (formContainerRef.current) formContainerRef.current.style.display = 'none';
                    if (successRef.current) successRef.current.style.display = 'flex';

                    // 2. Play digital transmission bar loading
                    gsap.fromTo(progressBarRef.current,
                        { width: '0%' },
                        {
                            width: '100%', duration: 1.5, ease: "power2.inOut", onComplete: () => {
                                // 3. Reveal final success mark
                                gsap.to(".transmission-text", { opacity: 0, duration: 0.3 });
                                gsap.to(progressBarRef.current, { opacity: 0, duration: 0.3 });

                                gsap.fromTo(".success-mark",
                                    { opacity: 0, scale: 0.5, y: 20 },
                                    { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "back.out(1.7)", delay: 0.3 }
                                );
                                setStatus('sent');
                            }
                        }
                    );
                }
            });
        }, containerRef);
    };

    return (
        <>
            <Head>
                <title>Initialize Contact | 7pixels Digital Agency</title>
            </Head>
            <Cursor />
            <Header />
            <main ref={containerRef} className="min-h-[100dvh] relative font-sans w-full max-w-[100vw] overflow-x-hidden bg-cream pt-32 pb-24 border-b border-brandBlue/10">
                {/* Background grid */}
                <div className="absolute inset-0 receipt-edge opacity-5 pointer-events-none" style={{ backgroundSize: '60px 60px' }} />

                <div className="w-full max-w-7xl mx-auto px-4 md:px-16 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Hero & Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                        <header className="contact-stagger mb-16">
                            <div className="flex gap-4 items-center mb-6 border-b border-brandBlue/20 pb-2 inline-flex pr-6">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-mono text-xs uppercase tracking-[0.3em] text-brandBlue/60">Secure Transmission</span>
                            </div>
                            <h1 className="font-serif text-5xl md:text-7xl text-brandBlue tracking-tight mb-8">
                                Let&apos;s Build<br />The Foundation.
                            </h1>
                            <p className="font-sans text-xl text-brandBlue/70 max-w-md font-light leading-relaxed">
                                Share your architectural constraints and system goals. We’ll design the blueprint.
                            </p>
                        </header>

                        {/* Contact Information & Socials */}
                        <div className="contact-stagger border-l border-brandBlue/20 pl-8 flex flex-col gap-8">
                            <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/40 mb-2">Primary Node</h4>
                                <a href="mailto:abhi@7pixels.xyz" className="font-serif text-2xl text-brandBlue hover:opacity-70 transition-opacity">
                                    abhi@7pixels.xyz
                                </a>
                            </div>
                            <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/40 mb-2 flex flex-col">
                                    Communications
                                    <span className="font-serif lowercase tracking-normal text-brandBlue/50 mt-1 italic">we work remotely</span>
                                </h4>
                                <a href="tel:+917087143455" className="font-serif text-2xl text-brandBlue hover:opacity-70 transition-opacity">
                                    +91 7087143455
                                </a>

                                {/* WhatsApp Button Integration */}
                                <div className="mt-4">
                                    <a
                                        href="https://api.whatsapp.com/send?phone=917087143455&text=Hey%207pixels%2C%20I%20would%20love%20to%20discuss%20a%20new%20digital%20architecture%20project!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-widest hover:scale-105 transition-transform shadow-md"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                        Direct WhatsApp Access
                                    </a>
                                </div>
                            </div>

                            {/* Socials */}
                            <div className="mt-8 pt-8 border-t border-brandBlue/10 flex gap-6">
                                <a href="https://instagram.com/7pixels.xyz" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 hover:text-brandBlue transition-colors group relative">
                                    Instagram
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brandBlue group-hover:w-full transition-all duration-300"></span>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 hover:text-brandBlue transition-colors group relative">
                                    LinkedIn
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brandBlue group-hover:w-full transition-all duration-300"></span>
                                </a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 hover:text-brandBlue transition-colors group relative">
                                    Twitter
                                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brandBlue group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form Engineering */}
                    <div className="contact-stagger w-full lg:w-1/2 relative min-h-[500px]">

                        {/* Dynamic Success UI */}
                        <div ref={successRef} className="absolute inset-0 hidden flex-col items-center justify-center bg-white/50 backdrop-blur-xl border border-brandBlue/20 organic-border p-8 z-20">

                            {/* Transmission text - hidden after load */}
                            <span className="transmission-text font-mono text-xs uppercase tracking-widest text-brandBlue mb-4">
                                Handshaking Protocol...
                            </span>

                            {/* Loading Bar */}
                            <div className="w-full max-w-[200px] h-1 bg-brandBlue/10 rounded-full overflow-hidden mb-8 relative">
                                <div ref={progressBarRef} className="absolute top-0 left-0 h-full bg-brandBlue"></div>
                            </div>

                            {/* Final Success state */}
                            <div className="success-mark opacity-0 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="font-serif text-3xl text-brandBlue mb-2">Transmission Secure.</h3>
                                <p className="font-sans text-brandBlue/60 uppercase tracking-widest text-[10px] font-mono">Our team will establish contact shortly.</p>
                            </div>
                        </div>

                        {/* Raw Form Context */}
                        <div ref={formContainerRef} className="bg-white/50 backdrop-blur-md border border-brandBlue/20 organic-border p-8 md:p-12 shadow-2xl relative">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-b border-l border-brandBlue/20 block pointer-events-none"></div>

                            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Name */}
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 mb-2 pl-2">Name // Entity</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="bg-transparent border-b border-brandBlue/20 pb-2 px-2 text-brandBlue font-sans focus:outline-none focus:border-brandBlue transition-colors placeholder:text-brandBlue/30"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 mb-2 pl-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="bg-transparent border-b border-brandBlue/20 pb-2 px-2 text-brandBlue font-sans focus:outline-none focus:border-brandBlue transition-colors placeholder:text-brandBlue/30"
                                            placeholder="hello@domain.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Phone - required explicitly */}
                                    <div className="flex flex-col">
                                        <label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 mb-2 pl-2">Phone // WhatsApp</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            className="bg-transparent border-b border-brandBlue/20 pb-2 px-2 text-brandBlue font-sans focus:outline-none focus:border-brandBlue transition-colors placeholder:text-brandBlue/30"
                                            placeholder="+1 (123) 456-7890"
                                        />
                                    </div>

                                    {/* Plan Dropdown */}
                                    <div className="flex flex-col">
                                        <label htmlFor="plan" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 mb-2 pl-2">Architecture Tier</label>
                                        <div className="relative">
                                            <select
                                                id="plan"
                                                required
                                                defaultValue=""
                                                className="w-full bg-transparent border-b border-brandBlue/20 pb-2 px-2 text-brandBlue font-sans focus:outline-none focus:border-brandBlue transition-colors appearance-none cursor-pointer"
                                            >
                                                <option value="" disabled>Select Preferred Plan</option>
                                                <option value="basic">Basic (₹4,000+)</option>
                                                <option value="pro">Pro (₹6,000+)</option>
                                                <option value="advance">Advance (₹8,000+)</option>
                                                <option value="custom">Custom Scale</option>
                                            </select>
                                            {/* Dropdown carrot icon */}
                                            <svg className="w-4 h-4 absolute right-2 top-1 text-brandBlue/50 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="details" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 mb-2 pl-2">Project Specifications</label>
                                    <textarea
                                        id="details"
                                        rows={3}
                                        required
                                        className="bg-transparent border-b border-brandBlue/20 pb-2 px-2 text-brandBlue font-sans focus:outline-none focus:border-brandBlue transition-colors resize-none placeholder:text-brandBlue/30"
                                        placeholder="Tell us about the scale and scope of what you want to build..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="group mt-4 self-start flex items-center gap-4 bg-brandBlue text-cream px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-brandBlue/90 transition-colors cursor-pointer shadow-lg hover:shadow-xl"
                                >
                                    <span>Transmit Data</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
