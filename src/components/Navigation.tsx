'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'Teaching', href: '/teaching' },
    { name: 'Team', href: '/team' },
    { name: 'Publications', href: '/publications' },
    { name: 'Outreach', href: '/outreach' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                NP
              </div>
              <span className="font-bold text-lg text-blue-900 hidden md:block">
                Naran M. Pindoriya
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ color: '#00A896' }}
                  className={`text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-900 border-b-2 border-teal-600 pb-1'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-900 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2 border-t border-gray-200"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-900 font-bold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
