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
    "retina specialist",
    "eye surgery",
    "vision correction",
    "corneal transplant"
  ],
  authors: [{ name: "Dr. Sharad Lakhotia" }],
  creator: "Lakhotia Eye Centre",
  publisher: "Lakhotia Eye Centre",
  category: "Healthcare",
  applicationName: "Lakhotia Eye Centre",
  formatDetection: {
    email: true,
    telephone: true,
    address: true
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#1d6fb8"
      }
    ]
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Lakhotia Eye Centre"
  },
  openGraph: {
    title: "Lakhotia Eye Centre - Dr. Sharad Lakhotia",
    description:
      "Experience world-class eye care with Dr. Sharad Lakhotia - 36+ years of surgical excellence, bladeless LASIK, advanced cataract surgery, and premium IOL solutions.",
    type: "website",
    url: "https://www.lakhotiaeyecentre.com",
    siteName: "Lakhotia Eye Centre",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lakhotia Eye Centre - Dr. Sharad Lakhotia"
      },
      {
        url: "/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Lakhotia Eye Centre"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lakhotia Eye Centre - Dr. Sharad Lakhotia",
    description:
      "Advanced eye surgery center specializing in bladeless LASIK, phaco cataract surgery, and premium IOL implantation. Led by renowned ophthalmologist Dr. Sharad Lakhotia.",
    creator: "@LakhotiaEye",
    site: "@LakhotiaEye",
    images: {
      url: "/twitter-image.png",
      alt: "Lakhotia Eye Centre"
    }
  },
  verification: {
    google: "google-site-verification-code-here",
    other: {
      "msvalidate.01": "bing-verification-code-here"
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.lakhotiaeyecentre.com",
    types: {
      "application/rss+xml": "https://www.lakhotiaeyecentre.com/blog/feed"
    }
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent"
  }
};

export const viewport: Viewport = {
  themeColor: "#1d6fb8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light"
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
