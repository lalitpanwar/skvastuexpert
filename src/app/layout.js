import { Roboto } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import { MainHeader } from "@/components/client/Shared";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Shiv Kumar Sharma",
  description: "Vastu Consultant in Rajnagar Ghaziabad",
  verification: {
    google: "ljy5nc5CmbF3vDujb6rfutmp2yfllTtYc416I6S1mOg",
  },
};

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
