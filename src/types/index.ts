export type ArticleType = 'default' | 'image' | 'feature' | 'quote' | 'multimedia';

export interface BaseArticle {
    title: string;
    description: string;
    content: string;
    author: string[];
    publishedDate: string;
    tags: string[];
    section: string;
    slug: string;
    type: ArticleType;
    layout?: 'default' | 'custom';
}

export interface ImageData extends BaseArticle {
    type: 'image';
    path: string;
    caption?: string;
}

export interface QuoteData extends BaseArticle {
    type: 'quote';
    quote: string;
    attribution?: string;
}

export interface DefaultArticle extends BaseArticle {
    type: 'default';
    headerImage?: ImageData;
}

export interface MultimediaArticle extends BaseArticle {
    type: 'multimedia';
    headerImage: ImageData;
    quote?: QuoteData;
    gallery?: ImageData[];
}

export type PlotType = 'line' | 'scatter' | 'bar' | 'pie';

export interface PlotData {
    id: string;
    type: PlotType;
    data: any[];
    config: {
        xAxis?: string;
        yAxis?: string;
        title?: string;
        colorKey?: string;
        [key: string]: any;
    };
}

export interface ArticlePlots {
    plots: PlotData[];
}

export interface InteractiveArticle extends BaseArticle {
    type: 'feature';
    headerImage?: ImageData;
    quote?: QuoteData;
    plots?: ArticlePlots;
}

export type Article = DefaultArticle | MultimediaArticle | InteractiveArticle;