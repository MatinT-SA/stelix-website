"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ children, pendingLable }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-rosewood-500 rounded-md px-8 py-4 text-primary-100 font-semibold hover:bg-rosewood-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingLable : children}
    </button>
  );
}
