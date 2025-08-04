"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin,FaBriefcase, FaTwitter, FaGithub, FaRegEnvelope } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/About-Us" },
        { name: "Blogs", href: "/Blogs" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Pitch Us", href: "/pitch" },
         
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Home", href: "/" },
        { name: "Dashboard", href: "/perks" },
        { name: "Startup Toolkit", href: "/Startups" },
        { name: "Crunchbase", href: "https://www.crunchbase.com/organization/capitaloven" },
        { name: "Technology Perk", href: "/perks" },
        
        
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Home", href: "/" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Disclaimer", href: "/disclaimer" },
        { name: "Contact Us", href: "contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "Phone: +91 03369028606", href: "tel:+91 03369028606" },
        { name: "Email: connect@capitaloven.com", href: "mailto:connect@capitaloven.com" },
        { name: "Address: BH-36, Sector-2, Salt Lake, Near Kathgola Island, Kolkata, West Bengal 700091, India", href: "/contact" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/capitaloven" },
    { icon: <FaTwitter />, href: "https://x.com/capital_oven" },
    { icon: <FaRegEnvelope />, href: "mailto:Connect@capitaloven.com" },
    {icon: (
                        <Image
                          src="/cb.jpg"
                          alt="Crunchbase"
                          width={34}
                          height={34}
                          className="rounded-full object-cover"
                        />
                      ),
                      color: "text-white hover:bg-purple-500/20",
                      href: "https://www.crunchbase.com/organization/capitaloven",
                    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="   relative bg-gradient-to-b from-black to-gray-900 border-t border-white/10 mt-20"
    >
      {/* Glowing top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="  flex-col justify-center  text-xl text-bold grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 relative top-[-30px]">
            <Link href="/" className="flex  mb-4">
              <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         className="text-2xl font-extrabold flex justify-center items-center  text-white"
                       >
                          <img
               src='/log.png'
               width={60}
               height={50}
               alt='CapitalOven Image'
               className=""
             />
             
                           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                               Capital
                             </span>
                             <span className="text-white">Oven</span>
                       </motion.div>
            </Link>
            <p className="text-white/60 text-sm mb-6">
            CapitalOven is an early-stage venture capital firm backing bold technology founders — from Seed to Series A — across India and globally.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, color: "#3B82F6" }}
                  className="text-white/60 tex-bold font-extrabold hover:text-blue-400 text-1xl transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="col-span-1">
              <h3 className="text-white    font-extrabold mb-4 text-xl">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {link.href.startsWith("#") ? (
                      <a
                        href={link.href}
                        className="text-white/60 hover:text-blue-400 text-sm  transition-colors flex items-center gap-2"
                      >
                        <span className="text-sm bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                        {link.name}
                      </a>
                    ) : link.href.startsWith("http") || link.href.startsWith("mailto") || link.href.startsWith("tel") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 w-[300px] hover:text-blue-400 text-1xl transition-colors flex items-center "
                      >
                        <span className="w-1 h-1 text-sm text-bold bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-blue-400 text-lg text-bold transition-colors flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                        {link.name}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-4">
  <div className="flex flex-col md:flex-row justify-between items-center py-4">
  <p className="text-white/40 text-sm mb-4 md:mb-0">
    © 2011–2025 CapitalOven. All rights reserved.
  </p>
</div>


          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
