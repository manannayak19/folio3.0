//"use client";
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import {  Courier_Prime,Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

//import Link from "next/link";

// const btc = Bitcount_Grid_Single({
//   weight: "500",
// });

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["700"],
});

const courier = Courier_Prime({
  variable: "--font-courier-prime",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Manan Nayak 3.0"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${poppinsFont.variable} ${courier.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

