import React from 'react'
import projects from '../data/projects.json'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.section id="projects" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="py-12">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-6 space-y-6">
        {projects.map((p) => (
          <article key={p.slug} className="p-6 rounded-xl bg-white/60 dark:bg-slate-800 shadow">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{p.description}</p>
                <div className="mt-3 text-sm text-slate-500">Tech: {p.tech.join(', ')}</div>
              </div>
              <div className="flex flex-col gap-2">
                {p.demoUrl && <a href={p.demoUrl} className="text-sm underline">Demo</a>}
                {p.repoUrl && <a href={p.repoUrl} className="text-sm underline">Code</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  )
}
