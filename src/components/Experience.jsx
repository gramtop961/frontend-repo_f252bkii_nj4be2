import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Presentation } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const items = [
  {
    title: 'Developer Relations @ Rise In',
    location: 'India',
    period: 'Apr 2025 – Sept 2025',
    points: [
      'Organized 10+ blockchain and Web3 bootcamps and 2 large-scale hackathons across Southern India; mentored 600+ students.',
      'Built developer onboarding resources for ICP and Aptos: tutorials, docs, and starter templates to accelerate adoption.',
      'Collaborated with Layer-1 communities on technical workshops, panels, and community initiatives.',
    ],
    icon: <Presentation className="h-5 w-5 text-indigo-600" />,
  },
  {
    title: 'DevRel & Blockchain Developer, Crewsphere @ DFINITY',
    location: 'India',
    period: 'Aug 2022 – Apr 2025',
    points: [
      'Conducted Web3 bootcamps for 1000+ developers and students on smart contracts, canister deployment, and dApp design.',
      'Authored documentation and onboarding guides that simplified complex blockchain concepts and improved DX.',
      'Mentored developers through hackathons and open-source initiatives, increasing ICP ecosystem engagement by 40%.',
    ],
    icon: <Users className="h-5 w-5 text-fuchsia-600" />,
  },
  {
    title: 'B.Tech, Computer Science — DVR & Dr. HS MIC College of Technology',
    location: 'India',
    period: 'GPA: 8.9/10.0',
    points: [
      'Coursework: Computer Architecture, Comparison of Learning Algorithms, Computational Theory.',
    ],
    icon: <GraduationCap className="h-5 w-5 text-emerald-600" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-gradient-to-b from-white to-slate-50 py-20 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
        >
          Experience & Education
        </motion.h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-100 to-indigo-100 dark:from-fuchsia-900/30 dark:to-indigo-900/30">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{item.location} • {item.period}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                {item.points.map((p, i) => (
                  <li key={i} className="leading-relaxed">• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
