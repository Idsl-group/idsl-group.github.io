import { cn } from "@/lib/utils";
import type { Metadata, Viewport } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { publicFile, siteMetadataBase } from "@/lib/site";

const logoPath = publicFile("/logo.png");

export const metadata: Metadata = {
  metadataBase: siteMetadataBase(),
  title: "Intelligent Data Science Lab",
  description:
    "Empowering the next generation of Cyber Physical Systems through the power of Data and AI",
  icons: {
    icon: [{ url: logoPath }],
    shortcut: [logoPath],
    apple: [logoPath],
  },
  openGraph: {
    title: "Intelligent Data Science Lab",
    description:
      "Empowering the next generation of Cyber Physical Systems through the power of Data and AI",
    images: [{ url: logoPath }],
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
          "relative flex min-h-screen w-full flex-col justify-center scroll-smooth bg-background font-sans antialiased",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
