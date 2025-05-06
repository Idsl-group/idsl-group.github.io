"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  Globe,
  Terminal,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const quantumServices = [
  {
    icon: Cpu,
    title: "Quantum ML",
    description:
      "Advanced probabilistic modeling and computational intelligence.",
    href: "/quantum-ml",
  },
  {
    icon: Database,
    title: "Data Architectures",
    description: "Scalable, distributed data infrastructure design.",
    href: "/data-architectures",
  },
  {
    icon: Globe,
    title: "Edge Computing",
    description: "Decentralized computational strategies and optimization.",
    href: "/edge-computing",
  },
  {
    icon: Terminal,
    title: "Research Acceleration",
    description: "Algorithmic methodologies for computational research.",
    href: "/research-acceleration",
  },
];

export default function QuantumHomePage() {
  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="flex justify-between items-center py-8">
          <div className="text-2xl font-bold tracking-wider opacity-80 hover:opacity-100 transition-opacity">
            PK
          </div>
          <nav className="space-x-6 text-sm tracking-wide opacity-70 hover:opacity-100 transition-opacity">
            <Link href="/projects" className="hover:text-blue-300">
              Projects
            </Link>
            <Link href="/research" className="hover:text-blue-300">
              Research
            </Link>
            <Link href="/contact" className="hover:text-blue-300">
              Contact
            </Link>
          </nav>
        </header>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="min-h-[calc(100vh-200px)] flex items-center"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={ANIMATION_VARIANTS} className="space-y-6">
              <div className="inline-flex items-center bg-blue-900/30 px-4 py-2 rounded-full text-xs tracking-wider">
                <Layers className="w-4 h-4 mr-2 text-blue-300" />
                Computational Innovator
              </div>

              <h1 className="text-5xl font-extralight tracking-tighter">
                PRANAV{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  K JHA
                </span>
              </h1>

              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed tracking-wide">
                Pioneering computational research at the intersection of quantum
                computing, machine learning, and advanced algorithmic
                strategies. Transforming theoretical concepts into tangible
                technological innovations.
              </p>

              <div className="flex space-x-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white tracking-wider hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Initiate Collaboration
                  <ArrowUpRight className="inline-block ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={ANIMATION_VARIANTS}
              className="hidden md:block relative"
            >
              <div className="absolute -inset-2 bg-blue-900/10 rounded-3xl blur-xl"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform">
                <Image
                  src="/profile.jpg"
                  alt="Pranav K Jha Professional Portrait"
                  width={600}
                  height={600}
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <motion.div
            variants={ANIMATION_VARIANTS}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light tracking-tight mb-4">
              Computational <span className="font-bold">Domains</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interdisciplinary research spanning quantum computing, machine
              learning, and advanced computational paradigms.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {quantumServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.1,
                    },
                  },
                }}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-600 transition-all"
              >
                <div className="mb-4 w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="text-blue-400 hover:text-blue-300 text-sm flex items-center"
                >
                  Explore
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
