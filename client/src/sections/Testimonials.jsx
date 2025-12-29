import React from 'react'
import testimonials from '../data/testimonials.json'

export default function Testimonials() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-semibold">Testimonials</h2>
      <div className="mt-6 flex gap-4 flex-wrap">
        {testimonials.map((t, i) => (
          <div key={i} className="p-4 w-80 rounded-lg bg-white/40 dark:bg-slate-800 backdrop-blur shadow">
            <div className="font-medium">{t.name} <span className="text-sm text-slate-500">— {t.role}</span></div>
            <div className="mt-2 text-slate-600 dark:text-slate-300">“{t.quote}”</div>
          </div>
        ))}
      </div>
    </section>
  )
}
