"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, IndianRupee } from "lucide-react";
import Link from "next/link";
import SectionLayout from "../ui/custom/section-layout";
import CustomButton from "../ui/custom/CustomButton";
import { cn } from "@/lib/utils";


export default function ProductCard({
  items = [],
  title = "Our Services",
  subtitle = "Vedic rituals performed with devotion for your prosperity and peace.",
  seeMoreLink = "/services",
  seeMoreText = "View All Pujas",
  bgColor = "", // Thoda off-white background taaki white cards pop karein
  desktopCols = 4,
  mobileCols = 2,
  className = '',
  buttonText = "Book a Pandit",
  variant= "primary"
}) {
  const desktopBasis = {
    3: "lg:basis-1/3",
    4: "lg:basis-1/4",
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
    >
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-4">
          {items.map((item, i) => (
            <CarouselItem
              key={i}
              className={cn("pl-4", mobileBasis[mobileCols], desktopBasis[desktopCols])}
            >
              <Link href={`/puja/${item.slug}`} className="group      block">
                <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 mb-2">
                  
                  {/* 1. Image Top Section */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url("/images/puja/${item.image}.jpg")` }}
                    ></div>
                    
                    {/* Price Tag (Over Image) */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-black  font-medium px-3 py-1 rounded-full text-xs md:text-sm  flex items-center shadow-md">
                      <IndianRupee size={12} className="mr-1" /> {item.price}
                    </div>
                  </div>

                  {/* 2. Content Bottom Section (White Background) */}
                  <div className="p-4 md:p-6 flex flex-col flex-grow bg-white">
                    <h3 className="text-sm md:text-xl font-sans  mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-500 text-xs md:text-sm line-clamp-2 mb-6 min-h-[32px] md:min-h-[40px] font-light">
                      {item.description}
                    </p>

<CustomButton variant={variant} className="w-full pointer-events-none"  icon={ArrowRight} iconSide="right">
{buttonText}
</CustomButton>

                    
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-10 md:block">
          <CarouselPrevious className="static md:absolute -left-12 border-secondary text-secondary hover:text-white hover:bg-secondary-hover" />
          <CarouselNext className="static md:absolute -right-12 border-secondary text-secondary hover:text-white  hover:bg-secondary-hover" />
        </div>
      </Carousel>
    </SectionLayout>
  );
}