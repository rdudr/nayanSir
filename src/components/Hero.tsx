'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  focusAreas: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export default function Hero({ title, subtitle, description, focusAreas }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20 md:py-32">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-400 bg-opacity-30 rounded-full text-sm font-medium backdrop-blur-sm">
              Research Excellence
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle text */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Focus areas */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ translateY: -8 }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-blue-100">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
