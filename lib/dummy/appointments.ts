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

export type TYPEAPPOINTMENT = {
  id: string
  serial: string
  mode: "in-person" | "online"
  type: "consultation" | "test"
  testName?: string
  doctor: {
    id: string
    name: string
  }
  referredBy?: {
    id: string
    name: string
  }
  purposeOfVisit: string[]
  hospital: {
    id: string
    name: string
    address: string
  }
  status: "completed" | "upcoming" | "missed" | "cancelled" | "rescheduled"
  date: string
  time: string
  patientNote?: string
  doctorNote?: string
}

export const APPOINTMENTS: TYPEAPPOINTMENT[] = [
  {
    id: "cj5enri3eni",
    serial: "0001",
    mode: "online",
    type: "consultation",
    doctor: {
      id: "vrsq4cpp3a",
      name: "Dr. Farhana Khan",
    },
    purposeOfVisit: ["Blood Sugar Management", "Medication Adjustment"],
    hospital: {
      id: "3d1c6f17ff09fdd58b3a1a9139963605",
      name: "Birdem General Hospital",
      address: "122 Kazi Nazrul Islam Avenue, Shahbag, Dhaka-1000",
    },
    status: "completed",
    date: "2024-08-26T18:00:00.000Z",
    time: "2 PM - 6 PM",
  },
  {
    id: "48vuc86yn8u",
    serial: "0002",
    mode: "in-person",
    type: "consultation",
    doctor: {
      id: "tboeb89wndm",
      name: "Dr. Shahnaz Huda",
    },
    purposeOfVisit: ["General Checkup"],
    hospital: {
      id: "f35230226fa2f1d6516aaf554bd1704e",
      name: "Anwar Khan Modern Hospital Dhaka",
      address: "House-17, Road-8, Dhanmondi, Dhaka-1207",
    },
    status: "completed",
    date: "2024-08-17T18:00:00.000Z",
    time: "3 PM - 7 PM",
  },
  {
    serial: "0003",
    id: "9wq4sybg04n",
    mode: "in-person",
    doctor: {
      id: "n30nzuw4mej",
      name: "Dr. Ahsan Habib",
    },
    purposeOfVisit: ["General Checkup", "Blood Sugar Management"],
    type: "test",
    hospital: {
      id: "f733e9e895b4c4ae6dc6aa1ed0a076fd",
      name: "Square Hospital Dhaka",
      address: "18/F, West Panthapath",
    },
    status: "completed",
    date: "2024-09-01T18:00:00.000Z",
    time: "10 AM - 8 PM",
  },
  {
    id: "liqm7c7ivo",
    serial: "0004",
    mode: "in-person",
    type: "consultation",
    doctor: {
      id: "tybjnbup38n",
      name: "Dr. Rezaul Karim",
    },
    referredBy: {
      id: "64rr5j9nyx7",
      name: "Dr. Mahbubur Rahman",
    },
    purposeOfVisit: [
      "General Checkup",
      "Diet and Exercise Counseling",
      "Weight Management",
    ],
    hospital: {
      id: "5c345d85ef73a5572b27168d98a42269",
      name: "Mugda Medical College & Hospital",
      address: "Hazi Kadam Ali Road, Mugda, Dhaka-1214",
    },
    status: "completed",
    date: "2024-09-03T18:00:00.000Z",
    time: "11 AM - 3 PM",
    patientNote: "Feels like my blood hikes like mountaion everyday!",
    doctorNote:
      "Adjust portions according to daily caloric needs. Aim for a balanced diet with a mix of protein, healthy fats, and complex carbohydrates. Medication adjustments should only be made after consulting with your healthcare provider. Always follow the prescribed treatment plan.",
  },
  {
    id: "1cy7xrlv5wo",
    serial: "0005",
    mode: "online",
    type: "test",
    testName: "Hemoglobin (HbA1C)",
    doctor: {
      id: "swc6l0sk2uh",
      name: "Dr. Rafiq Azad",
    },
    purposeOfVisit: [
      "Weight Management",
      "Diet and Exercise Counseling",
      "Medication Adjustment",
    ],
    hospital: {
      id: "04381b26fb57743f044729ab015cbe15",
      name: "Labaid Specialized Hospital",
      address: "House-1, Road-4, Dhanmondi Dhaka-1205",
    },
    status: "completed",
    date: "2024-09-04T18:00:00.000Z",
    time: "3 PM - 7 PM",
  },
  {
    id: "1cy7xrlv5wo",
    serial: "0006",
    mode: "online",
    type: "test",
    testName: "Hemoglobin (HbA1C)",
    doctor: {
      id: "swc6l0sk2uh",
      name: "Dr. Rafiq Azad",
    },
    purposeOfVisit: [
      "Weight Management",
      "Diet and Exercise Counseling",
      "Medication Adjustment",
    ],
    hospital: {
      id: "04381b26fb57743f044729ab015cbe15",
      name: "Labaid Specialized Hospital",
      address: "House-1, Road-4, Dhanmondi Dhaka-1205",
    },
    status: "completed",
    date: "2024-09-04T18:00:00.000Z",
    time: "3 PM - 7 PM",
  },
  {
    id: "asd222rlv5wo",
    serial: "0007",
    mode: "online",
    type: "test",
    testName: "Hemoglobin (HbA1C)",
    doctor: {
      id: "swc6l0sk2uh",
      name: "Dr. Rafiq Azad",
    },
    purposeOfVisit: [
      "Weight Management",
      "Diet and Exercise Counseling",
      "Medication Adjustment",
    ],
    hospital: {
      id: "04381b26fb57743f044729ab015cbe15",
      name: "Labaid Specialized Hospital",
      address: "House-1, Road-4, Dhanmondi Dhaka-1205",
    },
    status: "completed",
    date: "2024-09-11T18:00:00.000Z",
    time: "3 PM - 7 PM",
  },
]
