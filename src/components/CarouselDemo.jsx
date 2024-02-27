"use client";
import * as React from "react";
import banner1 from "../../public/assets/banners/banner1.png";
import banner2 from "../../public/assets/banners/banner2.png";
import banner3 from "../../public/assets/banners/banner3.png";
import banner4 from "../../public/assets/banners/banner4.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const imagePaths = [banner1, banner2, banner3, banner4];

export function CarouselDemo() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="w-full max-w-7xl mx-auto"
    >
      <CarouselContent>
        {imagePaths.map((path, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Image
                src={path}
                layout="responsive"
                alt={`heroImage${index + 1}`}
                className="rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
