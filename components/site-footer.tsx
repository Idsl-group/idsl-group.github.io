"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUniversity,
} from "react-icons/fa";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { navigationConfig } from "@/lib/navigation";

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
              Research Group of Apurva Narayan at Western University, University
              of British Columbia and the University of Waterloo, Canada.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/"
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
      </div>
    </footer>
  );
}
