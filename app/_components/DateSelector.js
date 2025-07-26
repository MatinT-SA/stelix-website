"use client";

import {
  differenceInDays,
  isPast,
  isSameDay,
  isWithinInterval,
  subDays,
} from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, {
        start: range.from,
        end: subDays(range.to, 1),
      })
    )
  );
}

function DateSelector({ cabin, settings, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange?.to, displayRange?.from);
  const cabinPrice = numNights * (regularPrice - discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between date-selector-wrapper">
      <DayPicker
        className="pt-12 place-self-center"
        mode="range"
        min={minBookingLength + 1}
        max={maxBookingLength}
        selected={displayRange}
        onSelect={setRange}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={2}
        disabled={(curDate) =>
          isPast(curDate) ||
          bookedDates.some((date) => isSameDay(date, curDate))
        }
      />

      <div className="flex items-center justify-between lg:px-8 md:px-3 sm:px-1 xs:px-3 bg-rosewood text-primary-100 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="lg:text-2xl md:text-lg sm:text-md text-xs xs:text-lg">
                ${regularPrice}
              </span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 lg:text-2xl md:text-lg sm:text-md text-xs xs:text-lg">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="lg:text-xl md:text-xl sm:text-md text-xs font-bold uppercase">
                  Total
                </span>{" "}
                <span className="lg:text-2xl md:text-lg sm:text-md text-xs xs:text-lg font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-100 rounded-md hover:bg-primary-100 hover:text-primary-700 transition duration-200 py-2 px-4 text-sm font-semibold"
            onClick={() => resetRange()}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
