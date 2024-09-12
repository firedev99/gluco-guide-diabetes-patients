"use client"

import React from "react"
import { AlignContent, Button, ListContent, Map, Modal } from "@/components"
import { APPOINTMENTS } from "@/lib/dummy/appointments"
import { RECOMMENDATIONS } from "@/lib/dummy/recommendations"
import { format } from "date-fns"
import { HOSPITALS } from "@/lib/dummy/hospitals"
import { firey } from "@/utils"
import { useRouter } from "next/navigation"

type Props = {
  isOpen: boolean
  closeModal: () => void
  selected: string | null
}

export default function UpcomingAppointmentModal({
  isOpen,
  closeModal,
  selected,
}: Props) {
  const router = useRouter()

  const appointment = APPOINTMENTS.find((item) => item.id === selected)

  const hospital = HOSPITALS.find(
    (item) => item.id === appointment?.hospital.id
  )

  const recommendations = RECOMMENDATIONS.find(
    (item) => item.appointmentId === selected
  )

  function handleConsultationAgain(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (typeof window !== "undefined" && appointment) {
      e.preventDefault()
      if (e.ctrlKey) {
        window.open(
          `/hospitals/doctors/profile?id=${appointment.doctor.id}&type=view&popup=t`,
          `_blank`
        )
      } else {
        router.push(
          `/hospitals/doctors/profile?id=${appointment.doctor.id}&type=view&popup=t`
        )
      }
    }
  }

  if (!appointment) return <div />

  return (
    <Modal
      className="h-full sm:h-3/4 w-full max-w-[720px]"
      open={isOpen}
      handler={closeModal}
      secondaryBtn={
        <Button onClick={(e) => handleConsultationAgain(e)}>
          Consult again
        </Button>
      }
    >
      <div className="p-4 flex flex-col gap-3 sm:gap-2 overflow-x-hidden overflow-y-auto custom-scroll">
        <h4 className="-ml-1 text-sm font-bold text-[--secondary-black] px-1.5 py-1 bg-zinc-300 size-fit rounded-md">
          Serial No. #{appointment.serial}
        </h4>

        {/* test name if there is any */}
        {appointment.testName && (
          <AlignContent keys={["Test Name"]} values={[appointment.testName]} />
        )}

        {/* basic doctor information */}
        <AlignContent
          keys={
            appointment.referredBy
              ? ["Assigned Doctor", "Referred By"]
              : ["Assigned Doctor"]
          }
          values={
            appointment.referredBy
              ? [appointment.doctor.name, appointment.referredBy.name]
              : [appointment.doctor.name]
          }
          hrefs={
            appointment.referredBy
              ? [
                  `/hospitals/doctors/profile?id=${appointment.doctor.id}&type=view`,
                  `/hospitals/doctors/profile?id=${appointment.referredBy.id}&type=view`,
                ]
              : [
                  `/hospitals/doctors/profile?id=${appointment.doctor.id}&type=view`,
                ]
          }
        />

        <AlignContent
          keys={["Appointment Date", "Appointed Time"]}
          values={[format(appointment.date, "d/MM/yyy"), appointment.time]}
        />

        {appointment.patientNote && (
          <AlignContent
            keys={["Special Note"]}
            values={[appointment.patientNote]}
          />
        )}

        <AlignContent
          keys={["Visit Reason"]}
          values={[`${appointment.purposeOfVisit.join(", ")}.`]}
        />

        {/* hospital details */}
        <AlignContent
          keys={["Hospital Name", "Hospital Adress"]}
          values={[appointment.hospital.name, appointment.hospital.address]}
          hrefs={[`/hospitals/${appointment.hospital.id}/details?type=view`]}
        />

        {/* hospital map */}
        {hospital && (
          <div>
            <h4 className="font-semibold text-sm opacity-90">Location</h4>
            <Map
              hospitals={[hospital]}
              coordinates={hospital.geometry.coordinates}
              className="sm:h-80"
            />
          </div>
        )}

        {/* recommendations */}
        {appointment.status === "completed" && recommendations && (
          <div className="flex flex-col gap-3">
            {/* medication recommendations */}
            {recommendations.medications && (
              <ListContent
                title="Medications 💊"
                keys={recommendations.medications.medicine.map(
                  (item) => `${item.name}: `
                )}
                values={recommendations.medications.medicine.map(
                  (item) =>
                    `${item.amount} unit at ${firey.makeString(item.times)}.`
                )}
              />
            )}

            {/* dietary recommendations */}
            <ListContent
              title="Dietary Recommendations 🍇"
              keys={[
                ...recommendations.dietary.map((item) => `${item.time}: `),
                `goal: `,
              ]}
              values={[
                ...recommendations.dietary.map(
                  (item) => `Have your food under ${item.energy}kCal.`
                ),
                `${recommendations.energyGoal}kCal(approx)`,
              ]}
            />

            {/* nutrition recommedations */}
            <ListContent
              title="Nutrition Recommendations 🥜"
              keys={recommendations.nutritions.map((item) => `${item.name}:`)}
              values={recommendations.nutritions.map(
                (item) => `${item.amount}g`
              )}
            />

            {/* recommeded ingredients */}
            <ListContent
              title="Recommended Ingredients 🥛"
              keys={recommendations.recommendedIngredients.map((item) => ``)}
              values={recommendations.recommendedIngredients.map(
                (item) => item
              )}
            />

            {/* rescrictied ingredients */}
            <ListContent
              title="Must Avoid ❌"
              keys={recommendations.restrictions.map((item) => ``)}
              values={recommendations.restrictions.map((item) => item)}
            />

            {/* lifestyle recommendations */}
            <ListContent
              title="Lifestyle Recommendations 🌻"
              keys={[`sleep: `, `hydration`]}
              values={[
                `atleast ${recommendations.sleep}hrs daily.`,
                `atleast ${recommendations.hydration} glass of waters daily.`,
              ]}
            />

            {/* recommended exercises */}
            {recommendations.exercises && (
              <ListContent
                title="Exercise Recommendations 🏃🏼‍♂️"
                keys={recommendations.exercises.map((item) => ``)}
                values={recommendations.exercises.map(
                  (item) =>
                    `${item.name} for ${item.duration} at ${firey.makeString(
                      item.time
                    )}.`
                )}
              />
            )}
          </div>
        )}

        {/* doctor note */}
        {appointment.doctorNote && (
          <AlignContent
            keys={["Note ✅"]}
            values={[`${appointment.doctorNote}`]}
            className="mt-4"
          />
        )}

        {/* important info */}
        {appointment.status === "upcoming" && (
          <div className="mt-2 flex flex-col text-sm">
            <h4 className="md:text-base font-bold opacity-70">
              Important info ✅
            </h4>
            <span className="font-medium sm:font-medium sm:opacity-80">
              *Please arrive 10-15 minutes early for your appointment.
            </span>
            <span className="font-medium sm:font-medium sm:opacity-80">
              *If you need to reschedule or cancel, kindly notify us at least 24
              hours in advance.
            </span>
          </div>
        )}
      </div>
    </Modal>
  )
}
