"use client"
import React, { useEffect, useState, useRef } from 'react';
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
  const [references, setReferences] = useState<Reference[]>([]);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Find all footnote references in the content
    const footnotes = document.querySelectorAll('[id^="user-content-fn-"]');
    const refs = Array.from(footnotes).map((footnote) => ({
      id: footnote.id.replace('user-content-fn-', ''),
      text: (footnote.textContent || '').replace('↩', ''),
    }));
    setReferences(refs);

    // Add click handlers to footnote references
    const refLinks = document.querySelectorAll('a[href^="#user-content-fn-"]');
    refLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  }, []);

  const getReferencePosition = (id: string) => {
    if (!articleRef.current) return 0;
    const link = articleRef.current.querySelector(`a[href="#user-content-fn-${id}"]`);
    if (!link) return 0;
    const articleRect = articleRef.current.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();
    return linkRect.top - articleRect.top;
  };

  return (
    <div className="flex justify-center min-h-screen relative">
      <div className="w-full max-w-[100ch] mx-auto py-8 flex gap-16">
        {/* Main Content */}
        <div className="flex-1 max-w-[65ch]" ref={articleRef}>
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2">
              <div className="text-xl text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
                {article.section}
              </div>
              <div className="text-xl text-black dark:text-neutral-400 mb-2 font-space-mono">•</div>
              <time className="text-xl text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-medium" dateTime={article.publishedDate}>
                {new Date(article.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl mb-2 font-eb-garamond">{article.title}</h1>
              <h2 className="text-xl mb-4 font-space-mono">{article.description}</h2>
              <div className="flex gap-2 font-eb-garamond">
                <span className="text-md">
                  By {article.author.join(', ')}
                </span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose dark:prose-invert font-helvetica font-normal">
            {children}
          </article>
        </div>

        {/* References Column */}
        {references.length > 0 && (
          <aside className="w-[35ch] relative hidden lg:block">
            <div className="relative">
              {references.map((ref) => (
                <div
                  key={ref.id}
                  style={{
                    position: 'absolute',
                    top: getReferencePosition(ref.id),
                    width: '100%'
                  }}
                  className="p-3 rounded-lg font-space-mono text-[12px]"
                >
                  <div className="flex gap-4">
                    <span className="font-bold shrink-0">{ref.id}</span>
                    <span className="text-neutral-600 dark:text-neutral-400">{ref.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}