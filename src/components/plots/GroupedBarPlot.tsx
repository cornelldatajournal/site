import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    ReferenceLine,
    ReferenceArea,
} from 'recharts';
import { PlotData } from '@/types';
import React from 'react';

interface GroupedBarPlotProps {
    plotData: PlotData;
    className?: string;
    colors?: string[];
    columns?: string[] | undefined; // Array of column names to highlight
}

export default function GroupedBarPlot({ plotData, className, colors, columns }: GroupedBarPlotProps) {
    const { data, config } = plotData;

    // Ensure columns is always an array
    const safeColumns = Array.isArray(columns) ? columns : [];

    // Custom tick component for vertical labels (bottom-up orientation)
    const CustomXAxisTick = (props: any) => {
        const { x, y, payload } = props;
        
        return (
            <g transform={`translate(${x},${y})`}>
                <text 
                    x={0} 
                    y={0} 
                    dy={-5} 
                    textAnchor="start" 
                    transform="rotate(90)"
                    fontSize={12}
                >
                    {payload.value}
                </text>
            </g>
        );
    };

    // Default colors to use if none provided
    const defaultColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe', '#00C49F'];
    
    // Choose highlight colors that aren't in the default colors
    // Using pale yellow and light cyan similar to the example image
    const highlightColors = {
        yellow: '#FFFACD', // Light yellow
        blue: '#E0FFFF',   // Light cyan
    };
    
    // Handle different types of colors config
    const configColors = Array.isArray(config.colors) ? config.colors : [];
    
    // Use provided colors or fall back to default colors
    const chartColors = colors?.length ? colors : 
                        configColors.length ? configColors : 
                        defaultColors;

    // Get the series keys (all keys except the x-axis key)
    const configSeriesKeys = Array.isArray(config.seriesKeys) ? config.seriesKeys : [];
    const seriesKeys: string[] = configSeriesKeys.length > 0 ? 
        configSeriesKeys : (data[0] ? Object.keys(data[0]).filter(key => key !== config.xAxis) : []);

    // Get series names with proper type handling
    const getSeriesName = (dataKey: string, index: number): string => {
        if (Array.isArray(config.seriesNames) && config.seriesNames[index]) {
            return config.seriesNames[index];
        }
        return dataKey.replace(/_/g, ' ');
    };

    // Get color for a series with proper type handling - loop through available colors
    const getSeriesColor = (index: number): string => {
        return chartColors[index % chartColors.length];
    };

    // Calculate bottom margin - increased to provide more space between x-axis title and legend
    const bottomMargin = config.xLabelUp ? 65 : 45;

    // Function to determine highlight color (can be extended to map different columns to different colors)
    const getHighlightColor = (columnName: string): string => {
        // Example logic - you can customize this based on your requirements
        // For demonstration, alternating between yellow and blue
        const columnIndex = parseInt(columnName);
        if (columnIndex <= 2 || (columnIndex >= 10 && columnIndex <= 12)) {
            return highlightColors.yellow;
        } else if (columnIndex >= 6 && columnIndex <= 7) {
            return highlightColors.blue;
        }
        return 'transparent'; // No highlight for other columns
    };

    return (
        <div className={`w-full h-[400px] ${className}`}>
            {config.title && (
                <h2 className="text-lg font-semibold text-center mb-2">
                    {config.title}
                </h2>
            )}
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 50, bottom: bottomMargin }}
                    barSize={20} // Smaller bars to accommodate multiple series
                    barGap={2}   // Small gap between bars in same group
                    className="w-full"
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    
                    {/* Add highlight areas for all columns that should be highlighted */}
                    {data.map((item, index) => {
                        const columnName = item[config.xAxis];
                        // Only create reference areas for specified columns or if no columns specified, use our logic
                        if (safeColumns.length === 0 || safeColumns.includes(columnName)) {
                            const highlightColor = safeColumns.length > 0 ? 
                                highlightColors.yellow : // Default to yellow if specific columns are provided
                                getHighlightColor(columnName);
                                
                            if (highlightColor !== 'transparent') {
                                return (
                                    <ReferenceArea 
                                        key={`highlight-${columnName}`}
                                        x1={columnName}
                                        x2={columnName}
                                        stroke="none"
                                        fill={highlightColor}
                                        fillOpacity={0.5}
                                        ifOverflow="extendDomain"
                                    />
                                );
                            }
                        }
                        return null;
                    })}
                    
                    <XAxis
                        dataKey={config.xAxis}
                        label={{ 
                            value: config.xAxis?.replace(/_/g, ' ') || '', 
                            position: 'insideBottom', 
                            offset: -5,
                            dy: config.xLabelUp ? 10 : 10 
                        }}
                        domain={config.xAxisMin !== undefined && config.xAxisMax !== undefined 
                            ? [config.xAxisMin, config.xAxisMax] 
                            : ['auto', 'auto']}
                        tick={config.xLabelUp ? CustomXAxisTick : undefined}
                        height={config.xLabelUp ? 110 : 40}
                        interval={0} // Show all ticks, no skipping
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis
                        label={{ value: config.yAxis?.replace(/_/g, ' ') || '', angle: -90, position: 'insideLeft', dx: -20, dy: 0, style: { textAnchor: 'middle' } }}
                        domain={config.yAxisMin !== undefined && config.yAxisMax !== undefined 
                            ? [config.yAxisMin, config.yAxisMax] 
                            : ['auto', 'auto']}
                    />
                    <Tooltip 
                        content={(props) => {
                            const { payload, label } = props;
                            if (!payload || payload.length === 0) return null;
                            
                            return (
                                <div className="p-2 bg-white border rounded shadow-md">
                                    <p className="text-sm font-semibold">{config.xAxis.replace(/_/g, ' ')}: {label}</p>
                                    {payload.map((entry: any, index: number) => (
                                        <p key={`tooltip-${index}`} className="text-sm" style={{ color: entry.color }}>
                                            {entry.name}: {entry.value}
                                        </p>
                                    ))}
                                </div>
                            );
                        }}
                    />
                    <Legend wrapperStyle={{ paddingTop: 15 }} />
                    
                    {/* Render a Bar component for each data series */}
                    {seriesKeys.map((dataKey: string, index: number) => (
                        <Bar
                            key={`bar-${dataKey}`}
                            name={getSeriesName(dataKey, index)}
                            dataKey={dataKey}
                            fill={getSeriesColor(index)}
                            isAnimationActive={true}
                        />
                    ))}
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}