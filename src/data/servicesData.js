import {
  Home,
  Building2,
  Map,
  Compass,
  Factory,
  School,
  Hospital,
  Store,
} from "lucide-react";

import { createWhatsAppLink } from "@/lib";

export const servicesData = [
  {
    title: "Online Analysis",

    description:
      "Get expert guidance through floor plan & map analysis.",

    image: "/images/services/online-vastu.jpg",

    href: "/online-vastu-analysis",

    whatsappLink: createWhatsAppLink(
      "Online Vastu Analysis"
    ),

    Icon: Compass,

    cta: "Send Your Floor Plan",
  },

  {
    title: "Vastu for Home",

    description:
      "Bring peace, harmony & positive energy to your home environment.",

    image:
      "/images/services/vastu-for-home-ghaziabad.jpg",

    href: "/vastu-for-home",

    whatsappLink: createWhatsAppLink(
      "Vastu for Home"
    ),

    Icon: Home,
  },

  {
    title: "Vastu for Office",

    description:
      "Improve productivity, focus & business growth naturally.",

    image:
      "/images/services/vastu-for-office-ghaziabad.jpg",

    href: "/vastu-for-office",

    whatsappLink: createWhatsAppLink(
      "Vastu for Office"
    ),

    Icon: Building2,
  },

  {
    title: "Vastu for Plot",

    description:
      "Choose the right direction and energy-balanced land.",

    image:
      "/images/services/vastu-for-plot-land-ghaziabad.jpg",

    href: "/vastu-for-plots",

    whatsappLink: createWhatsAppLink(
      "Vastu for Plot"
    ),

    Icon: Map,
  },

  {
    title: "Vastu for Factory",

    description:
      "Enhance workflow, efficiency & industrial growth.",

    image:
      "/images/services/vastu-for-factory-ghaziabad.jpg",

    href: "/vastu-for-factory",

    whatsappLink: createWhatsAppLink(
      "Vastu for Factory"
    ),

    Icon: Factory,
  },

  {
    title: "Vastu for Institution",

    description:
      "Create a better learning and growth environment.",

    image:
      "/images/services/vastu-for-Institution-ghaziabad.jpg",

    href: "/vastu-for-school",

    whatsappLink: createWhatsAppLink(
      "Vastu for Institution"
    ),

    Icon: School,
  },

  {
    title: "Vastu for Hospital",

    description:
      "Improve healing energy and positive surroundings.",

    image:
      "/images/services/vastu-for-hospital-ghaziabad.jpg",

    href: "/vastu-for-hospital",

    whatsappLink: createWhatsAppLink(
      "Vastu for Hospital"
    ),

    Icon: Hospital,
  },

  {
    title: "Vastu for Showrooms",

    description:
      "Increase customer attraction and sales opportunities.",

    image:
      "/images/services/vastu-for-showroom-ghaziabad.jpg",

    href: "/vastu-for-shop",

    whatsappLink: createWhatsAppLink(
      "Vastu for Showrooms"
    ),

    Icon: Store,
  },
];