"use client";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";
import johnDoe from "./data";
import Image from "next/image";
import Link from "next/link";

import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import Header from "@/components/header";

export default function JohnDoePortfolioPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax and Scroll Animations
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);

  const sections = [
    { id: "home", label: "Home", icon: FaHome },
    { id: "about", label: "About", icon: FaUser },
    { id: "experience", label: "Experience", icon: FaBriefcase },
    { id: "skills", label: "Skills", icon: FaCode },
    { id: "projects", label: "Projects", icon: FaProjectDiagram },
  ];

  const handleNextExperience = () => {
    setActiveExperienceIndex((prev) => (prev + 1) % johnDoe.experience.length);
  };

  const handlePrevExperience = () => {
    setActiveExperienceIndex((prev) =>
      prev === 0 ? johnDoe.experience.length - 1 : prev - 1
    );
  };

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const handleNextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % johnDoe.projects.length);
  };

  const handlePrevProject = () => {
    setActiveProjectIndex((prev) =>
      prev === 0 ? johnDoe.projects.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 
      dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 
        dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
      >
        {/* Modern Floating Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
          bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl 
          rounded-full px-4 py-2 shadow-xl border border-slate-100/50 dark:border-slate-700/50"
        >
          <div className="flex space-x-4 items-center">
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-700 dark:text-slate-200 
                hover:text-slate-900 dark:hover:text-white 
                transition-colors flex items-center space-x-1 group"
              >
                <section.icon className="w-4 h-4 group-hover:text-blue-500 transition-colors" />
                <span className="text-xs font-medium max-md:hidden">
                  {section.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.nav>
        <Header />
        {/* Hero Section with Modern Typography */}
        <motion.section
          id="home"
          style={{ y: textY }}
          className="w-full min-h-screen flex items-center justify-center relative px-4"
        >
          {/* Cover Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src={
                johnDoe.personal_info.banner_image ||
                "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
              }
              alt="Cover Background"
              fill
              priority
              className="object-cover w-full h-full opacity-20 dark:opacity-10 blur-sm"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center z-10 relative w-full max-w-xl mx-auto"
          >
            <motion.div
              className="mx-auto mb-6 w-48 h-48 relative"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={johnDoe.personal_info.profile_image}
                alt={johnDoe.personal_info.name}
                fill
                priority
                className="rounded-full border-4 border-slate-200 
                dark:border-slate-700 shadow-xl object-cover"
              />
            </motion.div>
            <h1
              className="text-3xl md:text-4xl font-bold 
            text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 
            mb-3 tracking-tight"
            >
              {johnDoe.personal_info.name}
            </h1>
            <p
              className="text-base text-slate-600 dark:text-slate-300 
            max-w-xl mx-auto mb-6 font-medium leading-relaxed"
            >
              Data Scientist & Machine Learning Engineer
            </p>

            {/* Enhanced Social Links */}
            <div className="flex justify-center space-x-6">
              {[
                {
                  Icon: FaLinkedin,
                  url: johnDoe.personal_info.linkedin,
                  color: "text-blue-600 hover:text-blue-800",
                },
                {
                  Icon: FaGithub,
                  url: johnDoe.personal_info.github,
                  color: "text-slate-800 dark:text-white hover:text-slate-600",
                },
                {
                  Icon: FaEnvelope,
                  url: `mailto:${johnDoe.personal_info.email}`,
                  color: "text-red-600 hover:text-red-800",
                },
              ].map(({ Icon, url, color }) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`${color} transition-all duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Subtle Animated Background */}
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-gradient-to-br from-slate-100/30 to-slate-200/30 
            dark:from-slate-900/30 dark:to-slate-800/30 -z-10 
            opacity-50 blur-2xl"
          />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="w-full px-4 py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            className="text-2xl font-bold text-center 
          text-slate-800 dark:text-white mb-8 
          bg-clip-text text-transparent bg-gradient-to-r 
          from-blue-600 to-purple-600"
          >
            Professional Journey
          </h2>

          <div className="w-full max-w-3xl mx-auto space-y-6">
            {johnDoe.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/60 dark:bg-slate-800/60 
                backdrop-blur-xl rounded-xl p-6 
                border border-slate-100/50 dark:border-slate-700/50 
                shadow-lg"
              >
                <h3
                  className="text-lg font-semibold 
                text-slate-800 dark:text-white mb-2"
                >
                  {exp.role}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">
                  {exp.company} | {exp.location}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {exp.dates}
                </p>
                <ul
                  className="list-disc list-inside text-slate-700 
                dark:text-slate-200 space-y-2 text-sm"
                >
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="w-full px-4 py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            className="text-2xl font-bold text-center 
          text-slate-800 dark:text-white mb-8 
          bg-clip-text text-transparent bg-gradient-to-r 
          from-blue-600 to-purple-600"
          >
            Featured Projects
          </h2>

          <div className="w-full max-w-4xl mx-auto space-y-6">
            {johnDoe.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/60 dark:bg-slate-800/60 
                backdrop-blur-xl rounded-xl p-6 
                border border-slate-100/50 dark:border-slate-700/50 
                shadow-lg flex flex-col md:flex-row items-center"
              >
                <div className="md:mr-6 mb-4 md:mb-0 w-full md:w-auto">
                  <Image
                    src={project.image_url}
                    alt={project.name}
                    width={200}
                    height={200}
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3
                    className="text-lg font-semibold 
                  text-slate-800 dark:text-white mb-2"
                  >
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    {project.description}
                  </p>
                  <div className="mb-3">
                    <h4
                      className="text-xs font-medium text-slate-700 
                    dark:text-slate-200 mb-2"
                    >
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 dark:bg-blue-900 
                        text-blue-800 dark:text-blue-200 
                        px-2 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.github_link && (
                    <Link
                      href={project.github_link}
                      target="_blank"
                      className="inline-flex items-center text-xs 
                    text-blue-600 hover:text-blue-800 
                    dark:text-blue-400 dark:hover:text-blue-500 
                    transition-colors"
                    >
                      <FaGithub className="mr-2" /> View on GitHub
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="w-full px-4 py-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2
            className="text-2xl font-bold text-center 
          text-slate-800 dark:text-white mb-8 
          bg-clip-text text-transparent bg-gradient-to-r 
          from-blue-600 to-purple-600"
          >
            Technical Skills
          </h2>
          <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {Object.entries(johnDoe.skills)
              .filter(([key]) => key !== "skill_icons")
              .map(([category, skills]) => (
                <div
                  key={category}
                  className="bg-white/60 dark:bg-slate-800/60 
                  backdrop-blur-xl rounded-xl p-4 
                  border border-slate-100/50 dark:border-slate-700/50 
                  shadow-lg"
                >
                  <h3
                    className="text-base font-semibold 
                  text-slate-800 dark:text-white mb-3 capitalize"
                  >
                    {category.replace("_", " ")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(skills)
                      ? skills.map((skill, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 dark:bg-blue-900 
                        text-blue-800 dark:text-blue-200 
                        px-2 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))
                      : null}
                  </div>
                </div>
              ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
