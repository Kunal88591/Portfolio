import React, { Suspense } from 'react'
import ResumeDownload from '../components/ResumeDownload'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="py-12 flex items-center gap-8">
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-orange-400">
          I build production-ready apps
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Product-minded engineer — React, Design Systems, 3D UIs and delightful UX.</p>
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="rounded bg-violet-600 text-white px-4 py-2">See projects</a>
          <a href="#contact" className="rounded border px-4 py-2">Contact</a>
          <span className="inline-block">
            <ResumeDownload />
          </span>
        </div>
      </div>

      <div className="hidden md:block w-96 h-56 bg-gradient-to-br from-white/50 to-slate-100/50 rounded-lg shadow flex items-center justify-center">
        {/* Placeholder: Replace with <Canvas> 3D scene */}
        <div className="text-center text-slate-600">3D Hero Placeholder</div>
      </div>
    </motion.section>
  )
}
