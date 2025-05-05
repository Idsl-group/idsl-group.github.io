"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaLinkedin,
  FaResearchgate,
  FaUniversity,
  FaEnvelope,
  FaPhone,
  FaGlobe,
  FaBook,
  FaAward,
  FaGraduationCap,
  FaChevronLeft,
  FaChevronRight,
  FaLink,
  FaAddressCard,
  FaExternalLinkAlt,
  FaCopy,
  FaBriefcase,
  FaCheck,
} from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import Image from "next/image";
import resume from "@/data/resume";
import { useSwipeable } from "react-swipeable";

export default function PublicationsPage() {
  const contactLinks = [
    {
      icon: <FaEnvelope className="text-purple-600" />,
      text: "mkjha101@hotmail.com",
      href: "mailto:mkjha101@hotmail.com",
    },
    {
      icon: <FaPhone className="text-purple-600" />,
      text: "(240) 712-2489",
      href: "tel:+12407122489",
    },
    {
      icon: <FaGlobe className="text-purple-600" />,
      text: "Personal Website",
      href: "http://mkjhaconsult.com/about-dr-jha",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-blue-600" />,
      text: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/mkjhaphd/",
    },
    {
      icon: <SiOrcid className="text-green-600" />,
      text: "ORCiD",
      href: "https://orcid.org/0000-0001-7351-4764",
    },
    {
      icon: <SiGooglescholar className="text-red-600" />,
      text: "Google Scholar",
      href: "https://scholar.google.com/citations?user=P5t_XZIAAAAJ&hl=en&oi=ao",
    },
    {
      icon: <FaResearchgate className="text-green-700" />,
      text: "ResearchGate",
      href: "https://www.researchgate.net/profile/Manoj-Jha-8",
    },
  ];

  const [editedBooksCurrentPage, setEditedBooksCurrentPage] = useState(1);
  const [journalPapersCurrentPage, setJournalPapersCurrentPage] = useState(1);
  const [
    conferenceProceedingsCurrentPage,
    setConferenceProceedingsCurrentPage,
  ] = useState(1);
  const [booksCurrentPage, setBooksCurrentPage] = useState(1);
  const itemsPerPage = 5; // Number of items to show per page

  const paginateItems = (items: any[], currentPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  };

  const PaginationControls = ({
    items,
    currentPage,
    setCurrentPage,
    itemType,
  }: {
    items: any[];
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    itemType: string;
  }) => {
    const itemsPerPage = 5;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Swipe handlers
    const handlers = useSwipeable({
      onSwipedLeft: () => {
        if (currentPage < totalPages) {
          setCurrentPage((prev) => prev + 1);
        }
      },
      onSwipedRight: () => {
        if (currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      },
      preventScrollOnSwipe: true,
    });

    return (
      <div {...handlers} className="touch-pan-y">
        <div className="flex justify-center items-center mt-6 space-x-2">
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full border border-purple-100 dark:border-purple-900 shadow-sm">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 group transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-5 h-5 text-purple-600 dark:text-purple-300 group-disabled:text-gray-400 transition-colors" />
            </button>

            <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 group transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-5 h-5 text-purple-600 dark:text-purple-300 group-disabled:text-gray-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const [currentWorkExpPage, setCurrentWorkExpPage] = useState(1);
  const workExpPerPage = 5;

  const WorkExpPaginationControls = ({
    items,
    currentPage,
    setCurrentPage,
  }: {
    items: any[];
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  }) => {
    const totalPages = Math.ceil(items.length / workExpPerPage);

    // Swipe handlers
    const handlers = useSwipeable({
      onSwipedLeft: () => {
        if (currentPage < totalPages) {
          setCurrentPage((prev) => prev + 1);
        }
      },
      onSwipedRight: () => {
        if (currentPage > 1) {
          setCurrentPage((prev) => prev - 1);
        }
      },
      preventScrollOnSwipe: true,
    });

    return (
      <div {...handlers} className="touch-pan-y">
        <div className="flex justify-center items-center mt-6 space-x-2">
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full border border-purple-100 dark:border-purple-900 shadow-sm">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 group transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-5 h-5 text-purple-600 dark:text-purple-300 group-disabled:text-gray-400 transition-colors" />
            </button>

            <span className="text-sm font-medium text-purple-600 dark:text-purple-300">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 group transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-5 h-5 text-purple-600 dark:text-purple-300 group-disabled:text-gray-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    );
  };
  // track the index of the item that was copied
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const items = [
    {
      icon: (
        <FaGlobe className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
      ),
      content: "419 Blairfield Court, Severn, MD 21144",
      type: "address",
    },
    {
      icon: (
        <FaEnvelope className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
      ),
      content: "mkjha@mkjhaconsult.com",
      type: "email",
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    // reset icon after 2 seconds
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/office/image-4.png"
            alt="Professional Background"
            fill
            quality={90}
            priority
            className="opacity-50 dark:opacity-50 object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Dr. Jha&apos;s{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Research Publications
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Research Publications and contributions to the field of data
            science, advanced analytics, transportation, edge computing, and
            quantum computing.
          </motion.p>

          <div className="flex justify-center space-x-4">
            <motion.a
              href="https://orcid.org/0000-0001-7351-4764"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <SiOrcid className="mr-2 text-green-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                ORCiD Profile
              </span>
            </motion.a>

            <motion.a
              href="https://scholar.google.com/citations?user=P5t_XZIAAAAJ&hl=en&oi=ao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <SiGooglescholar className="mr-2 text-blue-600" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Google Scholar
              </span>
            </motion.a>
          </div>
        </div>
      </section>
      {/* Mission Statement Section */}
      {/* <section className="container mx-auto px-6 py-16 text-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

      </section> */}

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-6 pt-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Research Publications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          >
            Explore my research publications and contributions to the field of
            data science, advanced analytics, transportation, edge computing,
            and quantum computing.
          </motion.p>
        </div>
        <div className="w-full py-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-transparent"
          >
            <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
              {/* Publications */}
              <div
                id="publications"
                className="mb-8 space-y-8 relative pb-24 pt-8"
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-extrabold text-navy-800 dark:text-white mb-6 pb-2 border-b-2 border-navy-300 dark:border-navy-800"
                >
                  Books
                </motion.h2>

                {/* Books Section */}
                {resume.publications.books &&
                  resume.publications.books.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="space-y-6"
                    >
                      <div
                        className={`grid md:grid-cols-2 gap-4 ${resume.publications.books.length <= 2 ? "" : "grid-rows-5 min-h-[300px]"}`}
                      >
                        {paginateItems(
                          resume.publications.books,
                          booksCurrentPage
                        ).map((book, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-navy-800 dark:bg-navy-900 p-5 rounded-xl shadow-md dark:shadow-2xl dark:shadow-navy-950/50 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 space-y-2"
                          >
                            <p className="font-bold text-base text-navy-700 dark:text-white mb-1">
                              {book.title}
                            </p>
                            <div className="text-xs space-y-1">
                              <p className="text-gray-600 dark:text-gray-300">
                                <span className="font-semibold text-navy-700 dark:text-white">
                                  Authors:
                                </span>{" "}
                                {Array.isArray(book.authors)
                                  ? book.authors.join(", ")
                                  : book.authors}
                              </p>
                              <p className="text-gray-700 dark:text-gray-400">
                                {book.publisher}, {book.year}
                                {book.isbn && ` | ISBN: ${book.isbn}`}
                                {book.pages && ` | ${book.pages} pages`}
                              </p>
                              {book.website && (
                                <a
                                  href={book.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1"
                                >
                                  View Book Details
                                </a>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                {/* Edited Books */}
                <div className="mb-8">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-extrabold text-navy-800 dark:text-white mb-6 pb-2 border-b-2 border-navy-300 dark:border-navy-800"
                  >
                    Edited Books
                  </motion.h2>
                  <div className="grid gap-4 text-sm grid-rows-5 min-h-[300px]">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => {
                        const book = paginateItems(
                          resume.publications.editedBooks,
                          editedBooksCurrentPage
                        )[index];

                        return book ? (
                          <div
                            key={index}
                            className="bg-navy-800 dark:bg-navy-900 p-4 rounded-lg shadow-md dark:shadow-2xl dark:shadow-navy-950/50 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
                          >
                            <p className="font-semibold text-navy-700 dark:text-white">
                              {book.title}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                              Editors: {book.editors.join(", ")}
                            </p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">
                              {book.publisher}, {book.year}
                              {book.isbn && ` | ISBN: ${book.isbn}`}
                              {book.pages && ` | ${book.pages} pages`}
                            </p>
                          </div>
                        ) : (
                          <div
                            key={index}
                            className="opacity-0 pointer-events-none h-full"
                          ></div>
                        );
                      })}
                  </div>
                  <PaginationControls
                    items={resume.publications.editedBooks}
                    currentPage={editedBooksCurrentPage}
                    setCurrentPage={setEditedBooksCurrentPage}
                    itemType="Edited Books"
                  />
                </div>

                {/* Journal Papers */}
                <div className="mb-8">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-extrabold text-navy-800 dark:text-white mb-6 pb-2 border-b-2 border-navy-300 dark:border-navy-800"
                  >
                    Journal Papers
                  </motion.h2>
                  <div className="grid gap-4 text-sm grid-rows-5 min-h-[300px]">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => {
                        const paper = paginateItems(
                          resume.publications.journalPapers,
                          journalPapersCurrentPage
                        )[index];

                        return paper ? (
                          <div
                            key={index}
                            className="bg-navy-800 dark:bg-navy-900 p-4 rounded-lg shadow-md dark:shadow-2xl dark:shadow-navy-950/50 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
                          >
                            <p className="font-semibold text-navy-700 dark:text-white">
                              {paper.title}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                              Authors:{" "}
                              {Array.isArray(paper.authors)
                                ? paper.authors.join(", ")
                                : paper.authors}
                            </p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">
                              {paper.journal}, {paper.year}
                              {paper.doi && (
                                <a
                                  href={paper.doi}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                  DOI: {paper.doi.split("/").pop()}
                                </a>
                              )}
                            </p>
                          </div>
                        ) : (
                          <div
                            key={index}
                            className="opacity-0 pointer-events-none h-full"
                          ></div>
                        );
                      })}
                  </div>
                  <PaginationControls
                    items={resume.publications.journalPapers}
                    currentPage={journalPapersCurrentPage}
                    setCurrentPage={setJournalPapersCurrentPage}
                    itemType="Journal Papers"
                  />
                </div>

                {/* Conference Proceedings */}
                <div className="mb-8">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-extrabold text-navy-800 dark:text-white mb-6 pb-2 border-b-2 border-navy-300 dark:border-navy-800"
                  >
                    Conference Proceedings
                  </motion.h2>
                  <div className="grid gap-4 text-sm grid-rows-5 min-h-[300px]">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => {
                        const proceeding = paginateItems(
                          resume.publications.conferenceProceedings,
                          conferenceProceedingsCurrentPage
                        )[index];

                        return proceeding ? (
                          <div
                            key={index}
                            className="bg-navy-800 dark:bg-navy-900 p-4 rounded-lg shadow-md dark:shadow-2xl dark:shadow-navy-950/50 hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300"
                          >
                            <p className="font-semibold text-navy-700 dark:text-white">
                              {proceeding.title}
                            </p>
                            <p className="text-xs text-gray-600 dark:text-gray-300 mb-1">
                              Authors:{" "}
                              {Array.isArray(proceeding.authors)
                                ? proceeding.authors.join(", ")
                                : proceeding.authors}
                            </p>
                            <p className="text-xs text-gray-700 dark:text-gray-400">
                              {proceeding.conference}, {proceeding.year}
                              {proceeding.doi && (
                                <a
                                  href={proceeding.doi}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                  DOI: {proceeding.doi.split("/").pop()}
                                </a>
                              )}
                            </p>
                          </div>
                        ) : (
                          <div
                            key={index}
                            className="opacity-0 pointer-events-none h-full"
                          ></div>
                        );
                      })}
                  </div>
                  <PaginationControls
                    items={resume.publications.conferenceProceedings}
                    currentPage={conferenceProceedingsCurrentPage}
                    setCurrentPage={setConferenceProceedingsCurrentPage}
                    itemType="Conference Proceedings"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
