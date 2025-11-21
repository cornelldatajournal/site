import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { Article } from '@/types';

const ARTICLES_PATH = path.join(process.cwd(), 'src/content');

export async function getArticleBySlug(slug: string): Promise<Article | null> {
    try {
        const mdxPath = path.join(ARTICLES_PATH, slug, 'index.mdx');
        const fileContent = await fs.readFile(mdxPath, 'utf-8');

        const { data, content } = matter(fileContent);

        return {
            slug,
            content,
            type: data.type || 'default',
            title: data.title,
            description: data.description,
            author: data.author,
            editors: data.editors,
            publishedDate: data.publishedDate,
            section: data.section,
            image_path: data.image_path,
            caption: data.caption,
            quote: data.quote,
            attribution: data.attribution,
            featured_plot: data.featured_plot,
            external_link: data.external_link,
            drop_cap: data.drop_cap,
            layout: data.layout,
            order: data.order // if order is -1 then the article is hidden
        };
    } catch (error) {
        console.error(`Error loading article ${slug}:`, error);
        return null;
    }
}

export async function getArticleReferences(slug: string) {
    try {
        const articleDir = path.join(ARTICLES_PATH, slug);
        const referencesPath = path.join(articleDir, 'references.json');
        const content = await fs.readFile(referencesPath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.error(`Error loading references for ${slug}:`, error);
        return [];
    }
}

export async function getAllArticles(): Promise<Article[]> {
    try {
        const entries = await fs.readdir(ARTICLES_PATH, { withFileTypes: true });
        const articleDirs = entries.filter(entry =>
            entry.isDirectory() && !entry.name.startsWith('.') && !entry.name.startsWith('_')
        );

        const articles = await Promise.all(
            articleDirs.map(async (dir) => {
                try {
                    const slug = dir.name;
                    return await getArticleBySlug(slug);
                } catch (error) {
                    console.error(`Error loading article ${dir.name}:`, error);
                    return null;
                }
            })
        );

        // Sort articles by given order, HIGHEST NUMBER IS FIRST
        return articles
            .filter((article): article is Article => article !== null)
            .filter((article) => article.order !== -1)
            .sort((a, b) =>
                b.order - a.order
            );
    } catch (error) {
        console.error('Error loading articles:', error);
        return [];
    }
}

export async function generateStaticParams() {
    const articles = await getAllArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
} 