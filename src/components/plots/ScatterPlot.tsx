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
}

export default function ScatterPlot({ plotData, className }: ScatterPlotProps) {
    const { data, config } = plotData;

    return (
        <div className={`w-full h-[400px] ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey={config.xAxis}
                        type="number"
                        label={{ value: config.xAxis.replace('_', ' '), position: 'bottom' }}
                        domain={config.xAxisMin !== undefined && config.xAxisMax !== undefined 
                            ? [config.xAxisMin, config.xAxisMax] 
                            : ['auto', 'auto']}
                    />
                    <YAxis
                        dataKey={config.yAxis}
                        type="number"
                        label={{ value: config.yAxis.replace('_', ' '), angle: -90, position: 'left' }}
                        domain={config.yAxisMin !== undefined && config.xAxisMax !== undefined 
                            ? [config.yAxisMin, config.xAxisMax] 
                            : ['auto', 'auto']}
                    />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend 
                        verticalAlign="top"
                    />
                    <Scatter
                        name={config.title}
                        data={data}
                        fill="#8884d8"
                    />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
} 