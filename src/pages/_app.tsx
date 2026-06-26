import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        // Expose globally for Modal overlay locking
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).lenis = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (window as any).lenis;
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return <Component {...pageProps} />;
}
