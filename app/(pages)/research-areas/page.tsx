"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function ResearchAreasPage({}: Props) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900">
        {/* Header Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3861967/pexels-photo-3861967.jpeg"
            alt="Research and data science visualization"
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
              Research Areas
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Exploring the frontiers of intelligent systems and data science
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Research Areas</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The IDSL Lab conducts research at the intersection of software
            engineering, data analytics, machine learning, and safety and
            security of cyber-physical systems.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Applied Research</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Industrial Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We develop novel algorithms and computational tools to solve
                  industrial problems in safety, security, and robustness of
                  automation processes.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Theoretical Foundations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We explore fundamental problems in AI and machine learning for
                  theoretical insights that drive innovation in our applied
                  work.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Research Topics</h2>
          <p className="mb-6">
            We are interested in the development of smart plants and intelligent
            processes, which can be distinguished from traditional industrial
            plants by:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Robustness certification of AI models",
              "Data mining for complex cyber physical systems",
              "Automatic detection and diagnosis of faults",
              "Predictive analytics",
              "Anomaly detection",
              "Fault detection and diagnosis",
              "Specification mining",
              "Robustness of AI",
              "AI in Healthcare",
              "AI in Manufacturing",
            ].map((topic, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
              >
                {topic}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Domains & Applications
          </h2>
          <p className="mb-6">
            A big subset of our research projects have an applied flavor with
            useful and immediate applications in industry. We often collaborate
            with industry partners and other academic researchers for
            problem-solving in specific domains.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Industry Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Scotia Bank",
              "Troj AI Inc.",
              "Loblaw Inc.",
              "General Motors",
              "Microsoft",
              "Palitronica",
            ].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 border rounded-lg hover:bg-muted/50 transition-colors h-24"
              >
                <span className="text-center">{partner}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
