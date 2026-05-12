import React from "react";

import Link from "next/link";

import SectionLayout from "@/components/ui/custom/section-layout";

import CustomButton from "@/components/ui/custom/CustomButton";

export default function CTAOne({
  title = "Ready to Bring Peace, Prosperity & Positive Energy to Your Space?",

  description = "Get professional Vastu consultation for your home, office, plot or commercial property.",

  buttonText = "Book Vastu Consultation",

  buttonLink = "/contact",

  buttonIcon,

  variant = "secondary",

  bgClass = "bg-primary",

  className = "",
}) {
  return (
    <SectionLayout
      bgColor={bgClass}
      className={`
        relative

        overflow-hidden

        py-16 md:py-12

        ${className}
      `}
    >





      {/* CONTENT */}
      <div
        className="
          relative z-10

          flex flex-col lg:flex-row

          items-center
          justify-between

          gap-10
        "
      >
        {/* LEFT */}
        <div
          className="
            text-center lg:text-left

          "
        >


          {/* Title */}
          <h3
            className="
              text-white

              text-3xl md:text-4xl

              font-sans

              leading-tight
            "
          >
            {title}
          </h3>


        </div>

        {/* RIGHT BUTTON */}
        <div className="flex-shrink-0">
          <Link
            href={buttonLink}
            className="group"
          >
            <CustomButton
              variant={variant}

              icon={buttonIcon}

              iconSide="right"

              className="
        

                pointer-events-none

                whitespace-nowrap
              "
            >
              {buttonText}
            </CustomButton>
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}