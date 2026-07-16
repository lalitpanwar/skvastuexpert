"use client";

import React, { useEffect, useState } from "react";

import { Compass, Phone, Menu, Sparkles } from "lucide-react";

import Container from "../Layout/Container";
import { Navigation } from ".";
import Link from "next/link";

import { CustomButton } from "../Layout";
import { createCallLink } from "@/lib";
export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` flex
fixed
inset-x-0
    h-20

top-0
border-b border-slate-200/70
z-50

transition-all duration-300

        ${isScrolled ? "glass-header shadow-md" : "bg-white shadow-none dark:bg-zinc-900"}
      `}
    >
      <Container
        max="w-full"
        className="h-20 flex items-center justify-between"
      >
        {/* LOGO */}
        <Link
          href="/"
          className="
            flex items-center gap-3

            group
          "
        >
          {/* Icon */}
          <div
            className="
              relative

              flex items-center justify-center

              w-12 h-12

              rounded-2xl

              bg-primary/10

              border border-primary/10

              transition-all duration-300

              group-hover:bg-primary

              group-hover:rotate-6
            "
          >
            {/* Glow */}
            <div
              className="
                absolute inset-0

                bg-secondary/20

                blur-xl

                rounded-full
              "
            />

            <Compass
              size={28}
              strokeWidth={2.5}
              className="
                relative

                text-primary

                transition-colors duration-300

                group-hover:text-white
              "
            />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <h2
              className="
                text-slate-900
                dark:text-white

                text-xl md:text-2xl

                font-black

                leading-none

                tracking-tight
              "
            >
              Shivkumar
              <span className="text-primary">Sharma</span>
            </h2>

            {/* Small Text */}
            <div className="flex items-center gap-1.5 mt-1">
              <span
                className="
                  text-[10px]

                  uppercase

                  tracking-[0.25em]

                  text-slate-500
                  dark:text-zinc-400

                  font-semibold
                "
              >
                Vastu Expert
              </span>

              <Sparkles
                size={10}
                className="
                  text-secondary

                  animate-pulse
                "
              />
            </div>
          </div>
        </Link>

        {/* NAVIGATION */}
        <div className="hidden lg:block">
          <Navigation open={open} setOpen={setOpen} />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <Link href={createCallLink()} className="hidden xl:block">
            <CustomButton
              variant="primary"
              className="
              px-5

              h-11

              hidden xl:flex
            "
              icon={Phone}
            >
              Talk to Expert
            </CustomButton>
          </Link>
          {/* MOBILE MENU */}
          <button
            onClick={() => setOpen(true)}
            className="
              lg:hidden

              p-2

              text-slate-900
              dark:text-white
            "
          >
            <Menu size={28} />
          </button>
        </div>
      </Container>
    </header>
  );
}
