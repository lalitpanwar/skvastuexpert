// components/common/FAQSection.jsx

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Container from "@/components/client/Layout/Container";

import TitleBorder from "@/components/client/Layout/TitleBorder";

export default function FAQSection({
  title = "Frequently Asked Questions",

  subtitle = "",

  items = [],

  bgClass = "bg-theme-warm",

  className = "",
}) {
  return (
    <section
      className={`
        py-20

        ${bgClass}

        ${className}
      `}
      id="faq"
    >
      <Container classes="mx-auto px-4">
        
        {/* HEADING */}
        <div className="text-center mb-16">
          
          <h2
            className="
              text-black
              dark:text-white

              text-3xl md:text-4xl

              font-sans

              mb-4
            "
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className="
                text-slate-500

                max-w-2xl

                mx-auto

                text-sm md:text-base

                leading-relaxed

                mb-5
              "
            >
              {subtitle}
            </p>
          )}

          <TitleBorder classes="mx-auto" />
        </div>

        {/* ACCORDION */}
        <Accordion
          type="single"
          collapsible
          className="
            w-full

            max-w-[850px]

            mx-auto

            space-y-4
          "
        >
          {items.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="
                bg-white
                dark:bg-zinc-900

                rounded-xl

                border border-secondary/10

                shadow-sm

                overflow-hidden
              "
            >
              {/* QUESTION */}
              <AccordionTrigger
                className="
                  text-left

                  p-5 md:p-7

                  hover:no-underline

                  font-sans

                  text-slate-800
                  dark:text-white

                  transition-all

                  hover:text-primary

                  text-base md:text-lg

                  leading-normal
                "
              >
                {faq.question}
              </AccordionTrigger>

              {/* ANSWER */}
              <AccordionContent
                className="
                  px-5 md:px-7

                  pb-6

                  font-sans

                  text-slate-600
                  dark:text-zinc-400

                  text-sm md:text-base

                  leading-relaxed

                  border-t border-slate-100
                  dark:border-zinc-800

                  pt-4
                "
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}