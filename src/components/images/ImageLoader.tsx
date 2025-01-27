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

    // Clean up the image path - remove leading 'public/' or '/' but keep the rest of the path intact
    const cleanImagePath = imagePath.replace(/^(public\/|\/)/g, '');

    // For production, use the GitHub Pages URL with /site/ prefix
    const baseUrl = process.env.NODE_ENV === 'production'
        ? 'https://cornelldatajournal.github.io/site'
        : '';

    const imageUrl = `${baseUrl}/${cleanImagePath}`;

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
                src={imageUrl}
                alt={alt}
                width={width}
                height={height}
                className="rounded-lg"
                onError={() => setError(true)}
            />
        </div>
    );
}