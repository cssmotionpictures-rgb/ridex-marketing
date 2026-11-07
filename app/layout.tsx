import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RideX Nexus | The Ultimate Web3 Super App",
  description: "Trade crypto, book rides, stream movies, and manage your Web3 wallet. RideX Nexus combines Bambi FX, Monarch, and FX Beast into one enterprise ecosystem.",
  keywords: ["Web3 super app", "Crypto trading", "Ride hailing", "Bambi FX", "FX Beast", "CrixCoin", "RideX"],
  openGraph: {
    title: "RideX Nexus",
    description: "The ultimate Web3 ecosystem. Ride, Trade, Stream, and Pay.",
    url: "https://ridex-crixcoin.com",
    siteName: "RideX Nexus",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
