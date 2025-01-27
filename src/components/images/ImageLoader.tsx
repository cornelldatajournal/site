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

    // Convert the pathname to a valid URL
    const getImageUrl = (path: string) => {
        // Remove leading slash if present
        const cleanPath = path.startsWith('/') ? path.slice(1) : path;
        
        // If it's already a full URL, return it as is
        if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
            return cleanPath;
        }

        // If it's a relative path, construct the full URL
        // Using process.env.NEXT_PUBLIC_BASE_URL if defined, otherwise use relative path
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
        return `${baseUrl}/${cleanPath}`;
    };

    // console.log("Image path: ", imagePath);

    if (error) {
        return (
            <div className="p-4 border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-900/50 rounded-lg">
                <p className="text-sm text-red-800 dark:text-red-200">
                    Failed to load image: {imagePath}
                </p>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <Image
                src={`/${imagePath.replace('public/', '')}`}
                alt={alt}
                width={width}
                height={height}
                className="rounded-lg"
                onError={() => setError(true)}
            />
        </div>
    );
}