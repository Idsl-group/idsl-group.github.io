"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchORCIDPublications, type Publication } from "@/lib/orcid";
import Image from "next/image";
import { Search, Building2, FileText, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GradientMotionSpan } from "@/components/ui/gradient-motion-span";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PublicationsPage() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "journal" | "conference"
  >("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPublications = async () => {
      try {
        setLoading(true);
        const orcidPublications = await fetchORCIDPublications();
        setPublications(orcidPublications);
      } catch (error) {
        console.error("Failed to load publications:", error);
        setPublications([]);
      } finally {
        setLoading(false);
      }
    };

    loadPublications();
  }, []);

  const filteredPublications = publications.filter((pub) => {
    const matchesFilter =
      activeFilter === "all" || pub.type.toLowerCase() === activeFilter;
    const matchesSearch = pub.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const publicationsByYear = filteredPublications.reduce<
    Record<number, Publication[]>
  >((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(publicationsByYear).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 border-4 border-blue-200 dark:border-blue-800 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              Loading publications...
            </p>
          </motion.div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <Image
                src="https://images.pexels.com/photos/5904934/pexels-photo-5904934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Academic research papers and publications"
                fill
                className="object-cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-indigo-900/85 to-purple-900/85 dark:from-gray-900/95 dark:to-gray-900/95" />
            </div>

            <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
                >
                  Research
                  <GradientMotionSpan> Publications</GradientMotionSpan>
                </motion.h1>

                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg md:text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto"
                >
                  Explore our latest research contributions in artificial
                  intelligence, machine learning, and data science
                </motion.p>

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center gap-6 text-sm text-blue-100"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span>{publications.length} Publications</span>
                  </div>
                  <div className="w-1 h-4 bg-blue-300/50"></div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>
                      {sortedYears.length > 0
                        ? `${sortedYears[0]} - ${sortedYears[sortedYears.length - 1]}`
                        : "Recent"}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="sticky top-16 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <div className="container px-4 sm:px-6 lg:px-8 py-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col lg:flex-row gap-4 items-center justify-between"
              >
                <div className="relative w-full lg:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search publications..."
                    className="pl-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex gap-2 w-full lg:w-auto">
                  <Button
                    onClick={() => setActiveFilter("all")}
                    variant={activeFilter === "all" ? "default" : "outline"}
                    className="flex-1 lg:flex-none"
                  >
                    All
                  </Button>
                  <Button
                    onClick={() => setActiveFilter("journal")}
                    variant={activeFilter === "journal" ? "default" : "outline"}
                    className="flex-1 lg:flex-none"
                  >
                    Journals
                  </Button>
                  <Button
                    onClick={() => setActiveFilter("conference")}
                    variant={activeFilter === "conference" ? "default" : "outline"}
                    className="flex-1 lg:flex-none"
                  >
                    Conferences
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Publications List */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
            <div className="container px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                {sortedYears.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <BookOpen className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      No publications found
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Try adjusting your search or filter criteria
                    </p>
                  </motion.div>
                ) : (
                  <div className="space-y-16">
                    {sortedYears.map((year, yearIndex) => (
                      <motion.div
                        key={year}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: yearIndex * 0.1 }}
                      >
                        <div className="flex items-center gap-4 mb-8">
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold text-lg shadow-lg">
                            {year.slice(-2)}
                          </div>
                          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {year}
                          </h2>
                          <Badge variant="secondary" className="ml-auto">
                            {publicationsByYear[parseInt(year)].length} publications
                          </Badge>
                        </div>

                        <div className="grid gap-4">
                          {publicationsByYear[parseInt(year)].map((pub, pubIndex) => (
                            <motion.div
                              key={pub.id}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: yearIndex * 0.1 + pubIndex * 0.05 }}
                            >
                              <Card className="group hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700">
                                <CardContent className="p-6">
                                  <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                      </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {pub.title}
                                      </h3>

                                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                        {pub.venue && (
                                          <div className="flex items-center gap-1.5">
                                            <Building2 className="w-4 h-4" />
                                            <span>{pub.venue}</span>
                                          </div>
                                        )}
                                        {pub.pages && (
                                          <div className="flex items-center gap-1.5">
                                            <FileText className="w-4 h-4" />
                                            <span>pp. {pub.pages}</span>
                                          </div>
                                        )}
                                        <div className="flex items-center gap-1.5">
                                          <Calendar className="w-4 h-4" />
                                          <span>{pub.year}</span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="flex-shrink-0">
                                      <Badge
                                        variant={
                                          pub.type === "Journal"
                                            ? "default"
                                            : "secondary"
                                        }
                                        className={
                                          pub.type === "Journal"
                                            ? "bg-green-500 hover:bg-green-600"
                                            : "bg-purple-500 hover:bg-purple-600"
                                        }
                                      >
                                        {pub.type}
                                      </Badge>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
