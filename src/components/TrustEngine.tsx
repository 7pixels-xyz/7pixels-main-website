import React from 'react';

const testimonials = [
    { quote: "7pixels didn't just rebuild our website; they rebuilt our entire client acquisition pipeline. Our high-ticket conversions doubled.", author: "Pankaj Sharma", role: "CEO, Canvas Space" },
    { quote: "A masterclass in digital architecture. The speed, the aesthetics, the conversion mechanisms—everything is flawlessly engineered.", author: "Dr. Arvind", role: "Director, AO Dentistry" },
    { quote: "We came to 7pixels because templates were killing our brand image. They delivered a platform that physically intimidates our competitors.", author: "Mansi Pawar", role: "Founder, Magical Interiors" }
];

export default function TrustEngine() {
    return (
        <section className="py-24 md:py-32 bg-cream text-brandBlue border-y border-brandBlue/10 relative overflow-hidden">
            <div className="px-4 md:px-24 mb-16 max-w-4xl">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-[1px] bg-brandBlue"></span>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-brandBlue/60">The Consensus</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-brandBlue tracking-tight">Don&apos;t just take our word for it.</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-8 px-4 md:px-24">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="flex-1 border border-brandBlue/10 bg-white/50 backdrop-blur-sm p-10 organic-border relative group hover:border-brandBlue/30 transition-colors duration-500">
                        <div className="absolute top-8 left-8 text-6xl font-serif opacity-[0.05] group-hover:opacity-10 transition-opacity">"</div>
                        <p className="font-sans text-brandBlue/80 text-xl md:text-2xl font-light leading-relaxed mb-8 relative z-10 pt-4">
                            {t.quote}
                        </p>
                        <div className="flex flex-col gap-1 border-t border-brandBlue/10 pt-6">
                            <span className="font-serif text-xl">{t.author}</span>
                            <span className="font-mono text-xs uppercase tracking-widest text-brandBlue/50">{t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
