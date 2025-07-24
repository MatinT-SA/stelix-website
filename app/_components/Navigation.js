"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // install with: npm install lucide-react

export default function Navigation({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-10 text-xl w-full bg-transparent shadow-md px-4 py-3">
      {/* Top Bar */}
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-16">
          <li>
            <Link
              href="/cabins"
              className="hover:text-rosewood transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-rosewood transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-rosewood transition-colors flex items-center gap-4"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  referrerPolicy="no-referrer"
                />
                <span>{session.user.name}</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-rosewood transition-colors"
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col mt-4 space-y-4 max-w-7xl mx-auto">
          <li>
            <Link
              href="/cabins"
              className="hover:text-rosewood transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-rosewood transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-rosewood transition-colors flex items-center gap-4"
                onClick={() => setIsOpen(false)}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={session.user.image}
                  alt={session.user.name || "User"}
                  referrerPolicy="no-referrer"
                />
                <span>{session.user.name}</span>
              </Link>
            ) : (
              <Link
                href="/account"
                className="hover:text-rosewood transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
}
