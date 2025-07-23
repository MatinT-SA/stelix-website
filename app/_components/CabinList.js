import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";
import { PAGE_SIZE } from "@/app/_lib/config";
import PaginationControls from "./PaginationControls";

export default async function CabinList({ filter = "all", page = 1 }) {
  const { data: cabins, count } = await getCabins(page, PAGE_SIZE, filter);

  if (!cabins?.length) return <p className="text-gray-500">No cabins found.</p>;

  const totalPages = Math.ceil(count / PAGE_SIZE);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {cabins.map((cabin) => (
          <CabinCard key={cabin.id} cabin={cabin} />
        ))}
      </div>

      {totalPages > 1 && (
        <PaginationControls
          totalPages={totalPages}
          currentPage={page}
          filter={filter}
        />
      )}
    </>
  );
}
