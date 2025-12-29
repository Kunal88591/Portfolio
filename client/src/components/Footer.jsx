import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t pt-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-sm text-slate-500">© {new Date().getFullYear()} Your Name</div>
        <div className="flex gap-3">
          <a href="#" className="text-slate-500 hover:text-slate-700">GitHub</a>
          <a href="#" className="text-slate-500 hover:text-slate-700">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
