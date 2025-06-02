"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { teamData } from "@/data/data";
import Image from "next/image";

type TeamMember = {
  name: string;
  role?: string;
  expertise?: string[];
  links?: string[];
  position?: string;
  degree?: string;
  year?: number;
  awards?: string[];
  recipient?: string;
  image?: string;
};

export default function TeamPage() {
  const sections = [
    { title: "Faculty & Staff", key: "FacultyAndStaff" as const },
    {
      title: "Postdoctoral Researchers and Research Associates",
      key: "Postdoc" as const,
    },
    { title: "PhD Students", key: "PhD" as const },
    { title: "MASc Students", key: "MASc" as const },
    { title: "MSc Students", key: "MSc" as const },
    { title: "Undergraduate Students", key: "Undergraduate" as const },
    { title: "Alumni", key: "Alumni" as const },
    { title: "Scholarships & Awards", key: "ScholarshipsAndAwards" as const },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getRandomColor = (str: string) => {
    const colors = [
      "bg-blue-500/20 text-blue-700 dark:bg-blue-500/30 dark:text-blue-200",
      "bg-green-500/20 text-green-700 dark:bg-green-500/30 dark:text-green-200",
      "bg-purple-500/20 text-purple-700 dark:bg-purple-500/30 dark:text-purple-200",
      "bg-pink-500/20 text-pink-700 dark:bg-pink-500/30 dark:text-pink-200",
      "bg-amber-500/20 text-amber-700 dark:bg-amber-500/30 dark:text-amber-200",
    ];
    const index =
      str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
      colors.length;
    return colors[index];
  };

  const renderMember = (member: TeamMember, index: number) => {
    const initials = getInitials(member.name);
    const colorClass = getRandomColor(member.name);
    const imageUrl =
      member.image ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="p-4 border rounded-lg hover:bg-accent/50 transition-colors h-full flex flex-col"
      >
        <div className="flex-shrink-0 mb-3">
          <div className="mx-auto w-20 h-20 relative">
            {member.image ? (
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="rounded-full object-cover"
              />
            ) : (
              <div
                className={`w-full h-full rounded-full flex items-center justify-center text-xl font-bold ${colorClass}`}
              >
                {initials}
              </div>
            )}
          </div>
        </div>
        <div className="text-center flex-1 flex flex-col">
          <h3 className="font-semibold text-base">{member.name}</h3>
          {member.role && (
            <p className="text-sm text-muted-foreground">{member.role}</p>
          )}
          {member.position && (
            <p className="text-xs text-muted-foreground">{member.position}</p>
          )}
          {member.degree && (
            <p className="text-xs text-muted-foreground">
              {member.degree} {member.year && `• ${member.year}`}
            </p>
          )}
          {member.expertise && member.expertise.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1 justify-center">
              {member.expertise.slice(0, 3).map((exp, i) => (
                <span
                  key={i}
                  className="text-[10px] px-1.5 py-0.5 bg-secondary rounded-full whitespace-nowrap overflow-hidden overflow-ellipsis"
                >
                  {exp}
                </span>
              ))}
              {member.expertise.length > 3 && (
                <span className="text-[10px] text-muted-foreground">
                  +{member.expertise.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const renderAward = (award: TeamMember, index: number) => {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.05 }}
        className="p-4 border rounded-lg"
      >
        <h3 className="font-semibold">{award.recipient}</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          {award.awards?.map((a, i) => (
            <li key={i} className="text-sm text-muted-foreground">
              {a}
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Header Image */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900">
        {/* Header Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Team collaboration in a modern workspace"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Meet the talented individuals behind IDSL&apos;s research and
              innovation
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-16">
          {sections.map((section) => {
            const members = teamData[section.key] as TeamMember[];
            if (!members || members.length === 0) return null;

            return (
              <section key={section.key} className="space-y-6">
                <div className="border-b pb-2">
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {section.key === "ScholarshipsAndAwards"
                    ? (members as any[]).map((member, i) =>
                        renderAward(member, i)
                      )
                    : members.map((member, i) => renderMember(member, i))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
