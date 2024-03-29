import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import { ReduxProvider } from "@/provider/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trimy",
  description: "Shrink, Share, Track and Elevate Your Links.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  dark:bg-slate-900 w-full `}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
