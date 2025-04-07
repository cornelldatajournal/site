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
  initialPosition: number;
}

export function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const [references, setReferences] = useState<Reference[]>([]);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Early return if articleRef is not available
    if (!articleRef.current) return;

    // Safely get the article rectangle
    const articleRect = articleRef.current.getBoundingClientRect();

    // Calculate initial positions for all references
    const footnotes = document.querySelectorAll('[id^="user-content-fn-"]');
    const refs: Reference[] = Array.from(footnotes)
      .map((footnote) => {
        const id = footnote.id.replace('user-content-fn-', '');
        
        // Safely find the reference element
        const referenceElement = articleRef.current
          ? articleRef.current.querySelector(`[id^="user-content-fnref-${id}"]`)
          : null;
        
        let initialPosition = 0;
        if (referenceElement) {
          const elementRect = referenceElement.getBoundingClientRect();
          initialPosition = elementRect.top - articleRect.top;
        }

        return {
          id,
          text: (footnote.textContent || '').replace('↩', ''),
          initialPosition
        };
      })
      .filter(ref => ref.text.trim() !== ''); // Remove any empty references

    // Comprehensive overlap resolution
    const VERTICAL_SPACING = 150;
    const adjustedRefs: Reference[] = [];

    for (const ref of refs) {
      let finalPosition = ref.initialPosition;
      let isOverlapping = true;
      let iterationCount = 0;

      while (isOverlapping && iterationCount < 100) {
        // Check against all previously positioned references
        isOverlapping = adjustedRefs.some(adjustedRef => 
          Math.abs(adjustedRef.initialPosition - finalPosition) < VERTICAL_SPACING
        );

        if (isOverlapping) {
          finalPosition += VERTICAL_SPACING;
        }

        iterationCount++;
      }

      adjustedRefs.push({
        ...ref,
        initialPosition: finalPosition
      });
    }

    setReferences(adjustedRefs);

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
                    top: ref.initialPosition,
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