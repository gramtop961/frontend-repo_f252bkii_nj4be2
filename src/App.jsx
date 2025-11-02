import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#home" className="text-base font-semibold tracking-tight">
          Srujan.dev
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex dark:text-slate-300">
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
        >
          Let’s Talk
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <p>
          © {new Date().getFullYear()} Srujan — Developer Relations Engineer. Built with React, Tailwind, Framer Motion, and Spline.
        </p>
      </div>
    </footer>
  );
}
