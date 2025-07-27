"use client";

import { useState } from "react";
import SideNavigation from "@/app/_components/SideNavigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen md:grid md:grid-cols-[16rem_1fr]">
      <div className="flex md:hidden items-center justify-between px-4 py-3 border-b border-primary-900 bg-primary-950">
        <button onClick={() => setIsSidebarOpen(true)}>
          <Bars3Icon className="h-6 w-6 text-primary-200" />
        </button>
        <span className="text-primary-200 font-semibold">Account</span>
      </div>

      <div
        className={`
          fixed z-40 top-0 left-0 h-full w-64 bg-primary-950 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0 md:block border-r border-primary-900
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 md:hidden border-b border-primary-800">
          <span className="text-primary-200 font-semibold">Menu</span>
          <button onClick={() => setIsSidebarOpen(false)}>
            <XMarkIcon className="h-6 w-6 text-primary-200" />
          </button>
        </div>
        <SideNavigation onNavigate={() => setIsSidebarOpen(false)} />
      </div>

      <div className="p-4">{children}</div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
