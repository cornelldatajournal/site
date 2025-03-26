"use client";

import React, { useEffect, useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface LatexRendererProps {
  expression: string;
  displayMode?: boolean;
  className?: string;
}

export default function LatexRenderer({ 
  expression, 
  displayMode = false,
  className = ''
}: LatexRendererProps) {
  const [renderedLatex, setRenderedLatex] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const renderResult = katex.renderToString(expression, {
        throwOnError: false,
        displayMode: displayMode,
      });
      setRenderedLatex(renderResult);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to render LaTeX');
      setIsLoading(false);
      console.error('LaTeX Rendering Error:', err);
    }
  }, [expression, displayMode]);

  if (isLoading) {
    return <span className={`${className} opacity-50`}>Loading...</span>;
  }

  if (error) {
    return <span className={`${className} text-red-500`}>{error}</span>;
  }

  return (
    <span 
      className={`${className} latex-inline`}
      dangerouslySetInnerHTML={{ __html: renderedLatex }} 
    />
  );
}