"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "@/config/socials";

const footerLinks = {
  Product: [
    { text: "Playground", href: "/playground" },
    { text: "Image Generator", href: "/image" },
    { text: "API", href: "/docs" },
  ],
  Company: [
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ],
  Legal: [
    { text: "Terms & Conditions", href: "/terms" },
    { text: "Refunds & Cancellations", href: "/refunds" },
    { text: "Privacy Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <motion.div
              variants={fadeIn("up", 0)}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-2xl font-bold">Devs Do Code</span>
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-400"
            >
              The ultimate AI chat platform for developers and creators.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-6"
            >
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Product Links */}
          <div>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="visible"
              className="font-bold mb-4"
            >
              Product
            </motion.h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              {footerLinks.Product.map((item, index) => (
                <motion.li
                  key={item.text}
                  variants={fadeIn("up", 0.3 + index * 0.1)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Company Links */}
          <div>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="visible"
              className="font-bold mb-4"
            >
              Company
            </motion.h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              {footerLinks.Company.map((item, index) => (
                <motion.li
                  key={item.text}
                  variants={fadeIn("up", 0.3 + index * 0.1)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Legal Links */}
          <div>
            <motion.h3
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="visible"
              className="font-bold mb-4"
            >
              Legal
            </motion.h3>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-2"
            >
              {footerLinks.Legal.map((item, index) => (
                <motion.li
                  key={item.text}
                  variants={fadeIn("up", 0.3 + index * 0.1)}
                >
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="visible"
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p> 2024 Devs Do Code. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
