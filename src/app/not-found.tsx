import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Custom404() {
    return (
        <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4 font-space-grotesk">404 - Data Not Found</h1>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6 font-space-grotesk">
                Looks like this data point is an outlier - it does not exist in our dataset!
            </p>
            <Button asChild variant="outline" className="max-w-md mx-auto font-helvetica">
                <Link href="/">
                    Return to homepage
                </Link>
            </Button>
        </div>
    );
}