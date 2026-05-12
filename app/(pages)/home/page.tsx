"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { GradientMotionSpan } from "@/components/ui/gradient-motion-span";
import { news } from "@/data/data";
import { 
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function HomePage() {
  const researchDomains = [
    {
      title: "Data Analytics",
      description: "Advanced analytics for complex data challenges",
      image:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
      href: "/research/data-analytics",
      icon: "📊",
    },
    {
      title: "Software Engineering",
      description: "Innovative approaches to software development",
      image:
        "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
      href: "/research/software-engineering",
      icon: "💻",
    },
    {
      title: "Machine Learning",
      description: "Cutting-edge ML models and algorithms",
      image:
        "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      href: "/research/machine-learning",
      icon: "🎯",
    },
    {
      title: "Trustworthy AI",
      description: "Ensuring safety and reliability in AI systems",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      href: "/research/trustworthy-ai",
      icon: "🔒",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-white dark:bg-gray-900">
        {/* Banner Image with Text Overlay */}
        <div className="relative w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-blue-900/20 z-10" />
          <Image
            src="/banner.jpeg"
            alt="IDSL Banner"
            width={1920}
            height={600}
            className="w-full h-auto"
            priority
            quality={85}
            sizes="100vw"
          />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
            <div className="container px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-blue-300" />
                  <span className="text-sm font-medium text-blue-100">Advancing AI & Data Science</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
                  className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent leading-tight mb-4"
                >
                  Intelligent Data Science Lab
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                  className="text-lg bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 bg-clip-text text-transparent mb-6 leading-relaxed font-semibold tracking-wide uppercase"
                >
                  UNIVERSITY OF WESTERN ONTARIO
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg border-0"
                  >
                    <Link href="/publications">
                      Explore Our Research
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-transparent border-2 border-blue-300 text-blue-100 hover:bg-blue-600/20 hover:border-blue-200"
                  >
                    <Link href="/team">Meet Our Team</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Research Domains */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              IDSL Research
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our research bridges together intelligent systems, data science,
              software engineering, and decision making under uncertainty.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {researchDomains.map((domain, index) => (
              <motion.div
                key={domain.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
              >
                <Link href={domain.href}>
                  <div className="group relative h-80 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 dark:opacity-10">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNHMxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] bg-blue-500" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative h-full flex flex-col p-6">
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="text-5xl mb-4"
                      >
                        {domain.icon}
                      </motion.div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {domain.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                        {domain.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="flex items-center justify-between">
                        <span className="text-blue-600 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Learn more
                        </span>
                        <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                    
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Research Themes
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                      1
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      IoT & Smart Systems
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Exponential advancements in development and deployment of IoT systems, smart infrastructures, and our dependency on these systems.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                      2
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Safety & Resiliency
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Developing tools to help resolve software issues faster and advance toward better system safety, security, and resiliency.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                      3
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Automated Reasoning
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Key role in understanding system behavior, verification, run-time monitoring, anomaly detection, and intrusion detection.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white text-xl font-bold mr-4">
                      4
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Data-Driven Engineering
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Computational research in data-driven software engineering gets complex with the amount of data needed to reach outcomes.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 rounded-2xl p-8 text-white text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-300 mr-2" />
                  <h3 className="text-2xl font-bold">Our Focus</h3>
                </div>
                <p className="text-blue-100 dark:text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
                  IDSL conducts data mining, software engineering, and machine learning research with a focus on safety-critical software systems to ensure that modern day safety-critical systems are safe, secure, and resilient.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                className="mt-8 text-center"
              >
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We often collaborate with industry partners and other academic researchers for problem-solving in specific domains.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/publications">Learn More About Our Research</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Latest News
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Stay updated with our latest research and activities
                </p>
              </div>
              <Button asChild variant="outline" className="hidden sm:flex">
                <Link href="/news">
                  View All News
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-gray-200 dark:border-gray-800 h-full">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={75}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white">
                          {item.tags[0]}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={item.date}>{item.date}</time>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                        {item.content}
                      </p>
                      <Link
                        href={`/news/${item.id}`}
                        className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button asChild variant="outline" className="w-full">
                <Link href="/news">
                  View All News
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Join Our Research Team
              </h2>

              <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-8 text-left mx-auto">
                <p className="mb-4">
                  Please see our{" "}
                  <Link
                    href="/publications"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    publications list
                  </Link>{" "}
                  for more information on our research. Our team members and some
                  examples of current and past projects are also available on our{" "}
                  <Link
                    href="/team"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    team page
                  </Link>
                  . We upload our presentations and workshops to the{" "}
                  <Link
                    href="/resources"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    resources page
                  </Link>
                  .
                </p>

                <p className="mb-6">
                  Our group is recruiting year-round for postdocs, MASc and PhD
                  students, visiting students and undergraduate students. All
                  admitted students will receive a stipend.
                </p>

                <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      How to Apply
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                      If you are interested in pursuing research or graduate
                      studies, please email{" "}
                      <a
                        href="mailto:apurva.narayan@uwaterloo.ca"
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Dr. Apurva Narayan
                      </a>{" "}
                      with the following documents:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-6">
                      <li>CV</li>
                      <li>Research Statement</li>
                      <li>Sample work (if applicable)</li>
                    </ul>
                    <Button asChild size="lg" className="w-full sm:w-auto">
                      <a href="mailto:apurva.narayan@uwaterloo.ca">
                        Contact Dr. Narayan
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
