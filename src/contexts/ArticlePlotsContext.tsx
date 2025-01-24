"use client"
import { createContext, useContext } from 'react';
import { ArticlePlots, PlotData } from '@/types';

interface ArticlePlotsContextType {
    plots: ArticlePlots;
}

const ArticlePlotsContext = createContext<ArticlePlotsContextType | null>(null);

export function usePlotData(plotId: string): PlotData | null {
    const context = useContext(ArticlePlotsContext);
    if (!context) return null;

    return context.plots.plots.find(plot => plot.id === plotId) || null;
}

export function ArticlePlotsProvider({
    children,
    plots
}: {
    children: React.ReactNode;
    plots: ArticlePlots;
}) {
    return (
        <ArticlePlotsContext.Provider value={{ plots }}>
            {children}
        </ArticlePlotsContext.Provider>
    );
} 