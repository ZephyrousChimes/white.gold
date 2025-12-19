import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Wrap all MDX content in a container with proper spacing
    wrapper: ({ children }) => (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-invert prose-slate max-w-none">
          {children}
        </article>
      </div>
    ),
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-4 text-slate-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-slate-200">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-lg text-slate-400 leading-relaxed mb-6">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-slate-400">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-400">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-lg leading-relaxed ml-4">
        {children}
      </li>
    ),
    code: ({ children }) => (
      <code className="px-2 py-1 rounded bg-slate-800 text-cyan-400 text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-slate-900 rounded-lg p-6 overflow-x-auto mb-6 border border-slate-700">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-cyan-500 pl-6 italic text-slate-300 my-6">
        {children}
      </blockquote>
    ),
    a: ({ children, href }) => (
      <a 
        href={href} 
        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-slate-200">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic text-slate-300">
        {children}
      </em>
    ),
    hr: () => (
      <hr className="my-12 border-slate-700" />
    ),
    ...components,
  }
}