"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  Building2,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import resume from "@/data/resume";

type Experience = {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  details?: string[];
};

const ExperienceCard = React.memo(
  ({
    experience,
    isSelected,
    onSelect,
  }: {
    experience: Experience;
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
            ease: "easeInOut",
          },
        }}
        className={`
          group
          relative 
          overflow-hidden 
          rounded-xl 
          border 
          ${
            isSelected
              ? "border-blue-500/50 dark:border-blue-400/50 bg-blue-50/30 dark:bg-blue-900/20"
              : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
          }
          bg-white 
          dark:bg-gray-800/40 
          shadow-sm 
          hover:shadow-md 
          transition-all 
          duration-300 
          cursor-pointer
        `}
        onClick={onSelect}
      >
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                {experience.company}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.title}
              </p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition" />
        </div>
        <div className="px-5 pb-4 text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            <span>{experience.duration}</span>
          </div>
        </div>
      </motion.div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

const ExperiencePage = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(resume.workExperience[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my professional experiences,
            highlighting key roles, responsibilities, and career progression.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          <div
            className="relative space-y-4 md:max-h-[600px] md:overflow-y-auto pr-4 
            scrollbar-thin 
            scrollbar-track-gray-100 
            dark:scrollbar-track-gray-800 
            scrollbar-thumb-blue-300 
            dark:scrollbar-thumb-blue-700
            scroll-smooth"
          >
            {resume.workExperience.map((position) => (
              <ExperienceCard
                key={`${position.company}-${position.title}`}
                experience={position}
                isSelected={
                  selectedExperience?.company === position.company &&
                  selectedExperience?.title === position.title
                }
                onSelect={() => setSelectedExperience(position)}
              />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800/60 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-lg md:sticky md:top-24">
            {selectedExperience && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedExperience.company}
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                    <span>{selectedExperience.duration}</span>
                  </div>
                </div>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    <span className="text-lg font-semibold">
                      {selectedExperience.title}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    <span>{selectedExperience.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    <span>
                      {selectedExperience.startDate} -{" "}
                      {selectedExperience.endDate}
                    </span>
                  </div>
                  {selectedExperience.details &&
                    selectedExperience.details.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-md font-semibold mb-3 text-gray-800 dark:text-gray-100">
                          Key Responsibilities:
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          {selectedExperience.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
