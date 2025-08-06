import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { geistSans, geistMono } from "./fonts";
import Head from "next/head";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Izhar Mohammed | Full-Stack Developer Portfolio",
  description:
    "Personal portfolio of Izhar Mohammed, a full-stack developer showcasing projects, skills, and contact information. Specialized in React, Next.js, Node.js, and SaaS development.",
  keywords: [
    "Izhar Mohammed",
    "Portfolio",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "SaaS Developer",
    "T3 Stack",
    "TypeScript",
  ],
  authors: [{ name: "Izhar Mohammed", url: "https://www.izhardev.me/" }],

  // Open Graph tags (used by WhatsApp, Discord, Facebook, etc.)
  openGraph: {
    title: "Izhar Mohammed | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and SaaS development. Check out my projects including StoreKit, TheDeals, and more!",
    url: "https://www.izhardev.me",
    siteName: "Izhar Mohammed Portfolio",
    images: [
      {
        url: "https://www.izhardev.me/assets/portfolio.png", // Use absolute URL
        width: 1200,
        height: 630,
        alt: "Izhar Mohammed - Full-Stack Developer Portfolio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card tags
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle", // Add your Twitter handle if you have one
    creator: "@yourtwitterhandle",
    title: "Izhar Mohammed | Full-Stack Developer",
    description:
      "Building modern web applications with React, Next.js, and Node.js. Specialized in SaaS development.",
    images: ["https://www.izhardev.me/assets/portfolio.png"], // Use absolute URL
  },

  // Additional meta tags for better compatibility
  other: {
    // WhatsApp specific
    "og:image:width": "1200",
    "og:image:height": "630",

    // Discord specific
    "theme-color": "#3b82f6", // Use your brand color

    // General
    robots: "index, follow",
    googlebot: "index, follow",
  },

  metadataBase: new URL("https://www.izhardev.me/"),

  // Canonical URL
  alternates: {
    canonical: "https://www.izhardev.me/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Izhar Mohammed | Full-Stack Developer Portfolio</title>
        <meta
          name="title"
          content="Izhar Mohammed | Full-Stack Developer Portfolio"
        />
        <meta
          name="description"
          content="Full-Stack Developer specializing in React, Next.js, and SaaS development. Check out my projects including StoreKit, TheDeals, and more!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.izhardev.me/" />
        <meta
          property="og:title"
          content="Izhar Mohammed | Full-Stack Developer"
        />
        <meta
          property="og:description"
          content="Full-Stack Developer specializing in React, Next.js, and SaaS development. Check out my projects including StoreKit, TheDeals, and more!"
        />
        <meta
          property="og:image"
          content="https://www.izhardev.me/assets/portfolio.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Izhar Mohammed - Full-Stack Developer Portfolio"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.izhardev.me/" />
        <meta
          property="twitter:title"
          content="Izhar Mohammed | Full-Stack Developer"
        />
        <meta
          property="twitter:description"
          content="Building modern web applications with React, Next.js, and Node.js. Specialized in SaaS development."
        />
        <meta
          property="twitter:image"
          content="https://www.izhardev.me/assets/portfolio.png"
        />

        {/* Additional tags for WhatsApp/Discord */}
        <meta name="theme-color" content="#3b82f6" />
        <link rel="canonical" href="https://www.izhardev.me/" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
