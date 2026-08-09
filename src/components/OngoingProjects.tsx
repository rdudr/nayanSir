'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
  id: number;
  title: string;
  period: string;
  funding: string;
  description: string;
  achievements?: string[];
  image?: string;
  imageAlt?: string;
}

interface OngoingProjectsProps {
  projects: Project[];
}

export default function OngoingProjects({ projects }: OngoingProjectsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
              Ongoing Research Activities
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto"></div>
          </motion.div>

          {/* Projects grid */}
          <motion.div variants={containerVariants} className="space-y-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                period={project.period}
                funding={project.funding}
                description={project.description}
                achievements={project.achievements}
                image={project.image}
                imageAlt={project.imageAlt}
                variant="default"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
