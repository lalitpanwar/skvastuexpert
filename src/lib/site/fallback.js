/**
 * Purpose:
 * Default site configuration.
 * Used when Site Settings are not available from CMS.
 */

export const SITE_FALLBACK = {
  // ------------------------------------------------------------------
  // Basic
  // ------------------------------------------------------------------
  name: "Acharya Shiv Kumar Sharma",

  title: "Acharya Shiv Kumar Sharma | Vastu Consultant & Astrologer",

  description:
    "Acharya Shiv Kumar Sharma is an experienced Vastu Consultant and Astrologer offering Vastu Consultation, Astrology Guidance, Aura Scanning, Hypnotherapy, and Spiritual Healing services.",

  // ------------------------------------------------------------------
  // URL
  // ------------------------------------------------------------------
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_DEV_SITE_URL,

  // ------------------------------------------------------------------
  // Branding
  // ------------------------------------------------------------------
  logo: "/logo.png",
  favicon: "/favicon.ico",
  defaultProfileImage: "/images/acharya-shivkumar-sharma.jpg",

  // Open Graph
  defaultOg: "/og-image.jpg",

  // ------------------------------------------------------------------
  // Locale
  // ------------------------------------------------------------------
  locale: "en_IN",
  language: "en",
  type: "website",

  // ------------------------------------------------------------------
  // Author
  // ------------------------------------------------------------------
  author: "Acharya Shiv Kumar Sharma",

  // ------------------------------------------------------------------
  // Contact
  // ------------------------------------------------------------------
  email: "shivshankervastu@gmail.com",
  phone: "+91 9811893069",

  // ------------------------------------------------------------------
  // Business
  // ------------------------------------------------------------------
  businessName: "Acharya Shiv Kumar Sharma",
  legalName: "Acharya Shiv Kumar Sharma",

  // ------------------------------------------------------------------
  // Address
  // Replace with your exact Google Business Profile address
  // ------------------------------------------------------------------
  address: {
    street: "281, Ansal Sumangalam Building, RDC, Raj Nagar",
    locality: "Ghaziabad",
    region: "Uttar Pradesh",
    postalCode: "201002",
    country: "IN",
  },

  // ------------------------------------------------------------------
  // Google Map
  // ------------------------------------------------------------------
  mapLink: "https://maps.app.goo.gl/a1eD7RsSvVZgkreP8", // Google Maps share link

  geo: {
    latitude: "28.6728658", // Example: 28.6692
    longitude: "77.441143", // Example: 77.4538
  },

  // ------------------------------------------------------------------
  // Business Hours
  // ------------------------------------------------------------------
  openTime: "10:00",
  closeTime: "20:00",

  // ------------------------------------------------------------------
  // Social Profiles
  // ------------------------------------------------------------------
  facebook: "https://www.facebook.com/SSAstroVastu",
  instagram: "https://www.instagram.com/astro_shivkumarsharma/",
  youtube: "",
  linkedin: "",
  x: "",

  sameAs: [
    "https://www.facebook.com/SSAstroVastu",
    "https://www.instagram.com/astro_shivkumarsharma/",
    
  ],

  // ------------------------------------------------------------------
  // SEO
  // ------------------------------------------------------------------
  keywords: [
    "Acharya Shiv Kumar Sharma",
    "Vastu Consultant",
    "Astrologer",
    "Vastu Expert",
    "Astrology Consultation",
    "Spiritual Healing",
    "Vastu Shastra",
    "Ghaziabad Astrologer",
    "Ghaziabad Vastu Consultant",
  ],

  // ------------------------------------------------------------------
  // Business
  // ------------------------------------------------------------------
  priceRange: "₹₹",
  currenciesAccepted: "INR",

  paymentAccepted: [
    "Cash",
    "UPI",
    "Bank Transfer",
  ],
};