"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiFilter, FiExternalLink, FiBarChart2,FiArrowRight, FiDollarSign, FiUsers, FiMapPin } from "react-icons/fi";
 import Link from "next/link";
const PortfolioPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");

  // Portfolio data with 50+ companies
const portfolioCompanies = [
  {
    id: 1,
    name: "DesiVocal",
    description: "Text To speech and AI Voice generator",
    sector: "Artificial Intelligence",
    stage: "Series A",
    year: 2024,
    logo: "/desi-vocal-logo.png",
    website: "https://www.desivocal.com/",
    stats: {
      Invested: "$4.5M",
      growth: "320% YoY",
      employees: "22"
    }
  },
  {
    id: 2,
    name: "Enfawns",
    description: "Enfawns AI Transforming Your Imagination into Stunning Visuals",
    sector: "Artificial Intelligence",
    stage: "Seed",
    year: 2024,
    logo: "/enfawns.png",
    website: "https://enfawns.com/",
    stats: {
      Invested: "$500K",
      growth: "180% YoY",
      employees: "24"
    }
  },
  {
    id: 3,
    name: "GalaxPlay",
    description: "GalaxPlay AI chatbots deliver smarter, faster, and effortless customer experiences.",
    sector: "Generative Technology",
    stage: "Seed",
    year: 2023,
    logo: "/galaxplay.com.png",
    website: "https://galaxplay.com//",
    stats: {
      Invested: "$550K",
      growth: "95% YoY",
      employees: "13"
    }
  },
  {
    id: 4,
    name: "Subit",
    description: "Subscription management for gyms and studios — automating billing and retention.",
    sector: "Tech Startup",
    stage: "Series A",
    year: 2021,
    logo: "/subit.png",
    website: "https://www.subit.in/",
    stats: {
      Invested: "$3M",
      growth: "210% YoY",
      employees: "100"
    }
  },
  {
    id: 5,
    name: "Xbattery",
    description: "Big data analytics for healthcare optimization",
    sector: "Artificial Intelligence",
    stage: "Series A",
    year: 2022,
    logo: "/xbattery.png",
    website: "https://xbattery.energy/",
    stats: {
      Invested: "$2.5M",
      growth: "300% YoY",
      employees: "95"
    }
  },
  {
    id: 6,
    name: "Medxcribe",
    description: "AI-powered drone logistics for delivery services",
    sector: "Artificial Intelligence",
    stage: "Seed",
    year: 2024,
    logo: "/medxcribe.png",
    website: "https://medxcribe.com",
    stats: {
      Invested: "$540K",
      growth: "210% YoY",
      employees: "13"
    }
  },
  {
    id: 7,
    name: "Kumpanio",
    description: "India’s first platform for short-term platonic companionship for events, outings & travel",
    sector: "Tech Startup",
    stage: "Seed",
    year: 2024,
    logo: "/kumpanio.com.png",
    website: "https://kumpanio.com",
    stats: {
      Invested: "$600K",
      growth: "110% YoY",
      employees: "17"
    }
  },
  {
    id: 8,
    name: "AccrueWise",
    description: "Micro-savings platform that helps users save automatically from daily transactions.",
    sector: "Tech Startup",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/accruewise.in.png",
    website: "https://accruewise.in",
    stats: {
      Invested: "$400K",
      growth: "350% YoY",
      employees: "12"
    }
  },
  {
    id: 9,
    name: "Mankomb",
    description: " AI device that turns kitchen waste into soil in under 40 hours",
    sector: "Generative Technology",
    stage: "Generative Technology",
   stage: "Pre-Seed",
    year: 2025,
    logo: "/mankomb.com.png",
    website: "https://mankomb.com",
    stats: {
      Invested: "$400K",
      growth: "180% YoY",
      employees: "5"
    }
  },
  {
    id: 10,
    name: "raccoonai",
    description: "AI platform for automating web tasks using multi-agent browser workflows",
    sector: "Generative Technology",
    stage: "Seed",
    year: 2024,
    logo: "/raccoonai.tech.png",
    website: "https://raccoonai.tech",
    stats: {
      Invested: "$600K",
      growth: "150% YoY",
      employees: "14"
    }
  },
  {
    id: 11,
    name: "BorderPlus",
    description: "AI-based data mining solutions for e-commerce optimization",
    sector: "Artificial Intelligence",
    stage: "Series A",
    year: 2022,
    logo: "/BorderPlus.co.png",
    website: "https://www.borderplus.co",
    stats: {
      Invested: "$3.5M",
      growth: "275% YoY",
      employees: "112"
    }
  },
  {
    id: 12,
    name: "Palify",
    description: "Gamified professional networking platform with jobs, gigs & rewards",
    sector: "Machine Learning",
    stage: "Seed",
    year: 2024,
    logo: "/palify.io.png",
    website: "https://palify.io",
    stats: {
      Invested: "640K",
      growth: "165% YoY",
      employees: "20"
    }
  },
  {
    id: 13,
    name: "Recyclaro",
    description: "Tech-enabled B2B recycling and compliance platform using IoT and smart tracking",
    sector: "Tech Startup",
    stage: "Series A",
    year: 2021,
    logo: "/recyclaro.com.png",
    website: "https://recyclaro.com/",
    stats: {
      Invested: "$4M",
      growth: "190% YoY",
      employees: "88"
    }
  },
  {
    id: 14,
    name: "OneCap",
    description: "AI-driven FinOps automation for SMEs—reconciliation, cashflow & collections",
    sector: "Artificial Intelligence",
    stage: " Seed",
    year: 2024,
    logo: "/OneCap.in.png",
    website: "https://OneCap.in",
    stats: {
      Invested: "$750K",
      growth: "230% YoY",
      employees: "120"
    }
  },
  {
    id: 15,
    name: "IntelliAiMentor",
    description: "AI-powered energy management and optimization platform",
    sector: "Artificial Intelligence",
    stage: "Series A",
    year: 2022,
    logo: "/intelliaimentor.com.png",
    website: "https://intelliaimentor.com",
    stats: {
      Invested: "$4M",
      growth: "215% YoY",
      employees: "99"
    }
  },
  {
    id: 16,
    name: "Qikoffice",
    description: "AI-based diagnostic tools for genetic disorders",
    sector: "Generative Technology",
    stage: "Seed",
    year: 2024,
    logo: "/qikoffice.com.png",
    website: "https://qikoffice.com",
    stats: {
      Invested: "$620K",
      growth: "190% YoY",
      employees: "76"
    }
  },
  {
    id: 17,
    name: "Karmipay",
    description: " Digital top-up & payment platform for gaming and mobile services",
    sector: "Tech Startup",
    stage: "Series A",
    year: 2021,
    logo: "/Karmipay.in.png",
    website: "https://Karmipay.in",
    stats: {
      Invested: "$5M",
      growth: "270% YoY",
      employees: "150"
    }
  },
  {
    id: 18,
    name: "Therevup",
    description: "Digital agency offering revenue, branding & OTA solutions for hotels",
    sector: "Artificial Intelligence",
    stage: "Seed",
    year: 2024,
    logo: "/therevup.in.png",
    website: "https://therevup.in",
    stats: {
      Invested: "$800K",
      growth: "230% YoY",
      employees: "65"
    }
  },
  {
    id: 19,
    name: "Vichar",
    description: "AI-powered robotic farming solutions for crop management",
    sector: "Machine Learning",
    stage: "Series A",
    year: 2022,
    logo: "/vichar.io.png",
    website: "https://vichar.io",
    stats: {
      Invested: "$3.9M",
      growth: "185% YoY",
      employees: "98"
    }
  },
  {
    id: 20,
    name: "VeriDraft",
    description: "AI-based vehicle automation for smarter transportation",
    sector: "Artificial Intelligence",
    stage: "Seed",
    year: 2023,
    logo: "/veridraft.agency.png",
    website: "https://veridraft.agency",
    stats: {
      Invested: "$740K",
      growth: "150% YoY",
      employees: "58"
    }
  },
  {
    id: 21,
    name: "Myrsolar",
    description: "AI-driven vision enhancement for the visually impaired",
    sector: "Artificial Intelligence",
    stage: "Pre-Seed",
    year: 2024,
    logo: "/myrsolar.com.png",
    website: "https://myrsolar.com",
    stats: {
      Invested: "$500K",
      growth: "250% YoY",
      employees: "85"
    }
  },
  {
    id: 22,
    name: "LabOps",
    description: "AI-powered rooftop solar solutions with 3D design and energy forecasting ",
    sector: "Machine Learning",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/labops.in.png",
    website: "https://www.labops.in/",
    stats: {
      Invested: "$180K",
      growth: "120% YoY",
      employees: "50"
    }
  },
  {
    id: 23,
    name: "Databutton",
    description: "AI-powered no-code platform to build full-stack web apps via natural language",
    sector: "Generative Technology",
    stage: "Seed",
    year: 2023,
    logo: "/databutton.com.png",
    website: "https://databutton.com",
    stats: {
      Invested: "$1.9M",
      growth: "210% YoY",
      employees: "15"
    }
  },
  {
    id: 24,
    name: "Gamma",
    description: "AI tool for creating presentations, docs & websites instantly",
    sector: "Artificial Intelligence",
    stage: "Series A",
    year: 2021,
    logo: "/gamma.app.png",
    website: "https://gamma.app",
    stats: {
      Invested: "$3M",
      growth: "150% YoY",
      employees: "42"
    }
  },
  {
    id: 25,
    name: "Imagineart",
    description: "AI platform to generate images, videos & music from text prompts",
    sector: "Generative Technology",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/imagine.art.png",
    website: "https://imagine.art",
    stats: {
      Invested: "$355K",
      growth: "300% YoY",
      employees: "15"
    }
  },
  {
    id: 26,
    name: "Looka",
    description: "AI platform to create logos, brand kits, and websites instantly",
    sector: "Artificial Intelligence",
    stage: "Series A",
    year: 2022,
    logo: "/looka.com.png",
    website: "https://looka.com",
    stats: {
      Invested: "$6M",
      growth: "175% YoY",
      employees: "40"
    }
  },
  {
    id: 27,
    name: "MaestroLabs",
    description: "AI assistant for emails and meetings—drafts, summaries, priorities",
    sector: "Artificial Intelligence",
    stage: "Pre-Seed",
    year: 2024,
    logo: "/maestrolabs.com.png",
    website: "https://maestrolabs.ai",
    stats: {
      Invested: "$355K",
      growth: "260% YoY",
      employees: "15"
    }
  },
  {
    id: 28,
    name: "MGX",
    description: "AI dev team that builds full-stack apps from natural language prompts",
    sector: "Generative Technology",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/mgx.dev.png",
    website: "https://mgx.dev",
    stats: {
      Invested: "$290K",
      growth: "230% YoY",
      employees: "15"
    }
  },
  {
    id: 29,
    name: "NightCafe",
    description: "AI art generator using Stable Diffusion, DALL·E & more",
    sector: "Artificial Intelligence",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/nightcafe.studio.png",
    website: "https://nightcafe.studio",
    stats: {
      Invested: "$367K",
      growth: "275% YoY",
      employees: "7"
    }
  },
  {
    id: 30,
    name: "OpenArt",
    description: "AI platform for generating images & videos from prompts or sketches",
    sector: "Generative Technology",
    stage: "Seed",
    year: 2023,
    logo: "/openart.ai.png",
    website: "https://openart.ai",
    stats: {
      Invested: "$1M",
      growth: "200% YoY",
      employees: "15"
    }
  },
  {
    id: 31,
    name: "Smallpdf",
    description: "PDF toolkit for compressing, editing, converting & signing documents",
    sector: "Tech Startup",
    stage: "Pre-Seed",
    year: 2023,
    logo: "/smallpdf.com.png",
    website: "https://smallpdf.com",
    stats: {
      Invested: "$350K",
      growth: "260% YoY",
      employees: "15"
    }
  },
  {
    id: 32,
    name: "Chariot",
    description: "AI website builder that creates full sites from chat prompts",
    sector: "Gen AI Startup",
    stage: "Pre-Seed",
    year: 2023,
    logo: "/chariotai.com.png",
    website: "https://chariotai.com",
    stats: {
      Invested: "$300K",
      growth: "130% YoY",
      employees: "10"
    }
  },
  {
    id: 33,
    name: "PrayagAi",
    description: "AI consulting startup offering GenAI, ML, and business automation solutions",
    sector: "Tech Startup",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/prayagai.com.png",
    website: "https://prayagai.com",
    stats: {
      Invested: "$240K",
      growth: "320% YoY",
      employees: "10"
    }
  },
  {
    id: 34,
    name: "PopAi",
    description: "AI workspace for chatting with files, generating slides, code, images & more",
    sector: "Gen AI Startup",
    stage: "Seed",
    year: 2023,
    logo: "/popai.pro.png",
    website: "https://popai.pro",
    stats: {
      Invested: "$1.2M",
      growth: "170% YoY",
      employees: "25"
    }
  },
  {
    id: 35,
    name: "AdvinzTech",
    description: "Marketing and research services firm based in Gujarat",
    sector: "Tech Startup",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/advinztech.com.png",
    website: "https://advinztech.com/",
    stats: {
      Invested: "$300K",
      growth: "220% YoY",
      employees: "25"
    }
  },
  {
    id: 36,
    name: "Asianvega",
    description: "Manufacturer of fabricated metal products",
    sector: "Artificial Intelligence",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/asianvega.com.png",
    website: "https://asianvega.com",
    stats: {
      Invested: "$355K",
      growth: "150% YoY",
      employees: "25"
    }
  },
  {
    id: 37,
    name: "AarviEdge",
    description: "Web design & development agency for custom, SEO-friendly sites",
    sector: "Tech Startup",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/aarviedge.com.png",
    website: "https://aarviedge.com",
    stats: {
      Invested: "$250K",
      growth: "220% YoY",
      employees: "23"
    }
  },
  {
    id: 38,
    name: "chargZone",
    description: "EV charging network with ultra-fast chargers for cars, buses & trucks",
    sector: "Artificial Intelligence",
    stage: "Series A",
    year: 2022,
    logo: "/chargZone.com.png",
    website: "https://chargZone.com",
    stats: {
      Invested: "$4M",
      growth: "250% YoY",
      employees: "137"
    }
  },
  {
    id: 39,
    name: "Cloutivity",
    description: "AI image generator turning text prompts into high-res visuals",
    sector: "Generative Technology",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/cloutivity.com.png",
    website: "https://cloutivity.com",
    stats: {
      Invested: "$350K",
      growth: "290% YoY",
      employees: "30"
    }
  },
  {
    id: 40,
    name: "CognitaraAi",
    description: "AI vision systems for industrial safety and PPE compliance",
    sector: "Artificial Intelligence",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/cognitaraai.com.png",
    website: "https://cognitaraai.com",
    stats: {
      Invested: "$182K",
      growth: "230% YoY",
      employees: "50"
    }
  },
  {
    id: 41,
    name: "HariTalani",
    description: "Provider of personal service activities",
    sector: "Artificial Intelligence",
    stage: "Pre-Seed",
    year: 2025,
    logo: "/haritalani.com.png",
    website: "https://haritalani.com",
    stats: {
      Invested: "$200K",
      growth: "280% YoY",
      employees: "20"
    }
  },
  {
    id: 42,
    name: "PuviTham",
    description: "TAI image generator from text prompts",
    sector: "Generative Technology",
    stage: "Pre-Seed",
    year: 2024,
    logo: "/puvitham.com.png",
    website: "https://puvitham.com",
    stats: {
      Invested: "$300K",
      growth: "220% YoY",
      employees: "23"
    }
  }, 
];
  const sectors = ["All", ...new Set(portfolioCompanies.map(company => company.sector))];

  const filteredCompanies = activeFilter === "All" 
    ? portfolioCompanies 
    : portfolioCompanies.filter(company => company.sector === activeFilter);

  // Portfolio stats
  const portfolioStats = [
    { value: "200+", label: "Companies", icon: <FiUsers className="text-blue-400" /> },
    { value: "$1B+", label: "Total Value", icon: <FiDollarSign className="text-blue-400" /> },
    { value: "5+", label: "Countries", icon: <FiMapPin className="text-blue-400" /> },
    { value: "5+", label: "Unicorns", icon: <FiBarChart2 className="text-blue-400" /> }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section 
        
        
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] flex items-center justify-center bg-[url('/about.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Our Portfolio
            </span>
          </h1>
          <p className="text-xl text-white/80">
            Discover the visionary companies we're proud to support
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        ref={ref}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        {/* Portfolio Stats */}
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {portfolioStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30,  }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm text-center"
            >
              <div className="text-4xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{  y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <div className="flex items-center gap-2 text-blue-400">
              <FiFilter />
              <span className="font-medium">Filter:</span>
            </div>
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setActiveFilter(sector)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === sector
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {filteredCompanies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{  y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 rounded-xl  border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="h-16 w-16 bg-white/5 rounded-lg flex items-center justify-center p-2">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-h-full max-w-full"
                    />
                  </div>
                  <a 
                    href={company.website} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-blue-400 transition-colors"
                  >
                    <FiExternalLink className="text-xl" />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                  {company.name}
                </h3>
                <p className="text-white/80 mb-4">{company.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                    {company.sector}
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                    {company.stage}
                  </span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs">
                    {company.year}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-blue-400 font-medium">{company.stats.Invested}</div>
                    <div className="text-white/60 text-xs">Invested</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-blue-400 font-medium">{company.stats.growth}</div>
                    <div className="text-white/60 text-xs">Growth</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-blue-400 font-medium">{company.stats.employees}</div>
                    <div className="text-white/60 text-xs">Team</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories */}
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-28"
        >
          <h2 id="success" className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Success Stories
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 rounded-2xl  border border-white/10"
            >
              <div className="md:h-64 ">
                <img 
                  src="/founder.jpg" 
                  alt="Success story" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-3">
                  Case Study
                </span>
                <h3 className="text-2xl font-bold mb-3">From Prototype to Platform: IntelliaiMentor’s Rise</h3>
                <p className="text-white/80 mb-4">
                  How a founder-led vision for personalized learning scaled with CapitalOven’s early support
                </p>
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
                  Read Case Study <FiArrowRight />
                </button>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white/5 rounded-2xl  border border-white/10"
            >
              <div className="md:h-64 ">
                <img 
                  src="/founder.jpg" 
                  alt="Success story" 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mb-3">
                  Read More
                </span>
                <h3 className="text-2xl font-bold mb-3">Subit’s Growth Story</h3>
                <p className="text-white/80 mb-4">
                 Backed early, built strong — how Subit navigated key inflection points with CapitalOven’s support
                </p>
                <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2">
                  Read More <FiArrowRight />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{  scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Join Our Portfolio?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional founders building transformative companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
  href="mailto:contact@capitaloven.com"
  className="inline-block px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all"
>
  Contact Our Team
</a>

            <Link href='/pitch'>
              <button className="px-8 py-3.5 rounded-lg bg-white/10 text-white font-medium border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all">
              Pitch Your Startup
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default PortfolioPage;
