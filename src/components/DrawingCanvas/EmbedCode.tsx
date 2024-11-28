import React, { useState } from 'react';
import { Copy } from 'lucide-react';

interface EmbedCodeProps {
  width: number;
  height: number;
  backgroundImage?: string;
}

export default function EmbedCode({ width, height, backgroundImage }: EmbedCodeProps) {
  const [copied, setCopied] = useState(false);
  
  const embedCode = `<iframe
  src="${window.location.origin}/embed?bg=${encodeURIComponent(backgroundImage || '')}"
  width="${width}"
  height="${height + 100}"
  frameborder="0"
  allowtransparency="true"
></iframe>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full mt-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold">Embed Code</h3>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 bg-gray-100 rounded-md overflow-x-auto text-sm">
        {embedCode}
      </pre>
    </div>
  );
}