export interface NavItem {
  title: string;
  href: string;
  description?: string;
  subItems?: NavItem[];
}

export const navigationConfig: NavItem[] = [
  {
    title: "Home",
    href: "/",
    description: "Home page of Pranav Jha",
  },
  {
    title: "About Me",
    href: "/about-me",
    description: "About Me",
  },
  {
    title: "Experience",
    href: "/experience",
    description: "Experience",
  },
  {
    title: "Projects",
    href: "#",
    description: "Projects",
    subItems: [
      {
        title: "Cybersecurity",
        href: "/coming-soon",
        description:
          "Develop transformative AI strategies tailored to your unique business challenges.",
      },
      {
        title: "Data Science",
        href: "/coming-soon",
        description:
          "Design and implement advanced machine learning models for predictive insights.",
      },
      {
        title: "Quantum Computing",
        href: "/coming-soon",
        description:
          "Comprehensive guidance for doctoral research, methodology, and publication.",
      },
    ],
  },
  {
    title: "Publications",
    href: "/publications",
    description: "Cutting-edge research in AI, ML, and cybersecurity",
  },
  {
    title: "Latest Insights",
    href: "/insights",
    description: "Explore our latest thoughts on innovation and data science",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
