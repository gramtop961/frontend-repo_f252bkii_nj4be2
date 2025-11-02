import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Activity } from 'lucide-react';

const projects = [
  {
    name: 'Deadlock (Aptos) — Asset Distribution & Funds Backup',
    summary:
      'Smart contract system that prevents permanent loss of crypto by enabling beneficiaries and backup wallets with activity-based fund release.',
    tags: ['Aptos', 'Move', 'Security', 'Smart Contracts'],
    icon: <Shield className="h-5 w-5 text-indigo-600" />,
    href: '#',
  },
  {
    name: 'MediTrack (ICP) — Decentralized Healthcare',
    summary:
      'Secure storage and sharing of medical records across doctors, patients, and pharmacists to reduce fragmentation and errors.',
    tags: ['ICP', 'Motoko', 'Canisters', 'Healthcare'],
    icon: <Activity className="h-5 w-5 text-emerald-600" />,
    href: '#',
  },
  {
    name: 'Token Creator — Algorand',
    summary:
      'User-friendly interface to create and launch custom tokens on Algorand without deep protocol knowledge.',
    tags: ['Algorand', 'JS', 'UX', 'Tokens'],
    icon: <Code className="h-5 w-5 text-fuchsia-600" />,
    href: '#',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={idx}
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel={p.href.startsWith('http') ? 'noreferrer' : undefined}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:from-slate-900/60 dark:to-slate-900"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-100 to-indigo-100 dark:from-fuchsia-900/30 dark:to-indigo-900/30">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{p.name}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
