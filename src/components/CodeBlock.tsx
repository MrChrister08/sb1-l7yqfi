interface CodeBlockProps {
  children: React.ReactNode;
  language?: string;
}

export function CodeBlock({ children, language = 'jsx' }: CodeBlockProps) {
  return (
    <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 font-mono text-sm">
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
          {language}
        </span>
      </div>
      <div className="text-gray-800 dark:text-gray-200">{children}</div>
    </div>
  );
}