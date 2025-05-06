"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Calendar,
  Building2,
  ChevronDown,
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
          relative overflow-hidden rounded-2xl 
          ${
            isSelected
              ? "ring-4 ring-blue-500/30 dark:ring-blue-400/30"
              : "hover:ring-2 hover:ring-blue-500/20 dark:hover:ring-blue-400/20"
          }
          bg-white dark:bg-gray-800/60 
          backdrop-blur-lg 
          shadow-lg hover:shadow-xl 
          transition-all duration-300 
          cursor-pointer
        `}
        onClick={onSelect}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
                  {experience.company}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {experience.title}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-3 mb-2">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span>{experience.duration}</span>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";

export default function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(resume.workExperience[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8 overflow-y-scroll">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive Professional Journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 relative">
          <div className="relative space-y-6 md:max-h-[600px] md:overflow-y-auto pr-4 scrollbar-thin scrollbar-track-gray-100 dark:scrollbar-track-gray-800 scrollbar-thumb-blue-300 dark:scrollbar-thumb-blue-700">
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

            {/* Scroll Hint */}
            {resume.workExperience.length > 5 && (
              <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center text-gray-500 dark:text-gray-400"
                >
                  <ChevronDown className="w-8 h-8 opacity-50" />
                  <span className="text-xs mt-1">Scroll for more</span>
                </motion.div>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-800/60 rounded-2xl p-6 shadow-lg md:sticky md:top-24">
            {selectedExperience && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedExperience.company}
                </h2>
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
                      <div className="mt-4">
                        <h3 className="text-md font-semibold mb-2">
                          Key Responsibilities:
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-sm">
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
}
