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
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Prof. Naran M. Pindoriya</h1>
            <p className="text-xl text-blue-100">Faculty, Department of Electrical Engineering</p>
            <p className="text-lg text-blue-100">IIT Gandhinagar</p>
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
              className="mb-20 p-8 bg-blue-50 rounded-2xl border-l-4 border-blue-900"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">🔬</span>
                <h2 className="text-3xl font-bold text-blue-900">Research Interests</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-16">
                <div>
                  <p className="text-gray-700 mb-2">✓ Power System Analysis & Optimization</p>
                  <p className="text-gray-700 mb-2">✓ Smart Grid Technology</p>
                  <p className="text-gray-700 mb-2">✓ Renewable Energy Integration</p>
                  <p className="text-gray-700 mb-2">✓ Energy Management Systems</p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2">✓ Demand Response Programs</p>
                  <p className="text-gray-700 mb-2">✓ Peer-to-Peer Energy Trading</p>
                  <p className="text-gray-700 mb-2">✓ Microgrid Control</p>
                  <p className="text-gray-700 mb-2">✓ Cyber-Physical System Security</p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={itemVariants}
              className="mb-20 p-8 bg-teal-50 rounded-2xl border-l-4 border-teal-600"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">🎓</span>
                <h2 className="text-3xl font-bold text-blue-900">Education</h2>
              </div>
              <div className="ml-16 space-y-6">
                <div>
                  <p className="font-bold text-lg text-blue-900">Ph.D. in Electrical Engineering</p>
                  <p className="text-gray-600">IIT Bombay, India</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-blue-900">M.Tech. in Power Systems</p>
                  <p className="text-gray-600">IIT Delhi, India</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-blue-900">B.Tech. in Electrical Engineering</p>
                  <p className="text-gray-600">University College of Engineering, India</p>
                </div>
              </div>
            </motion.div>

            {/* Professional Experience */}
            <motion.div
              variants={itemVariants}
              className="mb-20 p-8 bg-green-50 rounded-2xl border-l-4 border-green-600"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">💼</span>
                <h2 className="text-3xl font-bold text-blue-900">Professional Experience</h2>
              </div>
              <div className="ml-16 space-y-8">
                <div>
                  <p className="font-bold text-lg text-blue-900">Faculty, Department of Electrical Engineering</p>
                  <p className="text-gray-600">IIT Gandhinagar | 2015 - Present</p>
                  <p className="text-gray-700 mt-2">Founding member of Power Systems & Smart Grid Lab. Leading research in smart grids and sustainable energy solutions.</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-blue-900">Postdoctoral Researcher</p>
                  <p className="text-gray-600">Imperial College London, UK | 2013-2015</p>
                  <p className="text-gray-700 mt-2">Research in demand-side management and smart grid applications.</p>
                </div>
                <div>
                  <p className="font-bold text-lg text-blue-900">Research Scholar</p>
                  <p className="text-gray-600">IIT Bombay | 2008-2013</p>
                  <p className="text-gray-700 mt-2">Doctoral research in power system security and control.</p>
                </div>
              </div>
            </motion.div>

            {/* Awards & Recognition */}
            <motion.div
              variants={itemVariants}
              className="mb-20 p-8 bg-yellow-50 rounded-2xl border-l-4 border-yellow-600"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">🏆</span>
                <h2 className="text-3xl font-bold text-blue-900">Awards & Special Recognitions</h2>
              </div>
              <div className="ml-16 space-y-4">
                <div className="flex gap-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-bold text-blue-900">Platinum Award - India Smart Grid Forum Innovation Awards (2023)</p>
                    <p className="text-gray-600">Smart Technology – Electricity Distribution</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-bold text-blue-900">BHAVAN Fellowship by IUSSTF (2016)</p>
                    <p className="text-gray-600">Building Energy Efficiency Higher & Advanced Network</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-bold text-blue-900">Newton-Bhabha Grant Recipient</p>
                    <p className="text-gray-600">Indo-UK Advanced Training School on Smart Grids</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-2xl">⭐</span>
                  <div>
                    <p className="font-bold text-blue-900">Best Paper Awards</p>
                    <p className="text-gray-600">Multiple international conferences</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Affiliations */}
            <motion.div
              variants={itemVariants}
              className="mb-20 p-8 bg-purple-50 rounded-2xl border-l-4 border-purple-600"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">🤝</span>
                <h2 className="text-3xl font-bold text-blue-900">Professional Affiliations & Services</h2>
              </div>
              <div className="ml-16 space-y-4">
                <div>
                  <p className="font-bold text-blue-900 mb-2">Member Organizations:</p>
                  <p className="text-gray-700">• IEEE (Institute of Electrical and Electronics Engineers)</p>
                  <p className="text-gray-700">• India Smart Grid Forum (ISGF)</p>
                  <p className="text-gray-700">• Indian Society for Sustainability Research</p>
                </div>
                <div className="pt-4 border-t border-purple-200">
                  <p className="font-bold text-blue-900 mb-2">Editorial Services:</p>
                  <p className="text-gray-700">• Reviewer for IEEE Transactions journals</p>
                  <p className="text-gray-700">• Guest Editor for special issues</p>
                </div>
                <div className="pt-4 border-t border-purple-200">
                  <p className="font-bold text-blue-900 mb-2">Collaborations:</p>
                  <p className="text-gray-700">• University of Edinburgh, UK</p>
                  <p className="text-gray-700">• Queen's University Belfast, UK</p>
                  <p className="text-gray-700">• Multiple international research institutions</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mt-16"
            >
              <Link href="/publications">
                <button className="px-8 py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors">
                  View Publications
                </button>
              </Link>
              <Link href="/research">
                <button className="px-8 py-4 border-2 border-blue-900 text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors">
                  Research Projects
                </button>
              </Link>
              <a href="https://scholar.google.com/citations?user=g93A33UAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors">
                  Google Scholar
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© 2024 <strong>Power Systems and Smart Grid Lab @ IITGN</strong></p>
          <p className="text-gray-300">IIT Gandhinagar | Advancing Sustainable Energy Solutions</p>
        </div>
      </footer>
    </div>
  );
}
