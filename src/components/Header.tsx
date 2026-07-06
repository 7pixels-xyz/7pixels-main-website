import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import { useAudio } from '@/context/AudioContext';
import { Music } from 'lucide-react';

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const { isPlaying, togglePlay } = useAudio();
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const ctx = gsap.context(() => {
            // Drop down entry animation
            gsap.fromTo(headerRef.current,
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'expo.out',
                    delay: 0.1
                }
            );

            // Subtle continuous levitation hover (simulating anti-gravity)
            gsap.to(headerRef.current, {
                y: "-=4",
                duration: 2.5,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                delay: 1.2 // wait for entry animation to finish
            });
        });

        return () => ctx.revert();
    }, []);

    // Theme scroll tracker avoiding mix-blend-difference webkit bugs
    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;
            if (!header) return;
            const headerRect = header.getBoundingClientRect();
            const headerCenterY = headerRect.top + headerRect.height / 2;

            let currentThemeDark = false;
            const sections = document.querySelectorAll('section');

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (headerCenterY >= rect.top && headerCenterY <= rect.bottom) {
                    const className = typeof section.className === 'string' ? section.className : '';
                    if (className.includes('bg-[#1c2226]') || className.includes('bg-brandBlue')) {
                        currentThemeDark = true;
                    }
                }
            });

            setIsDarkTheme(currentThemeDark);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Request initial check after elements mount
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            ref={headerRef}
            className={`fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-[100] w-[95%] md:w-[60%] lg:w-[45%] h-14 md:h-16 backdrop-blur-xl border rounded-full shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] flex flex-row items-center justify-between px-4 md:px-8 transition-colors duration-500
                ${isDarkTheme ? 'bg-white/10 border-white/20' : 'bg-brandBlue/5 border-brandBlue/10'}
            `}
        >
            <Link href="/" className="group flex items-center justify-center transition-transform duration-500 hover:scale-[1.03]">
                <Image
                    src="/logo2.png"
                    alt="7pixels logo"
                    width={80}
                    height={20}
                    className={`object-contain transition-all duration-500 opacity-90 group-hover:opacity-100 ${isDarkTheme ? 'brightness-0 invert' : 'mix-blend-multiply'}`}
                    priority
                />
            </Link>

            <nav className="flex items-center gap-4 md:gap-10">
                {[
                    { name: 'Our Work', href: '/work' },
                    { name: 'Pricing', href: '/pricing' }
                ].map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors relative group hover:opacity-70 ${isDarkTheme ? 'text-white' : 'text-brandBlue/80 hover:text-brandBlue'}`}
                    >
                        {item.name}
                        <span className={`absolute -bottom-2 left-1/2 w-0 h-[1px] transform -translate-x-1/2 group-hover:w-full transition-all duration-300 ${isDarkTheme ? 'bg-white' : 'bg-brandBlue'}`}></span>
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-4">
                {/* Mobile Audio Control Widget */}
                <button
                    onClick={togglePlay}
                    className={`md:hidden flex items-center justify-center h-8 w-8 rounded-full border transition-all duration-300
                        ${isDarkTheme ? 'border-white/20 text-white hover:bg-white/10' : 'border-brandBlue/20 text-brandBlue hover:bg-brandBlue/5'}
                    `}
                >
                    {isPlaying ? (
                        <Music className="w-3.5 h-3.5 animate-pulse" />
                    ) : (
                        <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
                    )}
                </button>

                {/* Desktop Global CTA */}
                <div className="hidden sm:block">
                    <Link href="/contact" className={`flex items-center justify-center h-8 px-6 rounded-full font-mono text-[10px] uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-md
                        ${isDarkTheme ? 'bg-white text-black' : 'bg-brandBlue text-cream hover:bg-brandBlue/80'}
                    `}>
                        Initialize
                    </Link>
                </div>
            </div>
        </header>
    );
}
