"use client"

import localFont from 'next/font/local'
import "./globals.css";
import Link from 'next/link';

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"

const bluescreen = localFont({
  src: '../public/bluescreen.ttf'
})

const hackedcrt = localFont({
  src : '../public/hackedcrt.ttf'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //const [selectedTab, setSelectedTab] = useState(tabs[0])
  return (
    <html lang="en">
      <body
        className={`${bluescreen.className} antialiased flex flex-row`}
      >
        <div>
          <div className='flex'>
            <aside className='w-min p-3 text-2xl'>
              
              <nav>
                <ul>
                  <Link href={"/about"}>about</Link>
                </ul>
                <ul>
                  <Link href={"/resume"}>resume</Link>
                </ul>
                <ul>
                  <Link href={"/contact"}>contact</Link>
                </ul>
                <ul>
                  <Link href={"/good-reads"}>good reads</Link>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
        <div className="flex w-screen items-center-safe justify-center">{children}</div>
        <footer className={`${hackedcrt.className}`}>portfolio</footer>
      </body>
    </html>
  );
}
