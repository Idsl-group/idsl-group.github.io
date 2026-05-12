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
      icon: "🤖",
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

  const newsItems = [
    {
      id: 1,
      title: "Starting our AI for Social Good Seminar Series with inaugural Prof. Milind Tambe, Harvard",
      date: "May 1, 2025",
      category: "Seminar",
      excerpt: "We are thrilled to launch our AI for Social Good Seminar Series, led by Western University and supported by University of Waterloo, UBC, and the International Center for Applied Systems Science for Sustainable Development.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    },
    {
      id: 2,
      title: "New Publication: Advances in Safety-Critical Software Systems",
      date: "April 15, 2025",
      category: "Publication",
      excerpt: "Our latest research on ensuring safety and reliability in autonomous systems has been published in IEEE Transactions on Software Engineering.",
      image: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg",
    },
    {
      id: 3,
      title: "IDSL Welcomes New PhD Students for Fall 2025",
      date: "March 20, 2025",
      category: "Team",
      excerpt: "We are excited to welcome three new PhD students joining our lab this fall, specializing in machine learning and trustworthy AI.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-white dark:bg-gray-900">
        {/* Banner Image with Text Overlay */}
        <div className="relative w-full">
          <Image
            src="/banner_bg.jpg"
            alt="IDSL Banner"
            width={1920}
            height={600}
            className="w-full h-auto"
            priority
            quality={100}
          />
          
          {/* Text Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
            <div className="container px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium text-white">Advancing AI & Data Science</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4"
                >
                  Intelligent Data Science Lab
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-200 mb-6 leading-relaxed"
                >
                  University of Western Ontario
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg"
                  >
                    <Link href="/publications">
                      Explore Our Research
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10"
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
            viewport={{ once: true }}
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
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {researchDomains.map((domain, index) => (
              <motion.div
                key={domain.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={domain.href}>
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group cursor-pointer border-gray-200 dark:border-gray-800">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={domain.image}
                        alt={domain.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-3xl mb-2">{domain.icon}</div>
                        <h3 className="text-xl font-bold text-white">
                          {domain.title}
                        </h3>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {domain.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
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
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
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
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800"
                >
                  <Link href="/publications">Learn More About Our Research</Link>
                </Button>
              </div>
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
            viewport={{ once: true }}
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
              {newsItems.map((item, index) => (
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
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white">
                          {item.category}
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
                        {item.excerpt}
                      </p>
                      <Link
                        href="#"
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
