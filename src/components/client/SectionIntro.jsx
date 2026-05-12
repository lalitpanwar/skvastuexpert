

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionIntro({
  title = "Complete Vastu Solutions for Homes, Offices & Commercial Spaces",
  className = "",
}) {
  return (
    <section
      className={`
        relative
        overflow-hidden

        bg-primary

        py-14 md:py-20



        ${className}
      `}

    >


      <div
        className="
          relative
          max-w-4xl
          mx-auto

          px-6

          text-center
        "
      >


        {/* Heading */}
        <h2
          className="
            text-2xl md:text-5xl

            font-normal

            text-white

            leading-tight
          "
        >
          {title}
        </h2>




      </div>
    </section>
  );
}