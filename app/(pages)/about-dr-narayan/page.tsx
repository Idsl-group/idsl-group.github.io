"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  Users,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamData } from "@/data/data";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutDrNarayan() {
  const { education, experience } = teamData;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/profile-1.png"
            alt="Dr. Apurva Narayan"
            fill
            className="object-cover"
            priority
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAhEAABAwQCAwEAAAAAAAAAAAABAgMEAAURIRIxE0Fhcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAwDAQACEQMRAD8A0lq3RZ8Rl2bHbfcKBlSxknbYJ3+1Kp7Vb4i4rK1R0lXGjYkkj8B7pSq1iZP/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 dark:from-gray-900/90 dark:to-gray-900/90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Dr. Apurva Narayan
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto"
            >
              Leading Research in Intelligent Data Science and Machine Learning
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                <a href="#contact">Contact Me</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <a href="#research">View Research</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          {/* About Section */}
          <section className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-8 p-8">
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    About Me
                  </h2>
                  <div className="prose dark:prose-invert max-w-none">
                    <p className="text-lg mb-4">
                      I am an Assistant Professor in the Department of Computer
                      Science at the University of British Columbia (UBC) and
                      hold an Adjunct Assistant Professor position in the
                      Department of Systems Design Engineering at the University
                      of Waterloo.
                    </p>
                    <p className="mb-4">
                      My research focuses on developing novel machine learning
                      algorithms and data science techniques to solve complex
                      real-world problems. I am particularly interested in the
                      intersection of artificial intelligence, optimization, and
                      their applications in healthcare, climate science, and
                      beyond.
                    </p>
                    <p>
                      With a passion for both teaching and research, I strive to
                      bridge the gap between theoretical advancements and
                      practical applications, mentoring the next generation of
                      data scientists and AI researchers.
                    </p>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/profile-1.png"
                    alt="Dr. Apurva Narayan"
                    fill
                    className="rounded-xl object-cover shadow-lg"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </section>

          {/* Education & Experience */}
          <section className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {edu.degree} in {edu.fieldOfStudy}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400">
                        {edu.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {edu.startYear} - {edu.endYear}
                      </p>
                      {edu.activitiesAndSocieties && (
                        <div className="mt-2">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Activities: {edu.activitiesAndSocieties.join(", ")}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                  Experience
                </h3>
                <div className="space-y-6">
                  {experience
                    .filter(
                      (exp) =>
                        exp.title.includes("Professor") ||
                        exp.title.includes("Postdoctoral")
                    )
                    .map((exp, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400">
                          {exp.organization}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {exp.startDate} - {exp.endDate} • {exp.duration}
                        </p>
                        {exp.location && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {exp.location}
                          </p>
                        )}
                        {exp.description && (
                          <p className="mt-2 text-gray-600 dark:text-gray-300">
                            {exp.description}
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          </section>

          {/* Research Section */}
          <section id="research" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Research Focus
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ResearchCard
                  icon={<BookOpen className="w-6 h-6" />}
                  title="Machine Learning"
                  description="Developing novel algorithms for predictive modeling and pattern recognition."
                />
                <ResearchCard
                  icon={<Users className="w-6 h-6" />}
                  title="AI for Social Good"
                  description="Applying AI to solve pressing societal challenges in healthcare and education."
                />
                <ResearchCard
                  icon={<FileText className="w-6 h-6" />}
                  title="Data Science"
                  description="Extracting insights from complex, high-dimensional datasets."
                />
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Get In Touch
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <ContactCard
                    icon={<Mail className="w-6 h-6" />}
                    title="Email"
                    items={[
                      "apurva.narayan@ubc.ca",
                      "apurva.narayan@uwaterloo.ca",
                    ]}
                    link="mailto:apurva.narayan@ubc.ca"
                  />
                  <ContactCard
                    icon={<Phone className="w-6 h-6" />}
                    title="Phone"
                    items={["+1 250.807.8272"]}
                    link="tel:+12508078272"
                  />
                  <ContactCard
                    icon={<MapPin className="w-6 h-6" />}
                    title="Office"
                    items={[
                      "MC - 368",
                      "University of Waterloo",
                      "Waterloo, ON",
                    ]}
                  />
                  <ContactCard
                    icon={<Linkedin className="w-6 h-6" />}
                    title="Connect"
                    items={["LinkedIn Profile"]}
                    link="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ResearchCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
    >
      <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}

function ContactCard({
  icon,
  title,
  items,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  link?: string;
}) {
  const content = (
    <div className="bg-white/10 hover:bg-white/20 transition-colors p-6 rounded-xl h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-white/20 rounded-lg mr-3">{icon}</div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-1">
        {items.map((item, i) => (
          <p key={i} className="text-blue-100">
            {item}
          </p>
        ))}
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
