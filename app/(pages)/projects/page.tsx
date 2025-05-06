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
} from "lucide-react";
import resume from "@/data/resume";

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
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur-sm"></div>

      <div className="relative bg-white dark:bg-gray-800/70 rounded-2xl border border-gray-200 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 -rotate-45 translate-x-1/2 -translate-y-1/2 opacity-50"></div>

        <div className="flex justify-between items-start mb-4 relative z-10">
          <div className="flex-grow pr-4">
            <div className="flex items-center mb-2">
              <Briefcase className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            {project.associatedWith && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 pl-6">
                {project.associatedWith}
              </p>
            )}

            <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-col items-end space-y-2">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
                title="Project Link"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {project.startDate && project.endDate ? (
                <span>
                  {project.startDate} - {project.endDate}
                </span>
              ) : (
                <span>Ongoing</span>
              )}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: { duration: 0.3 },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: { duration: 0.2 },
              }}
              className="mt-4 space-y-4 border-t border-gray-200 dark:border-gray-700/50 pt-4"
            >
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider flex items-center">
                    <Star className="w-3.5 h-3.5 mr-2 text-yellow-500" />
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs px-2.5 py-1 rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1.5" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.keywords && project.keywords.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider flex items-center">
                    <Code className="w-3.5 h-3.5 mr-2 text-green-500" />
                    Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="inline-flex items-center bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs px-2.5 py-1 rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1.5" />
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.servicesUsed && project.servicesUsed.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider flex items-center">
                    <Link2 className="w-3.5 h-3.5 mr-2 text-purple-500" />
                    Services Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.servicesUsed.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 text-xs px-2.5 py-1 rounded-full"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1.5" />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.notes && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-2 uppercase tracking-wider flex items-center">
                    <Code className="w-3.5 h-3.5 mr-2 text-orange-500" />
                    Additional Notes
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic pl-5 border-l-2 border-orange-200 dark:border-orange-800/50">
                    {project.notes}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute bottom-3 right-3 cursor-pointer text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition group"
        >
          <ArrowUpRight
            className={`w-5 h-5 transition-transform group-hover:rotate-45 ${
              isExpanded ? "rotate-45" : ""
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null);

  const { filteredProjects, allTechnologies, allKeywords } = useMemo(() => {
    const technologies = Array.from(
      new Set(resume.projects.flatMap((p) => p.technologies || []))
    );

    const keywords = Array.from(
      new Set(resume.projects.flatMap((p) => p.keywords || []))
    );

    const filtered = filter
      ? resume.projects.filter(
          (project) =>
            project.technologies?.includes(filter) ||
            project.keywords?.includes(filter)
        )
      : resume.projects;

    return {
      filteredProjects: filtered,
      allTechnologies: technologies,
      allKeywords: keywords,
    };
  }, [filter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            Professional Projects Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A curated collection of innovative projects demonstrating expertise
            in machine learning, data engineering, and software development,
            showcasing technical depth and problem-solving capabilities.
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
            <select
              value={filter || ""}
              onChange={(e) => setFilter(e.target.value || null)}
              className="block w-full pl-10 pr-3 py-2 text-base border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            >
              <option value="">All Projects</option>
              <optgroup label="Technologies">
                {allTechnologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Keywords">
                {allKeywords.map((keyword) => (
                  <option key={keyword} value={keyword}>
                    {keyword}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
