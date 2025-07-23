"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function PaginationControls({
  totalPages,
  currentPage,
  filter,
}) {
  console.log("Rendering PaginationControls", {
    totalPages,
    currentPage,
    filter,
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    if (filter) params.set("capacity", filter);
    router.push(`?${params.toString()}`);
  };

  if (totalPages === 0) return null;

  return (
    <div className="mt-10 flex flex-col items-center gap-2">
      <p className="text-sm text-gray-600">
        Page <span className="font-semibold">{currentPage}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </p>

      <div className="flex gap-2 flex-wrap justify-center">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded border bg-white text-primary-700 border-primary-300 hover:bg-primary-100 disabled:opacity-50"
        >
          ◀ Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => changePage(i + 1)}
            className={`px-3 py-1 rounded border ${
              i + 1 === currentPage
                ? "bg-accent-500 text-white border-accent-500"
                : "bg-white text-primary-700 border-primary-300 hover:bg-primary-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded border bg-white text-primary-700 border-primary-300 hover:bg-primary-100 disabled:opacity-50"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}
