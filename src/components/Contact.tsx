import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 md:px-12 lg:px-24 bg-cream text-brandBlue flex flex-col items-center border-t border-brandBlue/10 relative overflow-hidden">

            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="gridLarge" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridLarge)" />
                </svg>
            </div>

            <div className="max-w-4xl w-full relative z-10">
                <div className="flex items-center gap-4 mb-8 justify-center">
                    <span className="w-12 h-[1px] bg-brandBlue"></span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brandBlue/50 bg-cream px-2">System Initializer</span>
                    <span className="w-12 h-[1px] bg-brandBlue"></span>
                </div>

                <h2 className="text-5xl md:text-7xl font-serif mb-6 text-center tracking-tight">Initiate Build Sequence</h2>
                <p className="text-center font-sans text-brandBlue/70 mb-16 max-w-lg mx-auto font-light leading-relaxed">
                    Define the parameters of your project, specific timelines, and budget constraints. Our architects will compile a curated deployment strategy.
                </p>

                <form className="border border-brandBlue/20 bg-white/50 backdrop-blur pb-12 pt-16 px-8 md:px-16 flex flex-col gap-12 relative shadow-2xl organic-border">
                    {/* Decorative nodes on form */}
                    <div className="absolute top-4 left-4 w-2 h-2 rounded-full border border-brandBlue/30"></div>
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full border border-brandBlue/30"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full border border-brandBlue/30"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full border border-brandBlue/30"></div>

                    <div className="flex flex-col gap-3">
                        <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] font-mono text-brandBlue/60">Entity Definition [Name]</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your structural identifier"
                            className="bg-transparent border-b border-brandBlue/30 hover:border-brandBlue focus:border-brandBlue outline-none pb-3 font-serif text-2xl md:text-3xl placeholder-brandBlue/20 transition-colors w-full rounded-none"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="flex flex-col gap-3 flex-1">
                            <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] font-mono text-brandBlue/60">Ping Address [Email]</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="hello@domain.com"
                                className="bg-transparent border-b border-brandBlue/30 hover:border-brandBlue focus:border-brandBlue outline-none pb-3 font-serif text-2xl md:text-3xl placeholder-brandBlue/20 transition-colors w-full rounded-none"
                            />
                        </div>

                        <div className="flex flex-col gap-3 flex-1">
                            <label htmlFor="budget" className="text-xs uppercase tracking-[0.2em] font-mono text-brandBlue/60">Resource Allocation [Budget]</label>
                            <input
                                type="text"
                                id="budget"
                                placeholder="$5k - $10k"
                                className="bg-transparent border-b border-brandBlue/30 hover:border-brandBlue focus:border-brandBlue outline-none pb-3 font-serif text-2xl md:text-3xl placeholder-brandBlue/20 transition-colors w-full rounded-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <label htmlFor="details" className="text-xs uppercase tracking-[0.2em] font-mono text-brandBlue/60">Architecture Requirements</label>
                        <textarea
                            id="details"
                            rows={3}
                            placeholder="Outline the core functionality..."
                            className="bg-transparent border-b border-brandBlue/30 hover:border-brandBlue focus:border-brandBlue outline-none pb-3 font-serif text-2xl md:text-3xl placeholder-brandBlue/20 transition-colors w-full resize-none rounded-none"
                        />
                    </div>

                    <div className="flex justify-center md:justify-start mt-8">
                        <button type="submit" className="border border-brandBlue/30 bg-transparent hover:bg-brandBlue text-brandBlue hover:text-white px-12 py-5 text-sm font-mono uppercase tracking-[0.25em] transition-all duration-500 ease-out flex items-center gap-4">
                            <span>Execute Build</span>
                            <span className="text-xs opacity-50">\u2192</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
