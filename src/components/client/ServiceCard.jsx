import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SectionLayout from "../ui/custom/section-layout";
import CustomButton from "../ui/custom/CustomButton";

export default function ServiceGrid({
  items = [],
  title = "Our Vastu Services",
  subtitle = "Professional Vastu consultation for homes, offices & commercial spaces.",
  seeMoreLink = "/services",
  seeMoreText = "View All Services",
  bgColor = "",
  className = "",
  buttonText = "Get Consultation",
  variant = "outline",
}) {
  return (
    <SectionLayout
      title={title}
      subtitle={subtitle}
      seeMoreLink={seeMoreLink}
      seeMoreText={seeMoreText}
      bgColor={bgColor}
      className={className}
    >
      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >
        {items.map((item, i) => {
          const Icon = item.Icon;

          return (
            <Link key={i} href={item.whatsappLink} className="group block">
              <div
                className="
                  group

                  bg-white

                  rounded-xl

                  overflow-hidden

                  shadow-md
                  hover:shadow-2xl

                  transition-all duration-500

                  border border-slate-100

                  hover:-translate-y-2

                  h-full
                "
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="
                      absolute inset-0
                      bg-cover bg-center

                      transition-transform duration-700
                      group-hover:scale-110
                    "
                    style={{
                      backgroundImage: `url("${item.image}")`,
                    }}
                  />

                  {/* Overlay */}
                  <div
                    className="
                      absolute inset-0

                      bg-gradient-to-t
                      from-black/50
                      via-black/10
                      to-transparent
                    "
                  />

                  {/* ICON */}
                  <div
                    className="
                      absolute top-4 left-4

                      w-12 h-12

                      rounded-2xl

                      bg-white/90
                      backdrop-blur-sm

                      flex items-center justify-center

                      shadow-lg
                    "
                  >
                    {Icon && <Icon size={22} className="text-primary" />}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 md:p-6 flex flex-col flex-grow bg-white">
                  <h3 className="text-sm md:text-xl font-sans  mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p
                    className="
                      text-slate-500
                      text-sm
                      leading-relaxed

                      min-h-[65px]
                    "
                  >
                    {item.description}
                  </p>

                  {/* BUTTON */}
                  <div className="mt-6">
                    <CustomButton
                      variant={variant}
                      className="w-full pointer-events-none"
                      icon={ArrowRight}
                      iconSide="right"
                      
                    >
                      {item.cta || buttonText}
                    </CustomButton>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </SectionLayout>
  );
}
