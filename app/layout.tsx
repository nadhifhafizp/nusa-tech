import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Berkarya Untuk Indonesia — Mahreen Indonesia",
  description:
    "Program Mahreen Indonesia mengajak generasi muda untuk berkarya melalui kreativitas dan teknologi demi dampak positif nyata bagi bangsa.",
  openGraph: {
    title: "Berkarya Untuk Indonesia",
    description: "Wujudkan ide besarmu. Indonesia menunggumu.",
    siteName: "Mahreen Indonesia",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}