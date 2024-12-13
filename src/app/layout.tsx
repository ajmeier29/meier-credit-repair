import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SubscribeProvider } from "@/lib/SubscribeContext";
import { Analytics } from '@vercel/analytics/react';
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Money Mentor - Credit Repair",
  description: "Improve your credit score FAST!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - Global Site Tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-11493364200"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11493364200');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning={true} className={`font-urbanist`}>
        <SubscribeProvider>{children}</SubscribeProvider>
        <Analytics />
      </body>
    </html>
  );
}
