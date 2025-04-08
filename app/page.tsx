'use client';

import { useState } from 'react';
import FileDrop from '@/components/FileDrop';

export default function HomePage() {
  const [rawMarkdown, setRawMarkdown] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-3xl space-y-6">
        <FileDrop onFileRead={setRawMarkdown} />

        {rawMarkdown && (
          <div className="bg-gray-100 p-4 rounded text-sm whitespace-pre-wrap font-mono max-h-[400px] overflow-auto border">
            {rawMarkdown}
          </div>
        )}
      </div>
    </main>
  );
}