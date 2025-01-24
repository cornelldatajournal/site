"use client"
import React, { useEffect, useState } from 'react';
import { Article } from '@/types';
import { cn } from '@/lib/utils';

interface ArticleLayoutProps {
  article: Article;
  children: React.ReactNode;
}

interface Reference {
  id: string;
  text: string;
}

export function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const [activeRef, setActiveRef] = React.useState<string | null>(null);
  const [references, setReferences] = useState<Reference[]>([]);

  useEffect(() => {
    // Find all footnote references in the content
    const footnotes = document.querySelectorAll('[id^="user-content-fn-"]');
    const refs = Array.from(footnotes).map(footnote => ({
      id: footnote.id.replace('user-content-fn-', ''),
      text: footnote.textContent || ''
    }));
    setReferences(refs);

    // Add click handlers to footnote references
    const refLinks = document.querySelectorAll('a[href^="#user-content-fn-"]');
    refLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const refId = link.getAttribute('href')?.replace('#user-content-fn-', '');
        if (refId) {
          setActiveRef(refId);
          const element = document.getElementById(`user-content-fn-${refId}`);
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="mb-8 border-b pb-8">
        <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          {article.section}
        </div>
        <h1 className="text-4xl font-bold mb-4 font-geist-sans">{article.title}</h1>
        <div className="flex flex-col gap-2">
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {article.description}
          </p>
          <div className="flex gap-2 items-center">
            {article.author.map((author: string, idx: number) => (
              <React.Fragment key={author}>
                <span className="text-sm font-medium">{author}</span>
                {idx < article.author.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
          <time className="text-sm text-neutral-500" dateTime={article.publishedDate}>
            {new Date(article.publishedDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Article Content */}
        <article className="flex-1 prose dark:prose-invert max-w-none lg:max-w-[65ch]">
          {children}
        </article>

        {/* References Sidebar */}
        {references.length > 0 && (
          <aside className="lg:w-72 shrink-0">
            <div className="sticky top-8">
              <h3 className="font-bold mb-4 text-lg">References</h3>
              <div className="flex flex-col gap-3">
                {references.map((ref) => (
                  <div
                    key={ref.id}
                    id={`ref-${ref.id}`}
                    className={cn(
                      "text-sm p-3 rounded-lg transition-colors",
                      activeRef === ref.id
                        ? "bg-neutral-100 dark:bg-neutral-800"
                        : "hover:bg-neutral-50 dark:hover:bg-neutral-900"
                    )}
                  >
                    <span className="font-medium">[{ref.id}]</span> {ref.text}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
} 