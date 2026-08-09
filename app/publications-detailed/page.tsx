'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/src/components/Navbar';
import { publicationsData } from '@/src/data/publications-complete';

export default function PublicationsDetailedPage() {
  const [activeTab, setActiveTab] = useState<'books' | 'journals' | 'conferences'>('books');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-teal-700 text-white py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {publicationsData.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            {publicationsData.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { label: 'Book Chapters', value: publicationsData.statistics.bookChapters },
              { label: 'Journal Articles', value: publicationsData.statistics.journalPublications },
              { label: 'Conference Proceedings', value: publicationsData.statistics.conferenceProceedings },
              { label: 'Total Publications', value: publicationsData.statistics.totalPublications },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-lg p-6 text-center"
              >
                <div className="text-4xl font-bold text-teal-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* External Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href={publicationsData.externalLinks.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all"
            >
              📊 Google Scholar Profile
            </a>
            <a
              href={publicationsData.externalLinks.scopus}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-all"
            >
              📈 Scopus Profile
            </a>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {/* Tab Buttons */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex flex-wrap gap-2 md:gap-4 mb-12 border-b-2 border-gray-200"
          >
            {[
              { id: 'books', label: `📚 Book Chapters (${publicationsData.bookChapters.length})` },
              { id: 'journals', label: `📄 Journals (${publicationsData.journals.length})` },
              { id: 'conferences', label: '🎤 Conference Proceedings' },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                variants={itemVariants}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 md:px-6 py-3 font-semibold text-base md:text-lg transition-all ${
                  activeTab === tab.id
                    ? 'text-teal-600 border-b-4 border-teal-600'
                    : 'text-gray-600 hover:text-blue-900'
                }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Book Chapters Tab */}
          {activeTab === 'books' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {publicationsData.bookChapters.map((book, idx) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{book.title}</h3>
                  <p className="text-teal-600 font-semibold mb-3">
                    <em>{book.bookTitle}</em>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Authors:</strong> {book.authors}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Publisher:</strong> {book.publisher} ({book.year})
                  </p>
                  {book.isbn && (
                    <p className="text-gray-600 text-sm">
                      <strong>ISBN:</strong> {book.isbn}
                    </p>
                  )}
                  {book.doi && (
                    <a
                      href={book.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 font-semibold hover:underline inline-block mt-2"
                    >
                      🔗 DOI Link
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Journals Tab */}
          {activeTab === 'journals' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {publicationsData.journals.map((journal, idx) => (
                <motion.div
                  key={journal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="bg-white border-l-4 border-teal-600 p-6 rounded-r-lg shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{journal.title}</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Authors:</strong> {journal.authors}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <p className="text-teal-600 font-semibold italic">{journal.journal}</p>
                    <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-bold">
                      IF: {journal.impactFactor}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">
                    {journal.year}
                    {journal.volume && ` | Vol. ${journal.volume}`}
                    {journal.pages && ` | pp. ${journal.pages}`}
                    {journal.month && ` | ${journal.month}`}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Conferences Tab */}
          {activeTab === 'conferences' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center"
            >
              <p className="text-xl text-gray-700 mb-4">
                Conference proceedings details are being compiled.
              </p>
              <p className="text-gray-600">
                Please visit our <strong>Google Scholar</strong> or <strong>Scopus</strong> profiles for complete conference proceedings list.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center"
            >
              Research Areas & Expertise
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {publicationsData.highlights.researchAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-lg p-4 flex items-center gap-3"
                >
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700 font-semibold">{area}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Top Journals Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center"
            >
              Published in Top-Tier Journals
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {publicationsData.highlights.topJournals.map((journal, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white border-l-4 border-yellow-500 p-6 rounded-r-lg shadow-md"
                >
                  <p className="text-lg text-gray-700 font-semibold">{journal}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base">
            © 2024 <strong>Power Systems and Smart Grid Lab @ IITGN</strong>
          </p>
          <p className="text-sm text-gray-300 mt-2">
            IIT Gandhinagar | Advancing Sustainable Energy Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
