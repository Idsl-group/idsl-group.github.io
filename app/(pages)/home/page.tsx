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
import { GradientMotionSpan } from "@/components/ui/gradient-motion-span";

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
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              <motion.span
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                Welcome to
              </motion.span>

              <GradientMotionSpan>
                INTELLIGENT DATA SCIENCE LAB
              </GradientMotionSpan>
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
                <Link href="/team">Meet Our Team</Link>
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
      {/* Recruitment Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Join Our Research Team
            </motion.h2>

            <motion.div
              className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8 text-left mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="mb-4">
                Please see our{" "}
                <a
                  href="/publications"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  publications list
                </a>{" "}
                for more information on our research. Our team members and some
                examples of current and past projects are also available on our{" "}
                <a
                  href="/team"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  team page
                </a>
                . We upload our presentations and workshops to the{" "}
                <a
                  href="/resources"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  resources page
                </a>
                .
              </p>

              <p className="mb-6">
                Our group is recruiting year-round for postdocs, MASc and PhD
                students, visiting students and undergraduate students. All
                admitted students will receive a stipend.
              </p>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  How to Apply
                </h3>
                <p className="mb-4">
                  If you are interested in pursuing research or graduate
                  studies, please email{" "}
                  <a
                    href="mailto:apurva.narayan@uwaterloo.ca"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Dr. Apurva Narayan
                  </a>{" "}
                  with the following documents:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>CV</li>
                  <li>Research Statement</li>
                  <li>Sample work (if applicable)</li>
                </ul>
                <div className="mt-6">
                  <Button asChild>
                    <a href="mailto:apurva.narayan@uwaterloo.ca">
                      Contact Dr. Narayan
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Highlights Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200 rounded-lg px-3 py-1 text-sm font-medium">
                  Highlights
                </div>
                <div className="ml-3 text-sm text-blue-700 dark:text-blue-300">
                  July 10, 2024
                </div>
              </div>
              <div className="mt-2">
                <p className="text-gray-900 dark:text-white">
                  The Banff International Research Station will host the{" "}
                  <span className="font-semibold">
                    Climate Change Scenarios and Financial Risk
                  </span>{" "}
                  Online workshop at the UBC Okanagan campus in Kelowna, BC,
                  from May 1 to May 6, 2022.
                </p>
                <p className="mt-4">
                  <Link href="https://www.birs.ca/events/2022/5-day-workshops/22w5201">
                    <Button>View Event</Button>
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                News
              </h2>

              <article className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <time dateTime="2025-05-01">May 1, 2025</time>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Starting our AI for Social Good Seminar Series with inaugural
                  speaker "Prof. Milind Tambe", Harvard
                </h3>
                <div className="prose prose-gray dark:prose-invert">
                  <p>
                    We are thrilled to launch our AI for Social Good Seminar
                    Series, led by Western University and supported by
                    University of Waterloo, UBC, and the International Center
                    for Applied Systems Science for Sustainable Development. Our
                    first inaugural speaker is Prof. Milind Tambe, Harvard
                    University, USA.
                  </p>
                </div>
              </article>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
