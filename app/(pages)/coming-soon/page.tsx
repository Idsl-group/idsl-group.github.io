"use client";

import React from "react";
import { motion } from "framer-motion";
import { Construction, Clock, Send } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full bg-white dark:bg-gray-800/60 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8 text-center"
      >
        <div className="mb-6">
          <Construction className="mx-auto w-16 h-16 text-blue-500 dark:text-blue-400 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Coming Soon
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            We&apos;re working hard to bring something amazing to life. Stay
            tuned for an exciting update coming soon!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg flex items-center space-x-4">
            <Clock className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                In Development
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Project actively being crafted
              </p>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg flex items-center space-x-4">
            <Send className="w-8 h-8 text-green-500 dark:text-green-400" />
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                Updates Coming
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Subscribe for latest news
              </p>
            </div>
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 dark:bg-blue-600 text-white py-3 px-6 rounded-full inline-block cursor-pointer hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
        >
          Notify Me
        </motion.div>
      </motion.div>
    </div>
  );
}
