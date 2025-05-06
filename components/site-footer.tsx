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
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/pranav-k-jha",
      label: "LinkedIn",
      color: "text-blue-600 hover:text-blue-800",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/pranav_kjha",
      label: "Twitter",
      color: "text-sky-500 hover:text-sky-700",
    },
    {
      icon: FaGithub,
      href: "https://github.com/pranav-k-jha",
      label: "GitHub",
      color: "text-purple-600 hover:text-purple-800",
    },
  ];

  const techStack = [
    {
      Icon: FaReact,
      name: "React",
      color: "text-blue-600",
    },
    {
      Icon: SiNextdotjs,
      name: "Next.js",
      color: "text-black dark:text-white",
    },
    {
      Icon: SiTailwindcss,
      name: "Tailwind",
      color: "text-teal-600",
    },
    {
      Icon: SiVercel,
      name: "Vercel",
      color: "text-gray-800 dark:text-white",
    },
  ];

  return (
    <footer
      className={cn(
        "bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950",
        "py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800",
        "transition-colors duration-300 ease-in-out",
        className
      )}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Profile Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center md:text-left"
        >
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <Image
              src="/profile.jpg"
              alt="Pranav K Jha"
              width={64}
              height={64}
              className="rounded-full border-4 border-blue-500/30 shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Pranav K Jha
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AI Solutions Architect
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Transforming complex data challenges into intelligent solutions
            through innovative AI and machine learning technologies.
          </p>
        </Motion.div>

        {/* Contact Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-center"
        >
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-400">
              <FaMapMarkerAlt className="text-blue-500 dark:text-blue-400 text-lg" />
              <span>Montreal, QC, Canada</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-400">
              <FaEnvelope className="text-blue-500 dark:text-blue-400 text-lg" />
              <a
                href="mailto:pranav.jha@mail.concordia.ca"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                pranav.jha@mail.concordia.ca
              </a>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mt-6">
            {socialLinks.map((social, index) => (
              <Motion.a
                key={index}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`
                  text-2xl ${social.color}
                  transition-all duration-300 
                  hover:scale-110 hover:opacity-80
                `}
                aria-label={social.label}
              >
                <social.icon />
              </Motion.a>
            ))}
          </div>
        </Motion.div>

        {/* Tech Stack Section */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6 text-center md:text-right"
        >
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Tech Ecosystem
          </h4>
          <div className="flex justify-center md:justify-end space-x-6">
            {techStack.map(({ Icon, name, color }, index) => (
              <Motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center space-y-2 group"
              >
                <div
                  className={`
                  p-3 rounded-full 
                  bg-gray-100 dark:bg-gray-800
                  ${color} 
                  transition-all duration-300
                  group-hover:shadow-lg
                `}
                >
                  <Icon className="text-2xl" />
                </div>
                <span
                  className="text-xs text-gray-600 dark:text-gray-400 
                  opacity-0 group-hover:opacity-100 
                  transition-opacity duration-300"
                >
                  {name}
                </span>
              </Motion.div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Pranav K Jha.
            <span className="block text-xs mt-1">All Rights Reserved</span>
          </p>
        </Motion.div>
      </div>
    </footer>
  );
}
