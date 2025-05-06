"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpenIcon, AwardIcon, GraduationCap } from "lucide-react";
import resume from "@/data/resume";

// Define Publication type based on the structure in resume.ts
type Publication = {
  title: string;
  authors?: string[];
  venue?: string;
  year?: number;
  citations?: number;
};

const PublicationCard = React.memo(
  ({
    publication,
    isSelected,
    onSelect,
  }: {
    publication: Publication;
    isSelected: boolean;
    onSelect: () => void;
  }) => {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
        whileHover={{
          scale: 1.02,
          transition: {
            type: "spring",
            stiffness: 300,
          },
        }}
        className={`
          relative overflow-hidden rounded-2xl 
          ${
            isSelected
              ? "ring-4 ring-blue-500/30 dark:ring-blue-400/30"
              : "hover:ring-2 hover:ring-blue-500/20 dark:hover:ring-blue-400/20"
          }
          bg-white dark:bg-gray-800/60 
          backdrop-blur-lg 
          shadow-lg hover:shadow-xl 
          transition-all duration-300 
          cursor-pointer
        `}
        onClick={onSelect}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-grow pr-4">
              <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                {publication.title}
              </h3>
              {publication.authors && (
                <p className="text-sm text-gray-600 dark:text-gray-300 italic">
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
                  <AwardIcon className="mr-1 w-3 h-3" /> {publication.citations}
                </span>
              )}
            </div>
          </div>

          {publication.venue && (
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <GraduationCap className="mr-2 w-4 h-4 text-blue-500 dark:text-blue-400" />
              {publication.venue}
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);

export default function PublicationsPage() {
  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  const handlePublicationSelect = (publication: Publication) => {
    setSelectedPublication(
      selectedPublication === publication ? null : publication
    );
  };

  const publicationsList = useMemo(
    () =>
      resume.publications.map((publication, index) => (
        <PublicationCard
          key={index}
          publication={publication}
          isSelected={selectedPublication === publication}
          onSelect={() => handlePublicationSelect(publication)}
        />
      )),
    [resume.publications, selectedPublication]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-12 space-x-4">
          <BookOpenIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Research Publications
          </h1>
        </div>

        <div className="space-y-6">{publicationsList}</div>

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
