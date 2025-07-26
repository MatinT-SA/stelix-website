import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

export default async function Reservation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  const session = await auth();

  return (
    <div className="grid gap-x-1 sm:grid-cols-2 grid-cols-1 border border-primary-800 min-h-[400px]">
      <div className="sm:order-1 order-2">
        <DateSelector
          cabin={cabin}
          settings={settings}
          bookedDates={bookedDates}
        />
      </div>

      <div className="sm:order-2 order-1">
        {session?.user ? (
          <ReservationForm user={session.user} cabin={cabin} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </div>
  );
}
