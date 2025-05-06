"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpenIcon, AwardIcon, GraduationCap } from "lucide-react";
import resume from "@/data/resume";
import { CitationMetrics } from "@/components/CitationMetrics";

// Define Publication type based on the structure in resume.ts
type Publication = {
  title: string;
  authors?: string[];
  venue?: string;
  year?: number;
  citations?: number;
};

const PublicationCard: React.FC<{
  publication: Publication;
  isSelected: boolean;
  onSelect: () => void;
}> = React.memo(function PublicationCard({
  publication,
  isSelected,
  onSelect,
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: 1,
        scale: isSelected ? 1.02 : 1,
      }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      onClick={onSelect}
      className={`
        cursor-pointer 
        bg-white 
        dark:bg-gray-800 
        rounded-2xl 
        p-6 
        space-y-4 
        border 
        transition-all 
        duration-200
        ${
          isSelected
            ? "border-blue-200 dark:border-blue-700 shadow-lg"
            : "border-transparent hover:border-gray-200 dark:hover:border-gray-700"
        }
      `}
    >
      <div className="flex justify-between items-start">
        <div className="flex-grow pr-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {publication.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {publication.authors?.join(", ")}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 italic">
            {publication.venue}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center space-x-2">
            <AwardIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold text-blue-700 dark:text-blue-500">
              {publication.citations}
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Citations
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {publication.year}
          </span>
        </div>
      </div>

      {isSelected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700"
        >
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Total Citations
              </h4>
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {publication.citations}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Publication Year
              </h4>
              <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {publication.year}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Venue
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 truncate">
                {publication.venue}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
});

export default function PublicationsPage() {
  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);

  const handlePublicationSelect = useCallback((publication: Publication) => {
    setSelectedPublication((current) =>
      current === publication ? null : publication
    );
  }, []);

  const sortedPublications = useMemo(
    () =>
      [...resume.publications].sort((a, b) => (b.year || 0) - (a.year || 0)),
    []
  );

  const publicationCards = useMemo(
    () =>
      sortedPublications.map((publication) => (
        <PublicationCard
          key={publication.title}
          publication={publication}
          isSelected={selectedPublication === publication}
          onSelect={() => handlePublicationSelect(publication)}
        />
      )),
    [sortedPublications, selectedPublication, handlePublicationSelect]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {/* Publications List */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center mb-6 space-x-4">
            <BookOpenIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Research Publications
            </h1>
          </div>

          {publicationCards}
        </div>

        {/* Citation Metrics Sidebar */}
        <div className="md:col-span-1 mt-16">
          <CitationMetrics metrics={resume.publicationMetrics} />
        </div>
      </motion.div>
    </div>
  );
}
