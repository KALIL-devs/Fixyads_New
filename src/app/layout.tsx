import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingQuote from "@/components/FloatingQuote/FloatingQuote";
import TawkTo from "@/components/TawkTo/TawkTo";
import "./globals.css";
import Script from "next/script";
import { FAQPage, WithContext } from "schema-dts";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Marketing Agency & Training Institute",
  description:
    "Expert digital marketing services and professional training courses in Digital Marketing and Java.",

  verification: {
    google: "vmOOhhRZqulR4Ly_eNqZb1g1E_DkEzX836Q-NDP64oA", // Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0GMKDXQV76"
          strategy="afterInteractive"
        />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0GMKDXQV76');
          `}
        </Script>

        <Script id="article-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Article",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.fixyads.com"
            },
            "headline": "Fixyads - Digital Marketing Agency and Training Institute",
            "description": "Expert Digital Marketing, Branding, and Social Media Marketing solutions built for measurable growth.",
            "image": {
              "@type": "ImageObject",
              "url": "aboutus/aboutus.png", // add your image URL
              // "width": "",
              // "height": ""
            },
            "author": {
              "@type": "Organization",
              "name": "Fixyads"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Fixyads",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.fixyads.com/", // replace with actual logo URL
                // "width": "",
                // "height": ""
              }
            },
            "datePublished": "2026-01-01",
            "dateModified": "2026-01-01"
          })}
        </Script>


        <Navbar />
        <main style={{ minHeight: "calc(100vh - 400px)" }}>
          {children}
          <FloatingQuote />
        </main>
        <Footer />

        <TawkTo />
        
      </body>
    </html>
  );
}
