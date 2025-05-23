"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const researchDomains = [
    {
      title: "Data Analytics",
      description: "Advanced analytics for complex data challenges",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      href: "/research/data-analytics",
    },
    {
      title: "Software Engineering",
      description: "Innovative approaches to software development",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop",
      href: "/research/software-engineering",
    },
    {
      title: "Machine Learning",
      description: "Cutting-edge ML models and algorithms",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2874&auto=format&fit=crop",
      href: "/research/machine-learning",
    },
    {
      title: "Trustworthy AI",
      description: "Ensuring safety and reliability in AI systems",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2886&auto=format&fit=crop",
      href: "/research/trustworthy-ai",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop"
            alt="Research Lab Environment"
            fill
            className="object-cover"
            priority
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAACAgEEAgMAAAAAAAAAAAABAgMEEQAFIQYSEzFRYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGREAAwADAAAAAAAAAAAAAAAAAAERAhIh/9oADAMBAAIRAxEAPwCJ4LfLmPq7dJXrGvXhWJYzYk4UcDn7x1q6+Jb5e3G5ZhsV4JY4oDMrGxIGyDxxz1qO0vGfJLOx15o4YIZhIwb94z1x1jI1JzVlLt0//2Q=="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 dark:from-gray-900/90 dark:to-gray-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Welcome to IDSL
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto"
            >
              We develop novel algorithms and machine learning models to solve
              complex problems in the fields of data science and artificial
              intelligence.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Explore Our Research
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Meet Our Team
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Domains */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              IDSL Research
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our research bridges together intelligent systems, data science,
              software engineering, and decision making under uncertainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchDomains.map((domain, index) => (
              <Link key={index} href={domain.href}>
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={domain.image}
                      alt={domain.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                      {domain.title}
                    </h3>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-600 dark:text-gray-400">
                      {domain.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Research Themes
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We are witnessing exponential advancements in development and
                deployment of IoT systems, smart infrastructures, and our
                dependency on these systems. The overall vision of IDSL is to
                develop tools that will help resolve software issues much
                faster, and advance toward better system safety, security, and
                resiliency.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Automated reasoning of these systems play a key role in
                understanding system behavior, verification, run-time
                monitoring, anomaly detection, and intrusion detection.
                Computational research in the domain of data driven software
                engineering gets complicated with the amount of data that one
                needs to process to reach an outcome.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
                  Our Focus
                </h3>
                <p className="text-blue-700 dark:text-blue-200">
                  IDSL conducts data mining, software engineering, and machine
                  learning research with a focus on safety-critical software
                  systems to ensure that modern day safety-critical systems are
                  safe, secure, and resilient.
                </p>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-8">
                We often collaborate with industry partners and other academic
                researchers for problem-solving in specific domains. For a list
                of our projects and collaborators, please visit our Research
                page.
              </p>
            </div>
            <div className="mt-10 text-center">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
              >
                Learn More About Our Research
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
