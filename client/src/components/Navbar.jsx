import React from 'react'
import useTheme from '../hooks/useTheme'

export default function Navbar() {
  const [theme, setTheme] = useTheme()
  return (
    <nav className="py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="font-bold text-xl">YourLogo</div>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#projects" className="text-sm">Projects</a>
          <a href="#blog" className="text-sm">Blog</a>
          <a href="#contact" className="text-sm">Contact</a>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-2 rounded border px-3 py-1 text-sm"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  )
}
