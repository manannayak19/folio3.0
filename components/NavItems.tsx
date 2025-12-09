// "use client";

// import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";
// import { NAV_ITEMS } from "../app/lib/constants";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { cn } from "@/lib/utils";

// const NavItems = () => {
//   const pathname = usePathname();

//   const isActive = (path: string) => {
//     if (path === "/") return pathname === "/";

//     return pathname.startsWith(path);
//   };

//   return (
//     <NavigationMenu>
//       <NavigationMenuList className="flex-wrap">
//         {NAV_ITEMS.map((item) => (
//           <NavigationMenuItem key={item.href}>
//             <Link
//               href={item.href}
//               className={cn(
//                 "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
//                 isActive(item.href) ? "bg-accent/50 text-accent-foreground" : ""
//               )}
//             >
//               {item.label}
//             </Link>
//           </NavigationMenuItem>
//         ))}
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// };

// export default NavItems;
