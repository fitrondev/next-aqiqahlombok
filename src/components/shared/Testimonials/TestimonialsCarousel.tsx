"use client";

import Autoplay from "embla-carousel-autoplay";
import { testimonialItems } from "@/constants/data";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsCarousel = () => {
  return (
    <Carousel>
      <CarouselContent className="gap-8 mx-2">
        {testimonialItems.map((item, index) => (
          <CarouselItem
            key={index}
            className="bg-white sm:basis-1/3 lg:basis-1/4 h-[200px] flex flex-col justify-between p-4 border shadow-sm rounded-lg">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Aqiqah Lombok Review</h3>
              <p className="text-xs">&quot;{item.desc}&quot;</p>
            </div>

            <div className="inline-flex items-center gap-2">
              <div className="relative rounded-full size-10">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold">{item.name}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default TestimonialsCarousel;
