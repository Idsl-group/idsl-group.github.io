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
    description: "Home page of IDSL",
  },
  {
    title: "About",
    href: "/about-dr-narayan",
    description: "About IDSL",
    subItems: [
      {
        title: "About Dr. Narayan",
        href: "/about-dr-narayan",
        description: "About Dr. Narayan",
      },
    ],
  },
  {
    title: "Research",
    href: "/research-areas",
    description: "Research",
    subItems: [
      {
        title: "Research Areas",
        href: "/research-areas",
        description: "Research Areas",
      },
      {
        title: "IDSL Research Team",
        href: "/team",
        description: "IDSL Research Team",
      },
    ],
  },
  {
    title: "Publications",
    href: "/publications",
    description: "Publications",
  },
  {
    title: "Opportunities",
    href: "/opportunities",
    description: "Opportunities",
  },
  {
    title: "Resources",
    href: "/resources",
    description: "Resources",
  },
  {
    title: "News",
    href: "/news",
    description: "News",
  },
];
