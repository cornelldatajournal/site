import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Rectangle,
    Cell
} from 'recharts';
import { PlotData } from '@/types';
import React from 'react';

interface HeatmapProps {
    plotData: PlotData;
    className?: string;
    colors?: string[];
    cellSize?: { width: number; height: number };
}

// Custom shape that renders rectangles for the heatmap cells with values inside
const CustomizedCell = (props: any) => {
    const { x, y, width, height, value, fill } = props;
    
    // Determine text color based on background darkness
    const rgb = fill.replace(/[^\d,]/g, '').split(',');
    const brightness = rgb.length === 3 
        ? (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
        : 128;
    const textColor = brightness > 125 ? '#000' : '#fff';
    
    // Adjust the y position to align with y-axis labels
    const adjustedY = y - height / 2;
    
    return (
        <g>
            <Rectangle
                x={x}
                y={adjustedY}
                width={width}
                height={height}
                fill={fill}
                stroke="#fff"
                strokeWidth={1}
            />
            <text
                x={x + width / 2}
                y={adjustedY + height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={textColor}
                fontSize={width > 40 ? 12 : 10}
            >
                {typeof value === 'number' ? value.toFixed(1) : value}
            </text>
        </g>
    );
};

export default function Heatmap({ plotData, className, colors, cellSize = { width: 30, height: 30 } }: HeatmapProps) {
    const { data, config } = plotData;
    
    // Find unique x and y values to create the grid
    const xValues = [...new Set(data.map(item => {
        const key = typeof config.xAxis === 'string' ? config.xAxis : 'x';
        return item[key];
    }))];
    
    const yValues = [...new Set(data.map(item => {
        const key = typeof config.yAxis === 'string' ? config.yAxis : 'y';
        return item[key];
    }))];
    
    // Safely determine the colorAxis property name
    const colorAxisKey = typeof config.colorAxis === 'string' ? config.colorAxis : 'value';
    
    // Get min and max values from the data - ensure numeric values
    const numericValues: number[] = [];
    
    // Safely collect numeric values
    data.forEach(item => {
        if (typeof item[colorAxisKey] === 'number') {
            numericValues.push(item[colorAxisKey] as number);
        }
    });
    
    const minValue = typeof config.colorMin === 'number' 
        ? config.colorMin 
        : numericValues.length > 0 ? Math.min(...numericValues) : 0;
        
    const maxValue = typeof config.colorMax === 'number'
        ? config.colorMax
        : numericValues.length > 0 ? Math.max(...numericValues) : 100;
    
    // Color scale function - generate a color based on the value
    const getColor = (value: number) => {
        // Use custom colors if provided, otherwise use a default red gradient
        if (colors && colors.length >= 2) {
            const ratio = (value - minValue) / (maxValue - minValue);
            const colorIndex = Math.floor(ratio * (colors.length - 1));
            return colors[Math.min(colorIndex, colors.length - 1)];
        }
        
        // Default color scale: red gradient (from light to dark)
        const heatColors = [
            '#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', 
            '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'
        ];
        
        if (value === undefined || isNaN(value)) return '#f5f5f5';
        
        const ratio = Math.max(0, Math.min(1, (value - minValue) / (maxValue - minValue)));
        const colorIndex = Math.floor(ratio * (heatColors.length - 1));
        return heatColors[colorIndex];
    };

    // Transform data for the heatmap with explicit type handling
    const transformedData = data.map(item => {
        const xKey = typeof config.xAxis === 'string' ? config.xAxis : 'x';
        const yKey = typeof config.yAxis === 'string' ? config.yAxis : 'y';
        
        let value: number = 0;
        if (typeof item[colorAxisKey] === 'number') {
            value = item[colorAxisKey] as number;
        }
        
        return {
            ...item,
            x: item[xKey],
            y: item[yKey],
            value: value,
            fill: getColor(value)
        };
    });

    // Custom tick component for vertical labels
    const CustomXAxisTick = (props: any) => {
        const { x, y, payload } = props;
        
        return (
            <g transform={`translate(${x},${y})`}>
                <text 
                    x={30} 
                    y={-3}
                    dx={-20} 
                    dy={-5} 
                    textAnchor="start" 
                    transform="rotate(45)"
                    fontSize={12}
                >
                    {payload.value}
                </text>
            </g>
        );
    };

    // Custom Y-axis tick component to ensure alignment with cells
    const CustomYAxisTick = (props: any) => {
        const { x, y, payload } = props;
        
        return (
            <g transform={`translate(${x},${y})`}>
                <text
                    x={-8}
                    y={0}
                    dy={5}
                    textAnchor="end"
                    fontSize={12}
                >
                    {payload.value}
                </text>
            </g>
        );
    };

    // Get safe display names for axes
    const getDisplayName = (key: any): string => {
        return typeof key === 'string' ? key.replace(/_/g, ' ') : '';
    };

    const xAxisName = getDisplayName(config.xAxis);
    const yAxisName = getDisplayName(config.yAxis);
    const colorAxisName = getDisplayName(config.colorAxis) || 'Value';

    return (
        <div className={`w-full h-[400px] ${className}`}>
            {config.title && (
                <h2 className="text-lg font-semibold text-center mb-2">
                    {config.title}
                </h2>
            )}
            
            {/* Color legend */}
            <div className="flex justify-center items-center mb-2">
                <div className="flex items-center text-xs">
                    <span>{minValue}</span>
                    <div className="flex mx-2">
                        {Array.from({ length: 9 }).map((_, i) => {
                            const ratio = i / 8;
                            const value = minValue + (maxValue - minValue) * ratio;
                            return (
                                <div 
                                    key={i} 
                                    className="w-5 h-4" 
                                    style={{ backgroundColor: getColor(value) }}
                                />
                            );
                        })}
                    </div>
                    <span>{maxValue}</span>
                </div>
            </div>
            
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                    margin={{ 
                        top: 20, 
                        right: 30, 
                        left: 70, 
                        bottom: config.xLabelUp ? 100 : 30 
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="x" 
                        type="category" 
                        allowDuplicatedCategory={false}
                        name={xAxisName}
                        tick={config.xLabelUp ? CustomXAxisTick : undefined}
                        height={config.xLabelUp ? 40 : 40}
                        label={{ 
                            value: xAxisName, 
                            position: 'insideBottom', 
                            offset: -5,
                            dy: config.xLabelUp ? 30 : 10 
                        }}
                        interval={0}
                    />
                    <YAxis 
                        dataKey="y" 
                        type="category"
                        allowDuplicatedCategory={false}
                        name={yAxisName}
                        tick={<CustomYAxisTick />}
                        label={{ 
                            value: yAxisName, 
                            angle: -90, 
                            position: 'insideLeft', 
                            dx: -60,
                            dy: 50 
                        }}
                        interval={0}
                    />
                    <Tooltip
                        content={({ payload }) => {
                            if (!payload || payload.length === 0) return null;
                            const dataPoint = payload[0].payload;
                            
                            return (
                                <div className="p-2 bg-white border rounded shadow-md">
                                    <p className="text-sm font-semibold">
                                        {xAxisName}: {dataPoint.x}
                                    </p>
                                    <p className="text-sm">
                                        {yAxisName}: {dataPoint.y}
                                    </p>
                                    <p className="text-sm">
                                        {colorAxisName}: {dataPoint.value}
                                    </p>
                                </div>
                            );
                        }}
                    />
                    <Scatter
                        name={config.title}
                        data={transformedData}
                        shape={<CustomizedCell width={cellSize.width} height={cellSize.height} />}
                        isAnimationActive={true}
                    >
                        {transformedData.map((entry, index) => (
                            <Cell 
                                key={`cell-${index}`} 
                                fill={entry.fill} 
                            />
                        ))}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
}