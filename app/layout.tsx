//"use client";

import { Bitcount_Grid_Single } from "next/font/google";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const btc = Bitcount_Grid_Single({
  weight: "500",
});

const courier = Courier_Prime({
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${btc.className}`}>
        <div>
          <div className="">
            <aside className="m-3">
              <nav className="transition delay-150 duration-300 ease-in ">
                <ul className=" flex flex-row gap-6 p-3 border-b-2 md:text-2xl text-xl">
                  <li className="hover:-translate-y-1 hover:scale-110">
                    <Link href={"/"}>home</Link>
                  </li>
                  <li className="hover:-translate-y-1 hover:scale-110">
                    <Link href={"/resume"}>resume</Link>
                  </li>
                  {/* <li className="hover:-translate-y-1 hover:scale-110">
                    <Link href={"/contact"}>contact</Link>
                  </li> */}
                  <li className="hover:-translate-y-1 hover:scale-110">
                    <Link href={"/good-reads"}>good reads</Link>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
        <main className={` ${courier.className} p-4 m-2 md:h-screen`}>
          {children}
        </main>
      </body>
    </html>
  );
}
