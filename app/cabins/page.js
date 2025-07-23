import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div>
      <h1 className="text-4xl mb-5 text-rosewood font-medium">
        Find Your Perfect Cabin
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Experience the perfect blend of comfort and nature in our luxury cabins,
        surrounded by tranquil wilderness. Wake up to stunning views, explore
        peaceful forests, or unwind in your private hot tub beneath a starry
        sky. Your peaceful escape awaits a place to recharge, explore, and savor
        every moment.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={`${filter}-${currentPage}`}>
        <CabinList filter={filter} page={currentPage} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
