"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/_components/Header"; // move Header here

export default function LayoutBackgroundWrapper({ children, session }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const backgroundImage = isHome ? "/bg.jpg" : "/bg-main-2.jpg";

  return (
    <div
      className="relative bg-no-repeat bg-cover bg-center min-h-screen antialiased flex flex-col 3xl:pt-10 text-primary-100"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {!isHome && (
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
      )}
      <Header session={session} isHome={isHome} />
      {children}
    </div>
  );
}
