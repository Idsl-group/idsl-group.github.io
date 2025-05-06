"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Award, MapPin, Calendar, Building2 } from "lucide-react";
import resume from "@/data/resume";

type Experience = {
  company: string;
  location: string;
  period: string;
  title: string;
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
              <span>{experience.period}</span>
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
    useState<Experience | null>(resume.currentPositions[0]);

  const [selectedSection, setSelectedSection] = useState<
    "current" | "achievements"
  >("current");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 flex justify-center items-center gap-4"
          >
            <Briefcase className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            Professional Journey
          </motion.h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A glimpse into my professional experiences, achievements, and the
            impact I've made in the fields of AI, Data Science, and Technology.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
            <button
              onClick={() => setSelectedSection("current")}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
                ${
                  selectedSection === "current"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              <Briefcase className="w-4 h-4" /> Current Positions
            </button>
            <button
              onClick={() => setSelectedSection("achievements")}
              className={`
                px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2
                ${
                  selectedSection === "achievements"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }
              `}
            >
              <Award className="w-4 h-4" /> Professional Achievements
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {selectedSection === "current" && (
            <motion.div
              key="current"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {resume.currentPositions.map((position, index) => (
                <ExperienceCard
                  key={index}
                  experience={position}
                  isSelected={selectedExperience === position}
                  onSelect={() => setSelectedExperience(position)}
                />
              ))}
            </motion.div>
          )}

          {selectedSection === "achievements" && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {resume.professionalAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
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
                  className="
                    bg-white dark:bg-gray-800/60 
                    backdrop-blur-lg 
                    rounded-2xl 
                    shadow-lg 
                    p-6 
                    hover:shadow-xl 
                    transition-all 
                    duration-300
                  "
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
                      <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-gray-700 dark:text-gray-200 text-sm">
                      {achievement}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
