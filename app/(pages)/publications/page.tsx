"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpenIcon,
  AwardIcon,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { FaLink, FaGoogle } from "react-icons/fa";
import Image from "next/image";
import resume from "@/data/resume";
import { CitationMetrics } from "@/components/CitationMetrics";

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
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">
            {publication.title}
          </h3>
          {publication.submittedTo && (
            <span
              className={`
              ml-2 px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap
              ${
                publication.submittedTo === "IEEE"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                  : publication.submittedTo === "AIP Conference Proceedings"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }
            `}
            >
              {publication.submittedTo}
            </span>
          )}
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          <p className="italic">{publication.authors?.join(", ")}</p>
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

  const publicationCards = sortedPublications.map((publication) => (
    <PublicationCard
      key={publication.title}
      publication={publication}
      isSelected={selectedPublication === publication}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header Image Section */}
      <div className="relative w-full h-[300px] mb-12">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80"
            alt="Library and Research"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 dark:from-black/80 dark:to-black/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <div className="flex items-center space-x-4">
              <BookOpenIcon className="w-12 h-12 text-white opacity-90" />
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Research Publications
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mt-4 ml-16">
              Exploring the frontiers of technology through academic research
              and scholarly contributions
            </p>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-8"
      >
        {/* Publications List */}
        <div className="md:col-span-2 space-y-6">{publicationCards}</div>

        {/* Citation Metrics Sidebar */}
        <div className="md:col-span-1">
          <CitationMetrics metrics={resume.publicationMetrics} />

          <a
            href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full flex items-center justify-center px-4 py-3 rounded-xl
              bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700
              hover:from-blue-600 hover:to-purple-700 dark:hover:from-blue-500 dark:hover:to-purple-600
              transform hover:scale-[1.02] hover:shadow-lg
              transition-all duration-300 group"
          >
            <FaGoogle className="w-5 h-5 text-white mr-2 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">
              Visit Google Scholar Profile
            </span>
            <ExternalLink className="w-4 h-4 ml-2 text-white/80 group-hover:text-white transition-colors" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
