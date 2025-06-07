import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/scroll-to-top";
import PageScrollTop from "@/components/page-scroll-top";
import PageTransition from "@/components/page-transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PATHLY",
  description:
    "Enhancing road quality and travel efficiency through intelligent, IoT-driven solutions.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <PageScrollTop />
        <PageTransition>{children}</PageTransition>
        <ScrollToTop />
      </body>
    </html>
  );
}
