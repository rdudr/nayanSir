'use client';

import { motion } from 'framer-motion';
import Navbar from '@/src/components/Navbar';
import { teachingData } from '@/src/data/pages';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div variants={itemVariants} className="mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mt-4 rounded-full"></div>
    </motion.div>
  );
}

export default function TeachingPage() {
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
          {/* Page title */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
              Teaching &amp; Courses Offered
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Developing the next generation of energy researchers at IIT Gandhinagar.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Courses */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="mb-20"
          >
            <SectionHeading title="Courses Offered" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
              {teachingData.courses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="liquid-glass rounded-3xl p-6 flex flex-col h-full cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {course.level}
                    </span>
                    <span className="bg-teal-600/10 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">
                      {course.semester}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mentorship */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="mb-20"
          >
            <SectionHeading title={teachingData.mentoring.title} />
            <motion.div
              variants={itemVariants}
              className="liquid-glass rounded-3xl p-8 md:p-10"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {teachingData.mentoring.description}
              </p>
              <h3 className="text-xl font-bold text-blue-900 mb-5">
                Mentorship Opportunities
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teachingData.mentoring.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-teal-600 font-bold text-lg flex-shrink-0">✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-3xl p-10 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Interested in Joining Our Lab?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              We are always looking for{' '}
              <strong>talented students and researchers</strong> to join our team.
            </p>
            <a href="mailto:naran@iitgn.ac.in">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-900 text-white font-bold text-lg rounded-xl hover:bg-blue-800 transition-all"
              >
                Contact Us Today
              </motion.button>
            </a>
          </motion.section>
        </div>
      </main>

      {/* Footer — same as home page */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">
            © 2024 <strong>Power Systems &amp; Smart Grid (PS&amp;SG) Lab @ IITGN</strong>
          </p>
          <p className="text-gray-300">
            IIT Gandhinagar | Advancing Sustainable Energy Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
