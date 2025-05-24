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
    { title: "Postdoctoral Researchers", key: "Postdoc" as const },
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
        className="p-4 border rounded-lg hover:bg-accent/50 transition-colors flex flex-col items-center text-center"
      >
        <div className="relative w-24 h-24 mb-4">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <div
              className={`w-full h-full rounded-full flex items-center justify-center text-2xl font-bold ${colorClass}`}
            >
              {initials}
            </div>
          )}
        </div>
        <h3 className="font-semibold text-lg">{member.name}</h3>
        {member.role && <p className="text-muted-foreground">{member.role}</p>}
        {member.position && (
          <p className="text-sm text-muted-foreground">{member.position}</p>
        )}
        {member.degree && (
          <p className="text-sm text-muted-foreground">
            {member.degree} {member.year && `• ${member.year}`}
          </p>
        )}
        {member.expertise && member.expertise.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2 justify-center">
            {member.expertise.map((exp, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-secondary rounded-full"
              >
                {exp}
              </span>
            ))}
          </div>
        )}
        {member.links && member.links.length > 0 && (
          <div className="mt-2 space-x-2">
            {member.links.map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-xs text-primary hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        )}
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
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Our Team</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Meet the talented individuals behind IDSL&apos;s research and
          innovation
        </p>
      </motion.div>

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
  );
}
