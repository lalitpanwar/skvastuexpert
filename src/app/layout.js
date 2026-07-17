import { Roboto } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { createMetadata } from "@/lib/seo";
import { getSiteConfig } from "@/lib/site";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const site = getSiteConfig();
export const metadata = createMetadata({
  fallbackTitle: site.name,
  fallbackDescription: site.description,
  path: "/",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body
        className={`dark:bg-background-dark font-sans text-[#1c160d] dark:text-white  antialiased`}
      >
 
        {children}
      </body>
      <GoogleTagManager gtmId="GTM-PDL6MKN9" />
    </html>
  );
}
