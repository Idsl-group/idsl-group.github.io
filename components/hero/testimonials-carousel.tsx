// components/hero/testimonials-carousel.tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import SocialBadge from "../social-badge";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
  social: {
    platform: "linkedin" | "twitter" | "github";
    url: string;
  };
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialsCarousel = ({
  testimonials,
}: TestimonialsCarouselProps) => (
  <Carousel opts={{ loop: true }} className="w-full max-w-4xl mx-auto">
    <CarouselContent>
      {testimonials.map((testimonial, index) => (
        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
          <TestimonialCard testimonial={testimonial} />
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="-left-8 dark:text-white dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-700/50 backdrop-blur-sm transition-colors" />
    <CarouselNext className="-right-8 dark:text-white dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-700/50 backdrop-blur-sm transition-colors" />
  </Carousel>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 h-full border border-gray-100 dark:border-gray-800">
    <div className="flex items-center gap-4 mb-6">
      <AvatarWithBadge testimonial={testimonial} />
      <div>
        <p className="font-semibold text-gray-900 dark:text-white">
          {testimonial.name}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {testimonial.role}
        </p>
      </div>
    </div>
    <blockquote className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
      &ldquo;{testimonial.text}&rdquo;
    </blockquote>
  </div>
);

const AvatarWithBadge = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="relative shrink-0">
    <div className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-0.5">
      <Image
        src={testimonial.avatar}
        alt={`${testimonial.name} portrait`}
        width={56}
        height={56}
        className="rounded-full object-contain border-2 border-white dark:border-gray-900"
      />
    </div>
    <SocialBadge platform={testimonial.social.platform} />
  </div>
);
