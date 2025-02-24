import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    ReferenceLine
} from 'recharts';
import { PlotData } from '@/types';

interface LinePlotProps {
    plotData: PlotData;
    className?: string;
    referenceX?: (number | string)[] | number | string;
}

export default function LinePlot({ plotData, className, referenceX }: LinePlotProps) {
    const { data, config } = plotData;

    // console.log("ReferenceX: ", referenceX);

    // Convert single value to array for consistent handling
    const referenceValues = referenceX 
        ? Array.isArray(referenceX) 
            ? referenceX 
            : [referenceX]
        : [];

    return (
        <div className={`w-full h-[400px] ${className}`}>
            {config.title && (
                <h2 className="text-lg font-semibold text-center mb-0">
                    {config.title}
                </h2>
            )}
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 35, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey={config.xAxis}
                        label={{ 
                            value: config.xAxis?.replace(/_/g, ' ') || '', 
                            position: 'bottom',
                            offset: -5
                        }}
                        type="number"
                        allowDataOverflow={true}
                        domain={['dataMin', 'dataMax']}
                        // tick={{ dy: 10 }}
                    />
                    <YAxis
                        label={{ 
                            value: config.yAxis?.replace(/_/g, ' ') || '', 
                            angle: -90, 
                            position: 'left',
                            style: { textAnchor: 'middle' }
                        }}
                    />
                    <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }} 
                        formatter={(value, name) => [
                            value, 
                            typeof name === 'string' ? name.replace(/_/g, ' ') : name
                        ]}
                    />
                    {referenceValues.map((refValue, index) => (
                        <ReferenceLine
                            key={`ref-line-${index}`}
                            x={refValue}
                            stroke={`hsl(${(index * 60) % 360}, 70%, 50%)`} // Different color for each line
                            strokeDasharray="3 3"
                            isFront={true}
                            label={{
                                value: `Reference: ${refValue}`,
                                position: 'top',
                                dy: -10 - index * 15 // Move labels up to prevent overlap
                            }}
                        />
                    ))}
                    <Line
                        type="monotone"
                        dataKey={config.yAxis}
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
