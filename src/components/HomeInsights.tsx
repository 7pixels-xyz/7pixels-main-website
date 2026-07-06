import React from 'react';
import Link from 'next/link';

const insights = [
    { title: "The True Cost of Digital Architecture (2026 Pricing Framework)", slug: "true-cost-digital-architecture", category: "Strategy", date: "Q3 2026" },
    { title: "Why Drag-and-Drop Builders are Killing Your Conversion Rates", slug: "why-drag-and-drop-builders-kill-conversions", category: "Performance", date: "Q3 2026" },
    { title: "Trust-Centric Architecture: Engineering Portals for High-Ticket B2B", slug: "trust-centric-architecture", category: "UX Design", date: "Q3 2026" }
];

export default function HomeInsights() {
    return (
        <section className="py-24 md:py-32 bg-cream text-brandBlue border-y border-brandBlue/10 relative overflow-hidden">
            <div className="px-4 md:px-24 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-8 h-[1px] bg-brandBlue"></span>
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-brandBlue/60">Digital Index</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif text-brandBlue tracking-tight">The Insights Matrix.</h2>
                </div>
                <Link href="/insights" className="font-mono text-xs tracking-widest uppercase pb-2 border-b border-brandBlue hover:text-brandBlue/60 transition-colors w-max">
                    Access Data Logs [+]
                </Link>
            </div>

            <div className="px-4 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-px bg-brandBlue/10 border border-brandBlue/10">
                {insights.map((insight, idx) => (
                    <Link href={`/insights/${insight.slug}`} key={idx} className="bg-cream p-10 flex flex-col group hover:bg-brandBlue hover:text-cream transition-colors duration-500">
                        <div className="flex justify-between items-center w-full mb-12">
                            <span className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-brandBlue/20 group-hover:border-cream/20 rounded-full">
                                {insight.category}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">
                                {insight.date}
                            </span>
                        </div>
                        <h3 className="font-serif text-2xl md:text-3xl leading-snug mb-8 mt-auto">
                            {insight.title}
                        </h3>
                        <div className="font-mono text-xs uppercase tracking-[0.2em] flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                            Read Protocol <span className="text-lg leading-none">&rarr;</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
