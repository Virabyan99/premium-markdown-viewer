'use client';

import { useRef } from 'react';

export default function FileDrop({ onFileRead }: { onFileRead: (content: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.md')) {
      alert('Please upload a .md file only.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result as string;
      onFileRead(text);
    };
    reader.readAsText(file);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center w-full">
      <p className="text-gray-600">Drag & drop a `.md` file, or click to select</p>
      <button
        onClick={() => inputRef.current?.click()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Select Markdown File
      </button>
      <input
        type="file"
        accept=".md"
        onChange={handleFileSelect}
        ref={inputRef}
        hidden
      />
    </div>
  );
}