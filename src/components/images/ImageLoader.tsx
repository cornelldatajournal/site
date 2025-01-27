"use client";
import Image from 'next/image';
import { useState } from 'react';

interface ImageLoaderProps {
    imagePath: string;
    alt?: string;
    className?: string;
    width?: number;
    height?: number;
}

export function ImageLoader({
    imagePath,
    alt = "",
    className = "",
    width = 800,
    height = 600
}: ImageLoaderProps) {
    const [error, setError] = useState(false);

    // Clean up the image path
    const cleanImagePath = imagePath.replace(/^(public\/|\/)/g, '');

    if (error) {
        return (
            <div className="p-4 border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-900/50 rounded-lg">
                <p className="text-sm text-red-800 dark:text-red-200">
                    Failed to load image: {cleanImagePath}
                </p>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <Image
                src={`site/${cleanImagePath}`}
                alt={alt}
                width={width}
                height={height}
                className="rounded-lg"
                onError={() => setError(true)}
            />
        </div>
    );
}