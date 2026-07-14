"use client";

import Container from "@/components/client/Layout/Container";

import {
  Compass,
  Building2,
  Landmark,
  Award,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

import CustomButton from "@/components/client/Layout/CustomButton";

export default function AcharyaExpertise({
  badgeText = "Vastu",

  titleLabel = "Meet Your Vastu Expert",

  mainTitle = "Guiding Spaces with",

  italicTitle = "Positive Energy",

  description = "Acharya Shivkumar Sharma is a trusted Vastu Consultant known for practical and result-oriented guidance. With years of experience in residential, commercial & industrial Vastu, he helps create balanced and positive environments without demolition.",

  imageSrc = "/images/acharya-shivkumar-sharma.jpg",

  ctaText = "Know More About The Expert",

  ctaLink = "/about",

  features = [
    {
      icon: Compass,

      title: "Practical Vastu Guidance",

      desc: "Accurate Vastu consultation with simple and effective remedies for modern spaces.",
    },

    {
      icon: Building2,

      title: "Residential & Commercial Expertise",

      desc: "Specialized consultation for homes, offices, shops, factories & commercial properties.",
    },

    {
      icon: Landmark,

      title: "Traditional Vastu Principles",

      desc: "Following authentic Vastu Shastra principles with practical modern application.",
    },
  ],
}) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative Background Text */}
      <div
        className="
          absolute top-10 left-0

          text-[10rem] md:text-[12rem]

          font-bold

          text-slate-50

          opacity-[0.04]

          select-none

          pointer-events-none

          uppercase
        "
      >
        {badgeText}
      </div>

      <Container>
        <div
          className="
            flex flex-col lg:flex-row

            items-center

            gap-12 lg:gap-16
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
              lg:w-1/2

              relative

              w-full

              max-w-[500px]

              lg:max-w-none

              mx-auto
            "
          >
            {/* Decorative Border */}
            <div
              className="
                absolute -inset-3

                border-2 border-secondary/20

                rounded-[2.5rem] md:rounded-[3rem]

                translate-x-4 translate-y-4

                -z-10
              "
            />

            {/* Image */}
            <div
              className="
                rounded-[2.5rem] md:rounded-[3rem]

                overflow-hidden

                shadow-2xl

                border-4 md:border-8 border-white

                aspect-[4/5] lg:aspect-auto
              "
            >
              <img
                src={imageSrc}
                alt={titleLabel}
                className="
                  w-full h-full

                  lg:h-[600px]

                  object-cover
                "
              />
            </div>

            {/* Floating Badge */}
            <div
              className="
                absolute bottom-8

                -right-4 md:-right-8

                bg-primary

                text-white

                p-4 md:p-6

                rounded-2xl

                shadow-xl

                hidden sm:block
              "
            >
              <Award
                size={32}
                className="text-secondary mb-1 md:mb-2"
              />

              <p
                className="
                  font-bold

                  text-lg md:text-xl

                  leading-none
                "
              >
                Trusted
              </p>

              <p
                className="
                  text-[10px]

                  uppercase

                  tracking-widest

                  opacity-80

                  mt-1
                "
              >
                Vastu Expert
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              lg:w-1/2

              space-y-6 md:space-y-8

              text-center lg:text-left

              relative z-10
            "
          >
            {/* Heading */}
            <div>
              <p
                className="
                  text-primary

                  font-bold

                  uppercase

                  tracking-[0.2em]

                  text-[10px] md:text-xs

                  mb-3 md:mb-4
                "
              >
                {titleLabel}
              </p>

              <h3
                className="
                  text-3xl md:text-5xl

                  font-bold

                  text-slate-900

                  leading-tight
                "
              >
                {mainTitle}{" "}

                <span
                  className="
                    text-secondary

                    italic

                    font-serif
                  "
                >
                  {italicTitle}
                </span>
              </h3>
            </div>

            {/* Description */}
            <p
              className="
                text-slate-600

                text-base md:text-lg

                leading-relaxed
              "
            >
              {description}
            </p>

            {/* FEATURES */}
            <div
              className="
                grid grid-cols-1

                gap-5 md:gap-6

                pt-2
              "
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  className="
                    flex items-start

                    gap-4

                    group

                    text-left
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      flex-shrink-0

                      p-3

                      bg-secondary/10

                      rounded-xl

                      group-hover:bg-primary

                      transition-all duration-300
                    "
                  >
                    <f.icon
                      size={22}
                      className="
                        text-primary

                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h4
                      className="
                        font-bold

                        text-slate-900

                        text-lg

                        leading-none

                        mb-1
                      "
                    >
                      {f.title}
                    </h4>

                    <p
                      className="
                        text-slate-500

                        text-xs md:text-sm

                        leading-relaxed
                      "
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 md:pt-6">
              <Link
                href={ctaLink}
                className="group"
              >
                <CustomButton
                  variant="outline"

                  className="
                    w-full sm:w-auto

                    pointer-events-none
                  "

                  icon={ArrowRight}

                  iconSide="right"
                >
                  {ctaText}
                </CustomButton>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}