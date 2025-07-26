"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navigation({ session, isOpen, setIsOpen }) {
  return (
    <nav className="z-10 text-xl w-full bg-transparent px-4 py-3">
      <div className="flex justify-end items-center max-w-7xl mx-auto">
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <Menu size={28} />
        </button>

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
    </nav>
  );
}
