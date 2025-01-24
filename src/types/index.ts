export interface Article {
    title: string;
    description: string;
    content: string;
    author: string[];
    publishedDate: string;
    tags: string[];
    section: string;
    slug: string;
    layout?: 'default' | 'custom';
}

export type PlotType = 'line' | 'scatter';

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