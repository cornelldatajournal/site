import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { getArticleBySlug } from '@/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PlotLoader } from '@/components/plots/PlotLoader';
import { ArticlePlotsProvider } from '@/contexts/ArticlePlotsContext';
import { notFound } from 'next/navigation';
import { generateStaticParams } from '@/lib/articles';

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

const components = {
    PlotLoader,
};

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = await getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    // Default empty plots if no plots file exists
    const articlePlots = { plots: [] };

    try {
        // Attempt to load plots if they exist
        const plotsModule = await import(`@/content/${article.slug}/plots`).catch(() => null);
        if (plotsModule?.articlePlots) {
            Object.assign(articlePlots, plotsModule.articlePlots);
        }
    } catch (error) {
        // Silently continue with empty plots
        console.debug(`No plots found for ${article.slug}`);
    }

    return (
        <ArticlePlotsProvider plots={articlePlots}>
            <ArticleLayout article={article}>
                <MDXRemote
                    source={article.content}
                    components={components}
                />
            </ArticleLayout>
        </ArticlePlotsProvider>
    );
}

// Generate static paths
export { generateStaticParams };