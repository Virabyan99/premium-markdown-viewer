'use client';

import { useState } from 'react';
import FileDrop from '@/components/FileDrop';
import MarkdownPreview from '@/components/MarkdownPreview';

export default function HomePage() {
  const [rawMarkdown, setRawMarkdown] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl space-y-6">
        <FileDrop onFileRead={setRawMarkdown} />

        {rawMarkdown && (
          <>
            <div className="text-sm text-gray-500">Markdown Preview:</div>
            <MarkdownPreview markdown={rawMarkdown} />
          </>
        )}
      </div>
    </main>
  );
}