import Link from "next/link";

import Container from "./layout/Container";

import CustomButton from "@/components/client/Layout/CustomButton";
import SectionLayout from "../ui/custom/section-layout";

export default function CtaTwo({
  title = "Bring Peace, Prosperity & Positive Energy to Your Space",

  description = "Get professional Vastu consultation for your home, office, plot or commercial property with practical remedies and accurate guidance.",

  primaryBtnText = "Get Consultation",

  primaryBtnLink = "/contact",

  primaryBtnIcon,

  secondaryBtnText = "Call Now",

  secondaryBtnLink = "tel:+919876543210",

  secondaryBtnIcon,

  variant = "yellow",

  secondaryVariant = "secondary",

  className = "",

  // BACKGROUND CUSTOMIZATION
  bgClass = "bg-secondary/10",

  glowClass = "bg-secondary/20",

  secondGlowClass = "bg-primary/10",

  patternColor = "#B48B3D",
}) {
  return (
<SectionLayout>
        <div
          className={`
            relative

            overflow-hidden

            rounded-[40px]

            p-12 lg:p-20

            border border-secondary/10

            ${bgClass}
          `}
        >
          {/* Decorative Pattern */}
          <div
            className="
              absolute top-0 left-0
              w-full h-full
              opacity-[0.12]
              pointer-events-none
            "
            style={{
              backgroundImage: `radial-gradient(circle, ${patternColor} 1.5px, transparent 1.5px)`,

              backgroundSize: "24px 24px",
            }}
          />

          {/* Glow Effects */}
          <div
            className={`
              absolute -top-24 -right-24
              w-64 h-64
              blur-[100px]
              rounded-full

              ${glowClass}
            `}
          />

          <div
            className={`
              absolute -bottom-24 -left-24
              w-64 h-64
              blur-[100px]
              rounded-full

              ${secondGlowClass}
            `}
          />

          {/* CONTENT */}
          <div className="relative z-10 text-center">
            
            {/* TITLE */}
            <h3
              className="
                text-3xl md:text-4xl

                font-sans

                text-slate-900
                dark:text-white

                mb-8

                leading-tight
              "
            >
              {title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                text-xl

                text-slate-600
                dark:text-zinc-400

                mb-12

                max-w-2xl

                mx-auto

                font-light

                leading-relaxed
              "
            >
              {description}
            </p>

            {/* BUTTONS */}
            <div
              className="
                flex flex-wrap

                justify-center

                gap-6
              "
            >
              {/* PRIMARY BUTTON */}
              {primaryBtnText && (
                <Link
                  href={primaryBtnLink}
                  className="group"
                >
                  <CustomButton
                    variant={variant}
                    icon={primaryBtnIcon}
                    iconSide="right"
className="w-full rounded-full pointer-events-none" 
                  >
                    {primaryBtnText}
                  </CustomButton>
                </Link>
              )}

              {/* SECONDARY BUTTON */}
              {secondaryBtnText && (
                <Link
                  href={secondaryBtnLink}
                  className="group"
                >
                  <CustomButton
                    variant={secondaryVariant}
                    icon={secondaryBtnIcon}
className="w-full rounded-full pointer-events-none" 
                  >
                    {secondaryBtnText}
                  </CustomButton>
                </Link>
              )}
            </div>
          </div>
        </div>
</SectionLayout>
  );
}