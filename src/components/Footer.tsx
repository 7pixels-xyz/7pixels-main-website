import React from 'react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative bg-brandBlue text-cream pt-32 pb-12 flex flex-col items-center overflow-hidden border-t-8 border-brandBlue/90">
            {/* Architectural overlay background */}
            <div className="absolute inset-0 opacity-[0.03] pattern-diagonal-lines pointer-events-none" />
            <svg className="absolute inset-x-0 top-0 w-full h-32 pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="0%" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1" />
                <line x1="100%" y1="0%" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1" />
            </svg>

            <div className="max-w-7xl w-full px-4 md:px-16 flex flex-col items-center relative z-10">

                <div className="mb-24 text-center">
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase opacity-40 mb-6 block">{"// End of file"}</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight font-light hover:opacity-80 transition-opacity cursor-none uppercase text-center w-full">
                        Initialize
                    </h2>
                </div>

                {/* Central main logo */}
                <div className="w-full max-w-sm md:max-w-lg mx-auto mb-20 opacity-90 hover:opacity-100 transition-duration-500 relative bg-white/5 p-4 organic-border border border-cream/10 backdrop-blur-md">
                    <div className="absolute -top-2 left-4 text-[8px] font-mono text-cream/40 px-2 bg-brandBlue tracking-widest uppercase">
                        Brand_Asset_Primary.svg
                    </div>
                    <Image
                        src="/logo2.png"
                        alt="7pixels Logo"
                        width={800}
                        height={300}
                        className="w-full h-auto object-contain filter brightness-0 invert"
                    />
                </div>

                <div className="w-full border-t border-cream/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] tracking-[0.2em] uppercase opacity-60">
                    <div className="flex items-center gap-4">
                        <span className="w-2 h-2 bg-cream/80 animate-pulse"></span>
                        <p>Server Status: Active / {new Date().getFullYear()}</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        <a href="#" className="hover:text-white transition-colors cursor-none relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-cream/40 hover:before:bg-white pb-1">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors cursor-none relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-cream/40 hover:before:bg-white pb-1">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors cursor-none relative before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-cream/40 hover:before:bg-white pb-1">LinkedIn</a>
                    </div>

                    <p className="text-right border-l border-cream/20 pl-6">Compiled with absolute strictness.</p>
                </div>
            </div>
        </footer>
    );
}
