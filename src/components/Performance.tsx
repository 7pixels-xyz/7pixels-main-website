import React from 'react';
import { motion } from 'motion/react';

const stats = [
    { label: "Google Lighthouse", value: "100", append: "/100", desc: "Perfect score across performance, accessibility, SEO, and best practices." },
    { label: "Average Load Time", value: "0.8", append: "s", desc: "Lightning-fast DOM rendering explicitly optimized for mobile networks." },
    { label: "Server Uptime", value: "99.9", append: "%", desc: "Bulletproof hosting pipelines securely distributed across global edge networks." }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8 } }
};

export default function Performance() {
    return (
        <section className="py-16 md:py-32 bg-[#1c2226] text-cream relative overflow-hidden flex flex-col justify-center">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

            <div className="px-4 md:px-24 mb-16 md:mb-24 relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
                <div className="max-w-xl">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-8 h-[1px] bg-cream/60"></span>
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream/60">The Output</span>
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-7xl font-serif text-cream tracking-tight"
                    >
                        Engineered Metrics.
                    </motion.h2>
                </div>
                <motion.p
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="font-sans text-xl text-cream/70 max-w-sm font-light leading-relaxed md:text-right"
                >
                    We don&apos;t just build aesthetic interfaces. We engineer high-velocity systems proven to obliterate industry standards.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="px-4 md:px-24 w-full relative z-10"
            >
                {/* Horizontal line divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-[1px] bg-cream/20 origin-left mb-0"
                />

                <div className="flex flex-col md:flex-row w-full">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex-1 border-b md:border-b-0 md:border-r border-cream/20 last:border-0 p-6 md:p-12 relative group overflow-hidden flex flex-col justify-between min-h-[220px] md:min-h-[350px]"
                        >
                            {/* Hover Sweeper */}
                            <div className="absolute inset-0 bg-cream/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none" />

                            <div className="relative z-10 mb-6 md:mb-12">
                                <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/40 block mb-2">{String(idx + 1).padStart(2, '0')}</span>
                                <span className="font-mono text-sm uppercase tracking-[0.2em] text-cream/80">{stat.label}</span>
                            </div>

                            <div className="relative z-10 mt-auto">
                                <div className="text-6xl md:text-[8rem] font-serif tracking-tighter leading-none mb-4 md:mb-6 text-cream group-hover:scale-105 transition-transform duration-700 origin-bottom-left">
                                    {stat.value}<span className="text-3xl md:text-5xl opacity-40">{stat.append}</span>
                                </div>
                                <p className="text-cream/50 font-light text-sm md:text-base max-w-[280px] leading-relaxed group-hover:text-cream/80 transition-colors duration-500">
                                    {stat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom horizontal line divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="w-full h-[1px] bg-cream/20 origin-right"
                />
            </motion.div>
        </section>
    );
}
