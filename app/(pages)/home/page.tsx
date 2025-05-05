"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LightningBoltIcon,
  RocketIcon,
  ReaderIcon,
  CheckIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";

export default function HomePage() {
  const services = [
    {
      icon: <LightningBoltIcon className="w-8 h-8 text-purple-600" />,
      title: "Full Stack Web and Mobile Development",
      description:
        "Develop transformative AI strategies tailored to your unique business challenges.",
      href: "/coming-soon",
    },
    {
      icon: <RocketIcon className="w-8 h-8 text-purple-600" />,
      title: "Machine Learning",
      description:
        "Design and implement advanced machine learning models for predictive insights.",
      href: "/coming-soon",
    },
    {
      icon: <ReaderIcon className="w-8 h-8 text-purple-600" />,
      title: "AI Research",
      description:
        "Comprehensive guidance for doctoral research, methodology, and publication.",
      href: "/services/phd-support",
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="absolute inset-0 z-0 opacity-50 dark:opacity-50">
          <Image
            src="/banner.jpg"
            alt="Professional Background"
            fill
            quality={90}
            priority
            className="object-cover h-[24rem] md:h-[32rem] lg:h-[40rem]"
            aria-hidden="true"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-24 md:pt-32 lg:pt-40">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-left text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            PRANAV{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              K JHA
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 text-left max-w-2xl leading-relaxed mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            I have passion for AI and Machine Learning and I am working on
            cutting-edge research and use cases in data science, cybersecurity,
            advanced analytics, and transportation, with a current focus on edge
            and quantum computing.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-gradient-to-br from-purple-600/10 via-white dark:from-purple-900/20 dark:via-gray-900 to-white dark:to-gray-900 pt-24 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Highly motivated <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Solutions Architect
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-prose">
              I am a highly motivated AI Solutions Architect with a passion for
              AI and Machine Learning and I am working on cutting-edge research
              and use cases in data science, cybersecurity, advanced analytics,
              and transportation, with a current focus on edge and quantum
              computing.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/about"
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Image
              src="/banner.jpg"
              alt="AI Consulting Illustration"
              width={600}
              height={500}
              className="rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Highlights Section: Alignment Optimization */}
      <section className="relative bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2,
              }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Text Content */}
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <motion.h2
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      delay: 0.3,
                    }}
                    className="text-3xl md:text-4xl font-bold text-blue-600 mb-6"
                  >
                    Cutting-Edge AI Research
                  </motion.h2>

                  <motion.p
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      delay: 0.4,
                    }}
                    className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed"
                  >
                    Looking for cutting-edge AI research and use cases in data
                    science, cybersecurity, advanced analytics, and
                    transportation, with a current focus on edge and quantum
                    computing.
                  </motion.p>

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      delay: 0.5,
                    }}
                    className="space-y-4"
                  >
                    {[
                      "Data Science",
                      "Cybersecurity",
                      "Advanced Analytics",
                      "Machine Learning",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 text-gray-700 dark:text-gray-300"
                      >
                        <CheckIcon className="w-6 h-6 text-purple-500" />
                        <span className="text-base">{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      delay: 0.6,
                    }}
                    className="mt-8"
                  >
                    <Link
                      href="/research/highway-alignment"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 group"
                    >
                      Explore Research
                      <ArrowRightIcon className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 0.4,
                  }}
                  className="hidden md:block relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20 z-10"></div>
                  <Image
                    src="/banner.jpg"
                    alt="AI Alignment Optimization Visualization"
                    fill
                    quality={90}
                    className="object-cover absolute inset-0 z-0"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Background Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl opacity-20"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-pink-200 dark:bg-pink-900 rounded-full blur-3xl opacity-10"
        ></motion.div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Specialized Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Bridging academic excellence with cutting-edge technology to drive
            innovation and research success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.2,
              }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center group-hover:underline"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial or Call to Action Section */}
      <section className="bg-white dark:bg-gray-900 py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Schedule a consultation to discover how our AI-powered consulting
            can accelerate your academic and industry research.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Book Consultation
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-blue-600 text-blue-600 rounded-full text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
