"use client";

import { X } from "lucide-react";
import Link from "next/link";

export default function MobileSlideInMenu({ isOpen, onClose, session }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-300 md:hidden ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="absolute z-40 inset-0 bg-black/50" onClick={onClose} />

      <div
        className={`absolute top-0 right-0 h-full z-50 w-56 bg-primary-700 shadow-lg transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-primary-100 hover:text-rosewood"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-start mt-10 gap-6 space-y-6 text-primary-100">
          <Link
            href="/cabins"
            className="hover:text-rosewood transition-colors"
            onClick={onClose}
          >
            Cabins
          </Link>
          <Link
            href="/about"
            className="hover:text-rosewood transition-colors"
            onClick={onClose}
          >
            About
          </Link>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-rosewood transition-colors flex items-center gap-3"
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
        </div>
      </div>
    </div>
  );
}
