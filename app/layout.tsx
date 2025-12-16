import type { Metadata, Viewport } from "next";
import "@/styles/globals.scss";
import Providers from "@/components/providers/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lakhotiaeyecentre.com"),
  title: {
    default: "Lakhotia Eye Centre - Excellence in Eye Care Since 1986",
    template: "%s | Lakhotia Eye Centre"
  },
  description:
    "Lakhotia Eye Centre, led by Dr. Sharad Lakhotia, offers 36+ years of expertise in bladeless LASIK, phaco cataract surgery, and premium IOL implantation. Pioneer in advanced eye care.",
  keywords: [
    "eye clinic Jodhpur",
    "LASIK surgery Jodhpur",
    "cataract surgery Jodhpur",
    "Dr. Sharad Lakhotia",
    "bladeless LASIK",
    "phaco cataract surgery",
    "premium IOL",
    "ophthalmologist Jodhpur",
    "eye care Rajasthan",
    "retina specialist"
  ],
  authors: [{ name: "Dr. Sharad Lakhotia" }],
  creator: "Lakhotia Eye Centre",
  publisher: "Lakhotia Eye Centre",
  openGraph: {
    title: "Lakhotia Eye Centre - Dr. Sharad Lakhotia",
    description:
      "Experience world-class eye care with Dr. Sharad Lakhotia - 36+ years of surgical excellence, bladeless LASIK, advanced cataract surgery, and premium IOL solutions.",
    type: "website",
    url: "https://www.lakhotiaeyecentre.com",
    siteName: "Lakhotia Eye Centre",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakhotia Eye Centre - Dr. Sharad Lakhotia",
    description:
      "Advanced eye surgery center specializing in bladeless LASIK, phaco cataract surgery, and premium IOL implantation. Led by renowned ophthalmologist Dr. Sharad Lakhotia."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#1d6fb8"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
