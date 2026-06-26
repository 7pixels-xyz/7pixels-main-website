import SEO from "@/components/SEO";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from 'next/link';
import { getAllPosts } from "@/lib/posts";

type Post = {
    slug: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
};

export default function Insights({ allPosts }: { allPosts: Post[] }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const ctx = gsap.context(() => {
            gsap.fromTo(".insights-header",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.1 }
            );

            gsap.fromTo(".insight-card",
                { opacity: 0, scale: 0.95, y: 50 },
                { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "expo.out", delay: 0.4 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <>
            <SEO title="Insights | 7pixels Digital Agency" description="Deep dives into digital architecture, systems scaling, and bespoke web engineering." />
            <Cursor />
            <Header />
            <main ref={containerRef} className="min-h-[100dvh] relative font-sans w-full max-w-[100vw] overflow-x-hidden bg-cream pt-32 pb-48 border-b border-brandBlue/10">
                <div className="absolute inset-0 receipt-edge opacity-5 pointer-events-none" style={{ backgroundSize: '60px 60px' }} />

                <div className="w-full max-w-7xl mx-auto px-4 md:px-16 relative z-10 flex flex-col">

                    {/* Insights Header */}
                    <div className="insights-header mb-16 md:mb-32 flex flex-col items-center md:items-start text-center md:text-left pt-12">
                        <div className="font-serif text-5xl md:text-8xl text-brandBlue tracking-tight leading-none mb-8">
                            The Internal<br />Knowledge Base.
                        </div>
                        <p className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-brandBlue/50 max-w-2xl leading-relaxed">
                            Thoughts on scalable architecture, e-commerce psychology, and the exact frameworks we use to out-perform standard digital agencies.
                        </p>
                    </div>

                    {/* Blog Archive Matrix Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allPosts.map((post) => (
                            <Link key={post.slug} href={`/insights/${post.slug}`}>
                                <article className="insight-card group relative bg-white/50 backdrop-blur-md border border-brandBlue/10 organic-border p-8 h-full flex flex-col justify-between hover:shadow-[0_20px_40px_-10px_rgba(27,63,85,0.1)] transition-all duration-500 hover:-translate-y-2 cursor-pointer">

                                    <div className="absolute top-0 right-0 w-8 h-8 border-b border-l border-brandBlue/20 pointer-events-none group-hover:border-brandBlue transition-colors duration-500"></div>

                                    <div className="flex flex-col">
                                        <div className="flex justify-between items-center mb-6">
                                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] bg-brandBlue text-cream px-3 py-1 organic-border">{post.category || 'Architecture'}</span>
                                            <span className="font-mono text-[10px] text-brandBlue/40">{post.date}</span>
                                        </div>
                                        <h2 className="font-serif text-3xl md:text-4xl text-brandBlue mb-4 group-hover:text-brandBlue/80 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="font-sans text-brandBlue/70 font-light text-sm md:text-base leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-brandBlue/10 flex items-center justify-between text-brandBlue">
                                        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Read Documentation</span>
                                        <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts([
        'title',
        'date',
        'slug',
        'category',
        'excerpt',
    ]);

    return {
        props: { allPosts },
    };
}
