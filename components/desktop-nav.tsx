"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationConfig, NavItem } from "@/lib/navigation";

const navItemVariants = {
  initial: { opacity: 0, y: -10, scale: 0.95 },
  hover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 200 },
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

const dropdownVariants = {
  initial: { opacity: 0, y: -20, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function DesktopNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderNavItem = (item: NavItem) => {
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const isMenuOpen = openMenu === item.title;

    return (
      <motion.div
        key={item.href}
        className="relative group"
        variants={navItemVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <div
          className="flex items-center"
          onMouseEnter={() => setOpenMenu(hasSubItems ? item.title : null)}
        >
          <Link
            href={item.href}
            className={cn(
              "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ease-in-out",
              hasSubItems ? "cursor-default" : "",
              isMenuOpen
                ? "text-white dark:text-white bg-gradient-to-r from-[#0E1A2B] via-[#1C2F45] to-[#0E1A2B]"
                : "text-neutral-800 dark:text-[#B0B8C4] hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-gradient-to-r dark:hover:from-[#0E1A2B] dark:hover:via-[#1C2F45] dark:hover:to-[#0E1A2B]"
            )}
          >
            <span className="relative z-10">{item.title}</span>
            {hasSubItems && (
              <motion.div
                animate={{
                  rotate: isMenuOpen ? 180 : 0,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <ChevronDown className="h-4 w-4 ml-1 text-neutral-600 dark:text-[#A0AEC0]" />
              </motion.div>
            )}
            <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-gradient-to-r dark:from-[#0E1A2B] dark:via-[#1C2F45] dark:to-[#0E1A2B]" />
          </Link>
        </div>

        <AnimatePresence>
          {hasSubItems && isMenuOpen && (
            <motion.div
              key="dropdown"
              initial="initial"
              animate="animate"
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.95,
                transition: { duration: 0.2 },
              }}
              variants={dropdownVariants}
              className="absolute z-50 top-full left-0 mt-2 w-64 rounded-lg shadow-xl p-2 border border-neutral-200 dark:border-[#1E2A38] bg-white dark:bg-[#0A192F] backdrop-blur-md"
              onMouseEnter={() => setOpenMenu(item.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.subItems?.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className={cn(
                    "block px-3 py-2 rounded-md transition-all duration-300 group relative overflow-hidden",
                    "text-neutral-800 dark:text-[#B0B8C4] hover:text-black dark:hover:text-white",
                    hoveredItem === subItem.href
                      ? "bg-neutral-100 dark:bg-gradient-to-r dark:from-[#0E1A2B] dark:via-[#1C2F45] dark:to-[#0E1A2B]"
                      : "hover:bg-neutral-100 dark:hover:bg-gradient-to-r dark:hover:from-[#0E1A2B] dark:hover:via-[#1C2F45] dark:hover:to-[#0E1A2B]"
                  )}
                  onMouseEnter={() => setHoveredItem(subItem.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex flex-col relative z-10">
                    <span className="font-semibold text-sm">
                      {subItem.title}
                    </span>
                    {subItem.description && (
                      <span className="text-xs text-neutral-500 dark:text-[#AAB2C3] group-hover:text-black dark:group-hover:text-white transition-colors">
                        {subItem.description}
                      </span>
                    )}
                  </div>
                  <span className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent dark:bg-gradient-to-r dark:from-[#0E1A2B] dark:via-[#1C2F45] dark:to-[#0E1A2B]" />
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <nav ref={navRef} className="hidden lg:flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        {navigationConfig.map(renderNavItem)}
      </div>
    </nav>
  );
}
