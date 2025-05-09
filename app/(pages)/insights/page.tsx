"use client";

import React, { useMemo } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const insightsData = [
  {
    id: 1,
    title: "AI and Quantum Computing",
    description:
      "Exploring the intersection of artificial intelligence and quantum computing technologies.",
    image: "/insights/image-1.png",
    fallbackImage: "/insights/image-1.png",
    category: "Research",
    date: "May 2024",
  },
  {
    id: 2,
    title: "Edge Computing Revolution",
    description:
      "Insights into the transformative potential of edge computing in modern infrastructure.",
    image: "/insights/image-2.png",
    fallbackImage: "/insights/image-2.png",
    category: "Technology",
    date: "April 2024",
  },
  {
    id: 3,
    title: "Transportation Analytics",
    description:
      "Advanced data science techniques revolutionizing urban mobility and transportation systems.",
    image: "/insights/image-3.png",
    fallbackImage: "/insights/image-3.png",
    category: "Analytics",
    date: "March 2024",
  },
  {
    id: 4,
    title: "Machine Learning Breakthroughs",
    description:
      "Cutting-edge developments in machine learning and predictive modeling.",
    image: "/insights/image-4.png",
    fallbackImage: "/insights/image-4.png",
    category: "AI Research",
    date: "February 2024",
  },
];

function InsightImage({
  src,
  alt,
  fallbackSrc,
}: {
  src: string;
  alt: string;
  fallbackSrc: string;
}) {
  const [imageSrc, setImageSrc] = React.useState(src);

  const handleError = () => {
    setImageSrc(fallbackSrc);
  };

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      onError={handleError}
      className="object-cover"
      quality={50}
      priority={false}
    />
  );
}

export default function LatestInsightsPage() {
  // Memoize all variants to prevent unnecessary re-renders
  const pageVariants = useMemo(
    () => ({
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 },
    }),
    []
  );

  const cardVariants = useMemo(
    () => ({
      initial: { opacity: 0, scale: 0.95 },
      animate: { opacity: 1, scale: 1 },
      hover: { scale: 1.02 }, // Reduced scale for smoother interaction
    }),
    []
  );

  const progressVariants = useMemo(
    () => ({
      initial: { width: 0 },
      animate: {
        width: "100%",
        transition: {
          duration: 1.5, // Reduced duration
          repeat: Infinity,
          repeatType: "reverse" as const,
          ease: "linear", // More performant easing
        },
      },
    }),
    []
  );

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen overflow-hidden">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{
            type: "tween",
            duration: 0.2, // Reduced duration
            ease: "easeOut", // More performant easing
          }}
          className="relative z-10 min-h-screen bg-white/70 dark:bg-gray-900/80 backdrop-blur-sm py-16"
        >
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.2, // Reduced duration
                ease: "easeOut",
              }}
              className="text-4xl md:text-5xl font-extrabold text-center text-navy-800 dark:text-white mb-12 drop-shadow-lg"
            >
              Latest Insights
            </motion.h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {insightsData.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={cardVariants}
                  transition={{
                    type: "tween",
                    duration: 0.15, // Reduced duration
                    delay: Math.min(index * 0.03, 0.3), // Capped delay
                  }}
                  className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl dark:shadow-2xl overflow-hidden transform transition-all duration-200"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <InsightImage
                      src={insight.image}
                      alt={insight.title}
                      fallbackSrc={insight.fallbackImage}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-navy-800 bg-navy-100 dark:bg-navy-800 px-2 py-1 rounded">
                        {insight.category}
                      </span>
                      <span className="text-xs text-gray-300">
                        {insight.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-800 dark:text-white">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {insight.description}
                    </p>
                    <Link
                      href="#"
                      className="inline-block mt-4 text-blue-600 dark:text-blue-300 hover:underline text-sm transition-colors duration-200 hover:text-blue-800 dark:hover:text-blue-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.2, // Reduced duration
              ease: "easeOut",
            }}
            className="text-center my-16"
          >
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl border border-gray-200 dark:border-gray-700 max-w-xl mx-auto shadow-lg backdrop-blur-sm">
              <p className="text-lg text-gray-900 dark:text-white mb-6">
                Insights page is currently being developed. More content coming
                soon.
              </p>
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={progressVariants}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </LazyMotion>
  );
}
