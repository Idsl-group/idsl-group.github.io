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
    href: "#",
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
    href: "#",
    description: "Research",
    subItems: [
      {
        title: "Research Areas",
        href: "/research-areas",
        description: "Research Areas",
      },
      {
        title: "Team",
        href: "/team",
        description: "Team",
      },
      {
        title: "Resources",
        href: "/resources",
        description: "Resources",
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
    title: "News",
    href: "/news",
    description: "News",
  },
];
