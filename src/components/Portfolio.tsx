import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue } from 'motion/react';

const works = [
    { id: 1, title: 'Canvas Space', format: 'Interior / Brutalism', image: '/portfolios/pankaj-sharma-canvas-space.jpg', url: 'https://pankaj-sharma-canvas-space.vercel.app/' },
    { id: 2, title: 'Magical Interiors', format: 'Interior / Soft Minimalism', image: '/portfolios/mansi-magic-interiors.jpg', url: 'https://mansi-magic-interiors.vercel.app/' },
    { id: 3, title: 'TAG Studio', format: 'Interior / Space Planning', image: '/portfolios/shashikant-gilt.jpg', url: 'https://shashikant-gilt.vercel.app/' },
    { id: 4, title: 'Zen Dental Studio', format: 'Clinical / Evidence-Based', image: '/portfolios/zen.jpg', url: 'https://www.zen.dentist/' },
    { id: 5, title: 'AO Dentistry', format: 'Clinical / Advanced Care', image: '/portfolios/aodentistry.jpg', url: 'https://www.aodentistry.com/' },
    { id: 6, title: 'Apex Tattooz', format: 'Tattoo / Custom Inking', image: '/portfolios/apextattooz.jpg', url: 'https://apextattooz.com/' },
];

export default function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dragConstraint, setDragConstraint] = useState(0);
    const x = useMotionValue(0);

    useEffect(() => {
        const updateConstraints = () => {
            if (containerRef.current) {
                setDragConstraint(-(containerRef.current.scrollWidth - containerRef.current.offsetWidth));
            }
        };

        updateConstraints();
        window.addEventListener('resize', updateConstraints);
        return () => window.removeEventListener('resize', updateConstraints);
    }, []);

    return (
        <section className="py-32 overflow-hidden bg-[#f4ece3] border-y border-brandBlue/10 relative">
            <div className="px-4 md:px-24 mb-16">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-8 h-[1px] bg-brandBlue"></span>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-brandBlue/60">Execution Output</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-brandBlue tracking-tight mb-6">View The Constructs</h2>
                <p className="font-sans text-xl text-brandBlue/70 max-w-xl font-light leading-relaxed">
                    Draggable horizontally. A curated selection of our finest systems, hand-crafted with architectural precision.
                </p>
            </div>

            <div ref={containerRef} className="cursor-none active:cursor-none w-full overflow-hidden pl-4 md:pl-24 py-10">
                <motion.div
                    className="flex gap-8 md:gap-12 w-max pr-24"
                    drag="x"
                    style={{ x }}
                    onWheel={(e) => {
                        if (e.shiftKey) {
                            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
                            const newX = x.get() - (delta * 1.5);
                            x.set(Math.max(dragConstraint - 100, Math.min(0, newX)));
                        }
                    }}
                    dragConstraints={{ left: dragConstraint - 100, right: 0 }}
                    dragElastic={0.05}
                >
                    {works.map((work, idx) => (
                        <motion.div
                            key={work.id}
                            className={`w-[85vw] md:w-[45vw] lg:w-[35vw] aspect-[3/2] flex flex-col justify-end p-8 bg-cream border border-brandBlue/20 relative flex-shrink-0 group overflow-hidden shadow-2xl shadow-brandBlue/5`}
                            style={{
                                borderRadius: idx % 2 === 0 ? '15px 125px 15px 125px/125px 15px 125px 15px' : '125px 15px 125px 15px/15px 125px 15px 125px',
                            }}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Native Image Integration */}
                            <div className="absolute inset-0 bg-cream flex items-center justify-center p-0 transition-transform duration-1000 ease-in-out group-hover:scale-110">
                                {work.image ? (
                                    <div className="w-full h-full relative">
                                        <div className="absolute inset-0 bg-brandBlue opacity-[0.15] group-hover:opacity-10 mix-blend-multiply transition-opacity duration-500 z-10 pointer-events-none"></div>
                                        <img src={work.image} alt={work.title} className="w-full h-full object-cover" draggable={false} />
                                    </div>
                                ) : (
                                    <div className="w-full h-full border border-brandBlue/10 flex items-center justify-center relative overflow-hidden bg-white/30 organic-border m-12">
                                        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-brandBlue/10"></div>
                                        <div className="absolute inset-y-0 left-1/2 w-[1px] bg-brandBlue/10"></div>
                                        <span className="font-mono text-brandBlue/20 text-[10px] tracking-[0.3em] uppercase bg-cream px-3 py-1 z-10 block border border-brandBlue/10">
                                            Img_Src_{idx + 1}.avif
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Text overlay bottom */}
                            <div className="relative z-20 bg-cream/95 backdrop-blur-md border border-brandBlue/20 p-6 organic-border w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-xl shadow-brandBlue/5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-3xl lg:text-4xl font-serif text-brandBlue leading-none">{work.title}</h3>
                                    <span className="font-mono text-brandBlue italic text-lg opacity-40">0{idx + 1}</span>
                                </div>
                                <div className="border-t border-brandBlue/10 pt-3 mt-4">
                                    <span className="text-xs font-mono tracking-[0.2em] uppercase text-brandBlue/60">{work.format}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
