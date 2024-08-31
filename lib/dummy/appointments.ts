import { IconNames } from "@/types"

type AppointmentProps = {
  name: string
  type: string
  start: string
  end: string
  location: string
}
export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as string[]

export const dates = [
  "16-06-2024",
  "17-06-2024",
  "18-06-2024",
  "19-06-2024",
  "20-06-2024",
  "21-06-2024",
  "22-06-2024",
] as string[]

export const upcomingAppointments = [
  {
    name: "Consultation",
    type: "appointment",
    start: "1:00PM",
    end: "8:00PM",
    location: "Banani 27, Prime Diabetics Diagnosis Center",
  },
  {
    name: "Diagnosis Test",
    type: "test",
    start: "11:00AM",
    end: "6:00PM",
    location: "Banani 27, Prime Diabetics Diagnosis Center",
  },
] as AppointmentProps[]

export const appointmentModes = [
  "In-Person Consultation",
  "Telemedicine (Video/Phone)",
]

export const appointmentPurposes = [
  "General Checkup",
  "Blood Sugar Management",
  "Insulin Pump or CGM Setup",
  "Medication Adjustment",
  "Diet and Exercise Counseling",
  "Complication Screening",
  "Thyroid Function Evaluation",
  "Weight Management",
]
