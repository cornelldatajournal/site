export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-8 animate-pulse">
            <div className="h-8 w-48 bg-neutral-200 dark:bg-neutral-800 rounded mb-4" />
            <div className="h-4 w-96 bg-neutral-200 dark:bg-neutral-800 rounded mb-8" />
            <div className="space-y-4">
                <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="h-4 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded" />
                <div className="h-4 w-5/6 bg-neutral-200 dark:bg-neutral-800 rounded" />
            </div>
        </div>
    );
} 