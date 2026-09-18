'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  // The minimizing effect is only for the home page; on every other page
  // the navbar stays constant and full-width.
  const scrolled = isHome && hasScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Research', href: '/research' },
    { name: 'Teaching', href: '/teaching' },
    { name: 'Team', href: '/team' },
    { name: 'Publications', href: '/publications' },
    { name: 'Outreach', href: '/outreach' },
    { name: 'Contact', href: '/contact' },
  ];

  const smooth = { type: 'spring', stiffness: 260, damping: 30 } as const;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg pt-6 pb-4 px-6 md:px-12 lg:px-16">
      <div className={`flex ${scrolled ? 'justify-end' : 'justify-start'}`}>
        <motion.div
          layout
          transition={smooth}
          className={`liquid-glass rounded-2xl flex items-center justify-between transition-[padding] duration-300 ${
            scrolled ? 'w-auto px-5 py-3 gap-5' : 'w-full px-6 py-4'
          }`}
        >
          {/* Logo - always visible, shrinks when scrolled */}
          <Link href="/">
            <motion.div
              layout
              transition={smooth}
              className={`flex items-center cursor-pointer mr-6 ${
                scrolled ? 'gap-2 mr-4' : 'gap-3'
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/iitgn-logo.png"
                alt="IIT Gandhinagar"
                className={`object-contain transition-all duration-300 ${
                  scrolled ? 'h-10 w-auto' : 'h-14 w-auto'
                }`}
              />
              <span
                className={`w-px bg-blue-900/30 transition-all duration-300 ${
                  scrolled ? 'h-8' : 'h-10'
                }`}
              ></span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pssg-logo.png"
                alt="PS&SG Lab"
                className={`object-contain transition-all duration-300 ${
                  scrolled ? 'h-8.5 w-auto' : 'h-12 w-auto'
                }`}
              />
              <span
                className={`font-semibold tracking-tight text-blue-900 hover:text-blue-600 transition-all duration-300 ${
                  scrolled ? 'text-lg' : 'text-2xl'
                }`}
              >
                PS&SG Lab
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div layout transition={smooth} className={`hidden md:flex items-center ${scrolled ? 'gap-4' : 'gap-6'}`}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span
                  className={`font-medium text-gray-700 hover:text-blue-900 transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    scrolled ? 'text-sm' : 'text-sm'
                  }`}
                >
                  {link.name}
                </span>
              </Link>
            ))}

            {/* Search Icon */}
            <button className="text-blue-900 hover:text-blue-600 transition-colors ml-1" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300"
                width={scrolled ? '18' : '18'}
                height={scrolled ? '18' : '18'}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-900 text-xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 liquid-glass rounded-2xl px-6 py-4"
        >
          <div className="space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span className="block text-sm font-medium text-gray-700 hover:text-blue-900">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
