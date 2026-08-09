'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import { bookChapters, journals, conferences } from '@/src/data/publications-full';

type TabKey = 'books' | 'journals' | 'conferences';

const tabs: { key: TabKey; label: string; items: string[] }[] = [
  { key: 'books', label: 'Book Chapters', items: bookChapters },
  { key: 'journals', label: 'Journals', items: journals },
  { key: 'conferences', label: 'Conference Proceedings', items: conferences },
];

// Turn plain-text URLs inside a citation into clickable links
function Citation({ text }: { text: string }) {
  const parts = text.split(/(https?:\/\/\S+)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 font-semibold hover:text-blue-900 break-all"
          >
            {part}
          </a>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('journals');
  const active = tabs.find((t) => t.key === activeTab)!;
  const total = bookChapters.length + journals.length + conferences.length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Soft background glow so the glass cards have something to blur */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full bg-teal-200/40 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-blue-100/50 blur-3xl"></div>
      </div>

      <Navbar />

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-[1500px] mx-auto">
          {/* Page title — same style as home page headings, no colored bar */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Publications</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Peer-reviewed research from the Power Systems and Smart Grid Lab at IIT
              Gandhinagar.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* External profile links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link
              href="https://scholar.google.com/citations?user=g93A33UAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white px-4 py-3 rounded-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 border border-blue-400 hover:border-blue-300 flex items-center gap-2 whitespace-nowrap">
                <div className="w-6 h-6 flex items-center justify-center bg-white text-blue-700 rounded font-bold text-sm">G</div>
                <div className="text-left">
                  <div className="text-xs font-semibold">Google Scholar</div>
                  <div className="text-xs opacity-90">Citations Profile</div>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity -z-10"></div>
              </button>
            </Link>
            <Link
              href="https://www.scopus.com/authid/detail.uri?authorId=24537626100"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-4 py-3 rounded-2xl hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 border border-orange-400 hover:border-orange-300 flex items-center gap-2 whitespace-nowrap">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="white" opacity="0.9"/>
                  <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#FF6B35"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs font-semibold">Scopus Profile</div>
                  <div className="text-xs opacity-90">Research Profile</div>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity -z-10"></div>
              </button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
          >
            {[
              { label: 'Book Chapters', value: bookChapters.length },
              { label: 'Journal Articles', value: journals.length },
              { label: 'Conference Papers', value: conferences.length },
              { label: 'Total Publications', value: total },
            ].map((stat) => (
              <div
                key={stat.label}
                className="liquid-glass rounded-2xl p-5 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-900">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-sm font-semibold mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tabs */}
          <div className="liquid-glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2 mb-10">
            {tabs.map((tab) => (
              <motion.button
                key={tab.key}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 px-5 py-3 rounded-xl font-semibold text-sm md:text-base transition-all ${
                  activeTab === tab.key
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'text-blue-900 hover:bg-white/50'
                }`}
              >
                {tab.label}
                <span
                  className={`ml-2 text-xs font-bold px-2 py-0.5 rounded-full ${
                    activeTab === tab.key
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-900/10 text-blue-900'
                  }`}
                >
                  {tab.items.length}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Publication list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={containerVariants}
              className="grid grid-cols-1 xl:grid-cols-2 gap-4 items-stretch"
            >
              {active.items.map((pub, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.005 }}
                  whileTap={{ scale: 0.99 }}
                  className="liquid-glass rounded-2xl p-5 md:p-6 flex gap-4 transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-900/15"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-blue-900 to-teal-600 text-white text-sm font-bold flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    <Citation text={pub} />
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Footer — same as home page */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">
            © 2024 <strong>Power Systems and Smart Grid Lab @ IITGN</strong>
          </p>
          <p className="text-gray-300">
            IIT Gandhinagar | Advancing Sustainable Energy Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
