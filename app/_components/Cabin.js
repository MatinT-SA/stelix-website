import Image from "next/image";
import React from "react";

import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

export default function Cabin({ cabin }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[3fr_4fr] gap-10 border border-primary-800 py-4 px-4 sm:px-10 mb-24">
      <div className="relative h-64 sm:h-auto sm:scale-[1.15] sm:-translate-x-3">
        <Image
          fill
          className="object-cover rounded-md"
          src={cabin.image}
          alt={`Cabin ${cabin.name}`}
        />
      </div>

      <div>
        <h3 className="text-primary-100 font-black text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-5 bg-primary-950 p-6 pb-1 sm:translate-x-[-254px] w-full sm:w-[150%]">
          Cabin {cabin.name}
        </h3>

        <p className="text-lg text-primary-300 mb-10">
          <TextExpander>{cabin.description}</TextExpander>
        </p>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{cabin.maxCapacity}</span>{" "}
              guests
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the{" "}
              <span className="font-bold">{cabin.location || "N/A"}</span>
            </span>
          </li>
          <li className="flex gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
