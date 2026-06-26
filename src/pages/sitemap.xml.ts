import { getAllPosts } from "@/lib/posts";
import { GetServerSideProps } from "next";

const URL = "https://7pixels.xyz";

function generateSiteMap(posts: { slug: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Core Navigation Architecture -->
     <url>
       <loc>${URL}</loc>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${URL}/work</loc>
       <changefreq>monthly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${URL}/pricing</loc>
       <changefreq>weekly</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${URL}/contact</loc>
       <changefreq>yearly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${URL}/insights</loc>
       <changefreq>daily</changefreq>
       <priority>0.9</priority>
     </url>

     <!-- Dynamic B2B Insights Matrix Generation -->
     ${posts
      .map(({ slug }) => {
        return `
       <url>
           <loc>${`${URL}/insights/${slug}`}</loc>
           <changefreq>monthly</changefreq>
           <priority>0.7</priority>
       </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the massive SEO article nodes on the server
  const posts = getAllPosts(['slug']);

  // Inject the mapping logic together
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

// Dummy export defaulting requirement for NextJS pages routing structure
export default function SiteMap() { }
