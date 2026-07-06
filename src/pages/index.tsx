import SEO from "@/components/SEO";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Performance from "@/components/Performance";
import Terminal from "@/components/Terminal";
import Services from "@/components/Services";
import Menu from "@/components/Menu";
import ArchitectLetter from "@/components/ArchitectLetter";
import Blueprints from "@/components/Blueprints";
import TrustEngine from "@/components/TrustEngine";
import Portfolio from "@/components/Portfolio";
import HomeInsights from "@/components/HomeInsights";
import DecisionTree from "@/components/DecisionTree";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <SEO title="7pixels Agency | Artisanal Digital Craft" description="A premium, scroll-driven digital agency website. We handcraft artisanal digital experiences." />
            <Cursor />
            <Terminal />
            <Header />
            <main className="min-h-screen relative font-sans w-full max-w-[100vw] overflow-x-hidden">
                <Hero />
                <Manifesto />
                <Performance />
                <Services />
                <Menu />
                <ArchitectLetter />
                <Blueprints />
                <TrustEngine />
                <Portfolio />
                <HomeInsights />
                <DecisionTree />
            </main>
            <Footer />
        </>
    );
}
