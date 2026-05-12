"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchORCIDPublications, type Publication } from "@/lib/orcid";
import Image from "next/image";

export default function PublicationsPage() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "journal" | "conference"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch publications from ORCID on component mount
  useEffect(() => {
    const loadPublications = async () => {
      try {
        setLoading(true);
        const orcidPublications = await fetchORCIDPublications();
        setPublications(orcidPublications);
      } catch (error) {
        console.error("Failed to load publications:", error);
        setPublications([]);
      } finally {
        setLoading(false);
      }
    };

    loadPublications();
  }, []);

  // Filter publications based on active filter and search query
  const filteredPublications = publications.filter((pub) => {
    const matchesFilter =
      activeFilter === "all" || pub.type.toLowerCase() === activeFilter;
    const matchesSearch = pub.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // Group publications by year
  const publicationsByYear = filteredPublications.reduce<
    Record<number, Publication[]>
  >((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {});

  return (
    <div className="min-h-screen">
      {/* Loading State */}
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading publications...</p>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section with Header Image */}
          <section className="relative h-[50vh] flex items-center justify-center bg-gray-900">
        {/* Header Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/5904934/pexels-photo-5904934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Academic research papers and publications"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-indigo-900/90 dark:from-black/50 dark:to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 sm:px-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Research Publications
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Explore our latest research contributions in artificial
              intelligence, machine learning, and data science
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center"
          >
            <div className="relative w-full sm:w-96">
              <input
                type="text"
                placeholder="Search publications..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter("journal")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === "journal"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Journals
              </button>
              <button
                onClick={() => setActiveFilter("conference")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFilter === "conference"
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                Conferences
              </button>
            </div>
          </motion.div>

          {/* Publications List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            {Object.entries(publicationsByYear)
              .sort(([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA))
              .map(([year, yearPublications]) => (
                <div key={year} className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                    {year}
                  </h2>
                  <div className="space-y-6">
                    {yearPublications.map((pub) => (
                      <motion.div
                        key={pub.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium mr-4 mt-1">
                            {pub.type.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xs md:text-sm font-semibold text-gray-900 dark:text-white mb-1">
                              {pub.title}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center text-xs md:text-sm text-gray-600 dark:text-gray-300 space-y-1 sm:space-y-0 sm:space-x-4">
                              {pub.venue && (
                                <span className="flex items-center">
                                  <svg
                                    className="h-4 w-4 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                  </svg>
                                  {pub.venue}
                                </span>
                              )}
                              {pub.pages && (
                                <span className="flex items-center">
                                  <svg
                                    className="h-4 w-4 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                  pp. {pub.pages}
                                </span>
                              )}
                              <span className="flex items-center">
                                <svg
                                  className="h-4 w-4 mr-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {pub.year}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                pub.type === "Journal"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                  : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                              }`}
                            >
                              {pub.type}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
          </motion.div>
        </div>
      </div>
        </>
      )}
    </div>
  );
}
