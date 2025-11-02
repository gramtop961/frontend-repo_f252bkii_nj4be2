import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Users } from 'lucide-react';

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/55 to-white dark:from-slate-950/40 dark:via-slate-950/60 dark:to-slate-950 pointer-events-none" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/50">
              <Rocket className="h-4 w-4 text-fuchsia-600" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                DevRel • Web3 • Community & DX
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
              Srujan — Developer Relations Engineer
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              3+ years building and empowering blockchain developer communities across ICP, Aptos, and Sui. I bridge engineering and advocacy with hands-on workshops, developer tooling, and content that simplifies complex Web3 concepts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-fuchsia-500/30"
              >
                <Users className="h-4 w-4" />
                Let’s Collaborate
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-slate-900 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
              >
                View Experience
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
