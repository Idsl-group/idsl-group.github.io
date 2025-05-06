"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Cpu,
  Database,
  Globe,
  BookOpen,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Machine Learning",
    description:
      "Advanced predictive modeling and intelligent system development.",
    href: "/services/machine-learning",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Scalable data pipelines and robust analytics infrastructure.",
    href: "/services/data-engineering",
  },
  {
    icon: Globe,
    title: "Cloud Solutions",
    description:
      "Innovative cloud architecture and distributed computing strategies.",
    href: "/services/cloud-solutions",
  },
  {
    icon: BookOpen,
    title: "AI Research",
    description:
      "Comprehensive guidance for doctoral research, methodology, and publication.",
    href: "/services/phd-support",
  },
];

export default function HomePage() {
  return (
    <main className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
          <Image
            src="/banner.jpg"
            alt="Professional Background"
            fill
            quality={90}
            priority
            className="object-cover h-[24rem] md:h-[32rem] lg:h-[40rem] filter brightness-110 dark:brightness-50"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg rounded-full inline-flex items-center px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700/50 shadow-sm">
              <Zap className="w-4 h-4 mr-2 text-yellow-500" />
              AI & Data Science Innovator
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              PRANAV{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                K JHA
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Pioneering AI and Machine Learning research at the intersection of
              advanced analytics, cybersecurity, and transformative
              technologies. Specializing in edge computing, quantum computing,
              and innovative computational strategies.
            </p>

            <div className="flex space-x-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get In Touch
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </motion.a>

              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-full shadow-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800/50 backdrop-blur-lg hover:bg-gray-50 dark:hover:bg-gray-800/70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Projects
                <Briefcase className="ml-2 w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl -rotate-6 shadow-xl"></div>
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl transform rotate-6 scale-90 hover:scale-95 transition-transform duration-300">
                <Image
                  src="/profile.jpg"
                  alt="Pranav K Jha Professional Headshot"
                  fill
                  quality={90}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Professional Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Delivering cutting-edge solutions across machine learning, data
              engineering, cloud architecture, and academic research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="mb-4 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  Learn More
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
