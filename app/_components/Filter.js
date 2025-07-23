"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import FilterButton from "./FilterButton";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    params.set("page", "1");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <FilterButton
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="all"
      >
        All cabins
      </FilterButton>
      <FilterButton
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="small"
      >
        1&mdash;3 guests
      </FilterButton>
      <FilterButton
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="medium"
      >
        4&mdash;7 guests
      </FilterButton>
      <FilterButton
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="large"
      >
        8&mdash;12 guests
      </FilterButton>
    </div>
  );
}
