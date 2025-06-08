"use client";

import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ScrollToTop />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
