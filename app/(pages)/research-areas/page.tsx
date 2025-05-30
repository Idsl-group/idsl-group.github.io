"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BrainCircuit,
  ShieldCheck,
  Network,
} from "lucide-react";
import Link from "next/link";

type Props = {};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const industryPartners = [
  {
    name: "Scotia Bank",
    logo: "/logos/scotia-bank.svg",
  },
  {
    name: "Troj AI Inc.",
    logo: "/logos/trojai.webp",
  },
  {
    name: "Loblaw Inc.",
    logo: "/logos/Loblaws.svg",
  },
  {
    name: "General Motors",
    logo: "/logos/general-motors.svg.png",
  },
  {
    name: "Microsoft",
    logo: "/logos/microsoft.svg.png",
  },
  {
    name: "Palitronica",
    logo: "/logos/Palitronica.webp",
  },
];

const researchTopics = [
  {
    title: "Robustness Certification",
    description: "Ensuring AI model reliability and safety",
  },
  {
    title: "Data Mining",
    description: "For complex cyber-physical systems",
  },
  {
    title: "Fault Detection",
    description: "Automatic diagnosis and resolution",
  },
  {
    title: "Predictive Analytics",
    description: "Advanced forecasting and modeling",
  },
  {
    title: "AI in Healthcare",
    description: "Transforming medical diagnostics",
  },
  {
    title: "Smart Manufacturing",
    description: "AI-driven industrial optimization",
  },
];

export default function ResearchAreasPage({}: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg"
            alt="Research and data science visualization"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-indigo-900/90 dark:from-black/50 dark:to-black/80" />
        </div>

        <div className="relative z-10 text-center px-6 sm:px-10 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Research Areas
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Pioneering research at the intersection of AI, data science, and
              cyber-physical systems
            </p>
            <div className="pt-6">
              <Link href="/publications">
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                  Explore Our Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Research Focus */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24 text-center"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
            Our Research Focus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advancing the Frontiers of Intelligent Systems
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            We combine cutting-edge research with practical applications to
            solve complex challenges in today&apos;s digital landscape.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col"
            >
              <div className="flex items-center mb-3 space-x-3">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Industrial Solutions
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">
                We develop novel algorithms and computational tools to solve
                industrial problems in safety, security, and robustness of
                automation processes.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4 space-x-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Theoretical Foundations
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We explore fundamental problems in AI and machine learning for
                theoretical insights that drive innovation in our applied work.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Research Topics */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
              Research Topics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our research spans across various domains, pushing the boundaries
              of what&apos;s possible with intelligent systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchTopics.map((topic, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {topic.description}
                </p>
                <div className="mt-4 text-blue-600 dark:text-blue-400 flex items-center font-medium">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industry Partners */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
              Collaboration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Partners
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We collaborate with leading organizations to drive innovation and
              create real-world impact.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/80 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industryPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700/50 p-6 rounded-xl flex flex-col items-center justify-center h-32 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full h-12 mb-3">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Interested in collaborating with us?
              </p>
              <button className="px-6 py-2.5 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-full border border-blue-200 dark:border-blue-900 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                Partner With Us
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
