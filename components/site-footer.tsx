import * as React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const locations = [
    {
      name: "Montreal Office",
      address: "2250 rue Guy, Montreal, QC H3H 2M3, Canada",
      email: "contact@mkjhaconsult.com",
    },
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/pranav-k-jha",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/pranav_kjha",
      label: "Twitter",
    },
    {
      icon: FaGithub,
      href: "https://github.com/pranav-k-jha",
      label: "GitHub",
    },
  ];

  return (
    <footer
      className={cn(
        // Light theme background
        "bg-gradient-to-br from-gray-100 via-white to-gray-200",
        // Dark theme background
        "dark:bg-gradient-to-br dark:from-[#010613] dark:via-[#0F172A] dark:to-[#010613]",

        // Common styling
        "py-12 px-4 sm:px-6 lg:px-8 shadow-lg",

        // Text colors
        "text-gray-700 dark:text-gray-300",

        // Border and transition
        "border-t border-gray-200 dark:border-gray-800",
        "transition-colors duration-300 ease-in-out",

        className
      )}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info Column */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              <span className="text-gray-700 dark:text-gray-200">PRANAV</span> K
              JHA
            </h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            AI Researcher & Developer
          </p>
        </div>

        {/* Locations Column */}
        <div className="space-y-4 text-center">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Location
          </h4>
          {locations.map((location, index) => (
            <div key={index} className="mb-4">
              <h5 className="font-medium text-gray-800 dark:text-gray-200">
                {location.name}
              </h5>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                <FaMapMarkerAlt />
                <p>{location.address}</p>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                <FaEnvelope />
                <p>{location.email}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social and Contact Column */}
        <div className="space-y-4 text-center md:text-right">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Connect With Me
          </h4>
          <div className="flex justify-center md:justify-end space-x-4 mb-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="text-2xl hover:scale-110 transition-transform" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Pranav K Jha.
            <span className="block text-xs text-gray-600 dark:text-gray-500 mt-1">
              AI Solutions Architect
            </span>
          </p>
        </div>
      </div>

      {/* Design and Tech Section */}
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <span className="block text-xs text-gray-600 dark:text-gray-400 font-medium">
            Designed by
            <span className="inline-flex items-center align-middle ml-2">
              <Image
                src="/profile.jpg"
                alt="Pranav K Jha"
                width={20}
                height={20}
                className="rounded-full object-cover mr-2 inline-block align-middle -mt-0.5"
              />
              Pranav K Jha
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
                  lightColor: "text-black",
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
                  lightColor: "text-black",
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
      </div>
    </footer>
  );
}
