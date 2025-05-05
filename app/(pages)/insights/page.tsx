"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const insightsData = [
  {
    id: 1,
    title: "AI and Quantum Computing",
    description:
      "Exploring the intersection of artificial intelligence and quantum computing technologies.",
    image: "/office/image-1.jpg",
    fallbackImage: "/office/image-1.jpg",
    category: "Research",
    date: "May 2024",
  },
  {
    id: 2,
    title: "Edge Computing Revolution",
    description:
      "Insights into the transformative potential of edge computing in modern infrastructure.",
    image: "/office/image-2.jpg",
    fallbackImage: "/office/image-2.jpg",
    category: "Technology",
    date: "April 2024",
  },
  {
    id: 3,
    title: "Transportation Analytics",
    description:
      "Advanced data science techniques revolutionizing urban mobility and transportation systems.",
    image: "/office/image-3.jpg",
    fallbackImage: "/office/image-3.jpg",
    category: "Analytics",
    date: "March 2024",
  },
  {
    id: 4,
    title: "Machine Learning Breakthroughs",
    description:
      "Cutting-edge developments in machine learning and predictive modeling.",
    image: "/office/image-1.jpg",
    fallbackImage: "/office/image-1.jpg",
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
      quality={75}
      priority={false}
    />
  );
}

export default function LatestInsightsPage() {
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
      hover: { scale: 1.03 },
    }),
    []
  );

  const progressVariants = {
    initial: { width: 0 },
    animate: {
      width: "100%",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ type: "tween", duration: 0.3 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-16"
    >
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-navy-800 dark:text-white mb-12"
        >
          Latest Insights
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-center my-16"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 max-w-xl mx-auto shadow-md">
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
                duration: 0.2,
                delay: index * 0.05,
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-2xl overflow-hidden transform transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <InsightImage
                  src={insight.image}
                  alt={insight.title}
                  fallbackSrc={insight.fallbackImage}
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-navy-800 bg-navy-100 dark:bg-navy-800 px-2 py-1 rounded">
                    {insight.category}
                  </span>
                  <span className="text-xs text-gray-300">{insight.date}</span>
                </div>
                <h3 className="text-lg font-bold text-navy-800">
                  {insight.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-3">
                  {insight.description}
                </p>
                <Link
                  href="#"
                  className="inline-block mt-4 text-blue-600 dark:text-blue-300 hover:underline text-sm"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
