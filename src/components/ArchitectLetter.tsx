import React from 'react';

export default function ArchitectLetter() {
    return (
        <section className="py-24 md:py-32 bg-[#f4ece3] text-brandBlue relative overflow-hidden">
            <div className="px-4 md:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

                {/* Left: The Visual Layout */}
                <div className="flex-1 w-full relative">
                    <div className="aspect-[3/4] md:aspect-square lg:aspect-[4/5] bg-cream border border-brandBlue/20 organic-border overflow-hidden relative shadow-2xl shadow-brandBlue/10 flex items-center justify-center p-8">
                        <div className="absolute inset-0 bg-brandBlue opacity-[0.03] mix-blend-multiply z-10 pointer-events-none"></div>
                        <div className="w-full h-full border border-brandBlue/10 relative overflow-hidden bg-white/40 group flex flex-col justify-center items-center text-center p-12">
                            <div className="w-16 h-16 border border-brandBlue/30 rounded-full mb-6 flex items-center justify-center">
                                <span className="font-serif italic text-2xl">7</span>
                            </div>
                            <h3 className="font-serif text-3xl mb-2">The Architecture Protocol</h3>
                            <p className="font-mono text-xs uppercase tracking-widest text-brandBlue/50 mb-8">Established 2026</p>
                            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-brandBlue/20"></div>
                        </div>
                    </div>
                </div>

                {/* Right: The Letter */}
                <div className="flex-1 w-full flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="w-8 h-[1px] bg-brandBlue"></span>
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-brandBlue/60">Architect&apos;s Protocol</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif text-brandBlue tracking-tight mb-8">
                        We build websites because we are exhausted by bad templates.
                    </h2>

                    <div className="font-sans text-lg text-brandBlue/70 font-light leading-relaxed flex flex-col gap-6">
                        <p>
                            When I look at the digital landscape today, especially for premium industries like architecture, interior design, and specialized clinics, I see a sea of identical, sluggish, drag-and-drop templates.
                        </p>
                        <p>
                            A premium brand charging premium rates cannot afford to house its digital presence in a cheap, unoptimized shell. It shatters the illusion of exclusivity the second the page takes three seconds to load.
                        </p>
                        <p>
                            That is exactly why 7pixels exists. We do not use page builders. We do not use shortcuts.
                            We engineer bespoke, hardware-accelerated digital architectures completely from scratch.
                            Because true luxury is defined by flawless execution.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-brandBlue/10 flex items-center gap-6">
                        <div className="font-serif text-2xl italic scale-125 origin-left opacity-80">7pixels.</div>
                        <div className="flex flex-col">
                            <span className="font-mono text-xs uppercase tracking-widest font-bold">The Engineering Node</span>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/50">Lead Architect</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
