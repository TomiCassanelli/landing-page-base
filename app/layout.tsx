import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import FacebookPixel from "@/components/FacebookPixel";

import { landingContent } from "./content";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const getFaviconUrl = (imagePath: string) => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http") || imagePath.startsWith("data:"))
    return imagePath;
  return imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
};

const faviconUrl = landingContent.branding.logoImage
  ? getFaviconUrl(landingContent.branding.logoImage)
  : `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23000000'/><text x='50' y='70' font-family='Arial' font-size='60' font-weight='bold' fill='white' text-anchor='middle'>${landingContent.branding.logoText.charAt(
      0
    )}</text></svg>`;

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: faviconUrl,
      },
    ],
  },
};

export const viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <FacebookPixel />
      </body>
    </html>
  );
}
