import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import DesktopNav from "@/components/desktop-nav";
import MobileNav from "@/components/mobile-nav";
import { ThemeProvider } from "@/components/theme-provider";

import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SimpleThemeToggle } from "@/components/simple-theme-toggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "IDSL",
  description:
    "Empowering the next generation of Cyber Physical Systems through the power of Data and AI",
  icons: {
    icon: [{ url: "/logo.png" }],
    shortcut: ["/logo.png"],
    apple: ["/logo.png"],
  },
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
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur-sm">
              <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
                <div className="flex items-center space-x-4">
                  <Link href="/" className="flex items-center space-x-2 group">
                    <span className="hidden lg:block text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                      INTELLIGENT DATA SCIENCE LAB
                    </span>
                  </Link>
                  <nav className="hidden lg:flex items-center space-x-4">
                    <DesktopNav />
                  </nav>
                  <div className="lg:hidden">
                    <MobileNav />
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <SimpleThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
