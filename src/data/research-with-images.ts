// This is the updated research.ts file with image paths ready to use
// Replace the contents of src/data/research.ts with this file after downloading images

export const researchData = {
  lab: {
    title: "Power System and Smart Grid Lab @ IITGN",
    intro: "I lead the Power Systems and Smart Grid Lab in which we focus on active distribution grid management and flexible electricity market including demand side management through digitalization – for the successful transition to a low-carbon sustainable energy ecosystem.",
    description: "Our specific expertise is in developing the hardware-software toolkits for demand side energy management – for distributed renewable energy and battery storage integration, and peer-to-peer energy trading and demand response participation by energy consumers. Our research benefits for better distribution network efficiency, resiliency and reduced carbon footprint in power and energy system.",
    focusAreas: [
      {
        title: "Electricity Markets",
        description: "Smart distribution grid/microgrids, Cyber-physical power system security",
        icon: "🔌",
      },
      {
        title: "Renewable Integration",
        description: "Smart distribution grid and Renewable energy integration",
        icon: "🌱",
      },
      {
        title: "Energy Management",
        description: "Peer-to-peer energy sharing and Demand response program",
        icon: "⚡",
      },
    ],
  },
  ongoingProjects: [
    {
      id: 1,
      title: "CyberDiSS: Cyber-Attack Analysis Toolkit for Cyber-Physical Distribution System Security",
      period: "2022-2023",
      funding: "Central Power Research Institute (CPRI)",
      description: "To develop the cyber-physical emulation for distribution system (CyberDiSS)",
      achievements: [
        "To develop the cyber-physical emulation for distribution system (CyberDiSS)",
        "To build the Cyber-attack Analysis Toolkit (CAT) – a software platform and intrusion detection system (IDS) for securing the distribution system from potential cyber threats and attacks",
      ],
      image: "/cyber-physical-system.png",  // ← UPDATED
      imageAlt: "Cyber Physical Power System",
    },
    {
      id: 2,
      title: "KOTAK IITM SAVE ENERGY MISSION (KISEM) – IIT Gandhinagar Collaborative Project",
      period: "Ongoing",
      funding: "Industrial Energy Assessment & Sustainability Study",
      description: "The objective of this collaborative project is to support MSMEs by conducting detailed energy assessment studies to enhance their overall energy efficiency and reduce carbon footprints.",
      achievements: [
        "Energy assessment studies for industrial plants",
        "Opportunities to conserve energy, minimize waste, and reduce operational costs",
        "Recommendations based on plant observations and measurements",
      ],
      image: "/kisem-project-1.jpg",  // ← UPDATED
      imageAlt: "KISEM Project",
    },
  ],
  completedProjects: [
    {
      id: 1,
      title: "ECO-WET: Efficient Coupling of Water and Energy Technologies for Smart Sustainable Cities",
      period: "2018-2022",
      funding: "Indo-German Science and Technology Center (IGSTC)",
      link: "https://ecowet.fortiss.org/en/",
      description: "We developed the innovative hardware and software tools for efficient operation of water and electricity infrastructure via in-house developed energy optimizer while utilizing the onsite clean energy resources – Solar PV and Battery Energy Storage System (BESS), in smart sustainable cities testbed.",
      achievements: [
        "Developed and tested Solar PV generation and Load forecasting",
        "Aeration blower speed control and Energy optimization tool at GIFT City, Gandhinagar testbed",
        "4DIAC and iEMS development and integration at WTP, STP and streetlight",
        "Seven usecases implemented at the project pilot site",
        "TRL Achievement (proof of concept to large scale demonstration)",
      ],
      image: "/igstc-project.jpg",  // ← UPDATED
      imageAlt: "IGSTC Project",
      videoLink: "https://iitgnacin-my.sharepoint.com/:v:/g/personal/naran_iitgn_ac_in/EZWcOyJSrZ1KuXmIycZqfAUB1eKvdEw21xGVsIh_xBxj2Q?e=ubcoRn",
    },
    {
      id: 2,
      title: "Development of a Prosumer Driven Integrated SMART grid",
      period: "2018-2022",
      funding: "DST – Mission Innovation: Smart Grids",
      link: "https://www2.iima.ac.in/p2penergy/index.php",
      description: "We developed proof of concept (PoC) and test rig at IIT Gandhinagar to demonstrate the real-world application of demand side energy management programs – Peer-to-Peer (P2P) energy sharing & further pilot project demonstration at electricity distribution company.",
      achievements: [
        "Development of SMART AGENT: A Universal IoT-based Smart Energy Management Device",
        "Enables electricity consumers to participate in P2P energy trading, DR, and demand response programs",
        "Monitoring and optimization of energy usage for all flexible energy assets",
        "India Smart Grid Forum (ISGF) Innovation Awards 2023 ~ Platinum Award",
      ],
      award: "Platinum Award - ISGF Innovation Awards 2023",
      awardCategory: "Smart Technology – Electricity Distribution",
      image: "/smart-agent-p2p.jpg",  // ← UPDATED
      imageAlt: "SMART AGENT - P2P Energy",
    },
    {
      id: 3,
      title: "Data-Driven Intelligent Energy Management for Environmentally Sustainable Energy Access",
      period: "2017-2021",
      funding: "DST-UKIERI",
      link: "https://d-diem.eng.ed.ac.uk/home",
      description: "A research program on data-driven software technology (big data analytics and real-time intelligence) platforms for intelligent energy management.",
      objectives: [
        "Develop key strategies, novel algorithms and models – to define interactions of smart technologies, DERs and digital networks",
        "A research program on data-driven software technology (big data analytics and real-time intelligence) platforms",
        "Internal and outreaching exchange and dissemination of skill sets and knowledge",
      ],
      partners: [
        "IIT Gandhinagar",
        "MMMUT Gorakhpur",
        "The University of Edinburgh, UK",
        "Queen's University Belfast, UK",
      ],
      image: "/dst-ukieri.png",  // ← UPDATED
      imageAlt: "DST-UKIERI Project",
    },
    {
      id: 4,
      title: "Smart Integrated Campus Energy Monitoring and Management System",
      period: "2017-2020",
      funding: "DST-SERB",
      link: "http://solarpv.iitgn.ac.in/",
      description: "Energy monitoring, Data Analysis and Optimal DR strategies for campus-wide energy management.",
      objectives: [
        "Energy monitoring, Data Analysis and Optimal DR strategies",
        "Optimization and machine learning approaches for energy management",
        "Promoting efficient energy utilization in the campus",
      ],
      achievements: [
        "Solar PV Generation @ IITGN Portal deployment",
        "Newton-Bhabha grant to organize India UK Advanced Training School (IUATS)",
        "Building Energy Efficiency Higher & Advanced Network (BHAVAN) Fellowship by IUSSTF 2016",
      ],
      image: "/solar-pv-dashboard.jpg",  // ← UPDATED
      imageAlt: "Solar PV Dashboard",
    },
  ],
  labFacilities: {
    description: "PS&SG laboratory is equipped with a fully digital real-time power engineering simulation platform with real-time digital simulator – OP5600 and customized hardware and firmware for Hardware-in-the-loop (HIL) and Rapid control prototype (RCP) simulation studies.",
    image: "/pssg-lab-facilities.jpg",  // ← ADDED
    imageAlt: "PSSG Lab Facilities",
    hardware: [
      {
        title: "Real-Time Digital Simulator (OPAL-RT)",
        description: "Fully digital real-time power engineering simulation platform consists of OPAL-RT (OP4508 F11-3+1) real-time digital simulator supporting real time applications.",
        specs: [
          "Hardware-in-the-loop (HIL) simulation",
          "Rapid control prototype (RCP)",
          "500GB hard disk memory",
          "MATLAB/SIMULINK integration",
          "FGPA I/O Boards",
        ],
        applications: [
          "Smart distribution grid/Microgrids",
          "Protection Systems",
          "Battery Management Systems",
          "Hybrid and Electrical Transportation",
          "Modular Multilevel Converter (MMC)",
          "Wide Area Monitoring Protection and Control",
        ],
      },
      {
        title: "Customized Modular Hardware and Firmware (LABVOLT)",
        description: "Training system consisting of modular blocks for building controllable real time emulated systems.",
        specs: [
          "Modular block architecture",
          "Real-time emulation",
          "Flexible configuration",
          "Educational platform",
        ],
        applications: [
          "DC and AC Power Circuits",
          "Lead-Acid Battery",
          "Basic Renewable Energy",
          "Home Energy Production",
          "Electromechanical Systems",
          "Smart Grid Technologies",
          "Power Transmission",
        ],
      },
    ],
    software: [
      {
        title: "CYMDIST Distribution Analysis Software (5 users)",
        description: "Powerful distribution network analysis tool for load flow analysis of balanced, unbalanced networks.",
        features: [
          "Load flow analysis",
          "Single/three-phase networks",
          "Mesh/radial type networks",
          "IITGN network analysis",
          "500KW solar power plant analysis",
        ],
      },
      {
        title: "DIgSILENT Power Factory",
        description: "Power system analysis software for distribution system operational planning and DER integration.",
        features: [
          "Load flow analysis",
          "DER integration studies",
          "Impact assessment",
          "Distribution planning",
          "Protection analysis",
        ],
      },
      {
        title: "GAMS Software",
        description: "General Algebraic Modelling System for solving optimization problems.",
        features: [
          "Linear optimization",
          "Non-linear optimization",
          "Mixed-integer programming",
          "Energy system modeling",
        ],
      },
      {
        title: "OpenDSS (Open source)",
        description: "Multipurpose distribution analysis tool supporting all distribution planning aspects.",
        features: [
          "Power flow analysis",
          "Harmonic analysis",
          "Distribution dynamic analysis",
          "Time series analysis",
          "Seasonal load analysis",
        ],
      },
      {
        title: "MATLAB/Simulink (Institute Licence)",
        description: "Multi-disciplinary numerical computing software and simulation environment.",
        features: [
          "Electrical circuits modeling",
          "Wind/solar generation modeling",
          "Battery energy storage systems",
          "Power electronic converter design",
          "Microgrid applications",
          "Price forecasting",
        ],
      },
      {
        title: "PSCAD",
        description: "Computer-aided design software for modeling and simulating electrical power systems.",
        features: [
          "Short circuit analysis",
          "Substation modeling",
          "HVDC systems",
          "Protection algorithms",
        ],
      },
    ],
  },
};
