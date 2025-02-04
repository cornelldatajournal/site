import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import { PlotData } from '@/types';

interface ScatterPlotProps {
    plotData: PlotData;
    className?: string;
    colors?: string[];
}

export default function ScatterPlot({ plotData, className, colors }: ScatterPlotProps) {
    const { data, config } = plotData;

    const defaultColors = ['#add8e6'];

    const lineColors = colors || defaultColors;

    return (
        <div className={`w-full h-[400px] ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey={config.xAxis}
                        type="number"
                        label={{ value: config.xAxis?.replace('_', ' '), position: 'bottom' }}
                    />
                    <YAxis
                        dataKey={config.yAxis}
                        type="number"
                        label={{ value: config.yAxis?.replace('_', ' '), angle: -90, position: 'left' }}
                    />
                    <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }} 
                        formatter={(value, name) => [
                            value, 
                            typeof name === 'string' ? name.replace('_', ' ') : name
                        ]}
                    />
                    <Legend 
                        verticalAlign="top"
                        formatter={(value) => value.replace('_', ' ')}
                    />
                    <Scatter
                        name={config.title}
                        data={data}
                        fill={lineColors[0]}
                    />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
}