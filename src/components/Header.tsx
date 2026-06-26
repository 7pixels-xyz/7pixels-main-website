import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const headerRef = useRef<HTMLElement>(null);

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

    return (
        <header
            ref={headerRef}
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] w-[90%] md:w-[60%] lg:w-[45%] h-16 bg-cream/70 backdrop-blur-xl border border-brandBlue/10 rounded-full shadow-[0_20px_40px_-10px_rgba(27,63,85,0.15)] flex flex-row items-center justify-between px-8"
        >
            <Link href="/" className="group flex items-center justify-center transition-transform duration-500 hover:scale-[1.03]">
                <Image
                    src="/logo2.png"
                    alt="7pixels logo"
                    width={80}
                    height={20}
                    className="object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity"
                    priority
                />
            </Link>

            <nav className="flex items-center gap-10">
                {[
                    { name: 'Our Work', href: '/work' },
                    { name: 'Pricing', href: '/pricing' }
                ].map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="font-mono text-xs uppercase tracking-[0.2em] text-brandBlue/70 hover:text-brandBlue transition-colors relative group"
                    >
                        {item.name}
                        <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-brandBlue transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                ))}
            </nav>

            <div className="hidden sm:block">
                <Link href="/contact" className="flex items-center justify-center h-8 px-6 rounded-full bg-brandBlue text-cream font-mono text-[10px] uppercase tracking-widest hover:bg-brandBlue/80 hover:scale-105 transition-all duration-300 shadow-md">
                    Initialize
                </Link>
            </div>
        </header>
    );
}
