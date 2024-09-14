"use client"

import { useState } from "react"
import {
  Button,
  Checkbox,
  CustomSearchbox,
  DoctorDates,
  Map,
  Modal,
  RadioInput,
} from "@/components"
import { firey } from "@/utils"
import { HOSPITALS, HospitalType } from "@/lib/dummy/hospitals"
import { doctors, DoctorType } from "@/lib/dummy/doctors"
import {
  AppointmentCreationProps,
  BookingModalProps,
  LocationType,
} from "@/types"
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  startOfMonth,
  startOfToday,
} from "date-fns"
import { appointmentModes, appointmentPurposes } from "@/lib/dummy/appointments"

type DetailsType = DoctorType | HospitalType | LocationType

type Props = {
  isOpen: boolean
  closeHandler: () => void
}

// get current day
const today = startOfToday()

// get the first day of the current month
const firstDayCurrentMonth = startOfMonth(today)

// loop through the current month and get a preview of the dates
const previewDays = eachDayOfInterval({
  start: startOfMonth(firstDayCurrentMonth),
  end: endOfMonth(firstDayCurrentMonth),
})

const locations = firey
  .getSpecificArr(HOSPITALS.map((item) => item.city))
  .map((city, idx) => ({ id: `city-${idx}`, cityName: city }))

export default function BookAppointmentModal({ isOpen, closeHandler }: Props) {
  const [selected, setSelected] = useState<BookingModalProps>({
    doctor: "",
    location: "",
    hospital: "",
  })

  const [details, setDetails] = useState<AppointmentCreationProps>({
    doctor: selected.doctor,
    hospital: selected.hospital,
    address: "",
    appointmentMode: "In-Person Consultation",
    purposeOfVisit: ["General Checkup"],
    selectedDate: today,
    selectedMonth: format(today, "MMMM"),
    selectedMonthDays: previewDays,
    notes: "",
    availableDays: [],
    time: "",
  })

  const [mapDetails, setMapDetails] = useState<HospitalType | null>(null)

  // handle map filter based on locations
  const filteredHospitals = HOSPITALS.filter((item) =>
    item.city.toLowerCase().includes(selected.location.toLowerCase())
  )

  // handle doctor on change handler
  function handleDoctorChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected((prev) => ({ ...prev, doctor: e.target.value }))
  }

  // handle doctor selection
  function handleDoctorSelection(details: DetailsType) {
    if (firey.isDoctorType(details)) {
      // find the selected doctors hospital details
      const hospital = HOSPITALS.find((item) => item.id === details.hospital.id)

      // set map details
      if (hospital) setMapDetails(hospital)

      // set selected items details
      setSelected((prev) => {
        return {
          ...prev,
          doctor: details.name,
          hospital: details.hospital.name,
          location: details.hospital.city,
        }
      })

      // set available dates if a doctor is selected
      setDetails((prev) => ({
        ...prev,
        doctor: details.name,
        hospital: details.hospital.name,
        address: details.hospital.address,
        availableDays: details.availableTimes.split(":")[0].split(", "),
        time: details.availableTimes.split(": ")[1],
      }))
    }
  }

  // handle hospital on change handler
  function handleHospitalChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected((prev) => ({ ...prev, hospital: e.target.value }))
  }

  // handle hospital selection
  function handleHospitalSelection(details: DetailsType) {
    if (firey.isHospitalType(details)) {
      // set selected hospitals map details
      setMapDetails(details)
      setSelected((prev) => {
        // do nothing if the selected item was selected again
        if (prev.hospital.toLowerCase() === details.name.toLowerCase())
          return { ...prev }
        // select the hospital and automate city after selection
        return {
          ...prev,
          doctor: "",
          hospital: details.name,
          location: details.city,
        }
      })
    }
  }

  // handle hospital location on change handler
  function handleLocationChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected((prev) => ({ ...prev, location: e.target.value }))
  }

  // handle hospital location selection
  function handleLocationSelection(details: DetailsType) {
    if (firey.isHospitalLocationType(details)) {
      setSelected((prev) => {
        // do nothing if the selected item was selected again
        if (prev.location.toLowerCase() === details.cityName.toLowerCase())
          return { ...prev }
        // select the city name or location
        return {
          ...prev,
          doctor: "",
          hospital: "",
          location: details.cityName,
        }
      })
    }
  }

  // reset doctor and hospital selection
  const clearAll = () => {
    setMapDetails(null)
    setSelected((prev) => ({ ...prev, doctor: "", hospital: "", location: "" }))
  }

  // reset location selection
  const clearLocation = () => {
    setMapDetails(null)
    setSelected((prev) => ({ ...prev, location: "" }))
  }

  // handle month selection
  function handleMonthSelection(month: string) {
    const newDate = new Date(`${month} 1 ${format(today, "y")}`)
    const newPreviewDays = eachDayOfInterval({
      start: startOfMonth(newDate),
      end: endOfMonth(newDate),
    })

    setDetails((prev) => ({
      ...prev,
      selectedMonth: month,
      selectedMonthDays: newPreviewDays,
    }))
  }

  // handle date selection
  function handleDateSelection(date: Date, month?: string) {
    const newPreviewDays = eachDayOfInterval({
      start: startOfMonth(date),
      end: endOfMonth(date),
    })
    setDetails((prev) => ({
      ...prev,
      selectedDate: date,
      selectedMonth: month ? month : prev.selectedMonth,
      selectedMonthDays: month ? newPreviewDays : prev.selectedMonthDays,
    }))
  }

  // handle appointment mode
  function handleAppointmentMode(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails((prev) => ({
      ...prev,
      appointmentMode: e.target.value,
    }))
  }

  // handle purpose selection
  function handlePurposeOfVisit(e: React.ChangeEvent<HTMLInputElement>) {
    setDetails((prev) => {
      const value = e.target.value
      const exist = prev.purposeOfVisit.includes(value)
      const purposesOfVisit = exist
        ? prev.purposeOfVisit.filter((item) => item !== value)
        : prev.purposeOfVisit.concat(value)
      return { ...prev, purposeOfVisit: purposesOfVisit }
    })
  }

  // handle special notes
  function handleSpecialNotes(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setDetails((prev) => ({ ...prev, notes: e.target.value }))
  }

  return (
    <Modal
      open={isOpen}
      handler={closeHandler}
      className="h-full sm:h-3/4 w-full max-w-[720px]"
      secondaryBtn={
        <Button
          disabled={selected.doctor.length === 0}
          onClick={() => console.log(details)}
        >
          Confirm
        </Button>
      }
    >
      <div className="flex flex-col gap-3 p-4 overflow-x-hidden overflow-y-auto custom-scroll">
        <div className="mb-3">
          <h2 className="text-lg font-semibold">Book an Appointment</h2>
          <p className="text-sm font-medium opacity-85">
            Choose a doctor and schedule your appointment with just a few taps.
            Select a time that works best for you!
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold opacity-85 uppercase mb-1">
            Doctor
          </h4>
          <CustomSearchbox
            name="doctors"
            containerClassName="z-30"
            selection={handleDoctorSelection}
            onChange={handleDoctorChange}
            contents={doctors}
            value={selected.doctor}
            clear={clearAll}
          />
        </div>

        {/* hospital */}
        <div>
          <h4 className="text-xs font-bold opacity-85 uppercase mb-1">
            Hospital
          </h4>
          <CustomSearchbox
            name="hospitals"
            containerClassName="z-30"
            selection={handleHospitalSelection}
            onChange={handleHospitalChange}
            contents={HOSPITALS}
            value={selected.hospital}
            clear={clearAll}
          />
        </div>

        {/* location */}
        <div>
          <h4 className="text-xs font-bold opacity-85 uppercase mb-1">
            Location
          </h4>
          <CustomSearchbox
            name="locations"
            containerClassName="z-10"
            selection={handleLocationSelection}
            onChange={handleLocationChange}
            contents={locations}
            value={selected.location}
            clear={clearLocation}
          />
        </div>

        {/* hospital map */}
        <div className="mt-2.5">
          <h4 className="text-xs font-bold opacity-75 uppercase mb-1 max-w-80">
            {mapDetails ? mapDetails.address : `GlucoGuide X Hospitals`}
          </h4>
          <Map
            hospitals={mapDetails ? [mapDetails] : filteredHospitals}
            coordinates={
              mapDetails ? mapDetails.geometry.coordinates : [90.4, 23.79]
            }
            className="sm:h-72"
            zoom={10}
            disableResetBtn
          />
        </div>

        {/* about doctor's availablity */}
        {details.availableDays.length !== 0 && (
          <>
            <div>
              <h4 className="text-xs font-bold opacity-75 uppercase mb-1 max-w-80">
                Consultation Hour
              </h4>
              <p className="text-sm font-semibold opacity-75">
                {details.time} on every{" "}
                {firey.makeString(details.availableDays)}.
              </p>
            </div>
            {/* booking dates */}
            <div className="mt-3">
              <DoctorDates
                values={details}
                dateSelection={handleDateSelection}
                monthSelection={handleMonthSelection}
              />
            </div>
          </>
        )}

        {/* appointment selection options */}
        <div className="w-full flex flex-col mt-3">
          {/* appointment mode */}
          <fieldset>
            <legend className="text-sm  font-semibold md:font-bold opacity-70">
              Appointment mode
            </legend>
            <div className="flex flex-col mt-1 text-sm">
              {appointmentModes.map((item, idx) => (
                <RadioInput
                  key={`mealPerDayOpts-${idx}`}
                  name={`appointment_mode_${idx}`}
                  value={item}
                  active={details.appointmentMode === item}
                  onChange={handleAppointmentMode}
                />
              ))}
            </div>
          </fieldset>

          {/* purpose of visit */}
          <fieldset className="mt-3">
            <legend className="text-sm  font-semibold md:font-bold opacity-70">
              Purpose of visit
            </legend>

            {/* purpose of visit options */}
            <div className="flex flex-wrap mt-2 -ml-1 gap-2">
              {appointmentPurposes.map((item, idx) => (
                <Checkbox
                  key={`alergyOpt-${idx}`}
                  name={`purpose_of_visit_${idx}_option`}
                  value={item}
                  active={details.purposeOfVisit.includes(item)}
                  onChange={handlePurposeOfVisit}
                  direction="left"
                  // className="-ml-5 border-none has-[input:checked]:bg-transparent"
                />
              ))}
            </div>
          </fieldset>

          {/* special notes */}
          <div className="mt-3">
            <label
              htmlFor="notes"
              className="text-sm  font-semibold md:font-bold opacity-70"
            >
              Special notes
            </label>
            <textarea
              rows={4}
              className="mt-2 p-2 w-full text-sm text-gray-900 bg-gray-50 dark:bg-neutral-700 rounded-lg border border-gray-300 dark:border-neutral-400 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Write special notes here..."
              value={details.notes}
              onChange={handleSpecialNotes}
            ></textarea>
          </div>

          {/* appointment details */}
          {selected.doctor.length !== 0 && (
            <div className="mt-3 flex flex-col">
              <h4 className="text-sm md:text-base font-bold opacity-70">
                Appointment details
              </h4>
              <div className="text-sm font-medium">
                <span className="font-bold">Name: </span>
                <span>{selected.doctor}</span>
              </div>
              <div className="text-sm font-medium">
                <span className="font-bold">Date: </span>
                <span>
                  {format(details.selectedDate, "do MMMM, yyy")} (
                  {format(details.selectedDate, "eeee")})
                </span>
              </div>
              <div className="text-sm font-medium">
                <span className="font-bold">Time: </span>
                <span>{details.time}</span>
              </div>
              <div className="text-sm font-medium">
                <span className="font-bold">Purpose of visit: </span>
                <span>{details.purposeOfVisit.join(", ")}.</span>
              </div>
              <div className="text-sm font-medium">
                <span className="font-bold">Hospital: </span>
                <span>{selected.hospital}.</span>
              </div>
              {mapDetails && (
                <div className="text-sm font-medium">
                  <span className="font-bold">Location: </span>
                  <span>{mapDetails.address}.</span>
                </div>
              )}
              {details.notes.length !== 0 && (
                <div className="text-sm font-medium">
                  <span className="font-bold">Special note: </span>
                  <span>{details.notes}</span>
                </div>
              )}
            </div>
          )}

          {/* important info */}
          <div className="mt-4 flex flex-col text-sm">
            <h4 className=" font-bold opacity-70">Important info</h4>
            <span className="font-medium sm:font-medium sm:opacity-80">
              *Please arrive 10-15 minutes early for your appointment.
            </span>
            <span className="font-medium sm:font-medium sm:opacity-80">
              *If you need to reschedule or cancel, kindly notify us at least 24
              hours in advance.
            </span>
          </div>
        </div>
      </div>
    </Modal>
  )
}
