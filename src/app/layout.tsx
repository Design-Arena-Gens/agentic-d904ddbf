import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catalyst Run | Facebook Ad Creative",
  description:
    "High-converting Facebook ad concept showcasing Catalyst Run lightweight trainers with social proof and clear call to action.",
  openGraph: {
    title: "Catalyst Run | Facebook Ad Creative",
    description:
      "High-converting Facebook ad concept showcasing Catalyst Run lightweight trainers with social proof and clear call to action.",
    url: "https://agentic-d904ddbf.vercel.app",
    siteName: "Catalyst Run",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalyst Run | Facebook Ad Creative",
    description:
      "High-converting Facebook ad concept showcasing Catalyst Run lightweight trainers with social proof and clear call to action.",
  },
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
        {children}
      </body>
    </html>
  );
}
