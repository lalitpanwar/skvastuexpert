// components/common/TestimonialSection.jsx

"use client";

import React from "react";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SectionLayout from "@/components/client/Layout/SectionLayout";

import { cn } from "@/lib/utils";

export default function TestimonialSection({
  items = [],

  title = "What Our Clients Say",

  subtitle = "Real experiences from people who transformed their spaces with Vastu consultation.",

  seeMoreLink = "",

  seeMoreText = "",

  bgColor = "bg-white",

  desktopCols = 3,

  mobileCols = 1,

  className = "",
}) {
  const desktopBasis = {
    2: "lg:basis-1/2",
    3: "lg:basis-1/3",
  };

  const mobileBasis = {
    1: "basis-full",
    2: "basis-1/2",
  };

  return (
    <SectionLayout
      title={title}
      subtitle={subtitle}
      seeMoreLink={seeMoreLink}
      seeMoreText={seeMoreText}
      bgColor={bgColor}
      className={className}
      variant="center"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full overflow-visible"
      >
        <CarouselContent className="-ml-4 py-4">
          {items.map((item, i) => (
            <CarouselItem
              key={i}
              className={cn(
                "pl-6 flex",
                mobileBasis[mobileCols],
                desktopBasis[desktopCols]
              )}
            >
              <div
                className="
                  group

                  flex flex-col

                  h-full
                  w-full

                  bg-amber-50

                  rounded-xl md:rounded-2xl

                  p-5 md:p-7

                  shadow-lg
                  hover:shadow-xl

                  border border-slate-100

                  transition-all duration-500

                  hover:-translate-y-2
                "
              >
                {/* TOP USER INFO */}
                <div
                  className="
                    flex flex-col

                    items-center

                    text-center

                    mb-8
                  "
                >
                  {/* IMAGE */}
                  <div className="relative mb-5">
                    
                    {/* Glow */}
                    <div
                      className="
                        absolute inset-0

                        rounded-full

                        bg-primary/20

                        blur-2xl

                        scale-110
                      "
                    />

                    <div
                      className="
                        relative

                        w-28 h-28

                        md:w-32 md:h-32
                      "
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="
                          rounded-full

                          object-cover

                          border-4 border-white

                          shadow-2xl
                        "
                      />
                    </div>
                  </div>

                  {/* NAME */}
                  <h4
                    className="
                      text-slate-900

                      font-sans

                      text-xl md:text-2xl

                      leading-none

                      mb-2
                    "
                  >
                    {item.name}
                  </h4>

                  {/* PROFESSION */}
                  <p
                    className="
                      text-primary/70

                      text-sm md:text-sm

                      font-normal
                    "
                  >
                    {item.profession}
                  </p>
                </div>

                {/* REVIEW */}
                <p
                  className="
                    text-slate-600

                    text-sm md:text-base

                    leading-relaxed

                    text-center

                    flex-grow
                  "
                >
                  "{item.review}"
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-4 mt-10 md:block">
          
          <CarouselPrevious
            className="
              static md:absolute

              -left-12

              border-secondary

              text-secondary

              hover:text-white

              hover:bg-secondary-hover
            "
          />

          <CarouselNext
            className="
              static md:absolute

              -right-12

              border-secondary

              text-secondary

              hover:text-white

              hover:bg-secondary-hover
            "
          />
        </div>
      </Carousel>
    </SectionLayout>
  );
}