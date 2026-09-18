'use client';

import { motion } from 'framer-motion';
import Navbar from '@/src/components/Navbar';
import Link from 'next/link';

export default function ResumePage() {
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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 mt-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Prof. Naran M. Pindoriya</h1>
            <p className="text-xl text-blue-100">Professor, Department of Electrical Engineering</p>
            <p className="text-lg text-blue-200 mt-1">Principal Investigator, Power Systems &amp; Smart Grid (PS&amp;SG) Lab</p>
            <p className="text-base text-blue-200">Indian Institute of Technology Gandhinagar</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="https://docs.google.com/document/d/1-ckgI7_tdxOGnI3uKknD5spnDxCwFal4/edit?usp=sharing&ouid=109201548387989477018&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2 whitespace-nowrap">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Complete CV (Doc)
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Research Interests */}
            <motion.div
              variants={itemVariants}
              className="mb-16 p-8 bg-blue-50 rounded-2xl border-l-4 border-blue-900"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🔬</span>
                <h2 className="text-3xl font-bold text-blue-900">Research Interests</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-4 md:ml-12">
                <div className="space-y-2">
                  <p className="text-gray-700">⚡ Electricity market and Smart grid</p>
                  <p className="text-gray-700">🌱 Renewable energy grid integration, Grid optimization &amp; Forecasting</p>
                  <p className="text-gray-700">💡 Demand side energy management &amp; Demand response (DR)</p>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700">🤝 Peer-to-peer (P2P) energy sharing &amp; microgrids</p>
                  <p className="text-gray-700">🛡️ Cyber-physical power system security (CyberDiSS &amp; CAT)</p>
                  <p className="text-gray-700">🏭 Industrial energy assessment &amp; efficiency studies (MSMEs)</p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="mb-16 p-8 bg-teal-50 rounded-2xl border-l-4 border-teal-600"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🎓</span>
                <h2 className="text-3xl font-bold text-blue-900">Education</h2>
              </div>
              <div className="ml-4 md:ml-12 space-y-6">
                <div className="border-l-4 border-teal-600 pl-4">
                  <p className="font-bold text-lg text-blue-900">PhD in Electrical Engineering (2009)</p>
                  <p className="text-gray-700">
                    <Link href="https://www.iitk.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Indian Institute of Technology Kanpur</Link>, India
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <p className="font-bold text-lg text-blue-900">ME in Electrical Engineering</p>
                  <p className="text-gray-700">
                    <Link href="https://www.msubaroda.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">M.S. University of Baroda</Link>, Gujarat, India
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-4">
                  <p className="font-bold text-lg text-blue-900">BE in Electrical Engineering</p>
                  <p className="text-gray-700">
                    <Link href="https://ldce.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">L D College of Engineering</Link>, <Link href="https://www.gujaratuniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Gujarat University</Link>, Gujarat, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Professional Experience */}
            <motion.div
              variants={itemVariants}
              className="mb-16 p-8 bg-indigo-50 rounded-2xl border-l-4 border-indigo-600"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">💼</span>
                <h2 className="text-3xl font-bold text-blue-900">Professional Experience</h2>
              </div>
              <div className="ml-4 md:ml-12 space-y-6">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="font-bold text-lg text-blue-900">Professor (Nov 2024 – Present)</p>
                  <p className="text-gray-700">Department of Electrical Engineering, <Link href="http://www.iitgn.ac.in/" target="_blank" className="text-blue-600 hover:underline">IIT Gandhinagar</Link></p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="font-bold text-lg text-blue-900">Associate Professor (April 2018 – Nov 2024)</p>
                  <p className="text-gray-700">Department of Electrical Engineering, <Link href="http://www.iitgn.ac.in/" target="_blank" className="text-blue-600 hover:underline">IIT Gandhinagar</Link></p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="font-bold text-lg text-blue-900">Assistant Professor (Nov 2010 – April 2018)</p>
                  <p className="text-gray-700">Department of Electrical Engineering, <Link href="http://www.iitgn.ac.in/" target="_blank" className="text-blue-600 hover:underline">IIT Gandhinagar</Link></p>
                </div>
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="font-bold text-lg text-blue-900">Research Fellow (Jan 2010 – Nov 2010)</p>
                  <p className="text-gray-700">Department of Electrical &amp; Computer Engineering, <Link href="https://www.ece.nus.edu.sg/" target="_blank" className="text-blue-600 hover:underline">National University of Singapore (NUS)</Link>, Singapore</p>
                </div>
              </div>
            </motion.div>

            {/* Awards & Recognition */}
            <motion.div
              variants={itemVariants}
              className="mb-16 p-8 bg-amber-50 rounded-2xl border-l-4 border-amber-600"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🏆</span>
                <h2 className="text-3xl font-bold text-blue-900">Awards &amp; Special Recognitions</h2>
              </div>
              <div className="ml-4 md:ml-12 space-y-4">
                <div className="flex gap-3">
                  <span className="text-xl text-amber-600">⭐</span>
                  <p className="text-gray-700"><strong>CII Industry–Academia Partnership Award 2025</strong> - Pioneering Faculty category, CII Global Summit, New Delhi.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl text-amber-600">⭐</span>
                  <p className="text-gray-700"><strong>GRID-INDIA Power Systems Awards (GIPSA) 2025-26 &amp; 2024-25</strong> - Research scholars won prestigious thesis awards.</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl text-amber-600">⭐</span>
                  <p className="text-gray-700"><strong>Excellence in Outreach Activities Award</strong> - IIT Gandhinagar (2022-23).</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl text-amber-600">⭐</span>
                  <p className="text-gray-700"><strong>ISGF Innovation Awards 2023</strong> - Platinum Award for "Smart Technology – Electricity Distribution".</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-xl text-amber-600">⭐</span>
                  <p className="text-gray-700"><strong>BHAVAN Fellowship by IUSSTF (2016)</strong> &amp; <strong>Newton-Bhabha Grant</strong> Recipient.</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-12"
            >
              <Link href="/publications">
                <button className="px-8 py-4 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors">
                  View Publications (90+)
                </button>
              </Link>
              <Link href="/research">
                <button className="px-8 py-4 border-2 border-blue-900 text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors">
                  Explore Research Projects
                </button>
              </Link>
              <a href="https://scholar.google.com/citations?user=g93A33UAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors">
                  Google Scholar Profile
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© 2024 <strong>Power Systems &amp; Smart Grid (PS&amp;SG) Lab @ IITGN</strong></p>
          <p className="text-gray-300">IIT Gandhinagar | Advancing Sustainable Energy Solutions</p>
        </div>
      </footer>
    </div>
  );
}
