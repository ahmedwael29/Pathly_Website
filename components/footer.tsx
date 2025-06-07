"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  TiktokIcon,
} from "@/components/social-icons";
import { Linkedin, Github } from "lucide-react";
import Logo from "@/components/logo";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Download", href: "/download" },
      { name: "Updates", href: "/updates" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "Contact US", href: "/#contact" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      href: "#",
      hoverColor: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      href: "#",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      href: "#",
      hoverColor: "hover:text-pink-500",
    },
    {
      name: "TikTok",
      icon: <TiktokIcon />,
      href: "#",
      hoverColor: "hover:text-cyan-400",
    }, 
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "#",
      hoverColor: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "#",
      hoverColor: "hover:text-white",
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex justify-center md:justify-start">
              <Logo />
            </div>
            <p className="text-slate-400 mb-4">
              Enhancing road quality and travel efficiency through intelligent,
              IoT-driven solutions.
            </p>
          </motion.div>

          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (categoryIndex + 1) }}
              >
                <h3 className="text-white font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        <motion.div
          className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} <span className="text-blue-400">PATHLY</span>.
            All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className={`text-slate-400 ${social.hoverColor} transition-colors`}
                aria-label={social.name}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
