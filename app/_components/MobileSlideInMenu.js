"use client";

import { X } from "lucide-react";
import Link from "next/link";

export default function MobileSlideInMenu({ isOpen, onClose, session }) {
  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Slide-in Panel */}
      <div
        className={`absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 p-6 space-y-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="mb-4 text-gray-600 hover:text-rosewood ml-auto block"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <ul className="flex flex-col space-y-4">
          <li>
            <Link
              href="/cabins"
              className="hover:text-rosewood transition-colors"
              onClick={onClose}
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-rosewood transition-colors"
              onClick={onClose}
            >
              About
            </Link>
          </li>
          <li>
            {session?.user?.image ? (
              <Link
                href="/account"
                className="hover:text-rosewood transition-colors flex items-center gap-4"
                onClick={onClose}
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
                onClick={onClose}
              >
                Guest area
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
