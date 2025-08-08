"use client";
import Head from 'next/head';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiUsers, FiTrendingUp, FiGlobe, FiAward, FiBarChart2, FiHeart, FiTarget, FiEye, FiClock, FiLayers } from "react-icons/fi";
import Link from "next/link";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const stats = [
    { value: "200+", label: "Startups Funded", icon: <FiTrendingUp /> },
    { value: "$200M+", label: "Capital Deployed", icon: <FiBarChart2 /> },
    { value: "14+", label: "Years Experience", icon: <FiAward /> },
    { value: "50+", label: "Series A Startups Backed", icon: <FiGlobe /> }
  ];

const team = [
  {
    name: "Shirsti Garg",
    role: "Founding Partner",
    bio: " Shristi co-founded CapitalOven with the vision of empowering young entrepreneurs. With her expertise in venture capital and a deep understanding of the startup ecosystem, she leads the firm's strategic direction, focusing on helping visionary founders scale their businesses.",
    img: "/Shirsti Garg.png",
    linkedin: "https://www.linkedin.com/in/shirsti-garg-215b7b377",
    email: "shirsti.garg@capitaloven.com",
  },
  {
    name: "Ritika Sinha",
    role: "Investment Director",
    bio: "Ritika is a driving force in sourcing and evaluating high-potential early-stage startups. She is responsible for guiding investments in the most innovative tech companies, providing both strategic insights and hands-on operational support to scale their impact.",
    img: "/Ritika Sinha.png",
    linkedin: "https://www.linkedin.com/in/ritika-sinha-9946b4377",
    email: "ritika.sinha@capitaloven.com",
  },
    {
    name: "Aman Bhardwaj ",
    role: "Market Research Lead",
    bio: " Aman leads CapitalOven’s market research initiatives, offering deep insights into emerging technologies and market trends. By utilizing advanced data analysis and forecasting tools, he ensures CapitalOven’s investments are positioned at the forefront of innovation.",
    img: "/Aman Bhardwaj.png",
    linkedin: "https://www.linkedin.com/in/aman-bhardwaj-4173ab377",
    email: "aman.bhardwaj@capitaloven.com",
  },
 
  {
    name: "Mehul Trivedi",
    role: "Tech Strategy Lead",
    bio: " Mehul is responsible for optimizing CapitalOven’s internal technology systems and advising portfolio companies on building scalable, cutting-edge solutions. His role is essential in bridging the gap between innovation and execution, ensuring startups leverage the best technology to grow efficiently..",
    img: "/Mehul Trivedi.png",
    linkedin: "https://www.linkedin.com/in/trivedi-mehul-223b85377",
    email: "mehul.tr@capitaloven.com",
  },
  {
    name: "Tanya Kapoor",
    role: "Tech & Perks Manager",
    bio: " Tanya heads CapitalOven’s perks and tech program, ensuring that startups have access to industry-leading technological tools and partnerships. She connects portfolio companies with resources that help them scale efficiently and effectively.",
    img: "/TanyaKapoor.png",
    linkedin: "https://www.linkedin.com/in/tanya-kapoor-135b87377",
    email: "tanya.kapoor@capitaloven.com",
  },
  {
    name: "Karan Deshmukh",
    role: " Head of Operations & Community",
    bio: " Karan manages CapitalOven’s internal operations while also cultivating a strong community of entrepreneurs. He ensures seamless collaboration, operational efficiency, and an environment where both investors and founders can thrive together.",
    img: "/Karan Deshmukh.png",
    linkedin: "https://www.linkedin.com/in/karan-deshmukh-a4bdh0077377",
    email: "karan.Deshmukh@capitaloven.com",
  },
  {
    name: "Sanya Mehra",
    role: "Founder Relations Lead",
    bio: " Sanya builds and maintains long-term relationships with founders, providing them with continuous support and strategic advice. She ensures that every portfolio company receives the resources and guidance needed to scale successfully from seed to Series A.",
    img: "/Sanya Mehra.png",
    linkedin: "https://www.linkedin.com/in/sanya-mehra-769967377",
    email: "sanya.mehra@capitaloven.com",
  },
  {
    name: "Rohit Malhotra",
    role: " Communications & Storytelling Lead",
    bio: "Rohit is the voice of CapitalOven, crafting compelling narratives that share the firm’s vision, values, and impact. He leads all external communications, ensuring that the story of CapitalOven and its portfolio companies resonates with investors, partners, and entrepreneurs.",
    img: "/Rohit Malhotra.png",
    linkedin: "https://www.linkedin.com/in/rohit-malhotra-79a9a2377",
    email: "rohit.m@capitaloven.com",
  },
  {
    name: "Neha Bansal",
    role: "Legal & Compliance Lead",
    bio: "  Neha ensures that CapitalOven operates within all applicable legal and regulatory frameworks. She handles compliance, contracts, and legal matters, working closely with portfolio companies to mitigate risk and ensure regulatory alignment.",
    img: "/Neha Bansal.png",
    linkedin: "https://www.linkedin.com/in/neha-bansal-ne0078377",
    email: "neha.bansal@capitaloven.com",
  },
  {
    name: "Farhan Qureshi",
    role: "ESG & Impact Lead",
    bio: " Brings a responsible lens to innovation and startup impactFarhan is responsible for overseeing CapitalOven’s commitment to environmental, social, and governance (ESG) principles. He ensures that all investments align with sustainable growth goals, driving impact across industries through responsible and ethical practices.",
    img: "/Farhan Qureshi.png",
    linkedin: "https://www.linkedin.com/in/farhan-qureshi-fa2807b377",
    email: "farhan.qr@capitaloven.com",
  },
  {
    name: "Nilesh Rao",
    role: "Venture Partner – DeepTech & AI",
    bio: " Supports founders building ambitious products in AI and advanced tech.",
    img: "/Nilesh Rao.png",
    linkedin: "https://www.linkedin.com/in/nilesh-rao-n1b082377",
    email: "nilesh.rao@capitaloven.com",
  },
  {
    name: "Anita Shrivastav",
    role: "Advisor – Fund Strategy",
    bio: " Anita brings extensive experience in fund strategy and management, advising CapitalOven on long-term investment approaches. She helps shape the firm’s fund strategy, ensuring it aligns with evolving market trends and positions CapitalOven for sustainable growth.",
    img: "/Anita Shrivastav.png",
    linkedin: "https://www.linkedin.com/in/anita-shrivastav-an3a1080377",
    email: "anita.shri@capitaloven.com",
  },
  
];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
           <Head>
        <title>Capitaloven | about us</title>
      </Head>
      {/* Hero Section */}
      <motion.section 
        
       
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] flex items-center justify-center bg-[url('/about.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div
          initial={{ y: 50, }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Building Tomorrow's
            </span>
            <br />
            <span className="text-white">Market Leaders</span>
          </h1>
          <p className="text-xl text-white/80">
            We're more than investors - we're founders, operators, and technologists 
            committed to fueling innovation.
          </p>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={ref}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm text-center"
            >
              <div className="text-4xl mb-4 text-blue-400 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision & Mission Section */}
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-28 grid md:grid-cols-2 gap-8"
        >
          {/* Vision Card */}
          <motion.div 
            className="relative h-[500px] rounded-2xl overflow-hidden group"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[url('/vision.jpg')] bg-cover bg-center"
            />
            <motion.div
              variants={{
                rest: { backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0.7)" },
                hover: { backdropFilter: "blur(4px)", backgroundColor: "rgba(0,0,0,0.85)" }
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-end p-8"
            >
              <motion.div
                variants={{
                  rest: { y: 20, opacity: 0.9 },
                  hover: { y: 0, opacity: 1 }
                }}
                className="w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiEye className="text-3xl text-blue-400" />
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg">
                  To empower visionary founders using AI, ML, and GenAI technologies to create scalable, transformative solutions that address humanity’s most pressing challenges.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            className="relative h-[500px] rounded-2xl overflow-hidden group"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            <motion.div
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.1 }
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[url('/mission.webp')] bg-cover bg-center"
            />
            <motion.div
              variants={{
                rest: { backdropFilter: "blur(0px)", backgroundColor: "rgba(0,0,0,0.7)" },
                hover: { backdropFilter: "blur(4px)", backgroundColor: "rgba(0,0,0,0.85)" }
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex items-end p-8"
            >
              <motion.div
                variants={{
                  rest: { y: 20, opacity: 0.9 },
                  hover: { y: 0, opacity: 1 }
                }}
                className="w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FiTarget className="text-3xl text-cyan-400" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg mb-2">
                 Our mission is to discover, fund, and scale the most disruptive AI, ML, and GenAI-driven companies by providing:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>AI-powered mentorship: Tailored resources and strategic support using data insights.</li>
                  <li>Global network access: Connecting founders with AI experts, investors, and global partners.</li>
                  <li>Data-driven decision making: Leveraging machine learning to evaluate and support high-potential startups.</li>
                  <li>Long-term capital with a focus on scalable AI: Investing with patience in GenAI technologies to fuel sustainable growth and innovation.</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* NEW: Left Content + Right Image Section */}
        <motion.div
          initial={{  }}
          animate={isInView ? { opacity: 1,  } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-28 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <FiClock className="text-2xl text-blue-400" />
              <span className="text-sm font-medium text-blue-400">OUR APPROACH</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Long-Term Growth <span className="text-blue-400">Partnership</span>
            </h2>
            <p className="text-lg text-white/80 mb-6">
              Unlike traditional VC firms, we don’t just write checks. We commit to decade-long partnerships with our founders, providing continuous support through every growth stage, especially with AI, ML, and GenAI-driven innovations.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-blue-400 mt-1">
                  <FiLayers className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Multi-Stage Support</h3>
                  <p className="text-white/80">
From Seed to Series A and beyond, we scale our involvement to match your needs, leveraging AI-driven decision-making and machine learning models to optimize every stage of growth. </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-400 mt-1">
                  <FiUsers className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Founder-Centric</h3>
                  <p className="text-white/80">
                    Your growth is our priority. We align incentives to ensure long-term success, backed by transparent terms and AI-powered insights
                  </p>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{  scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10"
          >
            <img 
              src="/Aboutus.png" 
              alt="Growth partnership" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{   }}
          animate={isInView ? { opacity: 1, } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-28 grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 order-2 md:order-1"
          >
            <img 
              src="/founder.jpg" 
              alt="CapitalOven founders" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>
          <div className="order-1 md:order-2 flex flex-col justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Our Origin Story
              </span>
            </h2>
            <p className="text-lg text-white/80 mb-6">
              We started CapitalOven to help newly graduated college entrepreneurs turn their ideas into reality. Since 2011, we've been in touch with college graduates, supporting them with funding and guidance to bring their startup ideas to life successfully. What began as a small fund has, through continuous effort and the right direction, grown into a global venture capital firm.
            </p>
            <p className="text-lg text-white/80 mb-6">
              With a proven track record of successful investments, we have scaled our firm to manage an AUM of $500M+, positioning us as one of the most trusted players in the venture capital landscape. Our forward-looking approach and strategic partnerships drive our long-term growth and impact across industries.
            </p>
            <p className="text-lg text-white/80 mb-6">
             Today, we manage an AUM of $500M+, a significant milestone. We've helped numerous startups scale, and with our transparent, founder-centric approach, we continue to support entrepreneurs at every stage — from seed funding to Series A and beyond.
            </p>
             <p className="text-lg text-white/80 mb-6">
              We are increasingly focused on AI, ML, and GenAI startups, backing innovators from seed to Series A. By leveraging cutting-edge technologies, we aim to help the next generation of founders transform industries and make a lasting impact.
            </p>
            <Link href='/Blogs'>
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
              Read Full History
            </button>
            </Link>
          </div>
        </motion.div>

        {/* Investment Philosophy */}
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mb-28"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Our Investment Philosophy
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Founder First",
                desc: "We prioritize exceptional founders over ideas. Great founders adapt and evolve their ideas to succeed.",
                icon: <FiUsers className="text-3xl" />
              },
              {
                title: "Category Creation",
                desc: "We focus on startups that create new categories, shaping the future of their industries rather than competing in already existing markets.",
                icon: <FiTrendingUp className="text-3xl" />
              },
              {
                title: "Impact at Scale",
                desc: "We invest in startups with the potential to scale globally and create a lasting impact, transforming industries and improving lives through innovation.",
                icon: <FiGlobe className="text-3xl" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10 backdrop-blur-sm h-full"
              >
                <div className="text-blue-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
      <motion.section 
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  transition={{ staggerChildren: 0.2 }}
  className="relative py-20 overflow-hidden"
>

  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header with floating animation */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mb-20"
    >
      <motion.h2 
        className="text-4xl md:text-6xl font-bold mb-6"
   
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          backgroundImage: "linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)",
          backgroundSize: "200% auto",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
      ✨ Meet the CapitalOven Team ✨
      </motion.h2>
      <motion.p 
        className="text-lg text-white/80 max-w-3xl mx-auto"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        transition={{ delay: 0.3, duration: 0.8 }}

      >
        We’re a hands-on, founder-first team of investors, researchers, operators, and technical experts — all united by one goal: helping ambitious tech startups scale. </motion.p>
    </motion.div>

    {/* Team grid with 3D tilt effect */}
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-8">
      {team.map((member, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 40, rotateY: 15 },
            visible: { opacity: 1, y: 0, rotateY: 0 }
          }}
          transition={{ 
            delay: index * 0.15, 
            duration: 0.6, 
            ease: "backOut" 
          }}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3 }
          }}
          className="group perspective-1000"
        >
          <div className="relative h-full transform-style-preserve-3d group-hover:rotate-y-5 transition-transform duration-500 ease-out">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 shadow-xl h-full flex flex-col">
              {/* Image with parallax effect */}
              <div className="overflow-hidden w-full h-122 relative">
                <motion.img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white/90 text-sm">{member.bio}</p>
                </div>
              </div>

              {/* Info card */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium text-sm mb-3">{member.role}</p>
                </div>
                
                {/* Social links with staggered animation */}
                <motion.div 
                  className="flex space-x-4"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: { 
                      transition: { staggerChildren: 0.1 } 
                    }
                  }}
                >
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-blue-400 transition-colors duration-300"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    className="text-white/80 hover:text-blue-400 transition-colors duration-300"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <FaEnvelope size={20} />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Decorative elements */}
    <div className="absolute -bottom-20 left-0 w-40 h-40 rounded-full bg-blue-600 filter blur-3xl opacity-20 -z-10"></div>
  </div>
</motion.section>

        {/* Values Section */}
        <motion.div
          
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mb-28 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-2xl p-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
              Our Core Values
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: "Commitment to Growth",
                desc: "Our support for founders goes beyond capital. We harness the power of AI/ML to provide data-driven insights, helping startups scale effectively and sustainably with cutting-edge technology."
              },
              {
                title: "Long-Term Partnership",
                desc: "We invest in startups that are building innovative solutions using GenAI, ensuring our portfolio companies align with positive social and environmental impacts."
              },
              {
                title: "Intellectual Honesty",
                desc: "With AI-powered insights and clear data-driven strategies, we foster trust through transparent communication and operations, creating long-lasting partnerships with our entrepreneurs."
              },
              {
                title: "Transparency & Trust",
                desc: "With AI-powered insights and clear data-driven strategies, we foster trust through transparent communication and operations, creating long-lasting partnerships with our entrepreneurs."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex gap-4"
              >
                <div className="text-blue-400 mt-1">
                  <FiHeart className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{  scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build the Future Together?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're an ambitious founder using AI, ML, or GenAI technologies to revolutionize your industry or an investor eager to collaborate on the next big innovation, we want to help you scale to new heights.
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

export default AboutUs;