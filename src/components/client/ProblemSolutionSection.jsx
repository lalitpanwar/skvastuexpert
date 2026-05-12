import SectionLayout from "@/components/ui/custom/section-layout";
import CustomButton from "@/components/ui/custom/CustomButton";
import TitleBorder from "@/components/ui/custom/TitleBorder";

import Link from "next/link";

import {
  Home,
  TrendingDown,
  Wallet,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib";
const problemData = [
  {
    title: "Lack of Peace at Home",
    description:
      "Constant stress, negativity or imbalance in your living environment.",
    Icon: Home,
  },

  {
    title: "Business Growth Stuck",
    description:
      "Facing obstacles, low productivity or financial instability.",
    Icon: TrendingDown,
  },

  {
    title: "Financial Problems",
    description:
      "Money flow issues, unexpected expenses or lack of stability.",
    Icon: Wallet,
  },

  {
    title: "Health & Energy Issues",
    description:
      "Low positivity, discomfort or unhealthy atmosphere around you.",
    Icon: HeartPulse,
  },
];

export default function ProblemSolutionSection({
  title = "Are You Facing These Problems?",
  subtitle = "Vastu imbalance can affect peace, growth, health & positivity in your personal and professional life.",

  variant,
  bgColor = "bg-[#fffdf8]",
}) {
  return (
    <SectionLayout
      title={title}
      subtitle={subtitle}
      variant={variant}
      bgColor={bgColor}
    >
      {/* PROBLEM GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4

          gap-6
          w-full
        "
      >
        {problemData.map((item, index) => {
          const Icon = item.Icon;

          return (
            <div
              key={index}
              className="
                group

                bg-white
                dark:bg-zinc-900

                p-8

                rounded-[1.8rem]

                shadow-xl

                border border-slate-100
                dark:border-zinc-800

                hover:border-secondary

                transition-all duration-500

                hover:-translate-y-2
              "
            >
              {/* ICON */}
              <div className="flex items-center mb-6">
                <div
                  className="
                    p-3

                    bg-secondary/10

                    rounded-2xl

                    group-hover:bg-primary

                    transition-colors duration-300
                  "
                >
                  <Icon
                    className="
                      text-primary
                      group-hover:text-white
                      transition-colors
                    "
                    size={24}
                  />
                </div>

                <h3
                  className="
                    text-xl

                    font-bold

                    ml-4

                    text-slate-900
                    dark:text-white

                    leading-snug
                  "
                >
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p
                className="
                  text-slate-600
                  dark:text-zinc-400

                  text-sm

                  leading-relaxed

                  font-normal
                "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* SOLUTION BANNER */}
      <div
        className="
          w-full
          max-w-5xl
          mx-auto

          bg-primary

          shadow-inner

          rounded-[2.5rem]

          p-8 md:p-12

          text-center

          mt-16

          overflow-hidden

          relative
        "
      >
        {/* Glow */}
        <div
          className="
            absolute top-0 left-0

            w-72 h-72

            bg-white/10

            rounded-full

            blur-3xl
          "
        />

        <div className="relative z-10">
          {/* Heading */}
          <h3
            className="
              font-serif
              italic

              text-2xl md:text-4xl

              text-white

              mb-4

              leading-tight
            "
          >
            Proper Vastu Planning Can Bring
            Peace, Prosperity & Positive Energy
          </h3>

          <TitleBorder classes="mx-auto mb-5" />

          {/* Description */}
          <p
            className="
              text-white/80

              text-sm md:text-lg

              leading-relaxed

              max-w-3xl

              mx-auto
            "
          >
            Get practical Vastu consultation for your home,
            office, plot or commercial property with accurate
            remedies and guidance.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Link
              href={createWhatsAppLink("professional Vastu consultation")}
              className="group"
            >
              <CustomButton
                variant="secondary"
                icon={ArrowRight}
                iconSide="right"
className="w-full rounded-full pointer-events-none" 
              >
                Get Consultation
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}