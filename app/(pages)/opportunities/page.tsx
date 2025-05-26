"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Join Our Research Team</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed">
                IDSL is looking for motivated students (undergrads and grads)
                interested in working in the domain of Data Science, Machine
                Learning, Artificial Intelligence, and Safety and Security of
                Cyber Physical Systems. All admitted students will receive a
                stipend.
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">How to Apply</h3>
                <p className="mb-4">
                  If you are interested in pursuing research or graduate studies
                  in these lines of work, please email
                  <a
                    href="mailto:apurva.narayan@uwaterloo.ca"
                    className="text-primary hover:underline font-medium mx-1"
                  >
                    Dr. Apurva Narayan
                  </a>
                  with the following documents:
                </p>

                <ul className="space-y-3 list-disc pl-5">
                  <li>CV</li>
                  <li>Research Statement</li>
                  <li>Sample work (if applicable)</li>
                </ul>

                <div className="mt-8 flex justify-center">
                  <Button asChild className="gap-2" size="lg">
                    <Link href="mailto:apurva.narayan@uwaterloo.ca">
                      <Mail className="h-4 w-4" />
                      Contact Dr. Narayan
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
