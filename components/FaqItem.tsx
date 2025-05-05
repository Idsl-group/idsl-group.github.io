"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      <motion.div
        onClick={toggleOpen}
        className="flex items-center justify-between cursor-pointer p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white">
          {question}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="h-6 w-6 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2a1 1 0 011 1v14.586l4.293-4.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L11 17.586V3a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </motion.svg>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              marginTop: 8,
              paddingTop: 8,
              paddingBottom: 16,
            }}
            exit={{
              opacity: 0,
              height: 0,
              marginTop: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeInOut",
            }}
            className="px-4 text-gray-700 dark:text-gray-300"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
