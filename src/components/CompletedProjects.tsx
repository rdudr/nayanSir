'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
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
}

interface CompletedProjectsProps {
  projects: Project[];
}

export default function CompletedProjects({ projects }: CompletedProjectsProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
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
              Highlights of Completed Research Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Click on any project to explore detailed achievements and outcomes
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div variants={containerVariants} className="space-y-4">
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard
                  title={project.title}
                  period={project.period}
                  funding={project.funding}
                  description={project.description}
                  achievements={project.achievements}
                  award={project.award}
                  awardCategory={project.awardCategory}
                  objectives={project.objectives}
                  partners={project.partners}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  isExpanded={expandedId === project.id}
                  onToggle={() =>
                    setExpandedId(expandedId === project.id ? null : project.id)
                  }
                  variant="completed"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
