"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Link2,
  ExternalLink,
  ArrowUpRight,
  Filter,
  CheckCircle2,
  Star,
  Briefcase,
  Calendar,
  Brain,
  Database,
  Shield,
  Server,
} from "lucide-react";
import resume from "@/data/resume";
import Link from "next/link";

type Project = {
  title: string;
  startDate?: string | null;
  endDate?: string | null;
  associatedWith?: string | null;
  description: string;
  technologies?: string[];
  servicesUsed?: string[];
  keywords?: string[];
  link?: string | null;
  notes?: string | null;
  skills?: string[];
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.1,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>

      <div className="relative bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-200 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div className="flex-grow pr-4">
            <div className="flex items-center mb-2">
              <Code className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight line-clamp-1">
                {project.title}
              </h3>
            </div>

            {project.associatedWith && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 pl-6 line-clamp-1">
                {project.associatedWith}
              </p>
            )}

            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <Calendar className="w-4 h-4 mr-2" />
              <span>
                {project.startDate} - {project.endDate || "Present"}
              </span>
            </div>
          </div>

          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </Link>
          )}
        </div>

        <div className="flex-grow mb-4">
          <p
            className={`text-gray-700 dark:text-gray-300 ${isExpanded ? "" : "line-clamp-3"}`}
          >
            {project.description}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm mt-2 transition-colors"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills?.slice(0, 5).map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const projectCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      projects: resume.projects.filter((p) =>
        p.skills?.some((skill) =>
          [
            "AI",
            "Machine Learning",
            "Deep Learning",
            "CNN",
            "LSTM",
            "Predictive",
            "XGBoost",
            "Random Forests",
            "Gradient Boosting",
            "Time Series",
            "Forecasting",
            "Cybersecurity",
            "Classification",
            "Intrusion Detection",
          ].includes(skill)
        )
      ),
    },
    {
      name: "Data Engineering",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      projects: resume.projects.filter((p) =>
        p.skills?.some((skill) =>
          [
            "Data Analysis",
            "Data Engineering",
            "AWS",
            "Cloud Services",
            "MongoDB",
            "Data Processing",
            "Video Analytics",
            "RPC",
            "Microservices",
          ].includes(skill)
        )
      ),
    },
    {
      name: "Web Development",
      icon: <Code className="w-6 h-6 text-green-500" />,
      projects: resume.projects.filter((p) =>
        p.skills?.some((skill) =>
          [
            "Next.js",
            "TypeScript",
            "Web Development",
            "Full-stack",
            "E-commerce",
            "SSR",
            "SSG",
            "Payload CMS",
            "Stripe",
          ].includes(skill)
        )
      ),
    },
    {
      name: "Software Engineering",
      icon: <Server className="w-6 h-6 text-orange-500" />,
      projects: resume.projects.filter((p) =>
        p.skills?.some((skill) =>
          [
            "Java",
            "Spring Boot",
            "gRPC",
            "RabbitMQ",
            "Distributed Systems",
            "Client-server",
            "Multithreading",
            "Performance Profiling",
          ].includes(skill)
        )
      ),
    },
  ];

  const filteredProjects = activeCategory
    ? projectCategories.find((cat) => cat.name === activeCategory)?.projects ||
      []
    : resume.projects;

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
      >
        Professional Projects
      </motion.h1>

      {/* Category Navigation */}
      <div className="flex justify-center mb-12 space-x-4 flex-wrap">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-4 py-2 rounded-full transition-all duration-300 m-1 ${
            activeCategory === null
              ? "bg-blue-500 text-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
          }`}
        >
          All Projects
        </button>
        {projectCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 m-1 ${
              activeCategory === category.name
                ? "bg-blue-500 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, projectIndex) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={projectIndex}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 mt-12">
          No projects found in this category.
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
