import Head from "next/head";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

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
                                <a href="mailto:hello@7pixels.agency" className="font-serif text-2xl text-brandBlue hover:opacity-70 transition-opacity">
                                    hello@7pixels.agency
                                </a>
                            </div>
                            <div>
                                <h4 className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/40 mb-2">Communications</h4>
                                <a href="tel:+1234567890" className="font-serif text-2xl text-brandBlue hover:opacity-70 transition-opacity">
                                    +1 (234) 567-890
                                </a>
                            </div>

                            {/* Socials */}
                            <div className="mt-8 pt-8 border-t border-brandBlue/10 flex gap-6">
                                {['Instagram', 'LinkedIn', 'Twitter', 'Dribbble'].map((social) => (
                                    <a key={social} href="#" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 hover:text-brandBlue transition-colors group relative">
                                        {social}
                                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brandBlue group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="contact-stagger w-full lg:w-1/2">
                        <div className="bg-white/50 backdrop-blur-md border border-brandBlue/20 organic-border p-8 md:p-12 shadow-2xl relative">
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-8 h-8 border-b border-l border-brandBlue/20"></div>

                            <form className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Name */}
                                    <div className="flex flex-col">
                                        <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 mb-2 pl-2">Name // Entity</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="bg-transparent border-b border-brandBlue/20 pb-2 px-2 text-brandBlue font-sans focus:outline-none focus:border-brandBlue transition-colors"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    {/* Email */}
                                    <div className="flex flex-col">
                                        <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 mb-2 pl-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="bg-transparent border-b border-brandBlue/20 pb-2 px-2 text-brandBlue font-sans focus:outline-none focus:border-brandBlue transition-colors"
                                            placeholder="hello@domain.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Phone */}
                                    <div className="flex flex-col">
                                        <label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 mb-2 pl-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="bg-transparent border-b border-brandBlue/20 pb-2 px-2 text-brandBlue font-sans focus:outline-none focus:border-brandBlue transition-colors"
                                            placeholder="(Optional)"
                                        />
                                    </div>
                                    {/* Business */}
                                    <div className="flex flex-col">
                                        <label htmlFor="business" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 mb-2 pl-2">Business Name</label>
                                        <input
                                            type="text"
                                            id="business"
                                            className="bg-transparent border-b border-brandBlue/20 pb-2 px-2 text-brandBlue font-sans focus:outline-none focus:border-brandBlue transition-colors"
                                            placeholder="Company LLC"
                                        />
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="flex flex-col mt-4">
                                    <label htmlFor="details" className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/60 mb-2 pl-2">Project Architecture Details</label>
                                    <textarea
                                        id="details"
                                        rows={4}
                                        className="bg-transparent border-b border-brandBlue/20 pb-2 px-2 text-brandBlue font-sans focus:outline-none focus:border-brandBlue transition-colors resize-none"
                                        placeholder="Tell us about the scale and scope of what you want to build..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="button"
                                    className="group mt-8 self-start flex items-center gap-4 bg-brandBlue text-cream px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-brandBlue/90 transition-colors cursor-pointer shadow-lg hover:shadow-xl"
                                >
                                    <span>Transmit Output</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
