'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/src/components/Navbar';
import { contactData } from '@/src/data/pages';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:${contactData.details.director.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
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
            {contactData.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            {contactData.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact Information</h2>

              {/* Principal Investigator */}
              <motion.div variants={itemVariants} className="mb-8 bg-blue-50 p-6 rounded-lg border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Principal Investigator</h3>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>{contactData.details.director.name}</strong>
                </p>
                <p className="text-lg text-gray-700 mb-3">
                  {contactData.details.director.title}
                </p>
                <p className="text-lg text-gray-700 mb-1">
                  📧 <a href={`mailto:${contactData.details.director.email}`} className="text-teal-600 font-bold hover:underline">
                    {contactData.details.director.email}
                  </a>
                </p>
                {contactData.details.director.phone && (
                  <p className="text-lg text-gray-700">
                    📱 {contactData.details.director.phone}
                  </p>
                )}
              </motion.div>

              {/* Lab Address */}
              <motion.div variants={itemVariants} className="bg-teal-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Lab Location</h3>
                <p className="text-lg text-gray-700 mb-2">
                  <strong>{contactData.details.lab.name}</strong>
                </p>
                <p className="text-lg text-gray-700 mb-2">
                  {contactData.details.lab.building}
                </p>
                <p className="text-lg text-gray-700 mb-3">
                  📍 {contactData.details.lab.address}
                </p>
                <a
                  href={contactData.details.lab.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-bold hover:underline text-lg"
                >
                  🌐 {contactData.details.lab.website}
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-blue-900 mb-2">
                    Name <span className="text-teal-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-teal-600 text-lg active:border-teal-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-blue-900 mb-2">
                    Email <span className="text-teal-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-teal-600 text-lg active:border-teal-600"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-blue-900 mb-2">
                    Subject <span className="text-teal-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-teal-600 text-lg active:border-teal-600"
                    placeholder="Subject of your inquiry"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-blue-900 mb-2">
                    Message <span className="text-teal-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-teal-600 text-lg active:border-teal-600 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-900 to-teal-700 text-white font-bold text-lg rounded-lg hover:shadow-lg transition-all active:scale-95"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Inquiry Types
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto"></div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {contactData.inquiries.map((inquiry, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white border-2 border-blue-200 rounded-lg p-6 cursor-pointer active:border-teal-600 transition-all hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {inquiry.type}
                  </h3>
                  <p className="text-gray-700 text-lg mb-3">{inquiry.description}</p>
                  <a
                    href={`mailto:${inquiry.email}`}
                    className="text-teal-600 font-bold hover:underline text-lg"
                  >
                    Contact →
                  </a>
                </motion.div>
              ))}
            </motion.div>
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
