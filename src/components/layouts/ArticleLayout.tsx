"use client"
import React, { useEffect, useState, useRef } from 'react';
import { Article } from '@/types';

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

    // Add scroll listener
    const handleScroll = () => {
      // Force a re-render to update reference positions
      setReferences(prev => [...prev]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getReferencePosition = (id: string) => {
    if (!articleRef.current) return 0;
    const element = articleRef.current.querySelector(`[id^="user-content-fnref-${id}"]`);
    if (!element) return 0;
    const articleRect = articleRef.current.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    return elementRect.top - articleRect.top;
  };

  return (
    <div className="flex justify-center min-h-screen relative">
      <div className="w-full max-w-[100ch] mx-auto py-8 px-4 sm:px-0 flex gap-16">
        {/* Main Content */}
        <div className="flex-1 max-w-[65ch]" ref={articleRef}>
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2">
              <div className="text-base sm:text-xl text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-bold">
                {article.section}
              </div>
              <div className="text-base sm:text-xl text-black dark:text-neutral-400 mb-2 font-space-mono">•</div>
              <time className="text-base sm:text-xl text-black dark:text-neutral-400 mb-2 font-space-mono uppercase font-medium" dateTime={article.publishedDate}>
                {new Date(article.publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: 'UTC'
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
              <div className="flex gap-2 font-eb-garamond">
                <span className="text-md">
                  Edited by {article.editors.join(', ')}
                </span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose dark:prose-invert font-helvetica font-normal">
            {children}
          </article>

          {/* Mobile References */}
          {references.length > 0 && (
            <div className="mt-12 lg:hidden">
              <h2 className="text-2xl font-eb-garamond mb-6">References</h2>
              <div className="space-y-4">
                {references.map((ref) => (
                  <div key={ref.id} className="font-space-mono text-sm">
                    <div className="flex gap-4">
                      <span className="font-bold shrink-0">[{ref.id}]</span>
                      <span className="text-neutral-600 dark:text-neutral-400 break-all overflow-wrap-anywhere">{ref.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
                    <span className="text-neutral-600 dark:text-neutral-400 break-words whitespace-pre-wrap max-w-[26ch]">{ref.text}</span>
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