import React, { useState } from 'react';
import { PlotData } from '@/types';
import { ImageLoader } from '../images/ImageLoader';

interface ButtonImageProps {
    plotData: PlotData;
    className?: string;
}

export default function ButtonImage({ plotData, className }: ButtonImageProps) {
    const { data, config } = plotData;
    const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
    
    // Extract the image path from config
    const imagePath = config.imagePath || '';

    return (
        <div className={`relative ${className || ''}`}>
            {config.title && (
                <h2 className="text-lg font-semibold text-center mb-2">
                    {config.title}
                </h2>
            )}
            
            <div className="relative inline-block">
                <ImageLoader 
                    imagePath={imagePath.toString()}
                    alt={config.title ? config.title.toString() : "Interactive image"}
                    width={typeof config.width === 'number' ? config.width : 800}
                    height={typeof config.height === 'number' ? config.height : 600}
                />
                
                {/* Overlay buttons at the specified coordinates */}
                {data.map((point, index) => (
                    <div 
                        key={index}
                        className="absolute w-6 h-6 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110"
                        style={{ 
                            left: `${point.x}%`, 
                            top: `${point.y}%`,
                            zIndex: activeTooltip === index ? 30 : 10
                        }}
                        onMouseEnter={() => setActiveTooltip(index)}
                        onMouseLeave={() => setActiveTooltip(null)}
                    >
                        <span className="text-white text-xs font-bold">{index + 1}</span>
                        
                        {/* Tooltip */}
                        {activeTooltip === index && (
                            <div 
                                className="absolute z-50 w-48 p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-md shadow-lg text-sm transform translate-y-8"
                                style={{ pointerEvents: 'none' }}  // Prevent tooltip from blocking mouse events
                            >
                                {point.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
