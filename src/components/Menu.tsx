import React from 'react';

export default function Menu() {
    return (
        <section className="py-32 px-4 md:px-12 lg:px-24 bg-cream text-brandBlue flex justify-center w-full min-h-screen items-center relative overflow-hidden text-brandBlue">

            {/* Background blueprint lines */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl w-full border border-brandBlue/30 bg-white/40 backdrop-blur-md p-8 md:p-16 lg:p-24 relative shadow-2xl organic-border">

                {/* Top bar */}
                <div className="absolute top-0 left-0 w-full h-12 border-b border-brandBlue/20 flex items-center px-8 justify-between bg-brandBlue/5 rounded-t-[14px]">
                    <span className="font-mono text-[10px] tracking-widest uppercase opacity-50">System Schema V1.2</span>
                    <div className="flex gap-2">
                        <div className="w-1.5 h-1.5 bg-brandBlue/30 rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-brandBlue/30 rounded-full"></div>
                    </div>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-center mt-12 mb-20 tracking-tight">System Architecture Options</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative border border-brandBlue/20 bg-cream/30">

                    {/* Vertical dividers for md+ screens */}
                    <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-[1px] bg-brandBlue/20" />
                    <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-[1px] bg-brandBlue/20" />

                    {/* Column 1: Core Frameworks */}
                    <div className="flex flex-col p-8 md:p-10 group hover:bg-brandBlue/5 transition-colors border-b border-brandBlue/20 md:border-b-0">
                        <div className="flex items-center gap-4 mb-8 border-b border-brandBlue/20 pb-4">
                            <span className="font-mono text-xs text-brandBlue/40">01</span>
                            <h3 className="text-2xl md:text-2xl font-serif tracking-wide">Core Frameworks</h3>
                        </div>
                        <ul className="space-y-6 font-sans text-brandBlue/80">
                            <li className="flex flex-col group/item cursor-none">
                                <div className="flex justify-between items-end border-b border-brandBlue/10 pb-1 mb-1">
                                    <span className="text-lg group-hover/item:text-brandBlue transition-colors font-medium">Headless Commerce</span>
                                    <span className="font-mono text-xs opacity-40">++</span>
                                </div>
                                <span className="text-sm opacity-60 font-light">Shopify Plus API, Next.js</span>
                            </li>
                            <li className="flex flex-col group/item cursor-none">
                                <div className="flex justify-between items-end border-b border-brandBlue/10 pb-1 mb-1">
                                    <span className="text-lg group-hover/item:text-brandBlue transition-colors font-medium">Bespoke Web-Apps</span>
                                    <span className="font-mono text-xs opacity-40">++</span>
                                </div>
                                <span className="text-sm opacity-60 font-light">React, Vue, Complex State</span>
                            </li>
                            <li className="flex flex-col group/item cursor-none">
                                <div className="flex justify-between items-end border-b border-brandBlue/10 pb-1 mb-1">
                                    <span className="text-lg group-hover/item:text-brandBlue transition-colors font-medium">Marketing Sites</span>
                                    <span className="font-mono text-xs opacity-40">++</span>
                                </div>
                                <span className="text-sm opacity-60 font-light">High-conversion SSG pages</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2: Digital Aesthetics */}
                    <div className="flex flex-col p-8 md:p-10 group hover:bg-brandBlue/5 transition-colors border-b border-brandBlue/20 md:border-b-0">
                        <div className="flex items-center gap-4 mb-8 border-b border-brandBlue/20 pb-4">
                            <span className="font-mono text-xs text-brandBlue/40">02</span>
                            <h3 className="text-2xl font-serif tracking-wide">Digital Aesthetics</h3>
                        </div>
                        <ul className="space-y-6 font-sans text-brandBlue/80">
                            <li className="flex flex-col group/item cursor-none">
                                <div className="flex justify-between items-end border-b border-brandBlue/10 pb-1 mb-1">
                                    <span className="text-lg group-hover/item:text-brandBlue transition-colors font-medium">Creative Direction</span>
                                    <span className="font-mono text-xs opacity-40">++</span>
                                </div>
                                <span className="text-sm opacity-60 font-light">Visual language & strategy</span>
                            </li>
                            <li className="flex flex-col group/item cursor-none">
                                <div className="flex justify-between items-end border-b border-brandBlue/10 pb-1 mb-1">
                                    <span className="text-lg group-hover/item:text-brandBlue transition-colors font-medium">UX/UI Architecture</span>
                                    <span className="font-mono text-xs opacity-40">++</span>
                                </div>
                                <span className="text-sm opacity-60 font-light">Wireframing, prototyping</span>
                            </li>
                            <li className="flex flex-col group/item cursor-none">
                                <div className="flex justify-between items-end border-b border-brandBlue/10 pb-1 mb-1">
                                    <span className="text-lg group-hover/item:text-brandBlue transition-colors font-medium">WebGL Experiences</span>
                                    <span className="font-mono text-xs opacity-40">++</span>
                                </div>
                                <span className="text-sm opacity-60 font-light">Three.js, custom shaders</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Amplification */}
                    <div className="flex flex-col p-8 md:p-10 group hover:bg-brandBlue/5 transition-colors">
                        <div className="flex items-center gap-4 mb-8 border-b border-brandBlue/20 pb-4">
                            <span className="font-mono text-xs text-brandBlue/40">03</span>
                            <h3 className="text-2xl font-serif tracking-wide">Amplification</h3>
                        </div>
                        <ul className="space-y-6 font-sans text-brandBlue/80">
                            <li className="flex flex-col group/item cursor-none">
                                <div className="flex justify-between items-end border-b border-brandBlue/10 pb-1 mb-1">
                                    <span className="text-lg group-hover/item:text-brandBlue transition-colors font-medium">SEO Infrastructure</span>
                                    <span className="font-mono text-xs opacity-40">++</span>
                                </div>
                                <span className="text-sm opacity-60 font-light">Semantic tags, lighthouse 100</span>
                            </li>
                            <li className="flex flex-col group/item cursor-none">
                                <div className="flex justify-between items-end border-b border-brandBlue/10 pb-1 mb-1">
                                    <span className="text-lg group-hover/item:text-brandBlue transition-colors font-medium">Performance Tuning</span>
                                    <span className="font-mono text-xs opacity-40">++</span>
                                </div>
                                <span className="text-sm opacity-60 font-light">Asset optimization, CDNs</span>
                            </li>
                            <li className="flex flex-col group/item cursor-none">
                                <div className="flex justify-between items-end border-b border-brandBlue/10 pb-1 mb-1">
                                    <span className="text-lg group-hover/item:text-brandBlue transition-colors font-medium">Post-Deploy Support</span>
                                    <span className="font-mono text-xs opacity-40">++</span>
                                </div>
                                <span className="text-sm opacity-60 font-light">Monitoring, analytics tracking</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-brandBlue/20 w-full flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase tracking-[0.2em] text-brandBlue/50 gap-4">
                    <span>{"// End of execution configuration"}</span>
                    <span>100% Validated Output</span>
                </div>
            </div>
        </section>
    );
}
