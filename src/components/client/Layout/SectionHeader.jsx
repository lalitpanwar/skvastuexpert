"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

 const SectionHeader = ({
  title,
  subtitle,
  variant = "left",
  seeMoreLink,
  seeMoreText = "See More",
  light = false,
}) => {
  const isCenter = variant === "center";

  // Center Variant (Jisme Heading aur Para dono center aligned honge)
  if (isCenter) {
    return ( 
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <h2 className={cn(
          "text-2xl md:text-5xl font-sans  mb-4 tracking-tight",
          light ? "text-white" : "text-black dark:text-white"
        )}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn(
            "text-sm md:text-xl",
            light ? "text-white/80" : "text-slate-500"
          )}>
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  // Left Alignment: Heading+Para (Left) and See More (Bottom-Right)
  return (
    <div className="mb-10 md:mb-16 flex justify-between items-end gap-4 w-full">
      
      {/* Left Group: Title + Subtitle (Underline Hata di gayi hai) */}
      <div className="flex-1 max-w-[70%] md:max-w-2xl">
        <h2 className={cn(
          "text-2xl md:text-5xl font-sans  tracking-tight leading-tight mb-3 md:mb-2",
           light ? "text-white" : "text-black dark:text-white"
        )}>
          {title}
        </h2>
        
        {subtitle && (
          <p className={cn(
            "text-sm md:text-lg", 
            light ? "text-white/80" : "text-slate-500"
          )}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Group: See More - Aligned to Bottom */}
      {seeMoreLink && (
        <div className="flex flex-col justify-end min-w-fit">
          <Link
            href={seeMoreLink}
            className="flex items-center gap-1 text-primary hover:text-secondary  text-xs md:text-base hover:opacity-80 transition-all whitespace-nowrap pb-1"
          >
            {seeMoreText}
            <ArrowRight className="h-3 w-3 md:h-5 md:w-5" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;