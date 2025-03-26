import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    Cell
} from 'recharts';
import { PlotData } from '@/types';
import React from 'react';

interface BarPlotProps {
    plotData: PlotData;
    className?: string;
}

export default function BarPlot({ plotData, className }: BarPlotProps) {
    const { data, config } = plotData;

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

    // Console log for debugging
    // console.log("Rendering BarPlot with data:", data);
    //console.log("Config:", config);

    // Default colors if not provided in data
    const defaultColors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe'];

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
                    margin={{ top: 20, right: 30, left: 50, bottom: config.xLabelUp ? 50 : 30 }}
                    barSize={30} // Fixed barSize regardless of xLabelUp
                    barGap={5}   // Fixed barGap regardless of xLabelUp
                    className="w-full"
                >
                    <CartesianGrid strokeDasharray="3 3" />
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
                        content={({ payload }) => {
                            if (!payload || payload.length === 0) return null;
                            const dataPoint = payload[0];
                    
                            return (
                                <div className="p-2 bg-white border rounded shadow-md">
                                    <p className="text-sm font-semibold">{config.xAxis.replace(/_/g, ' ')}: {dataPoint.payload[config.xAxis]}</p>
                                    <p className="text-sm">{config.yAxis.replace(/_/g, ' ')}: {dataPoint.value}</p>
                                </div>
                            );
                        }}
                    />
                    <Bar
                        name={config.title}
                        dataKey={config.yAxis || 'value'}
                        fill="#8884d8"
                        isAnimationActive={true}
                    >
                        {data.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={entry.fill || defaultColors[index % defaultColors.length]} 
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
