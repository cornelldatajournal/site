import {
    ComposedChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Rectangle
} from 'recharts';
import { PlotData } from '@/types';
import React, { useState } from 'react';

interface BoxPlotProps {
    plotData: PlotData;
    className?: string;
}

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || payload.length === 0) return null;
    
    const data = payload[0].payload;
    
    return (
        <div className="p-2 bg-white border rounded shadow-md">
            <p className="text-sm font-semibold">{data.name}</p>
            <p className="text-sm">Min: {data.min.toFixed(3)}</p>
            <p className="text-sm">Q1: {data.q1.toFixed(3)}</p>
            <p className="text-sm">Median: {data.median.toFixed(3)}</p>
            <p className="text-sm">Q3: {data.q3.toFixed(3)}</p>
            <p className="text-sm">Max: {data.max.toFixed(3)}</p>
        </div>
    );
};

// Custom BoxPlot component that directly uses SVG
const BoxPlotComponent = ({ data, config }: { data: any[]; config: any }) => {
    // State to track which box is being hovered
    const [hoveredBox, setHoveredBox] = useState<number | null>(null);
    // State to track tooltip position and content
    const [tooltip, setTooltip] = useState<{visible: boolean; x: number; y: number; data: any} | null>(null);
    
    // Include padding to ensure all elements are visible
    const yAxisMin = config.yAxisMin !== undefined ? config.yAxisMin : Math.min(...data.map(d => d.min)) - 0.01;
    const yAxisMax = Math.max(config.yAxisMax !== undefined ? config.yAxisMax : Math.max(...data.map(d => d.max)) + 0.01, 0.06);
    const yRange = yAxisMax - yAxisMin;
    
    // Manually define tick values for better control
    const yTicks = [-0.02, -0.01, 0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06];
    
    // Add some padding at the top and bottom
    const topPadding = 20;
    const chartHeight = 280;
    
    // Transform a data value to pixel position
    const getYPosition = (value: number) => {
        // SVG coordinates start from top, so we invert
        return topPadding + chartHeight * (1 - (value - yAxisMin) / yRange);
    };

    const handleMouseEnter = (index: number, event: React.MouseEvent) => {
        setHoveredBox(index);
        // Get mouse position for tooltip
        const svgRect = (event.currentTarget as SVGElement).ownerSVGElement?.getBoundingClientRect();
        if (svgRect) {
            setTooltip({
                visible: true,
                x: event.clientX - svgRect.left,
                y: event.clientY - svgRect.top,
                data: data[index]
            });
        }
    };

    const handleMouseLeave = () => {
        setHoveredBox(null);
        setTooltip(null);
    };

    const handleMouseMove = (index: number, event: React.MouseEvent) => {
        if (hoveredBox === index) {
            const svgRect = (event.currentTarget as SVGElement).ownerSVGElement?.getBoundingClientRect();
            if (svgRect) {
                setTooltip({
                    visible: true,
                    x: event.clientX - svgRect.left,
                    y: event.clientY - svgRect.top,
                    data: data[index]
                });
            }
        }
    };
    
    return (
        <svg width="100%" height="370" style={{ marginTop: 20 }}>
            {/* Draw each box plot */}
            {data.map((entry, index) => {
                const centerX = 100 + (index * 200); // Position boxes evenly
                const boxWidth = 60;
                const isHovered = hoveredBox === index;
                
                // Add the name property for tooltip
                entry.name = entry[config.xAxis];
                
                return (
                    <g 
                        key={`boxplot-${index}`}
                        onMouseEnter={(e) => handleMouseEnter(index, e)}
                        onMouseLeave={handleMouseLeave}
                        onMouseMove={(e) => handleMouseMove(index, e)}
                        style={{ cursor: 'pointer' }}
                    >
                        {/* Box (Q1 to Q3) */}
                        <rect
                            x={centerX - boxWidth/2}
                            y={getYPosition(entry.q3)}
                            width={boxWidth}
                            height={getYPosition(entry.q1) - getYPosition(entry.q3)}
                            fill={isHovered ? (entry.highlightFill || "#a496ff") : (entry.fill || "#8884d8")}
                            stroke={isHovered ? "#000" : "#666"}
                            strokeWidth={isHovered ? 2 : 1}
                            opacity={isHovered ? 1 : 0.9}
                        />
                        
                        {/* Median line */}
                        <line
                            x1={centerX - boxWidth/2}
                            y1={getYPosition(entry.median)}
                            x2={centerX + boxWidth/2}
                            y2={getYPosition(entry.median)}
                            stroke="#000"
                            strokeWidth={isHovered ? 3 : 2}
                        />
                        
                        {/* Min whisker line */}
                        <line
                            x1={centerX}
                            y1={getYPosition(entry.q1)}
                            x2={centerX}
                            y2={getYPosition(entry.min)}
                            stroke={isHovered ? "#000" : "#666"}
                            strokeWidth={isHovered ? 2 : 1}
                        />
                        
                        {/* Max whisker line */}
                        <line
                            x1={centerX}
                            y1={getYPosition(entry.q3)}
                            x2={centerX}
                            y2={getYPosition(entry.max)}
                            stroke={isHovered ? "#000" : "#666"}
                            strokeWidth={isHovered ? 2 : 1}
                        />
                        
                        {/* Min whisker cap */}
                        <line
                            x1={centerX - boxWidth/4}
                            y1={getYPosition(entry.min)}
                            x2={centerX + boxWidth/4}
                            y2={getYPosition(entry.min)}
                            stroke={isHovered ? "#000" : "#666"}
                            strokeWidth={isHovered ? 2 : 1}
                        />
                        
                        {/* Max whisker cap */}
                        <line
                            x1={centerX - boxWidth/4}
                            y1={getYPosition(entry.max)}
                            x2={centerX + boxWidth/4}
                            y2={getYPosition(entry.max)}
                            stroke={isHovered ? "#000" : "#666"}
                            strokeWidth={isHovered ? 2 : 1}
                        />
                        
                        {/* X-axis label */}
                        <text
                            x={centerX}
                            y={topPadding + chartHeight + 20}
                            textAnchor="middle"
                            fontSize={12}
                            fontWeight={isHovered ? "bold" : "normal"}
                        >
                            {entry[config.xAxis]}
                        </text>
                    </g>
                );
            })}
            
            {/* X-axis */}
            <line
                x1={50}
                y1={topPadding + chartHeight}
                x2={400}
                y2={topPadding + chartHeight}
                stroke="#666"
            />
            
            {/* X-axis title */}
            <text
                x={225}
                y={topPadding + chartHeight + 50}
                textAnchor="middle"
                fontSize={12}
            >
                {config.xAxis.replace(/_/g, ' ')}
            </text>
            
            {/* Zero line if needed */}
            {yAxisMin < 0 && yAxisMax > 0 && (
                <line
                    x1={50}
                    y1={getYPosition(0)}
                    x2={400}
                    y2={getYPosition(0)}
                    stroke="#666"
                    strokeDasharray="4"
                />
            )}
            
            {/* Y-axis */}
            <line
                x1={50}
                y1={topPadding}
                x2={50}
                y2={topPadding + chartHeight}
                stroke="#666"
            />
            
            {/* Y-axis ticks and labels with manual values */}
            {yTicks.map((value, i) => {
                // Skip ticks outside the range
                if (value < yAxisMin || value > yAxisMax) return null;
                
                return (
                    <g key={`y-tick-${i}`}>
                        <line
                            x1={45}
                            y1={getYPosition(value)}
                            x2={50}
                            y2={getYPosition(value)}
                            stroke="#666"
                        />
                        <text
                            x={40}
                            y={getYPosition(value) + 4}
                            textAnchor="end"
                            fontSize={10}
                        >
                            {value.toFixed(2)}
                        </text>
                    </g>
                );
            })}
            
            {/* Y-axis label */}
            <text
                x={15}
                y={topPadding + chartHeight/2}
                textAnchor="middle"
                transform={`rotate(-90, 15, ${topPadding + chartHeight/2})`}
                fontSize={12}
            >
                {config.yAxis.replace(/_/g, ' ')}
            </text>

            {/* Custom tooltip */}
            {tooltip && tooltip.visible && (
                <foreignObject 
                    x={tooltip.x + 10} 
                    y={tooltip.y - 80} 
                    width="150" 
                    height="150"
                >
                    <div className="p-2 bg-white border rounded shadow-md text-xs">
                        <p className="font-semibold">{tooltip.data[config.xAxis]}</p>
                        <p>Min: {tooltip.data.min.toFixed(3)}</p>
                        <p>Q1: {tooltip.data.q1.toFixed(3)}</p>
                        <p>Median: {tooltip.data.median.toFixed(3)}</p>
                        <p>Q3: {tooltip.data.q3.toFixed(3)}</p>
                        <p>Max: {tooltip.data.max.toFixed(3)}</p>
                    </div>
                </foreignObject>
            )}
        </svg>
    );
};

export default function BoxPlot({ plotData, className }: BoxPlotProps) {
    const { data, config } = plotData;
    
    return (
        <div className={`w-full h-[400px] ${className}`}>
            {config.title && (
                <h2 className="text-lg font-semibold text-center mb-2">
                    {config.title}
                </h2>
            )}
            <ResponsiveContainer width="100%" height="100%">
                <div className="w-full h-full overflow-visible">
                    <BoxPlotComponent data={data} config={config} />
                </div>
            </ResponsiveContainer>
        </div>
    );
}
