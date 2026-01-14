import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingQuote from "@/components/FloatingQuote/FloatingQuote";
import "./globals.css";
import Script from "next/script";

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

        <Navbar />
        <main style={{ minHeight: "calc(100vh - 400px)" }}>
          {children}
          <FloatingQuote />
        </main>
        <Footer />
      </body>
    </html>
  );
}
