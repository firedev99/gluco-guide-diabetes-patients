"use client"

import Button from "@/components/buttons/Button"
import Icon from "@/components/icons"
import Map from "@/components/map"
import { DoctorType } from "@/lib/dummy/doctors"
import { HOSPITALS } from "@/lib/dummy/hospitals"
import Image from "next/image"
import React from "react"
import SuggestedDoctors from "./SuggestedDoctors"

type Props = {
  doctor: DoctorType
}

export default function DoctorDets({ doctor }: Props) {
  const hospital = HOSPITALS.find((item) => item.id === doctor.hospital.id)

  return (
    <div className="pt-4">
      {/* landing contents */}
      <div className="flex flex-col items-center md:gap-6">
        {/* doctor image */}
        <div className="relative size-24 min-w-24 md:size-56 lg:size-80 md:min-w-56 lg:min-w-80 rounded-full md:rounded-lg ring-2 ring-sky-500 ring-offset-4">
          <Image
            fill
            src={doctor.imgSrc}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={`${doctor.name.toLowerCase().trim()}.jpg`}
            style={{ objectFit: "cover" }}
            priority
            className="rounded-full md:rounded-lg"
          />
          {/* overlay */}
          <div className="min-h-full min-w-full bg-black/25 absolute top-0 right-0 bottom-0 left-0 rounded-full md:rounded-lg" />
        </div>

        {/* doctor details */}
        <div className="mt-3 md:mt-0 md:w-full">
          <div className="flex flex-col items-center text-center">
            <h3 className="text-base font-bold">{doctor.name}</h3>
            <p className="text-sm font-semibold text-cyan-900 opacity-70  leading-tight line-clamp-3">
              {doctor.description}
            </p>
            <h5 className="text-sm mt-1 font-semibold opacity-80">
              {doctor.hospital.name}
            </h5>

            {/* location with icon */}
            <div className="flex items-center -ml-1 opacity-80">
              <Icon name="pin" className="size-5" />
              <span className="ml-1 text-sm font-semibold">
                {doctor.hospital.city}
              </span>
            </div>
          </div>

          <div className="flex gap-3 md:gap-4 items-center mt-4 md:mt-5 max-w-96 mx-auto">
            {/* experice */}
            <div className="w-1/3 border-2 px-2 py-5 xxs:px-4 md:px-5 rounded-lg text-center">
              <h5 className="text-base text-nowrap xxs:text-lg font-bold -mb-2">
                {doctor.experience} years+
              </h5>
              <span className="text-xs xxs:text-sm font-semibold">
                Experience
              </span>
            </div>

            {/* consult controls */}
            <div className="flex flex-col gap-2 w-2/3">
              <Button className="center">Consult online</Button>
              <Button className="center">Call for booking</Button>
            </div>
          </div>
        </div>
      </div>

      {/* hospital details */}
      <div className="mt-6 mb-2">
        <h3 className="text-lg font-bold opacity-90">Hospital details</h3>
        <p className="text-sm leading-tight">{doctor.hospital.address}</p>
      </div>

      {hospital && (
        <React.Fragment>
          {/* map */}
          <Map
            hospitals={[hospital]}
            coordinates={hospital.geometry.coordinates}
          />

          {/* doctors from same hospital */}
          <div>
            <SuggestedDoctors hospitalID={hospital.id} nID={doctor.id}>
              <h3 className="text-lg leading-tight font-bold opacity-90 ml-2 mt-6">
                More doctors from {doctor.hospital.name}
              </h3>
            </SuggestedDoctors>
          </div>

          {/* top rated doctors */}
          <div className="mt-6">
            <h3 className="text-lg leading-tight font-bold opacity-90 ml-2">
              Top rated x GlucoGuide
            </h3>
            <SuggestedDoctors experience={6} />
          </div>
        </React.Fragment>
      )}
    </div>
  )
}
