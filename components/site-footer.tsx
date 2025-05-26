"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUniversity,
  FaLinkedin,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { navigationConfig } from "@/lib/navigation";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export function SiteFooter() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">IDSL</h3>
            <p className="text-sm leading-relaxed">
              Intelligent Data Science Lab
              <br />
              Research Group of Dr. Apurva Narayan at Western University,
              University of British Columbia and the University of Waterloo,
              Canada.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaPhone className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Phone</p>
                  <a
                    href="tel:+12508078272"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    +1 (250) 807-8272
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Emails</p>
                  <div className="space-y-1">
                    <a
                      href="mailto:apurva.narayan@uwo.ca"
                      className="block text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      apurva.narayan@uwo.ca
                    </a>
                    <a
                      href="mailto:apurva.narayan@ubc.ca"
                      className="block text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      apurva.narayan@ubc.ca
                    </a>
                    <a
                      href="mailto:apurva.narayan@uwaterloo.ca"
                      className="block text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      apurva.narayan@uwaterloo.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Office</p>
                  <p className="text-sm text-gray-400">MC - 368</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaUniversity className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Address</p>
                  <p className="text-sm text-gray-400">
                    1151 Richmond St,
                    <br />
                    London, ON N6A 3K7
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">
              Navigation
            </h3>
            <nav className="grid grid-cols-2 gap-2">
              {navigationConfig.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors py-1"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500"
        >
          <p>
            {new Date().getFullYear()} Intelligent Data Science Lab. All rights
            reserved.
          </p>
        </motion.div>
        {/* Design and Tech Section */}
        <motion.div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <div className="max-w-md mx-auto space-y-4">
            <span className="block text-xs text-gray-600 dark:text-gray-400 font-medium">
              Designed by
              <span className="inline-flex items-center align-middle ml-2">
                <Image
                  src="/profile-1.jpeg"
                  alt="Pranav K Jha"
                  width={20}
                  height={20}
                  className="rounded-full object-cover mr-2 inline-block align-middle -mt-0.5"
                />
                <span className="align-middle">Pranav K. Jha</span>
              </span>
            </span>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="mailto:pranav.jha@mail.concordia.ca"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors flex items-center"
              >
                <FaEnvelope className="mr-2" /> pranav.jha@mail.concordia.ca
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-k-jha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors flex items-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a
                href="https://github.com/pranav-k-jha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                Built with
              </span>
              <div className="flex items-center space-x-3">
                {[
                  {
                    Icon: FaReact,
                    lightColor: "text-blue-600",
                    darkColor: "text-blue-400",
                    title: "React",
                  },
                  {
                    Icon: SiNextdotjs,
                    lightColor: "text-white",
                    darkColor: "text-white",
                    title: "Next.js",
                  },
                  {
                    Icon: SiTailwindcss,
                    lightColor: "text-blue-500",
                    darkColor: "text-blue-300",
                    title: "Tailwind CSS",
                  },
                  {
                    Icon: SiVercel,
                    lightColor: "text-white",
                    darkColor: "text-white",
                    title: "Vercel",
                  },
                ].map(({ Icon, lightColor, darkColor, title }) => (
                  <Icon
                    key={title}
                    className={`${lightColor} dark:${darkColor} text-xl hover:scale-125 transition-transform`}
                    title={title}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
