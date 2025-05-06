"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpenIcon, AwardIcon, GraduationCap } from "lucide-react";
import resume from "@/data/resume";
import { CitationMetrics } from "@/components/CitationMetrics";
import { FaLink } from "react-icons/fa";

// Define Publication type based on the structure in resume.ts
type Publication = {
  title: string;
  authors?: string[];
  venue?: string;
  year?: number;
  citations?: number;
  submittedTo?: string;
  status?: string;
  doi?: string;
};

const formatDOI = (doi: string) => {
  // Ensure DOI starts with https://doi.org/ if it doesn't already
  const formattedDoi = doi.startsWith("http")
    ? doi
    : `https://doi.org/${doi.replace(/^doi:/, "")}`;

  // Truncate long DOIs
  const displayDoi = doi.length > 30 ? `${doi.slice(0, 27)}...` : doi;

  return { formattedDoi, displayDoi };
};

const PublicationCard: React.FC<{
  publication: Publication;
  isSelected: boolean;
}> = ({ publication, isSelected }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl shadow-md hover:shadow-lg 
        transition-all duration-300 
        border border-gray-100 dark:border-gray-700
        p-5 flex flex-col 
        ${isSelected ? "ring-2 ring-blue-500" : ""}
      `}
    >
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
          {publication.title}
        </h3>

        <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          <p className="italic">{publication.authors.join(", ")}</p>
          {publication.venue && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {publication.venue}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          {publication.year && (
            <span className="text-xs bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full text-blue-700 dark:text-blue-300">
              {publication.year}
            </span>
          )}

          {publication.status && (
            <span
              className={`
                text-xs px-2 py-1 rounded-full
                ${
                  publication.status === "Published"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                }
              `}
            >
              {publication.status}
            </span>
          )}

          {publication.citations !== undefined && (
            <span className="text-xs bg-purple-50 dark:bg-purple-900/30 px-2 py-1 rounded-full text-purple-700 dark:text-purple-300">
              {publication.citations} Citations
            </span>
          )}
        </div>

        {publication.doi && (
          <a
            href={formatDOI(publication.doi).formattedDoi}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-xs text-blue-600 dark:text-blue-400
              hover:underline flex items-center space-x-1
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              rounded p-1
            "
            title={publication.doi}
          >
            <FaLink className="mr-1" />
            <span>{formatDOI(publication.doi).displayDoi}</span>
          </a>
        )}
      </div>
    </div>
  );
};

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
        />
      )),
    [sortedPublications, selectedPublication]
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
