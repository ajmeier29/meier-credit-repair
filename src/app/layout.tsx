import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SubscribeProvider } from "@/lib/SubscribeContext";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code By Andy",
  description: "Fast, Responseive, SEO Friendly Websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`font-urbanist`}>
        <SubscribeProvider>{children}</SubscribeProvider>
        <Analytics />
      </body>
    </html>
  );
}
