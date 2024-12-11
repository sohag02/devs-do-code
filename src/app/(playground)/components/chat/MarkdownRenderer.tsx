import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  prism,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../../context/ThemeContext';
import { Copy, Check } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const { theme } = useTheme();
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const handleCopyCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        code({ inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');
          const code = String(children).replace(/\n$/, '');

          if (!inline && match) {
            return (
              <div className="relative group">
                <div className='flex justify-between px-2 py-1 text-sm rounded-t-md bg-[#434343]'>
                  {match[1]}
                  <button
                    onClick={() => handleCopyCode(code)}
                  >
                    {copiedCode === code ? (
                      <div className='flex items-center'>
                        <Check className="w-4 h-4 text-gray-400" /> Copied
                      </div>
                    ) : (
                      <div className='flex items-center'>
                        <Copy className="w-4 h-4 text-gray-400" /> Copy
                      </div>
                    )}
                  </button>
                </div>
                <SyntaxHighlighter
                  style={theme === 'dark' ? vscDarkPlus : prism}
                  language={match[1]}
                  PreTag='div'
                  customStyle={{ padding: '0.75rem', margin: 0 }}
                  className={`rounded-b-md ${
                    theme === 'dark' ? '!bg-black !bg-opacity-50' : '!bg-gray-100'
                  }`}
                  {...props}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            );
          }
          return (
            <code
              className={`${
                theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-gray-200 text-gray-800'
              } px-1.5 py-0.5 rounded`}
              {...props}
            >
              {children}
            </code>
          );
        },
        h1: ({ children }) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xl font-bold my-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-bold my-2">{children}</h3>,
        p: ({ children }) => <p className="my-2 leading-relaxed">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside my-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside my-2">{children}</ol>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-2 italic">
            {children}
          </blockquote>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

export default MarkdownRenderer;
