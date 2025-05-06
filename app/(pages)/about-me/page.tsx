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

export default function AboutMePage() {
  const contactLinks = [
    {
      icon: <FaEnvelope className="text-blue-600" />,
      text: "pranav.jha@mail.concordia.ca",
      href: "mailto:pranav.jha@mail.concordia.ca",
    },
    {
      icon: <FaPhone className="text-blue-600" />,
      text: "(240) 712-2489",
      href: "tel:+12407122489",
    },
    {
      icon: <FaGlobe className="text-blue-600" />,
      text: "Personal Website",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-blue-600" />,
      text: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/pranav-k-jha/",
    },
    {
      icon: <SiOrcid className="text-green-600" />,
      text: "ORCiD",
      href: "https://orcid.org/0000-0001-8053-988X",
    },
    {
      icon: <SiGooglescholar className="text-red-600" />,
      text: "Google Scholar",
      href: "https://scholar.google.ca/citations?user=_KvkPzkAAAAJ&hl=en",
    },
    {
      icon: <FaResearchgate className="text-green-700" />,
      text: "ResearchGate",
      href: "https://www.researchgate.net/profile/Pranav-Jha-7",
    },
  ];

  const sections = [
    { id: "profile", label: "Profile" },
    { id: "work-experience", label: "Work Experience" },
    { id: "education", label: "Education" },
    { id: "courses", label: "Courses" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
  ];

  const [activeSection, setActiveSection] = useState("profile");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Account for fixed navigation and potential padding
      const offset = 80; // Adjust this value based on your fixed header height
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });

      // Update active section
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer for Section Tracking
  useEffect(() => {
    const sections = [
      "profile",
      "education",
      "courses",
      "work-experience",
      "projects",
      "publications",
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const [journalPapersCurrentPage, setJournalPapersCurrentPage] = useState(1);
  const [
    conferenceProceedingsCurrentPage,
    setConferenceProceedingsCurrentPage,
  ] = useState(1);
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
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full border border-blue-100 dark:border-blue-900 shadow-sm">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 group transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-5 h-5 text-blue-600 dark:text-blue-300 group-disabled:text-gray-400 transition-colors" />
            </button>

            <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 group transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-300 group-disabled:text-gray-400 transition-colors" />
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
          <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full border border-blue-100 dark:border-blue-900 shadow-sm">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 group transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FaChevronLeft className="w-5 h-5 text-blue-600 dark:text-blue-300 group-disabled:text-gray-400 transition-colors" />
            </button>

            <span className="text-sm font-medium text-blue-600 dark:text-blue-300">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 group transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <FaChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-300 group-disabled:text-gray-400 transition-colors" />
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
      content: "2250 rue Guy, Montreal, QC H3H 2M3, Canada",
      type: "address",
    },
    {
      icon: (
        <FaEnvelope className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
      ),
      content: "pranav.jha@mail.concordia.ca",
      type: "email",
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    // reset icon after 2 seconds
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const [publicationsCurrentPage, setPublicationsCurrentPage] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-[80%] mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-transparent"
        >
          {/* Cover Banner */}
          <div className="relative w-screen -mx-[50vw] left-1/2 right-1/2 h-[450px] overflow-hidden -mt-20">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40 dark:opacity-60 
             object-cover object-center 
             sm:bg-cover md:bg-cover lg:bg-cover 
             w-full h-full quality-100 "
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('/banner.jpg')",
              }}
            ></div>
            <div className="relative z-10 flex items-end justify-center h-full px-8 py-6 max-w-7xl mx-auto -translate-y-36 md:-translate-y-24 lg:translate-y-0">
              <div className="flex items-center space-x-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                  className="text-gray-700 dark:text-gray-100 
                  w-full 
                  md:max-w-[50%] 
                  lg:max-w-[60%] 
                  space-y-2 
                  text-center md:text-left 
                  bg-black/30 md:bg-transparent 
                  p-4 md:p-0 
                  rounded-lg md:rounded-none"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-bold mb-2"
                  >
                    AI SOLUTIONS ARCHITECT
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-2xl md:text-3xl font-bold mb-2"
                  >
                    PRANAV K JHA
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xs md:text-sm text-gray-700 dark:text-gray-300"
                  >
                    AI, ML, Cybersecurity & Data Science Solutions
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-[-130px] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
            {/* Sticky Side Navigation */}
            <nav className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 z-50">
              <div className="bg-transparent dark:bg-transparent p-1">
                <div className="flex flex-col space-y-2">
                  {[
                    { id: "profile", label: "About", icon: "👤" },
                    { id: "education", label: "Education", icon: "🎓" },
                    { id: "courses", label: "Courses", icon: "📚" },
                    { id: "work-experience", label: "Work", icon: "💼" },
                    { id: "projects", label: "Projects", icon: "🔬" },
                    { id: "publications", label: "Papers", icon: "📝" },
                  ].map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        const element = document.getElementById(section.id);
                        if (element) {
                          const offset = 100; // Adjust this value as needed
                          const elementPosition =
                            element.getBoundingClientRect().top +
                            window.pageYOffset;
                          const offsetPosition = elementPosition - offset;

                          window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                          });
                        }
                      }}
                      className={`
                        flex items-center 
                        px-3 py-2 
                        rounded-full 
                        text-[0.7rem]
                        font-medium 
                        transition-all 
                        duration-300 
                        group
                        ${
                          activeSection === section.id
                            ? "bg-blue-600 text-white"
                            : "text-blue-700 dark:text-blue-300 hover:bg-blue-100/50 dark:hover:bg-gray-700/50"
                        }
                      `}
                      aria-label={`Navigate to ${section.label} section`}
                    >
                      <span
                        className={`
                          mr-2 
                          opacity-70 
                          group-hover:opacity-100 
                          transition-opacity 
                          duration-300
                          ${
                            activeSection === section.id
                              ? "opacity-100"
                              : "opacity-50"
                          }
                        `}
                      >
                        {section.icon}
                      </span>
                      <span
                        className={`
                          whitespace-nowrap 
                          ${
                            activeSection === section.id
                              ? "text-white"
                              : "text-blue-700 dark:text-blue-300"
                          }
                        `}
                      >
                        {section.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </nav>

            {/* Header Section */}
            <div
              id="profile"
              className="text-center mb-8 space-y-4 text-sm leading-relaxed"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-100 dark:border-indigo-950 shadow-2xl mb-4">
                  <Image
                    src="/profile.jpg"
                    alt="Pranav Jha"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-3">
                Pranav Jha
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                AI, ML, Cybersecurity & Data Science Solutions
              </p>
              <p className="text-gray-800 dark:text-gray-200 max-w-5xl mx-auto leading-relaxed tracking-wide bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  I transform raw data into meaningful insights
                </span>{" "}
                through a passionate approach to{" "}
                <span className="text-blue-600 dark:text-blue-300">
                  Machine Learning
                </span>{" "}
                and{" "}
                <span className="text-emerald-600 dark:text-emerald-400">
                  Data Science
                </span>
                . With a background in{" "}
                <span className="text-purple-600 dark:text-purple-300">
                  Deep Learning
                </span>
                ,
                <span className="text-orange-600 dark:text-orange-400">
                  {" "}
                  Predictive Analytics
                </span>
                , and{" "}
                <span className="text-teal-600 dark:text-teal-400">
                  AI Automation
                </span>
                , I design intelligent systems that{" "}
                <span className="font-bold text-red-600 dark:text-red-400">
                  predict, optimize, and innovate
                </span>
                .
              </p>
            </div>

            {/* Professional Summary */}
            <div
              id="profile"
              className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-8"
            >
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4 border-b-2 border-blue-200 pb-2">
                Professional Profile
              </h2>
            </div>

            {/* Contact, Links, and Positions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                staggerChildren: 0.1,
                delayChildren: 0.2,
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8"
            >
              {/* Professional Links Column */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl border border-blue-100 dark:border-blue-900 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-center mb-3 border-b border-blue-200 pb-2">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                    <FaLink className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 group-hover:text-blue-900 dark:group-hover:text-blue-100 transition-colors">
                    Professional Links
                  </h3>
                </div>
                <div className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                      }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-sm text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors duration-300  rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30"
                    >
                      <span className="mr-3 bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                        {link.icon}
                      </span>
                      {link.text}
                      <FaExternalLinkAlt className="ml-auto text-blue-400 dark:text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Contact Information Column */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl border border-blue-100 dark:border-blue-900 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-center mb-3 border-b border-blue-200 pb-2">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                    <FaAddressCard className="w-5 h-5 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 group-hover:text-blue-900 dark:group-hover:text-blue-100 transition-colors">
                    Contact Information
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                      }}
                      className="flex items-center rounded-lg hover:bg-green-50 dark:hover:bg-green-900/30 group"
                    >
                      {item.icon}
                      <span className="group-hover:text-green-900 dark:group-hover:text-green-100 transition-colors">
                        {item.content}
                      </span>
                      {item.type === "email" && (
                        <button
                          className="ml-auto focus:outline-none"
                          onClick={() => handleCopy(item.content, index)}
                        >
                          {copiedIndex === index ? (
                            <FaCheck className="text-green-500 w-4 h-4 transition-opacity" />
                          ) : (
                            <FaCopy className="text-green-400 dark:text-green-600 w-4 h-4 transition-opacity opacity-0 group-hover:opacity-100" />
                          )}
                        </button>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Current Positions Column */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate="visible"
                className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl border border-blue-100 dark:border-blue-900 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-center mb-3 border-b border-blue-200 pb-2">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                    <FaBriefcase className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 group-hover:text-blue-900 dark:group-hover:text-blue-100 transition-colors">
                    Current Positions
                  </h3>
                </div>
                <div className="space-y-3">
                  {resume.currentPositions.map((position, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.3,
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      className="text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 group"
                    >
                      <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 group-hover:text-blue-900 dark:group-hover:text-blue-100 transition-colors">
                        {position.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {position.company}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {position.location}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {position.period}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Education */}
            <div id="education" className="my-8">
              <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3 border-b-2 border-blue-200 pb-1">
                Education
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                {resume.education.map((edu, index) => (
                  <div key={index} className="flex items-start">
                    <FaGraduationCap className="mr-3 mt-1 text-blue-600 dark:text-blue-400 w-5 h-5" />
                    <div>
                      <h3 className="text-md font-semibold text-blue-700 dark:text-blue-300">
                        {edu.degrees[0].name}
                      </h3>
                      <div className="text-sm">
                        <span>{edu.institution}</span>
                        {edu.degrees[0].startYear && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                            {edu.degrees[0].startYear} -{" "}
                            {edu.degrees[0].endYear}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*Courses */}
            <div id="courses" className="my-8">
              <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3 border-b-2 border-blue-200 pb-1">
                Courses
              </h2>
              <div className="grid grid-cols-3 gap-4 space-y-4 text-gray-700 dark:text-gray-300">
                {resume.courses.map((course, index) => (
                  <div key={index} className="flex items-start">
                    <FaBook className="mr-3 mt-1 text-blue-600 dark:text-blue-400 w-5 h-5" />
                    <div>
                      <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                        {course.name}
                      </h3>
                      <div className="text-xs">
                        <span>{course.grade}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div id="work-experience" className="my-8">
              <h2 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-3 border-b-2 border-blue-200 pb-1">
                Work Experience
              </h2>
              <div className="grid gap-4 text-gray-700 dark:text-gray-300 grid-rows-5 min-h-[300px]">
                {Array(5)
                  .fill(null)
                  .map((_, index) => {
                    const job = resume.workExperience.slice(
                      (currentWorkExpPage - 1) * workExpPerPage,
                      currentWorkExpPage * workExpPerPage
                    )[index];

                    return job ? (
                      <div
                        key={index}
                        className="group relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-blue-500 before:rounded-full before:border-2 before:border-blue-200 dark:before:border-blue-800 after:absolute after:left-[5px] after:top-2 after:bottom-0 after:w-0.5 after:bg-blue-100 dark:after:bg-blue-800 last:after:hidden"
                      >
                        <div className="flex justify-between items-start mb-1">
                          <div>
                            <h3 className="text-md font-semibold text-blue-700 dark:text-blue-300">
                              {job.title}
                            </h3>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {job.company}
                              {job.location && ` • ${job.location}`}
                            </div>
                          </div>
                          {job.startDate && job.endDate && (
                            <span className="text-xs text-gray-500 dark:text-gray-500">
                              {job.startDate} - {job.endDate}
                            </span>
                          )}
                        </div>
                        {job.details && (
                          <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                            <ul className="list-disc list-inside">
                              {job.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                              ))}
                            </ul>
                          </p>
                        )}
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="opacity-0 pointer-events-none h-full"
                      ></div>
                    );
                  })}
              </div>
              {/* Pagination Controls */}
              {resume.workExperience.length > workExpPerPage && (
                <WorkExpPaginationControls
                  items={resume.workExperience}
                  currentPage={currentWorkExpPage}
                  setCurrentPage={setCurrentWorkExpPage}
                />
              )}
            </div>

            {/* Professional Achievements */}
            <div
              id="professional-achievements"
              className="mb-8 space-y-6 relative"
            >
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4 border-b-2 border-blue-200 pb-2">
                Research Interests
              </h2>

              {/* Focus Areas */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                  Focus Areas
                </h3>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  {resume.focusAreas.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>

                {/* Detailed Professional Summary */}
                <div className="mt-4 text-sm text-gray-700 dark:text-gray-300 space-y-3">
                  {resume.summary.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300 mb-2">
                  Professional Memberships
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <a
                      href="https://www.asiacis.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <a href="https://ieeexplore.ieee.org/xplore/home.jsp">
                        IEEE Student Member
                      </a>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div id="projects" className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4 border-b-2 border-blue-200 pb-2">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resume.projects.map((project, index) => {
                  const [expanded, setExpanded] = useState(false);
                  const shouldTruncate = project.description.length > 200;
                  const displayedDescription = expanded
                    ? project.description
                    : project.description.slice(0, 200);

                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-blue-100 dark:border-blue-900/50"
                    >
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-1 group-hover:text-blue-900 dark:group-hover:text-blue-200 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          {project.startDate && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                              {project.startDate}
                            </span>
                          )}
                          {project.associatedWith && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full">
                              {project.associatedWith}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {displayedDescription}
                          {shouldTruncate && !expanded && "..."}
                        </p>
                        {shouldTruncate && (
                          <button
                            onClick={() => setExpanded(!expanded)}
                            className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-1"
                          >
                            {expanded ? "Show less" : "Read more"}
                          </button>
                        )}
                      </div>

                      {(project.skills || project.keywords) && (
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-2">
                            {project.skills?.map((skill, skillIndex) => (
                              <span
                                key={`skill-${skillIndex}`}
                                className="text-xs bg-blue-100 dark:bg-blue-900/50 px-2 py-1 rounded-full text-blue-700 dark:text-blue-300"
                              >
                                {skill}
                              </span>
                            ))}
                            {project.keywords?.map((keyword, keyIndex) => (
                              <span
                                key={`key-${keyIndex}`}
                                className="text-xs bg-purple-100 dark:bg-purple-900/50 px-2 py-1 rounded-full text-purple-700 dark:text-purple-300"
                              >
                                {keyword}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.link && (
                        <div className="mt-3">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                          >
                            View Project
                            <FaExternalLinkAlt className="ml-2 w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Publications */}
            <div id="publications" className="mb-8 space-y-6 relative pb-24">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4 border-b-2 border-blue-200 pb-2">
                Publications
              </h2>

              {/* Conference and Journal Papers Section */}
              {resume.publications && resume.publications.length > 0 && (
                <div className="mb-8">
                  <div className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
                    {paginateItems(
                      [...resume.publications]
                        .map((pub) => ({
                          ...pub,
                          year: parseInt(String(pub.year).substring(0, 4)) || 0, // Correct malformed year like 20250 → 2025
                        }))
                        .sort((a, b) => b.year - a.year),
                      publicationsCurrentPage
                    ).map((publication, index) => (
                      <div
                        key={index}
                        className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-lg border border-blue-100 dark:border-blue-900"
                      >
                        <p className="font-semibold">{publication.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Authors:{" "}
                          {Array.isArray(publication.authors)
                            ? publication.authors.join(", ")
                            : publication.authors}
                        </p>
                        <p className="text-xs">
                          {publication.venue && `${publication.venue}, `}
                          {publication.year}
                          {publication.citations !== undefined && (
                            <span className="ml-2 text-gray-500">
                              Citations: {publication.citations}
                            </span>
                          )}
                          {publication.submittedTo && (
                            <span className="ml-2 text-gray-500">
                              Submitted to: {publication.submittedTo}
                            </span>
                          )}
                          {publication.status && (
                            <span className="ml-2 text-gray-500">
                              Status: {publication.status}
                            </span>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                  <PaginationControls
                    items={resume.publications}
                    currentPage={publicationsCurrentPage}
                    setCurrentPage={setPublicationsCurrentPage}
                    itemType="Publications"
                  />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
