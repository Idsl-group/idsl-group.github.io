"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationConfig, NavItem } from "@/lib/navigation";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};

export default function DesktopNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const navRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (title: string, hasSubItems: boolean) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (hasSubItems) {
      setActiveMenu(title);
      setIsHovering(true);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!isHovering) {
        setActiveMenu(null);
      }
    }, 200);
  };

  const renderNavItem = (item: NavItem) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isActive = activeMenu === item.title;

    return (
      <motion.div
        key={item.href}
        variants={itemVariants}
        className="relative"
        onMouseEnter={() => handleMouseEnter(item.title, !!hasSubItems)}
        onMouseLeave={handleMouseLeave}
      >
        <Link
          href={item.href}
          className={cn(
            "relative px-4 py-2.5 text-sm font-medium flex items-center gap-1 rounded-lg transition-colors duration-200",
            isActive
              ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
              : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"
          )}
        >
          {item.title}
          {hasSubItems && (
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isActive ? "rotate-180" : ""
              }`}
            />
          )}
        </Link>

        <AnimatePresence>
          {hasSubItems && isActive && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 top-full mt-2 w-56 z-50"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                handleMouseLeave();
              }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10 overflow-hidden">
                {item.subItems?.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    className="group flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {subItem.title}
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                      {subItem.description && (
                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <motion.nav
      ref={navRef}
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="hidden md:flex items-center space-x-1"
    >
      {navigationConfig.map((item) => renderNavItem(item))}
    </motion.nav>
  );
}
