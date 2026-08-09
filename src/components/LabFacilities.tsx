'use client';

import { motion } from 'framer-motion';

interface LabFacilitiesProps {
  description: string;
  hardware: Array<{
    title: string;
    description: string;
    specs: string[];
    applications: string[];
  }>;
  software: Array<{
    title: string;
    description: string;
    features: string[];
  }>;
}

export default function LabFacilities({ description, hardware, software }: LabFacilitiesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              PS&SG Lab (Power Systems and Smart Grid Lab)
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto"></div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          {/* Hardware Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
              <span className="text-3xl">⚙️</span> Hardware/Firmware Facilities
            </h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {hardware.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={tabVariants}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200"
                >
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">{item.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{item.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-2">
                      Specifications
                    </p>
                    <ul className="space-y-1">
                      {item.specs.map((spec, specIdx) => (
                        <li key={specIdx} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-teal-600 font-bold">✓</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-blue-900 uppercase tracking-wide mb-2">
                      Applications
                    </p>
                    <ul className="space-y-1">
                      {item.applications.slice(0, 4).map((app, appIdx) => (
                        <li key={appIdx} className="text-sm text-gray-700 flex gap-2">
                          <span className="text-teal-600">→</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Software Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-blue-900 mb-8 flex items-center gap-3">
              <span className="text-3xl">💻</span> Simulation Software
            </h3>
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {software.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={tabVariants}
                  whileHover={{ translateY: -4 }}
                  className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-5 border border-teal-200 h-full"
                >
                  <h4 className="text-base font-semibold text-teal-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{item.description}</p>

                  <div>
                    <p className="text-xs font-semibold text-teal-900 uppercase tracking-wide mb-2">
                      Features
                    </p>
                    <ul className="space-y-1">
                      {item.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-xs text-gray-700 flex gap-2">
                          <span className="text-teal-600 font-bold">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
