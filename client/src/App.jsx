import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import Blog from './sections/Blog'
import ContactForm from './components/ContactForm'
import ChatBot from './components/ChatBot'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet-async'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Helmet>
        <title>Your Name — Product Engineer</title>
        <meta name="description" content="Product-minded engineer building production-grade React apps with 3D UIs and delightful UX." />
      </Helmet>

      <header className="container mx-auto p-6">
        <Navbar />
      </header>

      <main className="container mx-auto p-6">
        <Hero />
        <TechStack />
        <Projects />
        <Testimonials />
        <Blog />

        <section id="contact" className="py-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <ContactForm />
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-semibold">Chat</h2>
          <div className="mt-4"><ChatBot /></div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
