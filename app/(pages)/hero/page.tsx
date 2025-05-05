import CarouselClient from "@/components/CarouselClient";
import { BentoDemo } from "@/components/bento-features";

import { BorderBeam } from "@/components/magicui/border-beam";
import ShineBorder from "@/components/magicui/shine-border";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { CarouselContent, CarouselItem } from "@/components/ui/carousel";

import Image from "next/image";
import { carouselData } from "@/constants/data";

import { Technology } from "@/components/hero/technology";
import { DM_Sans } from "next/font/google";
import { AutoplayCarousel } from "@/components/ui/carousel-autoplay";
import { GradientMotionSpan } from "@/components/ui/gradient-motion-span";
import { ClientMotionDiv } from "@/components/hero/HeroMotionClient";

// Best practices for font configuration
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "optional", // Prioritize performance
  preload: true, // Enable preloading for critical fonts
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
});

export default function HeroPage() {
  const backgroundImages = [
    "/backgrounds/bgo-1.jpg",
    "/backgrounds/bgo-2.jpg",
    "/backgrounds/bgo-3.jpg",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full mb-24 px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-36 relative overflow-hidden">
        {/* Content Container */}
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ShineBorder
            className="mx-auto w-fit px-4 py-2 mb-6 bg-muted text-center"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            <GradientMotionSpan className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]">
              Welcome to MKJHA Consulting ✨
            </GradientMotionSpan>
          </ShineBorder>

          <ClientMotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center relative z-20"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              Research-Driven{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
            <div className="rounded-xl px-6 py-4 transition-all duration-300 max-w-4xl mx-auto">
              <p className="text-sm md:text-lg leading-6 md:leading-8 text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
                MKJHA Consulting is a research-driven firm specializing in
                real-world applications of data science, machine learning,
                artificial intelligence, cybersecurity, and transportation. We
                partner with industry and academia to deliver cutting-edge
                analytics, quantum threat detection, and AI solutions with
                deployment-ready use cases that tackle today&apos;s toughest
                challenges.
              </p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "px-6 py-3 text-base font-semibold shadow-sm"
                )}
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "px-6 py-3 text-base font-semibold"
                )}
              >
                Contact Us
              </Link>
            </div>
          </ClientMotionDiv>
        </div>

        {/* Background Image Carousel */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b backdrop-blur-sm from-white/50 to-purple-50/50 dark:from-gray-900/50 dark:to-gray-950/50 z-10"></div>
          <CarouselClient images={backgroundImages} manualNavigation />
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full relative overflow-hidden py-8 md:py-12 bg-gradient-to-r from-gray-50/30 via-white/20 to-gray-50/30 dark:from-gray-900/40 dark:via-gray-900/20 dark:to-gray-900/40">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-dashed border-gray-200 dark:border-gray-700 opacity-40"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 relative z-10">
            <div className="w-4 h-4 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-200 dark:bg-pink-800 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="relative rounded-xl mx-auto flex flex-col items-center text-center lg:max-w-[1000px] overflow-hidden p-6 bg-white/30 dark:bg-gray-900/30 shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            MKJHA Consulting: Solving Real-World Problems with AI
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            MKJHA Consulting is an innovation-driven company specializing in
            cutting-edge AI, machine learning, and data science solutions. Our
            mission is to bridge industry challenges with intelligent
            automation, leveraging advanced deep learning, predictive analytics,
            and AI-powered cybersecurity to transform businesses.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            We focus on AI-driven decision-making, real-time threat detection,
            and scalable machine learning models, empowering organizations to
            unlock the full potential of their data. From adversarial AI
            defenses to personalized recommendation systems, MKJHA Consulting is
            committed to engineering intelligence for a smarter, more secure
            digital future.
          </p>
          <BorderBeam size={250} />
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full relative overflow-hidden py-8 md:py-12 bg-gradient-to-r from-gray-50/30 via-white/20 to-gray-50/30 dark:from-gray-900/40 dark:via-gray-900/20 dark:to-gray-900/40">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-dashed border-gray-200 dark:border-gray-700 opacity-40"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 relative z-10">
            <div className="w-4 h-4 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-200 dark:bg-pink-800 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>

      {/* Technology Section */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="relative rounded-xl mx-auto flex flex-col items-center text-center lg:max-w-[1000px] overflow-hidden p-6 bg-white/30 dark:bg-gray-900/30 shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Our Technology Stack
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            At MKJHA Consulting, we leverage the latest technologies to build
            robust and scalable AI solutions. Our technology stack includes
            state-of-the-art frameworks, tools, and platforms that enable us to
            deliver cutting-edge results.
          </p>
          <div className="mt-6">
            <Technology />
          </div>
          <BorderBeam size={250} />
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full relative overflow-hidden py-8 md:py-12 bg-gradient-to-r from-gray-50/30 via-white/20 to-gray-50/30 dark:from-gray-900/40 dark:via-gray-900/20 dark:to-gray-900/40">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-dashed border-gray-200 dark:border-gray-700 opacity-40"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 relative z-10">
            <div className="w-4 h-4 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-200 dark:bg-pink-800 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>

      {/* Research Environment Section */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-radial from-purple-100/20 to-transparent dark:from-purple-900/10" />
          <div className="absolute h-[40rem] w-[40rem] -top-20 -right-20 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 space-y-16">
          {/* Section header with animation */}
          <div className="space-y-4" data-aos="fade-up">
            <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our Research Environment
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Where innovation meets excellence in AI development
            </p>
          </div>

          {/* Enhanced Carousel */}
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <AutoplayCarousel
              delay={5000}
              pauseOnHover={true}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {carouselData.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]">
                      <Image
                        src={item.imageSrc}
                        alt={item.altText}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        quality={90}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {item.heading}
                        </h3>
                        <p className="text-gray-200 text-sm line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </AutoplayCarousel>

            {/* Carousel indicators */}
            {/* <div className="flex justify-center items-center gap-3 mt-4">
              {carouselData.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === 0
                      ? "bg-purple-600 dark:bg-purple-400 w-4"
                      : "bg-gray-300 dark:bg-gray-700 hover:bg-purple-500 dark:hover:bg-purple-400"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div> */}

            {/* Bottom text with animation */}
            <p
              className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-full mx-auto leading-relaxed mt-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Embrace our innovative remote culture, where collaboration and
              creativity thrive, empowering us to build cutting-edge AI
              solutions from anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full relative overflow-hidden py-8 md:py-12 bg-gradient-to-r from-gray-50/30 via-white/20 to-gray-50/30 dark:from-gray-900/40 dark:via-gray-900/20 dark:to-gray-900/40">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-dashed border-gray-200 dark:border-gray-700 opacity-40"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 relative z-10">
            <div className="w-4 h-4 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-200 dark:bg-pink-800 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <section className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <TestimonialsCarousel testimonials={testimonials} />
      </section> */}

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 space-y-6 bg-slate-50 dark:bg-black"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center ">
          <h2 className="text-center text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            UPCOMING PROJECTS
          </h2>
        </div>
        <BentoDemo />
      </section>

      {/* Decorative Separator */}
      <div className="w-full relative overflow-hidden py-8 md:py-12 bg-gradient-to-r from-gray-50/30 via-white/20 to-gray-50/30 dark:from-gray-900/40 dark:via-gray-900/20 dark:to-gray-900/40">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-dashed border-gray-200 dark:border-gray-700 opacity-40"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 relative z-10">
            <div className="w-4 h-4 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-200 dark:bg-pink-800 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>

      {/* Open Source Section */}
      <section
        id="open-source"
        className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24 relative"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Elevate Cybersecurity with Intelligent AI Solutions.
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Empower your business with next-gen, AI-driven threat detection and
            defense.
          </p>
        </div>
      </section>

      {/* Decorative Separator */}
      <div className="w-full relative overflow-hidden py-8 md:py-12 bg-gradient-to-r from-gray-50/30 via-white/20 to-gray-50/30 dark:from-gray-900/40 dark:via-gray-900/20 dark:to-gray-900/40">
        <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-dashed border-gray-200 dark:border-gray-700 opacity-40"></div>
          </div>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 relative z-10">
            <div className="w-4 h-4 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-200 dark:bg-pink-800 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-blue-200 dark:bg-blue-800 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </>
  );
}
