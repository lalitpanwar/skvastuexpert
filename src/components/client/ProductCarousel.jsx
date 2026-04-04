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
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CustomButton from "../ui/custom/CustomButton";

export default function ProductCarousel({
  items = [],
  title = "Our Services",
  subtitle =  "Vedic rituals performed with devotion for your prosperity and peace.",
  seeMoreLink = "/services",
  seeMoreText="View All Pujas",
  bgColor = "bg-white",
  desktopCols = 4,
  mobileCols = 2,
  className = '',
  buttonText ="Book Now",
  variant = "outline"
}) {
  // 2. Column logic for Tailwind
  const desktopBasis = {
    3: "lg:basis-1/3",
    4: "lg:basis-1/4",
  };

  const mobileBasis = {
    1: "basis-full",
    2: "basis-1/2",
  };
  console.log("items", items)
  return (
    <>
<SectionLayout
       title={title}
        subtitle={subtitle}
        seeMoreLink={seeMoreLink}
        seeMoreText= {seeMoreText}
        bgColor= {bgColor} 
        className = {className}
        >
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4">

            {items.map((item, i) => (
              <CarouselItem
                key={i}
                className={`pl-4 ${mobileBasis[mobileCols]} ${desktopBasis[desktopCols]}`}
              >
                <Link href={`/puja/${item.slug}`} className="group block">
                  <div className="group relative aspect-[3/4.2] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                    
                    {/* Dynamic Image from servicesData */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url("/images/puja/${item.image}.jpg")` }}
                    ></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 from-10% via-black/20 via-45% to-transparent to-70%"></div>

                    {/* Price Tag */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-black  font-medium px-3 py-1 rounded-full text-xs md:text-sm  flex items-center shadow-md">
                      <IndianRupee size={14} /> {item.price}
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-white text-sm md:text-xl font-normal font-sans mb-2">
                        {item.title}
                      </h3>
                      
                      {/* Short Description (Shows only on Desktop) */}
                      <p className="hidden md:block text-white/80 text-xs md:text-sm line-clamp-2 min-h-[32px] md:min-h-[40px] mb-6 font-light">
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

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-12 md:block">
            <CarouselPrevious className="static md:absolute -left-12 border-secondary text-secondary hover:text-white hover:bg-secondary-hover" />
            <CarouselNext className="static md:absolute -right-12 border-secondary text-secondary hover:text-white  hover:bg-secondary-hover" />
          </div>
        </Carousel>
</SectionLayout>
</>
  );
}
