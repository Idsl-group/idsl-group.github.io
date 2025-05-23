"use client";

import * as React from "react";
import Image from "next/image";
import { motion as Motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaUniversity,
  FaGraduationCap,
  FaGlobeAmericas,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/idsl",
      label: "LinkedIn",
      color: "hover:bg-blue-100 dark:hover:bg-blue-900/50",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/idsl",
      label: "Twitter",
      color: "hover:bg-sky-100 dark:hover:bg-sky-900/50",
    },
    {
      icon: FaGithub,
      href: "https://github.com/idsl",
      label: "GitHub",
      color: "hover:bg-purple-100 dark:hover:bg-purple-900/50",
    },
  ];

  const contactInfo = [
    {
      icon: FaUniversity,
      title: "Western University",
      items: [
        "Assistant Professor",
        "Department of Computer Science & ECE",
        "MC - 368, 1151 Richmond St",
        "London, ON N6A 3K7",
      ],
    },
    {
      icon: FaGraduationCap,
      title: "University of British Columbia",
      items: [
        "Affiliate Assistant Professor",
        "Department of Computer Science",
      ],
    },
    {
      icon: FaGraduationCap,
      title: "University of Waterloo",
      items: [
        "Adjunct Assistant Professor",
        "Department of Systems Design Engineering",
      ],
    },
    {
      icon: FaEnvelope,
      title: "Email",
      items: [
        "apurva.narayan@uwo.ca",
        "apurva.narayan@ubc.ca",
        "apurva.narayan@uwaterloo.ca",
      ],
    },
    {
      icon: FaPhone,
      title: "Phone",
      items: ["+1 250.807.8272"],
    },
  ];

  return (
    <footer
      className={cn(
        "bg-gradient-to-br from-gray-50 via-white to-gray-50/90 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900/90",
        "border-t border-gray-200/50 dark:border-gray-800/50",
        "py-12 px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 mb-4">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <FaGlobeAmericas className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-2">
            Apurva Narayan, Ph.D.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Leading research in Intelligent Data Science at Western University,
            UBC, and University of Waterloo
          </p>
        </Motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((section, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 mr-3">
                  <section.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200/50 dark:border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <Motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${social.color} transition-colors duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </Motion.a>
              ))}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
              <p>
                {" "}
                {new Date().getFullYear()} Apurva Narayan. All rights reserved.
              </p>
              <p className="text-xs mt-1 opacity-75">
                Built with <span className="text-blue-500">Next.js</span> •
                <span className="text-teal-500"> Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
