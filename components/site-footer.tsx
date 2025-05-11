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
        "bg-gradient-to-br from-gray-50/80 via-white to-gray-50/80 dark:from-gray-900/80 dark:via-gray-950 dark:to-gray-900/80",
        "backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-800/50",
        "py-16 px-4 sm:px-6 lg:px-8",
        "transition-all duration-500 ease-out",
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
            <Motion.div
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-blue-500/30 ring-offset-2 ring-offset-white dark:ring-offset-gray-950 shadow-xl"
            >
              <Image
                src="/profile.jpg"
                alt="Pranav K Jha"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </Motion.div>
            <div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
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
          <div className="space-y-4">
            <Motion.div
              className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-400"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/5">
                <FaMapMarkerAlt className="text-blue-500 dark:text-blue-400 text-lg" />
              </div>
              <span>Montreal, QC, Canada</span>
            </Motion.div>
            <Motion.div
              className="flex items-center justify-center space-x-3 text-gray-600 dark:text-gray-400"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2 rounded-lg bg-blue-500/10 dark:bg-blue-500/5">
                <FaEnvelope className="text-blue-500 dark:text-blue-400 text-lg" />
              </div>
              <a
                href="mailto:pranav.jha@mail.concordia.ca"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                pranav.jha@mail.concordia.ca
              </a>
            </Motion.div>
          </div>

          <div className="flex justify-center space-x-6 mt-6">
            {socialLinks.map((social, index) => (
              <Motion.a
                key={index}
                href={social.href}
                target="_blank"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  text-2xl ${social.color}
                  transition-all duration-300
                  hover:shadow-lg
                `}
                aria-label={social.label}
              >
                <social.icon />
              </Motion.a>
            ))}
          </div>
        </Motion.div>

        {/* Tech Stack Section */}
        <div className="text-center md:text-right">
          <div className="text-sm text-gray-600 dark:text-gray-400 flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center gap-3">
              <span>&copy; {new Date().getFullYear()} Pranav K Jha</span>
              <span className="h-4 w-px bg-gray-300 dark:bg-gray-700"></span>
              <span className="flex items-center gap-2">
                Built with
                <Motion.span
                  className="inline-flex items-center gap-1.5"
                  whileHover={{ scale: 1.05 }}
                >
                  <SiNextdotjs className="h-4 w-4" title="Next.js" />
                  <FaReact className="h-4 w-4 text-blue-500" title="React" />
                  <SiTailwindcss
                    className="h-4 w-4 text-teal-500"
                    title="Tailwind CSS"
                  />
                </Motion.span>
              </span>
            </div>
            <span className="text-xs opacity-75">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
