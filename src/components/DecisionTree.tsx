import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/router';

export default function DecisionTree() {
    const [selectedPath, setSelectedPath] = useState<string | null>(null);
    const router = useRouter();

    const handleSelect = (path: string) => {
        setSelectedPath(path);
        // Narrative delay before routing
        setTimeout(() => {
            router.push(`/contact?intent=${encodeURIComponent(path)}`);
        }, 1500);
    };

    return (
        <section className="py-32 bg-cream text-brandBlue flex flex-col items-center justify-center relative overflow-hidden min-h-[60vh]">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--brand-blue)_1px,transparent_1px)] [background-size:15px_15px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 z-10 w-full flex flex-col items-center text-center">
                <AnimatePresence mode="wait">
                    {!selectedPath ? (
                        <motion.div
                            key="options"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col items-center w-full"
                        >
                            <span className="font-mono text-xs tracking-[0.3em] uppercase mb-8 opacity-60 border border-brandBlue/20 px-4 py-2 organic-border">
                                Awaiting Directive
                            </span>
                            <h2 className="text-4xl md:text-6xl font-serif mb-12 tracking-tight leading-tight">
                                How shall we initialize your <br /> <span className="italic">architecture?</span>
                            </h2>

                            <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
                                <button
                                    onClick={() => handleSelect('scale_existing')}
                                    className="group relative px-8 py-6 border border-brandBlue/20 bg-white/50 backdrop-blur hover:bg-brandBlue hover:text-cream transition-colors duration-500 overflow-hidden organic-border flex-1 max-w-[350px]"
                                >
                                    <span className="block font-mono text-[10px] tracking-widest uppercase mb-2 opacity-60">Protocol A</span>
                                    <span className="block font-serif text-2xl">Scale Existing System</span>
                                </button>

                                <button
                                    onClick={() => handleSelect('build_scratch')}
                                    className="group relative px-8 py-6 border border-brandBlue/20 bg-brandBlue text-cream hover:bg-white hover:text-brandBlue transition-colors duration-500 overflow-hidden organic-border flex-1 max-w-[350px]"
                                >
                                    <span className="block font-mono text-[10px] tracking-widest uppercase mb-2 opacity-60">Protocol B</span>
                                    <span className="block font-serif text-2xl">Architect From Scratch</span>
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="w-12 h-12 border-t-2 border-r-2 border-brandBlue rounded-full animate-spin"></div>
                            <h2 className="text-2xl font-mono uppercase tracking-[0.2em] text-brandBlue">
                                Objective Locked.
                            </h2>
                            <p className="font-sans text-brandBlue/60">
                                Routing to Engineering Node...
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
