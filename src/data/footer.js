import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const footerData = {
  about: {
    name: "Shivkumar",
    surname: "Sharma",
    description:
      "Professional Vastu consultation and practical guidance by Acharya Shivkumar Sharma. Helping homes, offices and commercial spaces achieve balance, positivity and prosperity across Ghaziabad & NCR.",
    logoIconColor: "#d9a01a",
  },
  services: {
    pujas: [
      { name: "Griha Pravesh", href: "/services/griha-pravesh" },
      { name: "Satyanarayan Katha", href: "/services/satyanarayan-katha" },
      { name: "Maha Mrityunjaya", href: "/services/maha-mrityunjaya" },
      { name: "Rudrabhishek", href: "/services/rudrabhishek" },
      { name: "Ganesh Puja", href: "/services/ganesh-puja" },
      { name: "Laxmi Puja", href: "/services/laxmi-puja" },
    ],
    astrology: [
      { name: "Kundali Matching", href: "/astrology/kundali-matching" },
      { name: "Janam Patri", href: "/astrology/janam-patri" },
      { name: "Career Chart", href: "/astrology/career-chart" },
      { name: "Health Astrology", href: "/astrology/health" },
      { name: "Shani Nivaran", href: "/astrology/shani-nivaran" },
      { name: "Gemstones", href: "/astrology/gemstones" },
    ],
    vastu: [
      { name: "Home Audit", href: "#" },
      { name: "Office Vastu", href: "#" },
      { name: "Industrial Vastu", href: "#" },
      { name: "Plot Vastu", href: "#" },

      { name: "School/College Vastu", href: "#" },
      { name: "Hospital Vastu", href: "#" },
      { name: "Showrooms Vastu", href: "#" },
      { name: "Bhoomi Pujan", href: "#" },
      { name: "Vastu Shanti", href: "#" },
    ],
  },
  contact: {
    address: "Shiv Shankar Jyotish Evam Vastu Anusandhan Kendra, Sumanglam Building, Shop no. 305, Ground Floor, RDC, Raj Nagar, Ghaziabad - 201003",
    phone: "+91 9811893069",
    email: "shivshankervastu@gmail.com",
    mapLink: "https://maps.app.goo.gl/a1eD7RsSvVZgkreP8",
  },
  socials: [
    { Icon: Facebook, link: "https://www.facebook.com/SSAstroVastu" },
    { Icon: Instagram, link: "https://www.instagram.com/astro_shivkumarsharma/" },
    // { Icon: Twitter, link: "https://twitter.com/your-profile" },
    // { Icon: Youtube, link: "https://youtube.com/your-channel" },
  ],
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Acharya Ji", href: "/about" },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ],

  legal: [
    { name: "Privacy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms-of-service" },
  ],
};
