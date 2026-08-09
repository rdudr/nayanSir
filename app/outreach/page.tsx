'use client';

import { motion } from 'framer-motion';
import Navbar from '@/src/components/Navbar';

// Events and outreach activities, from https://naran.people.iitgn.ac.in/newsite/outreach/
interface OutreachEvent {
  title: string;
  detail: string;
  venue?: string;
  icon: string;
}

const outreachEvents: OutreachEvent[] = [
  {
    title: 'Training Program: Regulatory Framework in Power Sector',
    detail:
      'For the officers of Gujarat Urja Vikas Nigam Ltd. (GUVNL) and its subsidiary companies.',
    venue: 'IIT Gandhinagar, February 20-22, 2023',
    icon: '⚖️',
  },
  {
    title: 'Training Program: AI/ML Applications in Power Sector',
    detail:
      'For the officers of Gujarat Urja Vikas Nigam Ltd. (GUVNL) and its subsidiary companies.',
    venue: 'IIT Gandhinagar, August 21-25, 2023',
    icon: '🤖',
  },
  {
    title: 'Industry Workshop-cum-Seminar: Energy Efficiency and Conservation in MSMEs',
    detail:
      'Enlightened the audience on the energy conservation measures and saving the monetary losses in the industries.',
    icon: '🏭',
  },
  {
    title:
      'Training Program: System Operation and Commercial Aspects of Power Purchase, Open Access, & Energy Accounting',
    detail:
      'For the officers of Gujarat Urja Vikas Nigam Ltd. (GUVNL) and its subsidiary companies.',
    venue: 'IIT Gandhinagar, June 27 - July 8, 2022',
    icon: '📊',
  },
  {
    title:
      'Indo-German Science and Technology Center – Workshop on Energy Management for Smart Sustainable Cities',
    detail:
      'Workshop under the IGSTC ECO-WET project on energy management for smart sustainable cities.',
    venue: 'IIT Gandhinagar, February 5-6, 2020',
    icon: '🌆',
  },
  {
    title: 'SERB Workshop',
    detail: 'Distributed Energy Resources and Energy Management.',
    venue: 'IIT Gandhinagar, February 18-19, 2019',
    icon: '⚡',
  },
  {
    title: 'DST-UKIERI Workshop',
    detail: 'Design, Optimization and Data-driven Applications of Smart Energy System.',
    venue: 'IIT Gandhinagar, February 18-19, 2019',
    icon: '🔬',
  },
  {
    title: 'ECO-WET Project Consortia Meeting',
    detail: 'Consortium meeting of the IGSTC ECO-WET project partners.',
    venue: 'GIFT City, Gandhinagar, January 23-25, 2019',
    icon: '🤝',
  },
  {
    title: 'DST-UKIERI Awards Ceremony',
    detail:
      'DST-UKIERI Project on "Data-Driven Intelligent Energy Management for Environmentally Sustainable Energy Access".',
    icon: '🏆',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function OutreachPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Outreach</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Events, workshops, and training programs conducted by the Power Systems
              and Smart Grid Lab at IIT Gandhinagar.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Events grid */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
              {outreachEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="liquid-glass rounded-3xl p-6 flex flex-col h-full cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
                >
                  <div className="text-4xl mb-4">{event.icon}</div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3 leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{event.detail}</p>
                  {event.venue && (
                    <p className="text-teal-700 text-sm font-semibold mt-auto pt-4">
                      📍 {event.venue}
                    </p>
                  )}
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
