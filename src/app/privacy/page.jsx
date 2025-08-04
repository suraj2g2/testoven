"use client";
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[url('/privacy-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Privacy Policy
            </span>
          </motion.h1>
          <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="text-xl text-white/80"
>
  Last updated: February 1, 2025
</motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="px-6 max-w-4xl mx-auto prose prose-invert prose-lg"
      >
        <div className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">1. Introduction</h2>
          <p className="mb-8">
            CapitalOven is committed to protecting the privacy of visitors, founders, and partners who interact with our website. This Privacy Policy outlines how we collect, use, and safeguard your information.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">2. Information We Collect</h2>
          <p className="mb-4">We may collect the following types of information:</p>
          <ul className="mb-8 list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> Name, email address, and phone number when submitted via forms</li>
            <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on site</li>
            <li><strong>Cookies:</strong> Essential and analytics cookies (see Section 5)</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">3. How We Use Your Information</h2>
          <p className="mb-4">We use the information to:</p>
          <ul className="mb-8 list-disc pl-6 space-y-2">
            <li>Operate and maintain our website</li>
            <li>Respond to inquiries and provide support</li>
            <li>Analyze usage to improve functionality and performance</li>
            <li>Fulfill legal and regulatory requirements</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">4. Data Sharing & Disclosure</h2>
          <p className="mb-2">We do not sell your personal information. We may share data with:</p>
          <ul className="mb-8 list-disc pl-6 space-y-2">
            <li>Service providers assisting in site operations (under strict confidentiality)</li>
            <li>Legal authorities when required by law</li>
            <li>Successors in the event of a merger, acquisition, or reorganization</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">5. Cookies & Tracking</h2>
          <p className="mb-4">We use the following types of cookies:</p>
          <ul className="mb-4 list-disc pl-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for basic site functions</li>
            <li><strong>Analytics Cookies:</strong> Used to understand how users interact with our site</li>
          </ul>
          <p className="mb-8">You can manage or disable cookies via your browser settings.</p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">6. Data Security</h2>
          <p className="mb-8">
            We implement appropriate technical and organizational measures to protect your personal data. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">7. Your Rights</h2>
          <p className="mb-4">Depending on your jurisdiction, you may have rights to:</p>
          <ul className="mb-8 list-disc pl-6 space-y-2">
            <li>Access, correct, or delete your data</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent, where applicable</li>
          </ul>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">8. International Transfers</h2>
          <p className="mb-8">
            Your information may be stored and processed in countries where data protection laws may differ from those in your jurisdiction.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">9. Children's Privacy</h2>
          <p className="mb-8">
            Our website is not intended for children under the age of 16. We do not knowingly collect data from minors without parental consent.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">10. Changes to This Policy</h2>
          <p className="mb-8">
            We may update this Privacy Policy periodically. Updates will be posted on this page with a revised “Last updated” date.
          </p>

          <h2 className="text-2xl font-bold mb-6 text-blue-400">11. Contact Us</h2>
          <p className="mb-4">For any questions or concerns about this policy, contact us at:</p>
          <div className="p-4 bg-white/5 rounded-lg">
            <p>CapitalOven Privacy Team</p>
            <p>privacy@capitaloven.com</p>
            <p>BH-36, Sector-2, Salt Lake, Near Kathgola Island,<br />Kolkata, West Bengal 700091, India</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PrivacyPolicyPage;
