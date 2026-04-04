import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export const footerData = {
  about: {
    name: "Shivkumar",
    surname: "Sharma",
    description: "Authentic Vedic rituals and spiritual guidance by Acharya Shivkumar Sharma. Bringing the sacred traditions of Kashi to families across Ghaziabad and NCR.",
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
      { name: "Home Audit", href: "/vastu/home" },
      { name: "Office Vastu", href: "/vastu/office" },
      { name: "Industrial Vastu", href: "/vastu/industrial" },
      { name: "Bhoomi Pujan", href: "/vastu/bhoomi-pujan" },
      { name: "Vastu Shanti", href: "/vastu/shanti" },
      { name: "Interior Vastu", href: "/vastu/interior" },
    ],
    quickLinks: [
      { name: "About Acharya Ji", href: "/about" },
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Photo Gallery", href: "/gallery" },
      { name: "Contact Us", href: "/contact" },
      { name: "Daily Muhurta", href: "/muhurta" },
    ],
  },
  contact: {
    address: "Shiv Shankar Jyotish Kendra, Raj Nagar, Ghaziabad, UP 201001",
    phone: "+91 99XXXXXX00",
    email: "contact@shivkumarsharma.com",
    mapLink: "https://maps.google.com/?q=Raj+Nagar+Ghaziabad",
  },
  socials: [
    { Icon: Facebook, link: "https://facebook.com/your-profile" },
    { Icon: Instagram, link: "https://instagram.com/your-profile" },
    { Icon: Twitter, link: "https://twitter.com/your-profile" },
    { Icon: Youtube, link: "https://youtube.com/your-channel" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms-of-service" },
  ]
};