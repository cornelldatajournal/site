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
    const refs = Array.from(footnotes).map((footnote) => ({
      id: footnote.id.replace('user-content-fn-', ''),
      text: footnote.textContent || '',
    }));
    setReferences(refs);

    // Add click handlers to footnote references
    const refLinks = document.querySelectorAll('a[href^="#user-content-fn-"]');
    refLinks.forEach((link) => {
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
    <div className="flex justify-center min-h-screen">
      <div className="w-full max-w-5xl px-4 py-8">
        {/* Header Section */}
        <header className="mb-8">
          <div className="text-xl text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
            {article.section}
          </div>
          <div className="flex lg:flex-col gap-4 lg:max-w-[65ch]">
            <h1 className="text-5xl mb-2 font-eb-garamond">{article.title}</h1>
            <h2 className="text-xl mb-4 font-space-mono">{article.description}</h2>
            <div className="flex gap-2 items-center font-eb-garamond">
              <span className="text-md">
                By {article.author.join(', ')}
              </span>
            </div>
            <time className="text-sm text-black uppercase font-space-mono font-medium" dateTime={article.publishedDate}>
              {new Date(article.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 font-helvetica">
          {/* Article Content */}
          <article className="flex-1 prose dark:prose-invert max-w-none lg:max-w-[65ch] font-regular">
            {children}
          </article>

          {/* References Sidebar */}
          {references.length > 0 && (
            <aside className="lg:w-72 shrink-0">
              <div className="sticky top-8">
                <div className="flex flex-col gap-3">
                  {references.map((ref) => (
                    <div
                      key={ref.id}
                      id={`ref-${ref.id}`}
                      className={cn(
                        "text-sm p-3 rounded-lg transition-colors font-space-mono",
                        activeRef === ref.id
                          ? "bg-neutral-100 dark:bg-neutral-800"
                          : "hover:bg-neutral-50 dark:hover:bg-neutral-900"
                      )}
                    >
                      <div className="grid grid-cols-[auto,1fr] gap-4">
                        <span className="font-bold">{ref.id}</span>
                        <span>{ref.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
