"use client"

import { TYPEAPPOINTMENT } from "@/lib/dummy/appointments"
import { useState } from "react"
import { SimpleModal, Icon } from "@/components"
import Link from "next/link"
import { format } from "date-fns"

type Props = {
  appointment: TYPEAPPOINTMENT
  openModal: (id: string) => void
}

export default function UpcomingAppointmentComponent({
  appointment,
  openModal,
}: Props) {
  const [openOptions, setOpenOptions] = useState<boolean>(false)

  // toggle see more button controls
  const toggleModal = () => setOpenOptions((prev) => !prev)

  // handle view button click
  function handleViewBtn() {
    openModal(appointment.id)
    setOpenOptions(false)
  }

  return (
    <div className="relative bg-slate-50 dark:bg-neutral-800 px-3 pt-2 md:pt-3 pb-3 md:pb-4 rounded-lg">
      {/* time and type of the appointment */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-2.5">
          <div
            className={`size-3 rounded-full ${
              appointment.status !== "upcoming" &&
              `bg-zinc-300 dark:bg-neutral-600 `
            } ${
              appointment.type === "consultation"
                ? `bg-orange-400`
                : `bg-blue-500`
            }`}
          />
          <span className="mt-0.5 md:mt-0 text-xs md:text-sm font-bold opacity-90">
            {appointment.time}
          </span>
          <div
            className={`text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1  rounded-sm ${
              appointment.status !== "upcoming"
                ? `bg-zinc-400 text-neutral-800/70`
                : appointment.type === "consultation"
                ? `bg-orange-300/80 text-orange-800/70`
                : `bg-blue-300/80 text-blue-950/70`
            }
            `}
          >
            #{appointment.type}
          </div>
        </div>

        <SimpleModal
          open={openOptions}
          closeModal={() => setOpenOptions(false)}
          className="border dark:border-none dark:shadow-[inset_0_0_0_1px_rgba(248,248,248,0.2)] shadow-md rounded-lg right-4 top-12 flex flex-col w-40 bg-[--primary-white] dark:bg-neutral-800"
          content={
            <button
              className={`top-0 relative size-8 center ${
                openOptions && `bg-zinc-200/80 dark:bg-neutral-700`
              } hover:bg-zinc-200/80 dark:hover:bg-neutral-700 rounded-full`}
              onClick={toggleModal}
            >
              <Icon name="ellipsis" className="size-6" />
            </button>
          }
        >
          <button
            className="py-1 size-full hover:bg-zinc-200/70 dark:hover:bg-neutral-700 rounded-md"
            onClick={handleViewBtn}
          >
            <span className="text-sm font-bold">View</span>
          </button>
          <button className="py-1 hover:bg-zinc-200/70 dark:hover:bg-neutral-700 rounded-md size-full">
            <span className="text-sm font-bold">Cancel</span>
          </button>
        </SimpleModal>
      </div>

      {/* appointment details */}
      <div className="ml-0.5 md:ml-[22px] flex flex-col">
        {appointment.testName ? (
          <h4 className="text-sm md:text-base font-bold opacity-95 size-fit">
            {appointment.testName}
          </h4>
        ) : (
          <Link
            className="text-sm md:text-base font-bold opacity-95 hover:opacity-100 hover:text-blue-800 size-fit"
            href={`/hospitals/doctors/profile?id=${appointment.doctor.id}&type=view`}
          >
            {appointment.doctor.name}
          </Link>
        )}
        <Link
          className="text-xs md:text-sm font-semibold leading-4 md:leading-4 size-fit opacity-95 hover:opacity-100 hover:text-blue-800"
          href={`/hospitals/${appointment.hospital.id}/details?type=view`}
        >
          {appointment.hospital.name}
        </Link>
        <p className="text-xs md:text-sm font-semibold opacity-90 leading-3 md:leading-4">
          {appointment.hospital.address}
        </p>
        {appointment.status !== "upcoming" && (
          <div className="flex mt-1.5 flex-col text-xs font-semibold opacity-75">
            <span className="leading-3">{appointment.time}</span>
            <span className="leading-3">
              {format(appointment.date, "d/MM/yyy")}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
