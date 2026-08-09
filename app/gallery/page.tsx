'use client';

import { motion } from 'framer-motion';
import Navbar from '@/src/components/Navbar';
import { galleryData } from '@/src/data/pages';

export default function GalleryPage() {
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
            {galleryData.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            {galleryData.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Gallery Albums */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Photo Collections
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto"></div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {galleryData.albums.map((album) => (
                <motion.div
                  key={album.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 rounded-lg overflow-hidden cursor-pointer active:border-teal-600 transition-all hover:shadow-xl"
                >
                  {/* Album Background */}
                  <div className="bg-gradient-to-br from-blue-900 to-teal-700 h-48 flex items-center justify-center">
                    <div className="text-7xl">{album.icon}</div>
                  </div>

                  {/* Album Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      {album.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-4">
                      {album.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-bold text-sm">
                        {album.imageCount} Photos
                      </span>
                      <span className="text-2xl">→</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-blue-50 border-l-4 border-teal-600 p-8 rounded-r-lg text-center"
          >
            <p className="text-xl text-gray-700">
              Our <strong>complete photo gallery</strong> with all albums and high-resolution images is being curated.
              Please <strong>check back soon</strong> or contact us for specific photo requests.
            </p>
            <a href="mailto:naran@iitgn.ac.in" className="mt-6 inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all active:bg-blue-700"
              >
                Request Photos
              </motion.button>
            </a>
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
