import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { geistSans, geistMono } from "./fonts";

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

  // Set the metadata base URL
  metadataBase: new URL("https://www.izhardev.me"),

  // Open Graph tags (used by WhatsApp, Discord, Facebook, etc.)
  openGraph: {
    title: "Izhar Mohammed | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and SaaS development. Check out my projects including StoreKit, TheDeals, and more!",
    url: "https://www.izhardev.me",
    siteName: "Izhar Mohammed Portfolio",
    images: [
      {
        url: "/assets/portfolio.png", // Use relative URL since metadataBase is set
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
    title: "Izhar Mohammed | Full-Stack Developer",
    description:
      "Building modern web applications with React, Next.js, and Node.js. Specialized in SaaS development.",
    images: ["/assets/portfolio.png"], // Use relative URL
    creator: "@yourtwitterhandle", // Add your actual Twitter handle
  },

  // Additional meta tags
  other: {
    "theme-color": "#3b82f6",
    robots: "index, follow",
    googlebot: "index, follow",
  },

  // Canonical URL
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Force refresh of cached images - change this parameter when you update the image */}
        <meta property="og:image" content="https://www.izhardev.me/assets/portfolio.png?v=2" />
        <meta property="og:image:secure_url" content="https://www.izhardev.me/assets/portfolio.png?v=2" />
        <meta property="twitter:image" content="https://www.izhardev.me/assets/portfolio.png?v=2" />
        
        {/* Additional meta tags for better compatibility */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </head>
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