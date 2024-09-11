"use client"

import { AppoinmentDetailsModal, Appointment } from "@/components"
import { TYPEAPPOINTMENT } from "@/lib/dummy/appointments"
import { format } from "date-fns"
import Link from "next/link"
import React, { useState } from "react"

type Props = {
  appointments: TYPEAPPOINTMENT[]
  appointmentsToday: TYPEAPPOINTMENT[]
  appointmentsTomorrow: TYPEAPPOINTMENT[]
}

const demoFields = [
  "serial",
  "time",
  "status",
  "doctor",
  "hospital",
  "visit reason",
  "type",
  "tests",
  "details",
]

export default function RecentAppointments({
  appointments,
  appointmentsToday,
  appointmentsTomorrow,
}: Props) {
  const [selected, setSelected] = useState<string | null>(null)
  const [openDetailsModal, setOpenDetailsModal] = useState<boolean>(false)

  // handle appointment details modal opening
  function handleOpenDetailsModal(id: string) {
    setSelected(id)
    setOpenDetailsModal(true)
  }

  // handle appointment details modal closing
  function closeDetailsModal() {
    setSelected(null)
    setOpenDetailsModal(false)
  }

  const upcomingAppointments = [...appointmentsToday, ...appointmentsTomorrow]

  // get only the appointments that is not ongoing
  const upcomingAppointmentIds = upcomingAppointments.map((item) => item.id)
  const previousAppointments = appointments.filter(
    (item) => !upcomingAppointmentIds.includes(item.id)
  )

  return (
    <React.Fragment>
      <div className="border rounded-lg overflow-x-auto hidden md:block">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-zinc-200/50">
            <tr>
              {demoFields.map((field, idx) => (
                <th
                  key={`recent-key${idx}`}
                  scope="col"
                  className="px-2 py-2 text-xs font-medium text-gray-500 uppercase text-center [&:nth-child(2)]:text-start [&:nth-child(4)]:text-start [&:nth-child(5)]:text-start [&:nth-child(6)]:text-start"
                  // className="px-2 py-3 first-of-type:px-3 text-center first-of-type:text-start text-xs font-medium text-gray-500 uppercase [&:nth-child(9)]:px-2 [&:nth-child(2)]:text-start [&:nth-child(3)]:text-start"
                >
                  {field}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {previousAppointments.map((item, idx) => (
              <tr key={`recent-table-body-${idx}`}>
                {/* serial */}
                <td className="p-2 text-sm text-center font-semibold text-gray-800 opacity-80">
                  #{item.serial}
                </td>

                {/* time */}
                <td className="p-2 text-sm font-medium text-gray-800 whitespace-nowrap">
                  <div className="flex flex-col">
                    <span>{item.time}</span>
                    <span className="text-xs font-semibold opacity-75">
                      {format(item.date, "d/MM/yyy")}
                    </span>
                  </div>
                </td>

                {/* status */}
                <td className="w-28 p-2 text-xs font-bold text-gray-800/70">
                  <div className="px-2 py-1.5 text-center whitespace-nowrap rounded-lg flex items-center gap-2">
                    <div
                      className={`size-3 rounded-full ${
                        item.status === "upcoming"
                          ? `bg-green-200`
                          : `bg-blue-200`
                      }`}
                    />
                    <span>{item.status}</span>
                  </div>
                </td>

                {/* doctor */}
                <td className="p-2 text-sm font-medium text-gray-800 min-w-32 max-w-36">
                  {item.doctor.name}
                </td>

                <td className="p-2 text-sm font-medium text-gray-800 min-w-36">
                  <div>
                    <Link href={"/"}>{item.hospital.name}</Link>
                    <p className="text-xs font-semibold opacity-80">
                      {item.hospital.address}
                    </p>
                  </div>
                </td>

                {/* visit reason */}
                <td className="min-w-40 p-2 text-xs font-semibold text-gray-800 opacity-80">
                  {item.purposeOfVisit.join(", ")}.
                </td>

                {/* type */}
                <td className={`p-2 w-28 text-xs font-bold text-gray-800/70`}>
                  <div className="px-2 py-1.5 text-center whitespace-nowrap rounded-lg flex gap-2 items-center">
                    <div className="size-3 rounded-full bg-zinc-300" />
                    <span>{item.mode}</span>
                  </div>
                </td>

                <td className="p-2 text-center text-sm font-medium text-gray-800">
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    view
                  </button>
                </td>
                <td className="text-center px-2 py-4  text-sm font-medium text-gray-800">
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={() => handleOpenDetailsModal(item.id)}
                  >
                    view
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-slate-200/50 p-4 pb-5 rounded-lg flex flex-col gap-4 md:hidden">
        {previousAppointments.map((item, idx) => (
          <Appointment
            key={`appointment-today-${idx}`}
            appointment={item}
            openModal={handleOpenDetailsModal}
          />
        ))}
      </div>
      <AppoinmentDetailsModal
        isOpen={openDetailsModal}
        closeModal={closeDetailsModal}
        selected={selected}
      />
    </React.Fragment>
  )
}
