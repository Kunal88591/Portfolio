import React from 'react'
import skills from '../data/skills.json'

export default function TechStack() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold">Tech Stack</h2>
      <div className="mt-4 flex gap-4 flex-wrap">
        {skills.map((s) => (
          <div key={s.name} className="px-3 py-2 bg-white/60 dark:bg-slate-800 rounded shadow-sm">
            <div className="font-medium">{s.name}</div>
            <div className="text-sm text-slate-500">{s.level}%</div>
          </div>
        ))}
      </div>
    </section>
  )
}
