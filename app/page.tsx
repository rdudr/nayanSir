'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import ProfileCard from '@/src/components/ProfileCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Floating Corner Buttons - Bottom Right - With Real Logos */}
      <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-3 md:flex md:flex-col md:gap-3">
        {/* Google Scholar Button */}
        <Link href="https://scholar.google.com/citations?user=g93A33UAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
          <button className="group relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white px-4 py-3 rounded-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 border border-blue-400 hover:border-blue-300 flex items-center gap-2 whitespace-nowrap">
            {/* Google Scholar Logo - G Icon */}
            <div className="w-6 h-6 flex items-center justify-center bg-white text-blue-700 rounded font-bold text-sm">G</div>
            <div className="hidden sm:block">
              <div className="text-xs font-semibold">Google Scholar</div>
              <div className="text-xs opacity-90">Citations Profile</div>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity -z-10"></div>
          </button>
        </Link>

        {/* Scopus Button */}
        <Link href="https://www.scopus.com/authid/detail.uri?authorId=24537626100" target="_blank" rel="noopener noreferrer">
          <button className="group relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white px-4 py-3 rounded-2xl hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1 border border-orange-400 hover:border-orange-300 flex items-center gap-2 whitespace-nowrap">
            {/* Scopus Logo - Circular Design */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" fill="white" opacity="0.9"/>
              <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="#FF6B35"/>
            </svg>
            <div className="hidden sm:block">
              <div className="text-xs font-semibold">Scopus Profile</div>
              <div className="text-xs opacity-90">Research Profile</div>
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity -z-10"></div>
          </button>
        </Link>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row pt-32 gap-8 lg:gap-6 px-6 md:px-12 lg:px-16">
        {/* Profile Card - top on mobile/tablet, sticky sidebar on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-sm mx-auto lg:mx-0 lg:flex-shrink-0"
        >
          <div className="lg:sticky lg:top-32">
            <ProfileCard />
          </div>
        </motion.div>

        {/* Right - Scrollable Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 min-w-0 pb-20 lg:mt-12"
        >

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-900">Overview</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
              <p>
                I am a Professor in Department of Electrical Engineering at <Link href="http://www.iitgn.ac.in/" target="_blank" className="text-blue-600 hover:text-blue-800 font-semibold">Indian Institute of Technology Gandhinagar</Link>, India. I was a research fellow in the Department of Electrical and Computer Engineering at <Link href="https://www.nus.edu.sg/" target="_blank" className="text-blue-600 hover:text-blue-800 font-semibold">National University of Singapore</Link>, Singapore in 2010. I received a PhD degree in Electrical Engineering from <Link href="https://www.iitk.ac.in/" target="_blank" className="text-blue-600 hover:text-blue-800 font-semibold">Indian Institute of Technology Kanpur</Link>, India in 2009. I am the principal investigator of <span className="italic font-semibold">Power Systems and Smart Grid lab</span> at IIT Gandhinagar.
              </p>
              <p>
                We execute the <span className="text-blue-600 font-semibold">industry relevant national/international collaborative research and consultancy projects</span> to develop a strong industry-academic research program for supporting the successful transition to a promising environmentally sustainable <span className="italic">energy ecosystem</span> that involves (1) optimal utilization of distributed clean energy resources (2) developing smart grid technologies and (3) promoting energy efficiency at MSMEs industries and electricity distribution systems.
              </p>
              <p>
                I am the co-author/author of 90+ research papers (<Link href="/publications" className="text-blue-600 hover:text-blue-800 font-semibold">list of publications</Link>) in peer-reviewed international journals and conferences, and 6 book chapters.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-blue-900">87+</div>
              <p className="text-gray-600 mt-2 font-semibold">Publications</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-blue-900">6</div>
              <p className="text-gray-600 mt-2 font-semibold">Research Projects</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <div className="text-4xl font-bold text-blue-900">10+</div>
              <p className="text-gray-600 mt-2 font-semibold">Team Members</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mb-20 flex flex-wrap gap-4">
            <Link href="/research">
              <button className="px-8 py-4 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">
                Explore Research
              </button>
            </Link>
            <Link href="/publications">
              <button className="px-8 py-4 border-2 border-blue-900 text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                View Publications
              </button>
            </Link>
          </div>

          {/* Research Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-900">Research Interests</h2>
            </div>
            <div className="ml-16 space-y-3">
              <div className="flex gap-3">
                <span className="text-2xl">⚡</span>
                <p className="text-gray-700 text-justify">Electricity market and Smart grid</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">🌱</span>
                <p className="text-gray-700 text-justify">Renewable energy grid integration, Grid optimization and Forecasting</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">💡</span>
                <p className="text-gray-700 text-justify">Demand side energy management – Peer-to-peer (P2P) energy sharing and Demand response (DR)</p>
              </div>
            </div>
          </motion.div>

          {/* Awards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-900">Awards & Special Recognitions</h2>
            </div>
            <div className="ml-16 space-y-4">
              <div className="flex gap-3">
                <span className="text-2xl">⭐</span>
                <p className="text-gray-700 text-justify"><strong>CII Industry–Academia Partnership Award 2025</strong> - Received under the Pioneering Faculty category, at CII Global Summit held on December 5, 2025, in New Delhi.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⭐</span>
                <p className="text-gray-700 text-justify"><strong>GRID-INDIA Power Systems Awards (GIPSA) 2025-26</strong> - Bishal Kumar Sah Teli (MTech) student of my research group won the award.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⭐</span>
                <p className="text-gray-700 text-justify"><strong>GRID-INDIA Power Systems Awards (GIPSA) 2024-25</strong> - Abhishek Tiwari (PhD) and Devangi (MTech) students of my research group won the prestigious award.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⭐</span>
                <p className="text-gray-700 text-justify"><strong>Excellence in Outreach Activities Award</strong> - Received at IIT Gandhinagar for the academic year 2022-23.</p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⭐</span>
                <p className="text-gray-700 text-justify">
                  <strong>India Smart Grid Forum (ISGF) Innovation Awards 2023</strong> - Platinum award for the award category "Smart Technology – Electricity Distribution".
                  <Link href="https://www.isuw.in/innovation-awards-2023" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold ml-2">View Details →</Link>
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-2xl">⭐</span>
                <p className="text-gray-700 text-justify"><strong>GRID-INDIA Power System Awards (GIPSA)</strong> - Three MTech students of my research group (graduated in 2023, 2021 and 2020) won the award in the Master thesis category.</p>
              </div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-900">Education</h2>
            </div>
            <div className="ml-16 space-y-5">
              <div className="border-l-4 border-blue-900 pl-4">
                <p className="font-bold text-blue-900 text-lg">PhD, Electrical Engineering</p>
                <p className="text-gray-700 text-justify">Indian Institute of Technology Kanpur</p>
              </div>
              <div className="border-l-4 border-blue-900 pl-4">
                <p className="font-bold text-blue-900 text-lg">ME, Electrical Engineering</p>
                <p className="text-gray-700 text-justify">M.S. University of Baroda, Gujarat</p>
              </div>
              <div className="border-l-4 border-blue-900 pl-4">
                <p className="font-bold text-blue-900 text-lg">BE, Electrical Engineering</p>
                <p className="text-gray-700 text-justify">L D College of Engineering, Gujarat University, Gujarat</p>
              </div>
            </div>
          </motion.div>

          {/* Professional Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-900">Professional Experience</h2>
            </div>
            <div className="ml-16 space-y-6">
              <div className="border-l-4 border-blue-900 pl-4">
                <p className="font-bold text-blue-900 text-lg">Professor (Nov 2024 – Present)</p>
                <p className="text-gray-700 text-justify">Electrical Engineering, <Link href="http://www.iitgn.ac.in/" target="_blank" className="text-blue-600 hover:underline">Indian Institute of Technology Gandhinagar</Link></p>
              </div>
              <div className="border-l-4 border-blue-900 pl-4">
                <p className="font-bold text-blue-900 text-lg">Associate Professor (April 2018 – Nov 2024)</p>
                <p className="text-gray-700 text-justify">Electrical Engineering, <Link href="http://www.iitgn.ac.in/" target="_blank" className="text-blue-600 hover:underline">Indian Institute of Technology Gandhinagar</Link></p>
              </div>
              <div className="border-l-4 border-blue-900 pl-4">
                <p className="font-bold text-blue-900 text-lg">Assistant Professor (Nov 2010 – April 2018)</p>
                <p className="text-gray-700 text-justify">Electrical Engineering, <Link href="http://www.iitgn.ac.in/" target="_blank" className="text-blue-600 hover:underline">Indian Institute of Technology Gandhinagar</Link></p>
              </div>
              <div className="border-l-4 border-blue-900 pl-4">
                <p className="font-bold text-blue-900 text-lg">Research Fellow (Jan 2010 – Nov 2010)</p>
                <p className="text-gray-700 text-justify">Department of Electrical and Computer Engineering, <Link href="https://www.ece.nus.edu.sg/" target="_blank" className="text-blue-600 hover:underline">National University of Singapore</Link>, Singapore</p>
              </div>
            </div>
          </motion.div>

          {/* Professional Affiliations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl font-bold text-blue-900">Professional Affiliations & Services</h2>
            </div>
            <div className="ml-16 space-y-3">
              <div className="flex gap-3">
                <span className="text-xl">✓</span>
                <p className="text-gray-700 text-justify"><strong>Independent Director</strong>, Gujarat State Electricity Corporation Ltd (GSECL), GUVNL, Vadodara</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">✓</span>
                <p className="text-gray-700 text-justify"><strong>Member, Research Advisory Committee</strong>, Electrical Research and Development Association (ERDA), Vadodara</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">✓</span>
                <p className="text-gray-700 text-justify"><strong>Associate Editor</strong>, IET Smart Grid</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">✓</span>
                <p className="text-gray-700 text-justify"><strong>Chair</strong>, IEEE PES Gujarat Chapter</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">✓</span>
                <p className="text-gray-700 text-justify"><strong>Senior Member</strong> of the IEEE and member of IEEE Power & Energy Society (PES) and IEEE Industrial Application Society (IAS)</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">✓</span>
                <p className="text-gray-700 text-justify"><strong>Fellow</strong> of the Institution of Engineers (India)</p>
              </div>
              <div className="flex gap-3">
                <span className="text-xl">✓</span>
                <p className="text-gray-700 text-justify"><strong>Fellow</strong> of The Institution of Electronics and Telecommunication Engineers (IETE)</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Research', icon: '🔬', link: '/research' },
              { title: 'Publications', icon: '📚', link: '/publications' },
              { title: 'Teaching', icon: '🎓', link: '/teaching' },
              { title: 'Team', icon: '👥', link: '/team' },
            ].map((item, idx) => (
              <Link key={idx} href={item.link}>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all cursor-pointer">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-blue-900">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© 2024 <strong>Power Systems and Smart Grid Lab @ IITGN</strong></p>
          <p className="text-gray-300">IIT Gandhinagar | Advancing Sustainable Energy Solutions</p>
        </div>
      </footer>
    </div>
  );
}
