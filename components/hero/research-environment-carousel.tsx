import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ResearchEnvironmentCarouselProps {
  data: {
    heading: string;
    description: string;
    imageSrc: string;
    altText: string;
  }[];
}

export const ResearchEnvironmentCarousel = ({
  data,
}: ResearchEnvironmentCarouselProps) => (
  <Carousel opts={{ loop: true }} className="w-full max-w-6xl mx-auto">
    <CarouselContent>
      {data.map((item, index) => (
        <CarouselItem key={index}>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src={item.imageSrc}
              alt={item.altText}
              fill
              className="object-cover"
              quality={100}
              sizes="(max-width: 768px) 100vw, 75vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white">
                {item.heading}
              </h3>
              <p className="text-gray-200 mt-2">{item.description}</p>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="-left-8 dark:text-white dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-700/50 backdrop-blur-sm transition-colors" />
    <CarouselNext className="-right-8 dark:text-white dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-700/50 backdrop-blur-sm transition-colors" />
  </Carousel>
);
