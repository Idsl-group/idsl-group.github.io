"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBookOpen, FaAward, FaUniversity } from "react-icons/fa";
import resume from "@/data/resume";

export default function PublicationsPage() {
  const [selectedPublication, setSelectedPublication] = useState(null);

  const publicationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-12 space-x-4">
          <FaBookOpen className="text-4xl text-blue-600 dark:text-blue-400" />
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Research Publications
          </h1>
        </div>

        <div className="space-y-6">
          {resume.publications.map((publication, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={publicationVariants}
              className="bg-white dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-blue-100 dark:border-blue-900/30 overflow-hidden"
              onClick={() =>
                setSelectedPublication(
                  selectedPublication === publication ? null : publication
                )
              }
            >
              <div className="p-6 cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-grow pr-4">
                    <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2 group-hover:text-blue-900 dark:group-hover:text-blue-100 transition-colors">
                      {publication.title}
                    </h3>
                    {publication.authors && (
                      <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
                        {publication.authors.join(", ")}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {publication.year && (
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                        {publication.year}
                      </span>
                    )}
                    {publication.citations && (
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full flex items-center">
                        <FaAward className="mr-1" /> {publication.citations}
                      </span>
                    )}
                  </div>
                </div>

                {publication.venue && (
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <FaUniversity className="mr-2 text-blue-500 dark:text-blue-400" />
                    {publication.venue}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPublication && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 bg-blue-50 dark:bg-gray-800/50 rounded-2xl p-6 border border-blue-200 dark:border-blue-900/30"
            >
              <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                Publication Details
              </h4>
              <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
                {JSON.stringify(selectedPublication, null, 2)}
              </pre>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
