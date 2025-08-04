import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { geistSans, geistMono } from "./fonts";

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
    "Personal portfolio of Izhar Mohammed, a full-stack developer showcasing projects, skills, and contact information.",
  keywords: [
    "Izhar Mohammed",
    "Portfolio",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "Izhar Mohammed", url: "https://izhardev.me" }],
  openGraph: {
    title: "Izhar Mohammed | Full-Stack Developer",
    description: "Check out my projects and skills!",
    url: "https://izhardev.me",
    siteName: "Izhar's Portfolio",
    images: [
      {
        url: "/assets/luffy.jpg", // Replace with your OpenGraph image
        width: 1200,
        height: 630,
        alt: "Izhar Mohammed Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izhar Mohammed | Full-Stack Developer",
    description:
      "Building modern web applications with React, Next.js, and Node.js.",
    images: ["/assets/luffy.jpg"], // Replace with your Twitter image
  },
  // themeColor: "#000000", // Dark theme (adjust to your design)
  metadataBase: new URL("https://www.izhardev.me"), // Base URL for all metadata links
};
export const viewport = {
  themeColor: '#000000',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
