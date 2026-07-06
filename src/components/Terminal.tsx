import React, { useEffect, useState } from 'react';

const messages = [
    { threshold: 0, text: "SYSTEM: Connection established. Initializing 7pixels." },
    { threshold: 800, text: "SYSTEM: Analyzing visitor intent... Loading narrative." },
    { threshold: 2000, text: "SYSTEM: Bypassing templates. Extracting core architectures." },
    { threshold: 3500, text: "SYSTEM: Displaying execution output. Standby." },
    { threshold: 5000, text: "SYSTEM: End of sequences detected. Awaiting client decision." }
];

export default function Terminal() {
    const [currentMsg, setCurrentMsg] = useState(messages[0].text);
    const [typedText, setTypedText] = useState("");

    // Handle scroll context
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const targetMsg = [...messages].reverse().find(m => scrollY >= m.threshold)?.text;
            if (targetMsg && targetMsg !== currentMsg) {
                setCurrentMsg(targetMsg);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentMsg]);

    // Handle typing effect
    useEffect(() => {
        let i = 0;
        setTypedText("");
        const typingInterval = setInterval(() => {
            if (i < currentMsg.length) {
                setTypedText(prev => prev + currentMsg.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30);

        return () => clearInterval(typingInterval);
    }, [currentMsg]);

    return (
        <div className="fixed bottom-6 left-6 z-[9999] pointer-events-none hidden md:block">
            <div className="bg-brandBlue/95 backdrop-blur-md border border-brandBlue/20 px-4 py-2 flex items-center gap-3 w-[300px] shadow-2xl shadow-brandBlue/10 organic-border overflow-hidden">
                <div className="w-2 h-2 bg-[#f4ece3] animate-pulse rounded-full flex-shrink-0" />
                <p className="font-mono text-[9px] text-[#f4ece3]/80 uppercase tracking-widest leading-relaxed">
                    {typedText}
                    <span className="w-1.5 h-3 bg-[#f4ece3]/50 inline-block align-middle ml-1 animate-pulse" />
                </p>
            </div>
        </div>
    );
}
