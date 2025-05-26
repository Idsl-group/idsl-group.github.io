"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Header Image */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900">
        {/* Header Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Academic research and learning environment"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-indigo-900/90 dark:from-black/50 dark:to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 sm:px-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Research Opportunities
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Join our team of researchers and innovators in advancing the field
              of Data Science and AI
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-12"
        >
          {/* Main Opportunity Card */}
          <Card className="bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
                      Research Opportunities
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight">
                      Join Our Research Team
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    IDSL is looking for motivated students (undergrads and
                    grads) interested in working in the domain of Data Science,
                    Machine Learning, Artificial Intelligence, and Safety and
                    Security of Cyber Physical Systems. All admitted students
                    will receive a stipend.
                  </p>
                </div>
              </div>
              <div className="hidden md:block relative min-h-[300px] bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                      <Mail className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold">How to Apply</h3>
                    <p className="text-muted-foreground">
                      Send your application to Dr. Apurva Narayan
                    </p>
                    <Button asChild className="gap-2 mt-4" size="lg">
                      <Link href="mailto:apurva.narayan@uwaterloo.ca">
                        <Mail className="h-4 w-4" />
                        Contact Dr. Narayan
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Requirements Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Documents Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border border-border/50 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "CV",
                      "Research Statement",
                      "Sample Work (if applicable)",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Research Areas Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full border border-border/50 hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    Research Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Machine Learning",
                      "AI Safety",
                      "Data Science",
                      "Cybersecurity",
                      "Software Engineering",
                      "Trustworthy AI",
                    ].map((area, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary/50 text-secondary-foreground"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
