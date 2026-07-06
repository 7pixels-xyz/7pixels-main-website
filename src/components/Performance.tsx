import React from 'react';

export default function Performance() {
    return (
        <section className="py-24 md:py-32 bg-[#1c2226] text-cream relative overflow-hidden flex flex-col justify-center">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

            <div className="px-4 md:px-24 mb-16 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-[1px] bg-cream/60"></span>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream/60">The Output</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-cream tracking-tight mb-6">Engineered Metrics.</h2>
                <p className="font-sans text-xl text-cream/70 max-w-xl font-light leading-relaxed">
                    We don&apos;t just build aesthetic interfaces. We engineer high-velocity systems proven to obliterate industry standards.
                </p>
            </div>

            <div className="px-4 md:px-24 w-full relative z-10 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-px bg-cream/10 border border-cream/10">

                    {/* Stat 1 */}
                    <div className="bg-[#1c2226] p-12 md:p-16 flex flex-col items-start justify-center group hover:bg-cream/5 transition-colors duration-500">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/40 mb-6 group-hover:text-cream/60 transition-colors duration-300">Google Lighthouse</span>
                        <div className="text-6xl md:text-8xl font-serif tracking-tighter mb-4 text-cream">100<span className="text-3xl md:text-5xl opacity-40">/100</span></div>
                        <p className="text-cream/60 font-light text-sm max-w-[250px]">Perfect score across performance, accessibility, SEO, and best practices.</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="bg-[#1c2226] p-12 md:p-16 flex flex-col items-start justify-center group hover:bg-cream/5 transition-colors duration-500">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/40 mb-6 group-hover:text-cream/60 transition-colors duration-300">Average Load Time</span>
                        <div className="text-6xl md:text-8xl font-serif tracking-tighter mb-4 text-cream">0.8<span className="text-3xl md:text-5xl opacity-40">s</span></div>
                        <p className="text-cream/60 font-light text-sm max-w-[250px]">Lightning-fast DOM rendering explicitly optimized for mobile networks.</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="bg-[#1c2226] p-12 md:p-16 flex flex-col items-start justify-center group hover:bg-cream/5 transition-colors duration-500">
                        <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/40 mb-6 group-hover:text-cream/60 transition-colors duration-300">Server Uptime</span>
                        <div className="text-6xl md:text-8xl font-serif tracking-tighter mb-4 text-cream">99.9<span className="text-3xl md:text-5xl opacity-40">%</span></div>
                        <p className="text-cream/60 font-light text-sm max-w-[250px]">Bulletproof hosting pipelines securely distributed across global edge networks.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
