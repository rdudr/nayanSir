'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import { researchData } from '@/src/data/research-with-images';

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

interface Project {
  id: number;
  title: string;
  period: string;
  funding: string;
  description: string;
  achievements?: string[];
  objectives?: string[];
  partners?: string[];
  award?: string;
  awardCategory?: string;
  link?: string;
  videoLink?: string;
  image?: string;
  imageAlt?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="liquid-glass rounded-3xl overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
    >
      {project.image && (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-blue-100/70 to-teal-100/70">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.imageAlt || project.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-blue-900 text-white text-xs font-bold px-3 py-1 rounded-full">
            {project.funding}
          </span>
          <span className="bg-teal-600/10 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">
            {project.period}
          </span>
        </div>

        <h3 className="text-xl font-bold text-blue-900 mb-3">{project.title}</h3>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{project.description}</p>

        {project.objectives && project.objectives.length > 0 && (
          <div className="mb-4">
            <p className="font-semibold text-blue-900 text-sm mb-2">Objectives:</p>
            <ul className="space-y-1.5">
              {project.objectives.map((o, i) => (
                <li key={i} className="text-gray-700 text-sm flex gap-2">
                  <span className="text-teal-600 mt-0.5">✓</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.achievements && project.achievements.length > 0 && (
          <div className="mb-4">
            <p className="font-semibold text-blue-900 text-sm mb-2">Highlights:</p>
            <ul className="space-y-1.5">
              {project.achievements.map((a, i) => (
                <li key={i} className="text-gray-700 text-sm flex gap-2">
                  <span className="text-teal-600 mt-0.5">✓</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.partners && project.partners.length > 0 && (
          <div className="mb-4">
            <p className="font-semibold text-blue-900 text-sm mb-2">Partners:</p>
            <div className="flex flex-wrap gap-2">
              {project.partners.map((p, i) => (
                <span
                  key={i}
                  className="bg-white/60 border border-blue-900/20 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.award && (
          <div className="mb-4 bg-gradient-to-r from-amber-100/80 to-yellow-50/80 border border-amber-300 rounded-xl p-3">
            <p className="text-amber-800 text-sm font-semibold">🏆 {project.award}</p>
            {project.awardCategory && (
              <p className="text-amber-700 text-xs mt-1">{project.awardCategory}</p>
            )}
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.link && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <span className="inline-block text-sm font-semibold text-teal-700 hover:text-blue-900 transition-colors">
                Project Website →
              </span>
            </Link>
          )}
          {project.videoLink && (
            <Link href={project.videoLink} target="_blank" rel="noopener noreferrer">
              <span className="inline-block text-sm font-semibold text-teal-700 hover:text-blue-900 transition-colors">
                Watch Video →
              </span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ResearchPage() {
  const { lab, ongoingProjects, completedProjects, labFacilities } = researchData;

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
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Research</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">{lab.title}</p>
          </motion.div>

          {/* Lab intro */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="liquid-glass rounded-3xl p-8 md:p-10 mb-8">
              <p className="text-gray-700 leading-relaxed text-justify mb-4">{lab.intro}</p>
              <p className="text-gray-700 leading-relaxed text-justify">{lab.description}</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {lab.focusAreas.map((area, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="liquid-glass rounded-3xl p-6 text-center h-full"
                >
                  <div className="text-4xl mb-3">{area.icon}</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{area.title}</h3>
                  <p className="text-gray-700 text-sm">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Ongoing projects */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
            className="mb-20"
          >
            <SectionHeading title="Ongoing Research Activities" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {ongoingProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </motion.section>

          {/* Completed projects */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
            className="mb-20"
          >
            <SectionHeading title="Highlights of Completed Research Projects" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {completedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </motion.section>

          {/* Lab facilities */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
            className="mb-8"
          >
            <SectionHeading
              title="PS&SG Lab Facilities"
              subtitle="Power Systems and Smart Grid Laboratory"
            />

            <motion.div
              variants={itemVariants}
              className="liquid-glass rounded-3xl overflow-hidden mb-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative w-full min-h-[240px] bg-gradient-to-br from-blue-100/70 to-teal-100/70">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={labFacilities.image}
                    alt={labFacilities.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex items-center">
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {labFacilities.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hardware */}
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-blue-900 mb-6"
            >
              Hardware / Firmware Facilities
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mb-12">
              {labFacilities.hardware.map((hw, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="liquid-glass rounded-3xl p-6 h-full"
                >
                  <h4 className="text-lg font-bold text-blue-900 mb-2">{hw.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{hw.description}</p>
                  <p className="font-semibold text-blue-900 text-sm mb-2">Applications:</p>
                  <div className="flex flex-wrap gap-2">
                    {hw.applications.map((app, i) => (
                      <span
                        key={i}
                        className="bg-white/60 border border-teal-600/30 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Software */}
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-blue-900 mb-6"
            >
              Simulation Software
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
              {labFacilities.software.map((sw, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="liquid-glass rounded-3xl p-6 h-full flex flex-col"
                >
                  <h4 className="text-base font-bold text-blue-900 mb-2">{sw.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{sw.description}</p>
                  <ul className="space-y-1 mt-auto">
                    {sw.features.map((f, i) => (
                      <li key={i} className="text-gray-700 text-xs flex gap-2">
                        <span className="text-teal-600">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      {/* Footer — same as home page */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">
            © 2024 <strong>Power Systems and Smart Grid Lab @ IITGN</strong>
          </p>
          <p className="text-gray-300">
            IIT Gandhinagar | Advancing Sustainable Energy Solutions
          </p>
        </div>
      </footer>
    </div>
  );
}
