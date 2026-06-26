import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Secure path mapping to the new massive content archive directory
const contentDirectory = path.join(process.cwd(), 'content', 'insights');

export function getPostSlugs() {
    // Return empty array instead of crashing if the directory hasn't been fabricated yet
    if (!fs.existsSync(contentDirectory)) return [];
    return fs.readdirSync(contentDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, `${realSlug}.md`);

    // Safety check against unauthorized / missing nodes
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    type Items = {
        [key: string]: string;
    };

    const items: Items = {};

    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug;
        }
        if (field === 'content') {
            items[field] = content;
        }
        if (typeof data[field] !== 'undefined') {
            items[field] = data[field];
        }
    });

    return items;
}

export function getAllPosts(fields: string[] = []) {
    if (!fs.existsSync(contentDirectory)) {
        // If the directory doesn't exist yet, we instantiate it gracefully
        fs.mkdirSync(contentDirectory, { recursive: true });
        return [];
    }

    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug, fields))
        .filter((post) => post !== null)
        // Auto-sort pipeline based on the markdown frontmatter date logic
        .sort((post1, post2) => (post1!.date > post2!.date ? -1 : 1));
    return posts;
}
