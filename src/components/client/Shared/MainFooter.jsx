"use client";

import React from "react";

import { Compass, Phone, Mail, MapPin } from "lucide-react";

import Link from "next/link";

import { Container } from "../Layout";

import { footerData } from "@/data/footer";

export default function MainFooter() {
  const { about, services, contact, socials, quickLinks } = footerData;

  return (
    <footer
      className="
        relative
tracking-wide
        bg-gradient-to-b
        from-[#111111]
        to-black

        text-white

        pt-24
        pb-8

        overflow-hidden

        border-t border-white/5
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute top-0 right-0

          w-[500px] h-[500px]

          bg-secondary/10

          rounded-full

          blur-[120px]

          -mr-64 -mt-64

          pointer-events-none
        "
      />

      <Container>
        {/* TOP GRID */}
        <div
          className="
            grid grid-cols-1 lg:grid-cols-3

            gap-16

            mb-20

            relative z-10
          "
        >
          {/* BRAND */}
          <div className="flex flex-col gap-8">
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <div
                className="
                  relative

                  bg-primary/10

                  p-3

                  rounded-2xl

                  border border-primary/10
                "
              >
                <div
                  className="
                    absolute inset-0

                    bg-secondary/20

                    blur-xl

                    rounded-full
                  "
                />

                <Compass
                  className="
                    relative

                    text-primary
                  "
                  size={28}
                  strokeWidth={2.2}
                />
              </div>

              <Link
                href="/"
                className="
                  text-3xl

                  font-black

                  tracking-tight
                "
              >
                {about.name}

                <span className="text-primary">{about.surname}</span>
              </Link>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                text-white/60

                text-sm

                leading-relaxed

                max-w-sm
              "
            >
              {about.description}
            </p>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {socials.map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                      size-11

                      rounded-full

                      bg-white/[0.04]

                      border border-white/10

                      flex items-center justify-center

                      text-white/50

                      hover:text-secondary

                      hover:border-secondary/40

                      hover:bg-secondary/10

                      transition-all duration-300
                    "
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-8">
            <h4
              className="
                text-sm

                font-bold

                text-secondary

                uppercase

                tracking-[0.25em]
              "
            >
              Core Services
            </h4>

            <div
              className="
                grid grid-cols-2

                gap-y-5 gap-x-8
              "
            >
              {services.vastu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    text-white/60

                    hover:text-white

                    text-sm

                    flex items-center gap-3

                    transition-all duration-300

                    group
                  "
                >
                  <div
                    className="
                      size-1.5

                      bg-white/20

                      rounded-full

                      group-hover:bg-secondary

                      transition-colors
                    "
                  />

                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div
            className="
              bg-white/[0.03]

              backdrop-blur-xl

              border border-white/10

              p-8

              rounded-[2.5rem]

              transition-all duration-500

              hover:border-secondary/20
            "
          >
            <h4
              className="
                text-sm

                font-bold

                text-secondary

                uppercase

                tracking-[0.25em]

                mb-8
              "
            >
              Reach Out
            </h4>

            <div className="space-y-7">
              {/* ADDRESS */}
              <a
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-start gap-4

                  group
                "
              >
                <MapPin
                  className="
                    text-secondary

                    mt-1

                    group-hover:scale-110

                    transition-transform
                  "
                  size={18}
                />

                <span
                  className="
                    text-white/60

                    text-sm

                    leading-relaxed

                    group-hover:text-white

                    transition-colors
                  "
                >
                  {contact.address}
                </span>
              </a>

              {/* PHONE */}
              <a
                href={`tel:${contact.phone}`}
                className="
                  flex items-center gap-4

                  group
                "
              >
                <Phone
                  className="
                    text-secondary

                    group-hover:scale-110

                    transition-transform
                  "
                  size={18}
                />

                <span
                  className="
                    text-white

                    font-bold

                    text-2xl

                    group-hover:text-secondary

                    transition-colors
                  "
                >
                  {contact.phone}
                </span>
              </a>

              {/* EMAIL */}
              <a
                href={`mailto:${contact.email}`}
                className="
                  flex items-center gap-4

                  group
                "
              >
                <Mail
                  className="
                    text-secondary

                    group-hover:scale-110

                    transition-transform
                  "
                  size={18}
                />

                <span
                  className="
                    text-white/60

                    text-sm

                    truncate

                    group-hover:text-white

                    transition-colors
                  "
                >
                  {contact.email}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* SEO GRID */}
        {/* <div
          className="
            py-10

            border-t border-white/5

            grid grid-cols-2 md:grid-cols-4

            gap-8

            mb-10
          "
        >
          {[
            {
              label: "Vastu",
              list: services.vastu,
            },

            {
              label: "Astrology",
              list: services.astrology,
            },

            {
              label: "Services",
              list: services.pujas,
            },

            {
              label: "Quick Links",
              list: services.quickLinks,
            },
          ].map((sec, i) => (
            <div key={i} className="space-y-4">
              <p
                className="
                  text-[10px]

                  font-bold

                  text-white/30

                  uppercase

                  tracking-[0.3em]
                "
              >
                {sec.label}
              </p>

              <div className="flex flex-col gap-2">
                {sec.list.slice(0, 4).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="
                        text-sm

                        text-white/50

                        hover:text-secondary

                        transition-colors
                      "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        {/* BOTTOM */}
        <div
          className="
            pt-8

            border-t border-white/5

            flex flex-col md:flex-row

            justify-between

            items-center

            gap-4

            text-xs

            text-white/40
          "
        >
          <p>
            © {new Date().getFullYear()} {about.name} {about.surname}• Vastu
            Consultation Services
          </p>

          <div className="flex gap-6">
            {quickLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  hover:text-secondary

                  transition-colors
                "
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
