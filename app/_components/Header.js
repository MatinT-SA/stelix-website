"use client";

import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import { useEffect, useState } from "react";
import MobileSlideInMenu from "./MobileSlideInMenu";

function Header({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="border-b border-primary-900 px-8 py-5">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Logo />
          <Navigation session={session} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>

      <MobileSlideInMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        session={session}
      />
    </>
  );
}

export default Header;
