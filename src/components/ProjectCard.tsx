'use client';

import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  period: string;
  funding: string;
  description: string;
  achievements?: string[];
  award?: string;
  awardCategory?: string;
  objectives?: string[];
  partners?: string[];
  image?: string;
  imageAlt?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
  variant?: 'default' | 'completed';
}

export default function ProjectCard({
  title,
  period,
  funding,
  description,
  achievements,
  award,
  awardCategory,
  objectives,
  partners,
  image,
  imageAlt = 'Project image',
  isExpanded = false,
  onToggle,
  variant = 'default',
}: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const expandVariants = {
    collapsed: { opacity: 0, height: 0 },
    expanded: { opacity: 1, height: 'auto' },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Header */}
      <motion.div
        onClick={onToggle}
        className={`p-6 cursor-pointer ${
          variant === 'completed' ? 'bg-gradient-to-r from-blue-50 to-teal-50' : 'bg-white'
        } hover:bg-opacity-60 transition-colors`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-blue-900 mb-2 leading-tight">{title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <span className="font-medium">Period:</span> {period}
              </span>
              <span className="flex items-center gap-1">
                <span className="font-medium">Funding:</span> {funding}
              </span>
            </div>
          </div>
          {onToggle && (
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 text-teal-600 text-2xl"
            >
              ▼
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Image */}
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-64 md:h-80 bg-gray-100 overflow-hidden"
        >
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        initial="collapsed"
        animate={isExpanded ? 'expanded' : 'collapsed'}
        variants={expandVariants}
        transition={{ duration: 0.3 }}
        className="border-t border-gray-100"
      >
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          {/* Award badge */}
          {award && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold text-yellow-900">{award}</p>
                  <p className="text-sm text-yellow-800">{awardCategory}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Achievements */}
          {achievements && achievements.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-teal-600">✓</span> Key Achievements
              </h4>
              <ul className="space-y-2">
                {achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3 text-gray-700"
                  >
                    <span className="text-teal-600 font-bold flex-shrink-0">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Objectives */}
          {objectives && objectives.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Objectives</h4>
              <ul className="space-y-2">
                {objectives.map((obj, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3 text-gray-700"
                  >
                    <span className="text-blue-600 font-bold flex-shrink-0">•</span>
                    <span>{obj}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Partners */}
          {partners && partners.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Partners</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {partners.map((partner, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-50 px-4 py-2 rounded border border-gray-200 text-gray-700 text-sm"
                  >
                    {partner}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
