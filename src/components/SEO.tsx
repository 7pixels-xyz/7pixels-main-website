import Head from 'next/head';
import { useRouter } from 'next/router';
interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

export default function SEO({
    title = "7pixels | Digital Architecture Agency",
    description = "We craft custom web architecture, e-commerce logic, and digital systems that scale. You deserve more than a drag-and-drop template.",
    image = "/og-image.png",
    url
}: SEOProps) {
    const router = useRouter();
    const siteUrl = "https://www.7pixels.xyz";
    // Construct the canonical URL automatically if not explicitly provided
    // This prevents canonical mismatches and duplicate content issues
    const currentUrl = url || `${siteUrl}${router.asPath === '/' ? '' : router.asPath.split('?')[0]}`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
            <meta name="description" content={description} />
            <meta name="theme-color" content="#fcfbfa" />

            <link rel="canonical" href={currentUrl} />

            <link rel="icon" href="/favicon.png" />
            <link rel="apple-touch-icon" href="/apple-icon.png" />
            <link rel="manifest" href="/manifest.json" />

            {/* Standard Open Graph (WhatsApp, LinkedIn, Facebook, Slack) */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter Card Architecture (iMessage, Twitter, Discord) */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={currentUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    );
}
