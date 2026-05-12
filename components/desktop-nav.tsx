"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navigationConfig, NavItem } from "@/lib/navigation";

export default function DesktopNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween" as const, duration: 0.3 },
    },
  };

  return (
    <motion.nav
      ref={navRef}
      initial="hidden"
      animate="visible"
      className="flex space-x-6"
    >
      {navigationConfig.map((item) => (
        <motion.div
          key={item.href}
          variants={navItemVariants}
          className="relative group"
          onMouseEnter={() => item.subItems && setOpenMenu(item.title)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <Link
            href={item.href}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          >
            {item.title}
            {item.subItems && (
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openMenu === item.title ? "rotate-180" : ""
                }`}
              />
            )}
          </Link>

          <AnimatePresence>
            {item.subItems && openMenu === item.title && (
              <DropdownMenu
                items={item.subItems}
                onMouseEnter={() => setOpenMenu(item.title)}
                onMouseLeave={() => setOpenMenu(null)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.nav>
  );
}

function DropdownMenu({
  items,
  onMouseEnter,
  onMouseLeave,
}: {
  items: NavItem["subItems"];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-lg z-50 overflow-hidden"
    >
      {items?.map((subItem) => (
        <Link
          key={subItem.href}
          href={subItem.href}
          className="block px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <div className="flex flex-col">
            <span className="font-medium text-sm text-neutral-800 dark:text-neutral-100">
              {subItem.title}
            </span>
            {subItem.description && (
              <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                {subItem.description}
              </span>
            )}
          </div>
        </Link>
      ))}
    </motion.div>
  );
}
