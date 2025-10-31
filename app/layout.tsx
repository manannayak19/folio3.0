import localFont from 'next/font/local'
import "./globals.css";
import Link from 'next/link';

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"

const bluescreen = localFont({
  src: '../public/bluescreen.ttf'
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [selectedTab, setSelectedTab] = useState(tabs[0])
  return (
    <html lang="en">
      <body
        className={`${bluescreen.className} antialiased flex flex-row`}
      >
        <div>
          <div className='flex'>
            <aside className='w-50 p-4 border-r'>
              
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
        <div className="flex-1 p-5">{children}</div>
      </body>
    </html>
  );
}
