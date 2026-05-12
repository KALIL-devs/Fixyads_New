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
  metadataBase: new URL("https://www.fixyads.com"),
  title: "Digital Marketing Agency & Training Institute",
  description:
    "Expert digital marketing services and professional training courses in Digital Marketing and Java.",

  verification: {
    google: "vmOOhhRZqulR4Ly_eNqZb1g1E_DkEzX836Q-NDP64oA", // Search Console
  },
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
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
              "@type": "Organization",
              "url": "https://www.fixyads.com",
              "logo": "https://www.fixyads.com/Logo/Newlogo.png",
              "name": "Fixyads",
              "description": "Expert Digital Marketing, Branding, and Social Media Marketing solutions built for measurable growth.",
              "address": {
                "@type": "PostalAddress",
                "email": "fixyads@gmail.com",
                "telephone": "+91 84380 83853"
              },
              "sameAs": [
                "https://www.instagram.com/fixyads/",
                "https://www.facebook.com/profile.php?id=61568361441860",
                "https://www.linkedin.com/company/fixyads/"
              ]
            })}
          </Script>


          <Navbar />
          <main
            style={{
              minHeight: "calc(100vh - 400px)",
              backgroundColor: "#ffffff",
            }}
          >
            {children}
            <FloatingQuote />
          </main>
          <Footer />

          <TawkTo />
        </Providers>
      </body>
    </html>
  );
}
