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
    <div className="bg-gradient-to-br from-blue-900 via-blue-900 to-blue-800 rounded-3xl p-5 text-white shadow-2xl border border-white/10">
      {/* Professor Photo */}
      <div className="rounded-2xl h-44 sm:h-48 mb-3.5 overflow-hidden shadow-md">
        <img
          src="/NARANSIR.jpg"
          alt="Prof. Naran M. Pindoriya"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-1 leading-tight">Prof. Naran M. Pindoriya</h2>

      {/* Title & Department */}
      <div className="text-center space-y-0.5 mb-3.5 text-xs sm:text-sm">
        <p className="text-blue-100 font-medium">Professor</p>
        <p className="text-blue-200">Department of Electrical Engineering</p>
        <p className="text-blue-200 font-semibold">IIT Gandhinagar</p>
      </div>

      {/* Social / Email icon bar */}
      <div className="flex items-center justify-center gap-3 mb-3.5">
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
        className="block mb-3"
      >
        <button className="w-full bg-teal-500 text-white font-semibold py-2 rounded-xl hover:bg-teal-600 transition-all text-xs sm:text-sm shadow-md">
          View Resume
        </button>
      </Link>

      {/* Research Profile Cards - Google Scholar & Scopus */}
      <div className="pt-3 border-t border-white/15 space-y-2">
        {/* Google Scholar Card */}
        <Link
          href="https://scholar.google.com/citations?user=g93A33UAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-500 text-white font-bold text-xs flex items-center justify-center shadow">
              G
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-white leading-none">Google Scholar</p>
              <p className="text-[10px] text-blue-200 mt-1">Citations Profile</p>
            </div>
          </div>
          <span className="text-xs text-blue-200 group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>

        {/* Scopus Card */}
        <Link
          href="https://www.scopus.com/authid/detail.uri?authorId=24537626100"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-orange-500 text-white flex items-center justify-center shadow">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="3.2" fill="currentColor" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-white leading-none">Scopus Profile</p>
              <p className="text-[10px] text-orange-200 mt-1">Research Profile</p>
            </div>
          </div>
          <span className="text-xs text-orange-200 group-hover:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}
