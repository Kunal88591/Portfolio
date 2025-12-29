import React, { useMemo } from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'

// Load Markdown posts from /src/content/blog
const posts = Object.entries(import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' }))
  .map(([path, raw]) => {
    const { data } = matter(raw)
    return { slug: path.split('/').pop().replace('.md', ''), meta: data, raw }
  })
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))

export default function Blog() {
  return (
    <section id="blog" className="py-12">
      <h2 className="text-2xl font-semibold">Blog</h2>
      <div className="mt-6 space-y-6">
        {posts.map((p) => (
          <article key={p.slug} className="p-6 rounded-xl bg-white/60 dark:bg-slate-800 shadow">
            <h3 className="text-xl font-bold">{p.meta.title}</h3>
            <div className="mt-2 text-slate-600 dark:text-slate-300">{p.meta.summary}</div>
            <div className="mt-3 text-sm text-slate-500">{p.meta.date}</div>
            <div className="mt-4 prose max-w-none dark:prose-invert">
              <ReactMarkdown>{p.raw.replace(/^---[\s\S]*?---/, '')}</ReactMarkdown>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
