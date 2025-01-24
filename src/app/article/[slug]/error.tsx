'use client';

export default function Error() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-neutral-600 dark:text-neutral-400">
                Failed to load the article. Please try again later.
            </p>
        </div>
    );
} 