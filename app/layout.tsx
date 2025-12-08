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

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </head>
//       <body className={`${pop.className}`}>
//         <div>
//             <aside className="m-3">
//               <nav className="">
//                 <ul className=" flex flex-row gap-6 p-3 border-b-2 md:text-2xl text-xl">
//                   <li className="hover:-translate-y hover:scale-115 transition delay-100 duration-115 ease-in">
//                     <Link href={"/"}>home</Link>
//                   </li>
//                   <li className="hover:-translate-y hover:scale-115 transition delay-100 duration-115 ease-in">
//                     <Link href={"/resume"}>resume</Link>
//                   </li>
//                   {/* <li className="hover:-translate-y-1 hover:scale-110">
//                     <Link href={"/contact"}>contact</Link>
//                   </li> */}
//                   <li className="hover:-translate-y hover:scale-115 transition delay-100 duration-115 ease-in">
//                     <Link href={"/good-reads"}>good reads</Link>
//                   </li>
//                 </ul>
//               </nav>
//             </aside>
//         </div>
//         <main className={` ${courier.className} p-4 m-2 md:h-screen`}>
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }
