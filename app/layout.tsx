import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Pranav Jha - AI, Cybersecurity & Data Science Solutions",
  description:
    "Redefining Security and Innovation with AI-Driven Intelligence. Cutting-edge solutions in data science, machine learning, cybersecurity, and advanced analytics.",
  icons: {
    icon: [{ url: "/profile.jpg" }],
    shortcut: ["/profile.jpg"],
    apple: ["/profile.jpg"],
  },
  openGraph: {
    title: "Pranav Jha - AI Solutions Architect",
    description:
      "Transforming challenges into opportunities through advanced AI and cybersecurity strategies.",
    images: [{ url: "/profile.jpg" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative flex min-h-screen w-full flex-col justify-center scroll-smooth bg-background font-sans antialiased"
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
