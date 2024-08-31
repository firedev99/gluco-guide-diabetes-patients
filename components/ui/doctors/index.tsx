"use client"

import {
  Button,
  AppointmentModal,
  Icon,
  Modal,
  DoctorFilter,
} from "@/components"
import { doctors, DoctorType } from "@/lib/dummy/doctors"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

export type DoctorFilterProps = {
  locations: string[]
  hospitals: string[]
}

export default function Doctors() {
  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<DoctorType | undefined>(undefined)
  const [openFilter, setOpenFilter] = useState<boolean>(false)

  const [values, setValues] = useState<DoctorFilterProps>({
    locations: [],
    hospitals: [],
  })

  // check if the nested object containing array is empty
  function checkIfEmpty() {
    return Object.values(values).every((item) => item.length === 0)
  }

  const modDoctors = checkIfEmpty()
    ? doctors
    : doctors.filter(
        (item) =>
          values.locations.includes(item.hospital.city) ||
          values.hospitals.includes(item.hospital.name)
      )

  function handleModalClose() {
    setOpen(false)
  }

  function handleAppointmentModal(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    doctor: DoctorType
  ) {
    e.preventDefault()
    setOpen(true)
    setActive(doctor)
  }

  return (
    <React.Fragment>
      {/* <div className="flex items-center justify-between"> */}
      <h2 className="text-4xl font-bold leading-9 tracking-tighter">
        Find the best doctors around the city.
      </h2>

      {/* </div> */}
      <div className="flex justify-end -mr-2">
        <button
          className="size-10 rounded-full center hover:bg-zinc-200"
          onClick={() => setOpenFilter(true)}
        >
          <Icon name="filter" className="size-6 opacity-80" />
        </button>
      </div>
      <div className="grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 gap-2 md:gap-3 md:gap-y-4 mt-0 md:mt-1">
        {modDoctors.map((props, idx) => (
          <div
            key={`doctor_l_${idx}`}
            className="p-2 bg-white shadow rounded-lg hover:shadow-md hover:cursor-pointer"
          >
            {/* doctor image */}
            <div className="relative w-full h-72 xxs:h-44 xs:h-64 lg:h-72 xl:h-80">
              <Image
                fill
                src={props.imgSrc}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="doctor.png"
                style={{ objectFit: "cover", filter: "contrast(0.9)" }}
                priority
                className="rounded-lg"
              />
            </div>
            {/* doctor description */}
            <div className="flex flex-col mt-2 ml-1">
              <h4 className="text-sm font-bold">{props.name}</h4>
              <p className="text-xs font-bold opacity-80 leading-4 line-clamp-3 min-h-12">
                {props.description}
              </p>
              <div className="flex items-center opacity-80 mt-2 -ml-1">
                <div>
                  <Icon name="pin" className="size-4 -mt-0.5 xs:mr-0.5" />
                </div>
                <h4 className="text-xs font-bold line-clamp-1">
                  {props.hospital.name}
                </h4>
              </div>
            </div>
            {/* appointment option */}
            <div className="mt-3 md:mt-4">
              <Link href={"/hospitals/doctors/#"}>
                <Button
                  className="w-full h-10 center"
                  onClick={(e) => handleAppointmentModal(e, props)}
                >
                  <span className="block text-xs font-bold opacity-80">
                    book appointment
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        ))}

        {/* filter modal */}
        <DoctorFilter
          active={openFilter}
          handler={() => setOpenFilter(false)}
          values={values}
          setValues={setValues}
        />

        {/* appointment modal */}
        {active && (
          <AppointmentModal
            active={open}
            closeHandler={handleModalClose}
            doctor={active}
            type="profile"
          />
        )}
      </div>
    </React.Fragment>
  )
}
