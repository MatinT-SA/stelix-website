import DeleteReservation from "@/app/_components/DeleteReservation";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins = {},
  } = booking;

  const name = cabins?.name ?? "Unknown cabin";
  const image = cabins?.image ?? "/fallback.jpg";

  return (
    <div className="flex flex-col md:flex-row border border-primary-800 rounded-md overflow-hidden">
      {/* Image */}
      <div className="relative h-52 md:h-auto md:w-52 flex-shrink-0">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-b md:border-b-0 md:border-r border-primary-800"
        />
      </div>

      {/* Content */}
      <div className="flex-grow px-4 py-3 flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
          <h3 className="text-lg md:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-6 md:h-7 px-2 md:px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-6 md:h-7 px-2 md:px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-base md:text-lg text-primary-300 mt-2">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-wrap gap-4 mt-auto items-baseline text-sm md:text-base mt-4">
          <p className="text-lg font-semibold text-rosewood">${totalPrice}</p>
          <p className="text-primary-300 hidden md:block">&bull;</p>
          <p className="text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto md:ml-0 text-xs md:text-sm text-primary-400 mt-1 md:mt-0">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col border-t md:border-t-0 md:border-l border-primary-800 w-full md:w-[100px]">
        {!isPast(startDate) && (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-3 py-2 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation onDelete={onDelete} bookingId={id} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
