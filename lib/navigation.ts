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
    href: "/about",
    description: "About Dr. Narayan",
  },
  {
    title: "Research",
    href: "/research",
    description: "Research",
  },
  {
    title: "Publications",
    href: "#",
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
    title: "Contact",
    href: "/contact",
    description: "Contact",
  },
];
