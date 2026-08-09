'use client';

import { motion } from 'framer-motion';
import Navbar from '@/src/components/Navbar';

/* ------------------------- Data ------------------------- */

interface CurrentMember {
  name: string;
  email: string;
  photo?: string;
  degree?: string;      // e.g. "MTech: BIT Mesra" or "BE Mechanical"
  role?: string;        // e.g. "Energy Auditor"
  roleDetail?: string;  // shown on its own line under the role
  interest?: string;    // research interest / project
}

const phdStudents: CurrentMember[] = [
  {
    name: 'Souvik Bera',
    email: 'berasouvik@iitgn.ac.in',
    photo: '/team/souvik-bera.jpg',
    degree: 'MTech: Birla Institute of Technology, Mesra',
    interest: 'Distributed energy resources management in distribution network',
  },
  {
    name: 'Divya Sharma',
    email: 'sharmadivya@iitgn.ac.in',
    photo: '/team/divya-sharma.jpg',
    degree: 'MTech: Malviya National Institute of Technology, Jaipur',
    interest: 'Energy management of multi-energy system',
  },
  {
    name: 'Amit Kumar',
    email: 'kumar.amit@iitgn.ac.in',
    photo: '/team/amit-kumar.jpg',
    degree: 'MTech: Motilal Nehru National Institute of Technology, Allahabad',
    interest: 'Energy Management in Data Centers',
  },
  {
    name: 'Krishna Yadav',
    email: 'krishnabhushan.yadav@iitgn.ac.in',
    photo: '/team/krishna-yadav.jpg',
    degree: 'MTech: National Institute of Technology Rourkela',
    interest: 'Power Systems and Grid Optimization',
  },
];

const mtechStudents: CurrentMember[] = [
  {
    name: 'Abhaysingh Maurya',
    email: '24270001@iitgn.ac.in',
    photo: '/team/abhaysingh-maurya.jpg',
    interest: 'Energy assessment and sustainability study in MSMEs',
  },
  {
    name: 'Md Faizan',
    email: '24270004@iitgn.ac.in',
    photo: '/team/md-faizan.jpg',
    interest: 'Energy assessment and sustainability study in MSMEs',
  },
  {
    name: 'Sawan Bharati Jaryal',
    email: 'sawan.jaryal@iitgn.ac.in',
    photo: '/team/sawan-jaryal.jpg',
    degree: 'BTech: National Institute of Technology, Hamirpur',
    interest:
      'Impact assessment of Pumped Storage Projects on the Operational Performance of Gujarat Transmission Network',
  },
  {
    name: 'G. J. Siddardha',
    email: 'gannavarapu.s@iitgn.ac.in',
    photo: '/team/gj-siddardha.jpg',
    degree: 'BTech: National Institute of Technology Rourkela',
    interest: 'Power Swing Blocking in IBR dominated grids',
  },
  {
    name: 'Anindya Rudra',
    email: 'anindyarudra@iitgn.ac.in',
    photo: '/team/anindya-rudra.jpg',
    degree: 'BTech: National Institute of Technology Durgapur, West Bengal',
    interest: 'Digital Twin for Predictive Maintenance of Solar PV Systems',
  },
  {
    name: 'Jay Bhateriya',
    email: 'jay.bhateriya@iitgn.ac.in',
    photo: '/team/jay-bhateriya.jpg',
    degree: 'BTech: IIT Gandhinagar',
    interest: 'Economic benefits of EV charging during Solar hours',
  },
];

const kisemTeam: CurrentMember[] = [
  {
    name: 'Rahul Patel',
    email: 'rahuljayantibhai.p@iitgn.ac.in',
    photo: '/team/rahul-patel.jpg',
    degree: 'BE Mechanical',
    role: 'Energy Auditor',
    roleDetail: 'BEE CEA-30215',
  },
  {
    name: 'Abhaysingh Maurya',
    email: 'abhaysingh.m@iitgn.ac.in',
    photo: '/team/abhaysingh-maurya.jpg',
    degree: 'BE Electrical',
    role: 'Energy Manager',
    roleDetail: 'BEE CEM-301545',
  },
  {
    name: 'Md Faizan',
    email: 'md.f@iitgn.ac.in',
    photo: '/team/md-faizan.jpg',
    degree: 'BE Electrical',
    role: 'Project Fellow',
    roleDetail: 'Field Engineer',
  },
  {
    name: 'Sagar Loriya',
    email: 'loriyasagar.b@iitgn.ac.in',
    photo: '/team/sagar-loriya.png',
    degree: 'BE Mechanical',
    role: 'Project Assistant III',
    roleDetail: 'Thermal Efficiency',
  },
  {
    name: 'Dhruvit Patel',
    email: 'dhruvit.patel@iitgn.ac.in',
    photo: '/team/dhruvit-patel.png',
    degree: 'BE Electrical',
    role: 'Project Assistant-I',
    roleDetail: 'Field Engineer',
  },
  {
    name: 'Rishabh Dangi',
    email: 'rishabh.dangi@iitgn.ac.in',
    photo: '/team/rishabh-dangi.jpg',
    degree: 'BE Electrical',
    role: 'Project Assistant-I',
    roleDetail: 'Process Automation',
  },
];

interface FormerMember {
  name: string;
  position?: string;
  thesis: string;
}

const formerPhd: FormerMember[] = [
  {
    name: 'Dr. Sachinkumar Suthar',
    position: 'Application Engineer – Power Economics, at GE Vernova, Bangalore',
    thesis:
      'Network-Aware Peer-to-Peer Energy Trading in Electrical Distribution System, January 2025',
  },
  {
    name: 'Dr. Abhishek Tiwari',
    position: 'Quality Assurance Senior Professional at Hitachi Energy, Bangalore',
    thesis:
      'Demand Response Frameworks for Smart Electrical Distribution System, December 2024 [Received GRID-INDIA Power Systems Award (GIPSA) 2024-25, formerly known as the POSOCO Power System Award]',
  },
  {
    name: 'Dr. Poornachandratejasvi Laxman Bhattar',
    position: 'Project Engineer, at Hitachi Energy (IN OPC), Bangalore',
    thesis:
      'Vulnerability Assessment of Smart Grid with False Data Injection Attacks, November 2023',
  },
  {
    name: 'Dr. Rishabh Abhinav',
    position:
      'Senior Power Systems Consultant at PSE2 Consulting | Renewable Energy and Electricity Markets | Bristol, UK',
    thesis:
      'Grid-Integration of Large-Scale Wind Power Generation with Battery Energy Storage System, April 2021',
  },
  {
    name: 'Dr. P. Bala Sai Kiran',
    position: 'Software Engineer at GE Vernova | Electricity Markets | Hyderabad',
    thesis:
      'Development of Energy Management Frameworks for DER Integration in Distribution Networks, February 2021',
  },
  {
    name: 'Dr. Batchu Rajasekhar',
    position: 'Senior Control Software Engineer at Fluence Energy | Bangalore',
    thesis:
      'Distributed Demand Response in Smart Grid: A Game-Theoretic and Machine Learning Approach, June 2020',
  },
  {
    name: 'Dr. Kalpesh A. Joshi',
    position: 'Power Systems Engineer at Powertech Inc | British Columbia, Canada',
    thesis:
      'Analysis and Optimization of Distribution Networks with PV Generation and Battery Energy Storage System, Dec 2016',
  },
];

const formerMtech: FormerMember[] = [
  {
    name: 'Shokhayui Chithung',
    position: 'Management Trainee, GMDC',
    thesis: 'Economic Viability Assessment of Solar PV-BESS in Distribution Network',
  },
  {
    name: 'Gunjan Agarwalla',
    position: 'Associate Energy Consultant at Hitachi Energy Ltd, Vadodara',
    thesis: 'Linear Regression Based Short-Term Wind Power Generation Forecasting',
  },
  {
    name: 'Ragini Singh',
    position: 'Pursuing PhD at Indian Institute of Technology Bombay',
    thesis:
      'Renewable Consumption Obligation Compliance Strategies for Designated Industrial Consumers',
  },
  {
    name: 'Bishalkumar Sah Teli',
    position: 'Project Associate-II in Electrical Engineering at IIT Gandhinagar',
    thesis:
      'Techno-economic Analysis of EV Charging Station Integrated with Solar PV and Battery Energy Storage Systems',
  },
  {
    name: 'Devangi',
    position: 'Pursuing PhD in Electrical Engineering at IIT Delhi',
    thesis:
      'Impact Assessment of False Data Injection Attack on P2P Trading Enabled Power Distribution Network, 2024 [Received GRID-INDIA Power Systems Award (GIPSA) 2024-25, formerly known as the POSOCO Power System Award]',
  },
  {
    name: 'Yash Vardhan Omar',
    position: 'Management Trainee at Atlas Copco, Pune',
    thesis:
      'Optimal Power Procurement Strategy for Electricity Distribution Licensees: A Case Study, 2023 [Received GRID-INDIA Power Systems Award (GIPSA) 2023-24, formerly known as the POSOCO Power System Award]',
  },
  {
    name: 'Jainendra Jain',
    position: 'HPC Developer at Hewlett Packard Enterprise, Bengaluru',
    thesis:
      "Blockchain-based Network Aware Peer-to-Peer Energy Trading Framework, 2021 [Received the Director's Gold Medal in MTech Electrical Engineering (2021)]",
  },
  {
    name: 'Devesh Kumar',
    position: 'System Engineer at TCS',
    thesis:
      'Energy Management Platform for Cooling System: Case Studies, 2021 [Received the POSOCO Power System Award-2022]',
  },
  {
    name: 'Satish Kumar Singh',
    position: 'Sr. Hardware Engineer at Enphase Energy, Bengaluru',
    thesis: 'Energy Management Framework in Active Distribution Network, 2021',
  },
  {
    name: 'Priyanka Sharma',
    position: 'Senior Analog Layout Engineer at Marvell Semiconductor, Bengaluru',
    thesis:
      'Multi-objective Optimization based Automated Demand Response Model in Smart Distribution Grid, 2021',
  },
  {
    name: 'Anandsingh Chauhan',
    position: 'Researcher at TCS Research, Mumbai',
    thesis:
      'Peer to Peer Energy Trading Platform: Hardware and Software Integration, 2020 [Received the POSOCO Power System Award-2021]',
  },
  {
    name: 'Sachinkumar B Suthar',
    position:
      'Completed PhD from IIT Gandhinagar in Jan 2025 and now working as an Application Engineer – Power Economics at GE Vernova, Bangalore',
    thesis:
      "Optimal Operation of Grid-Tied Solar PV and Battery Energy Storage System: A Case Study, 2019 [Received the Director's Gold Medal in MTech Electrical Engineering (2019)]",
  },
  {
    name: 'Payal V Dahiwale',
    position: 'Pursuing PhD at IIT Bombay',
    thesis: 'Fault Management Scheme for DC Microgrid, 2019',
  },
  {
    name: 'Vishal Kushwaha',
    position: 'Pursuing PhD at IISc Bangalore',
    thesis:
      'Comparative Study of Forecast Models for Very Short-Term Solar Photovoltaic Power Generation Forecasting, 2018',
  },
  {
    name: 'Biswajeet Rout',
    position:
      'Completed PhD in 2024 from Kansas State University, USA and now working as a Lead Engineer at Eaton Research Labs, Colorado, USA',
    thesis:
      'Analysis of Distribution Network with Solar PV and Electric Vehicle Integration, 2018',
  },
  {
    name: 'Shweta Dahale',
    position:
      'Completed PhD in 2023 from Kansas State University, USA and now working as a Lead Engineer at Eaton Research Labs, Colorado, USA',
    thesis: 'Adaptive Droop Control Strategy using Fuzzy Logic in DC Microgrid, 2018',
  },
  {
    name: 'Dhanapala Prudhviraj',
    position: 'Pursuing PhD at Kansas State University, USA',
    thesis:
      'Energy Management of AC Microgrid: Deterministic and Stochastic Framework, 2018',
  },
  {
    name: 'Balveer Singh',
    position: 'With Banas Dairy, Gujarat',
    thesis:
      'Impact assessment of distributed solar PV integration in Low voltage unbalanced distribution network: A case study, 2018',
  },
  {
    name: 'G. Rakesh',
    position: 'Scientific Officer – C at Kudankulam Nuclear Power Project, NPCIL, India',
    thesis:
      'Simulation and experimental study of bidirectional AC-DC converter for hybrid microgrid application, 2016',
  },
  {
    name: 'Puchalapalli Sambasivaiah',
    position: 'Completed PhD from IIT Delhi',
    thesis:
      "Harmonics assessment of domestic and commercial loads and evaluation of control techniques for shunt active power filter, 2016 [Received the Director's Gold Medal in MTech Electrical Engineering (2016)]",
  },
  {
    name: 'Arun Nair',
    position: 'Project Engineer at Al Mostajed Technologies Co. LLC, UAE',
    thesis:
      'Demand Response Algorithm Incorporating Electricity Market Prices for Residential Energy Management, 2014',
  },
  {
    name: 'Rohith Varier',
    position: 'Associate Technical Director, Power Systems at Arcadis, Hyderabad',
    thesis:
      'A Novel Active Anti-Islanding Protection Scheme for Grid-Interactive Roof-Top Solar PV Systems, 2014',
  },
  {
    name: 'Sreejith R.',
    position: 'R&D Engineer at Hitachi Energy, Chennai',
    thesis:
      'Finite Control Set MPC based Distribution Static Synchronous Compensator (DSTATCOM) for Load Compensation, 2014',
  },
  {
    name: 'Rahul Anand Kaushik',
    position:
      'Electrical Engineer, Gujarat State Fertilizers & Chemicals Ltd (GSFC), Vadodara',
    thesis:
      'Power Flow Management in Hybrid AC-DC Microgrid using Master-Slave Control Technique, 2014',
  },
  {
    name: 'Gaurav Kumar',
    position: 'Assistant Electrical Engineer, North Bihar Power Distribution Company',
    thesis: 'Outage Management System for Power Distribution System, 2014',
  },
  {
    name: 'Sherry Jain',
    thesis: 'Least Distance Predictor Model for Short Term Load Forecasting, 2014',
  },
];

/* ------------------------- Animation variants ------------------------- */

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

/* ------------------------- Reusable pieces ------------------------- */

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div variants={itemVariants} className="mb-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      <div className="w-20 h-1 bg-gradient-to-r from-blue-900 to-teal-600 mx-auto mt-4 rounded-full"></div>
    </motion.div>
  );
}

function PhotoOrPlaceholder({ photo, name }: { photo?: string; name: string }) {
  return (
    <div className="relative w-full aspect-[4/4.4] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100/70 via-white/40 to-teal-100/70">
      {photo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <svg
            className="w-24 h-24 text-blue-900/15"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
          </svg>
        </div>
      )}
    </div>
  );
}

function MemberCard({ member }: { member: CurrentMember }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group liquid-glass rounded-3xl p-4 flex flex-col h-full cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
    >
      <PhotoOrPlaceholder photo={member.photo} name={member.name} />

      <div className="flex flex-col flex-1 pt-4 px-2 pb-2">
        <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>

        {member.role && (
          <p className="text-teal-700 font-semibold text-sm mt-1">{member.role}</p>
        )}

        {member.roleDetail && (
          <p className="text-teal-600 text-sm mt-0.5">{member.roleDetail}</p>
        )}

        {member.degree && (
          <p className="text-gray-600 text-sm mt-2">{member.degree}</p>
        )}

        {member.interest && (
          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
            <span className="font-semibold text-blue-900">Research Interests: </span>
            {member.interest}
          </p>
        )}

        <div className="mt-auto pt-4">
          <a
            href={`mailto:${member.email}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-blue-900 transition-colors break-all"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            {member.email}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function FormerCard({ member }: { member: FormerMember }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="liquid-glass rounded-3xl p-6 flex flex-col h-full cursor-pointer transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
    >
      <h3 className="text-lg font-bold text-blue-900">{member.name}</h3>
      {member.position && (
        <p className="text-teal-700 text-sm font-semibold mt-2">{member.position}</p>
      )}
      <p className="text-gray-700 text-sm mt-3 leading-relaxed">
        <span className="font-semibold text-blue-900">Thesis: </span>
        {member.thesis}
      </p>
    </motion.div>
  );
}

/* ------------------------- Page ------------------------- */

export default function TeamPage() {
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
        <div className="w-full max-w-[1700px] mx-auto">
          {/* Page title — same style as home page headings, no colored bar */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Our Team</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Meet the researchers and engineers of the Power Systems and Smart Grid
              Lab at IIT Gandhinagar.
            </p>
          </motion.div>

          {/* PhD Students */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="mb-20"
          >
            <SectionHeading title="PhD Students" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {phdStudents.map((m) => (
                <MemberCard key={m.email} member={m} />
              ))}
            </div>
          </motion.section>

          {/* MTech Students */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="mb-20"
          >
            <SectionHeading title="MTech Students" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 items-stretch">
              {mtechStudents.map((m) => (
                <MemberCard key={m.email} member={m} />
              ))}
            </div>
          </motion.section>

          {/* KISEM Energy Assessment Team */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="mb-20"
          >
            <SectionHeading title="KISEM Energy Assessment Team" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 items-stretch">
              {kisemTeam.map((m) => (
                <MemberCard key={m.email} member={m} />
              ))}
            </div>
          </motion.section>

          {/* Former Team Members */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={containerVariants}
            className="mb-20"
          >
            <SectionHeading
              title="Former Team Members"
              subtitle="Alumni of the Power Systems and Smart Grid Lab"
            />

            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-blue-900 mb-6 mt-4"
            >
              Former PhD Students
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch mb-14">
              {formerPhd.map((m) => (
                <FormerCard key={m.name} member={m} />
              ))}
            </div>

            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-blue-900 mb-6"
            >
              Former MTech Students
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
              {formerMtech.map((m) => (
                <FormerCard key={m.name} member={m} />
              ))}
            </div>
          </motion.section>

          {/* Join Us */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="liquid-glass rounded-3xl p-10 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Be Part of Our Growing Team
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              We welcome <strong>students, researchers, and collaborators</strong> from
              all backgrounds.
            </p>
            <a href="mailto:naran@iitgn.ac.in">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-900 text-white font-bold text-lg rounded-xl hover:bg-blue-800 transition-all"
              >
                Join Our Lab
              </motion.button>
            </a>
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
