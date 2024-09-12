import {
  BookAppointment,
  RecentAppointments,
  UpcomingAppointments,
} from "@/components"
import { APPOINTMENTS } from "@/lib/dummy/appointments"
import { isSameDay, startOfToday, startOfTomorrow } from "date-fns"
import React from "react"

const today = startOfToday()
const tomorrow = startOfTomorrow()

export default function AppointmentPage() {
  // get all the appointments for today
  const appointmentsToday = APPOINTMENTS.filter((item) =>
    isSameDay(today, item.date)
  )

  // get all the appointments for tomorrow
  const appointmentsTomorrow = APPOINTMENTS.filter((item) =>
    isSameDay(tomorrow, item.date)
  )

  const upcomingAppointments = [...appointmentsToday, ...appointmentsTomorrow]

  return (
    <div className="pb-8">
      {/* upcoming appointments */}
      <div className="flex md:gap-4">
        <div
          className={
            upcomingAppointments.length > 0
              ? `w-full md:w-1/3 md:min-w-96`
              : `hidden`
          }
        >
          <UpcomingAppointments
            appointmentsToday={appointmentsToday}
            appointmentsTomorrow={appointmentsTomorrow}
          />
        </div>
        <div
          className={
            upcomingAppointments.length > 0
              ? `md:w-2/3 md:bg-pattern rounded-lg mb-4 pb-16 md:border`
              : `ml-auto`
          }
        >
          <BookAppointment
            className={
              upcomingAppointments.length > 0 ? `md:center md:top-1/2` : `mb-4`
            }
          />
        </div>
      </div>

      {/* recent appointments */}
      {APPOINTMENTS.length > 0 && (
        <React.Fragment>
          <h1
            className={`${
              upcomingAppointments.length > 0 && `mt-2`
            } ml-2 mb-3 text-2xl font-bold`}
          >
            Recent Appointments
          </h1>
          <RecentAppointments
            appointments={APPOINTMENTS}
            appointmentsToday={appointmentsToday}
            appointmentsTomorrow={appointmentsTomorrow}
          />
        </React.Fragment>
      )}
    </div>
  )
}
