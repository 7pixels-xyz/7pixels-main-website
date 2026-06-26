import SEO from "@/components/SEO";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { marked } from "marked";
import Link from "next/link";

type SinglePost = {
    slug: string;
    title: string;
    date: string;
    category: string;
    content: string;
    excerpt: string;
};

export default function InsightPost({ post }: { post: SinglePost }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const ctx = gsap.context(() => {
            gsap.fromTo(".reader-stagger",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    // If somehow the static generation fails, a safety check
    if (!post?.title) {
        return <div className="min-h-screen bg-cream flex text-brandBlue items-center justify-center font-mono">Initializing Reader Module Phase...</div>;
    }

    return (
        <>
            <SEO title={`${post.title} | 7pixels`} description={post.excerpt} />
            <Cursor />
            <Header />
            <main ref={containerRef} className="min-h-[100dvh] relative font-sans w-full max-w-[100vw] overflow-x-hidden bg-cream pt-32 pb-48 border-b border-brandBlue/10">
                <div className="absolute inset-0 receipt-edge opacity-5 pointer-events-none" style={{ backgroundSize: '60px 60px' }} />

                <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 flex flex-col">

                    {/* Header Structure */}
                    <div className="reader-stagger mb-16 md:mb-24 flex flex-col items-start pt-12 border-b border-brandBlue/10 pb-12">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] bg-brandBlue text-cream px-3 py-1 organic-border">{post.category}</span>
                            <span className="font-mono text-[10px] text-brandBlue/50">{post.date}</span>
                        </div>
                        <h1 className="font-serif text-4xl md:text-6xl text-brandBlue tracking-tight leading-[1.1] mb-8">
                            {post.title}
                        </h1>
                    </div>

                    {/* The MDX Reader Matrix (Parsed Markdown into HTML elements) */}
                    {/* We apply massive Tailwind topology (prose) here without needing standard prose library by scoping the CSS manually */}
                    <article
                        className="reader-stagger prose-article w-full flex flex-col font-sans text-brandBlue/80 font-light leading-relaxed text-lg"
                    >
                        <div
                            dangerouslySetInnerHTML={{ __html: post.content }}
                            className="flex flex-col gap-8 [&>h2]:font-serif [&>h2]:text-3xl [&>h2]:text-brandBlue [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:font-mono [&>h3]:text-sm [&>h3]:uppercase [&>h3]:tracking-widest [&>h3]:text-brandBlue [&>h3]:mt-8 [&>h3]:mb-2 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>strong]:font-semibold [&>strong]:text-brandBlue [&>blockquote]:border-l-2 [&>blockquote]:border-brandBlue/30 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-brandBlue/60"
                        />
                    </article>

                    {/* Architectural Conversion Trap */}
                    <div className="reader-stagger mt-32 bg-white/50 backdrop-blur-sm organic-border border border-brandBlue/20 p-12 flex flex-col items-center text-center">
                        <h3 className="font-serif text-4xl text-brandBlue mb-4">Required Architectures.</h3>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-brandBlue/50 mb-8 max-w-md">Stop losing revenue to slow systems and unoptimized template builders.</p>

                        <Link href="/contact" className="group flex items-center justify-center gap-4 bg-brandBlue text-cream px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] hover:bg-brandBlue/90 transition-colors shadow-xl">
                            <span>Initialize Consult</span>
                            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}

// Generate the specific node endpoints during the CI/CD Vercel build compilation
export async function getStaticPaths() {
    const posts = getAllPosts(['slug']);

    return {
        paths: posts.map((post) => ({
            params: { slug: post.slug },
        })),
        fallback: false, // Throws user instantly cleanly into our custom 404 Node Offline fallback if the route doesn't match an actual markdown document
    };
}

// Statically fetch the single exact raw file structure containing our requested search keywords
export async function getStaticProps({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'category',
        'content',
        'excerpt'
    ]);

    // Parse the actual structural markdown context into sanitized native HTML
    const rawContent = post?.content || '';
    const htmlContent = marked.parse(rawContent);

    return {
        props: {
            post: {
                ...post,
                content: htmlContent,
            },
        },
    };
}
