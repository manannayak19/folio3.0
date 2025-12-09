//"use client";
import type { Metadata } from "next";
import {  Courier_Prime,Poppins } from "next/font/google";
import "./globals.css";
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
  title: "Manan Nayak personal website"
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
      </body>
    </html>
  );
}

