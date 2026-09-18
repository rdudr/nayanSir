'use client';

import Link from 'next/link';

/**
 * Single, fully-responsive profile card.
 * Structure follows a centered "bio card" logic: photo → name → title → social icons → CTA.
 * Renders identically at every breakpoint; the parent decides placement
 * (top of page on mobile/tablet, sticky sidebar on desktop).
 */
export default function ProfileCard() {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-900 to-blue-800 rounded-3xl p-5 sm:p-6 text-white shadow-2xl border border-white/10">
      {/* Professor Photo */}
      <div className="rounded-2xl h-48 sm:h-52 mb-4 overflow-hidden shadow-md">
        <img
          src="/NARANSIR.jpg"
          alt="Prof. Naran M. Pindoriya"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-1 leading-tight">Prof. Naran M. Pindoriya</h2>

      {/* Title & Department */}
      <div className="text-center space-y-0.5 mb-4 text-xs sm:text-sm">
        <p className="text-blue-100 font-medium">Professor</p>
        <p className="text-blue-200">Department of Electrical Engineering</p>
        <p className="text-blue-200 font-semibold">IIT Gandhinagar</p>
      </div>

      {/* Social / profile icons */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <Link
          href="https://scholar.google.com/citations?user=g93A33UAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Scholar profile"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
        >
          <span className="font-bold text-sm">G</span>
        </Link>

        <Link
          href="https://www.scopus.com/authid/detail.uri?authorId=24537626100"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scopus profile"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="12" r="3.2" fill="currentColor" />
          </svg>
        </Link>

        <a
          href="mailto:naran@iitgn.ac.in"
          aria-label="Email"
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>
      </div>

      {/* Resume Button */}
      <Link
        href="https://docs.google.com/document/d/1-ckgI7_tdxOGnI3uKknD5spnDxCwFal4/edit?usp=sharing&ouid=109201548387989477018&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <button className="w-full bg-teal-500 text-white font-semibold py-2.5 rounded-xl hover:bg-teal-600 transition-all text-sm shadow-md">
          View Resume
        </button>
      </Link>
    </div>
  );
}
