import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Globe } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-slate-50 to-white py-20 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Let’s Connect
            </h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              I’m passionate about building vibrant developer communities and driving adoption of innovative Web3 technologies. If you’re looking to collaborate on workshops, documentation, or developer tooling, I’d love to chat.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@srujan.dev"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                <Globe className="h-4 w-4" /> Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">About Srujan</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Developer Relations Engineer with 3+ years of experience empowering blockchain developer communities and driving adoption across ICP, Aptos, and Sui. I create technical content, onboarding guides, and live demos that make Web3 accessible.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-gradient-to-br from-fuchsia-50 to-indigo-50 p-4 text-slate-800 dark:from-fuchsia-900/20 dark:to-indigo-900/20 dark:text-slate-200">
                • Hackathons & Bootcamps
              </div>
              <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 p-4 text-slate-800 dark:from-emerald-900/20 dark:to-teal-900/20 dark:text-slate-200">
                • Docs & Onboarding
              </div>
              <div className="rounded-xl bg-gradient-to-br from-amber-50 to-pink-50 p-4 text-slate-800 dark:from-amber-900/20 dark:to-pink-900/20 dark:text-slate-200">
                • Workshops & Mentorship
              </div>
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4 text-slate-800 dark:from-blue-900/20 dark:to-cyan-900/20 dark:text-slate-200">
                • Developer Tooling
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
