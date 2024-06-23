import { IconNames } from "@/types"
import Icon from "../icons"

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as string[]

const dates = [
  "16-06-2024",
  "17-06-2024",
  "18-06-2024",
  "19-06-2024",
  "20-06-2024",
  "21-06-2024",
  "22-06-2024",
] as string[]

const upcomingAppointments = [
  {
    name: "Consultation",
    time: "1:00PM-8:00PM",
    location: "Banani 27, Prime Diabetics Diagnosis Center",
  },
  {
    name: "Diagnosis Test",
    time: "11:00AM-6:00PM",
    location: "Banani 27, Prime Diabetics Diagnosis Center",
  },
] as { name: string; time: string; location: string }[]

const medications = [
  {
    type: "exercise",
    logo: "human-jogging",
    name: "Exercise",
    time: "8:00AM-9:00AM",
    info: "Jogging for 45mins",
  },
  {
    type: "medicine",
    name: "Metaformin",
    time: "9:00AM-10:00AM",
    info: "Medication",
    recommended: {
      type: "pill",
      amount: 1,
      logo: "tablet-pill",
    },
  },
  {
    type: "recommendation",
    time: "9:30AM-11:00AM",
    logo: "soup-bowl",
    info: "Recommended Breakfast",
    recommended: {
      type: "goal",
      amount: 400,
    },
  },
  {
    type: "exercise",
    logo: "human-cycling",
    name: "Exercise",
    time: "6:30PM-7:30AM",
    info: "Cycling for 60mins",
  },
  {
    type: "medicine",
    name: "Metaformin",
    time: "9:00AM-10:00AM",
    info: "Medication",
    recommended: {
      type: "pill",
      amount: 1,
      logo: "capsule-pill",
    },
  },
] as {
  type: string
  logo?: IconNames
  name?: string
  time: string
  info: string
  recommended?: { type: string; amount: number; logo?: IconNames }
}[]

export default function Recommendations() {
  return (
    // bg-gradient-to-l from-purple-500 to-red-300
    <div className="bg-[#F0F0F0] rounded-xl col-span-2 lg:order-3 lg:col-span-1 lg:row-span-3 py-4">
      {/* upcoming appointments */}
      <div className="flex flex-col w-full h-full">
        {/* upcoming appointment headers */}
        <div className="flex items-center justify-between border-b-2  px-4 pb-3">
          <div className="flex items-center">
            <Icon name="calender" className="w-7 h-7 mr-2 opacity-90" />
            <span className="font-bold opacity-80">Nearest Appointments</span>
          </div>
          <div className="w-9 h-9 rounded-full center transition duration-200 cursor-pointer bg-neutral-200 hover:bg-neutral-300">
            <Icon name="right-arrow" className="w-6 h-6" />
          </div>
        </div>

        {/* upcoming appointment dates */}
        <div className="flex gap-3 lg:gap-4 xl:gap-5 items-center justify-center mt-4">
          {days.map((day, idx) => (
            <div
              key={`p-d-date-${idx}`}
              className={`flex flex-col rounded-2xl items-center justify-center relative ${
                idx === 3 &&
                `before:absolute before:contents[''] before:w-9 before:h-16 before:bg-[--primary-blue] before:rounded-[18px]`
              }`}
            >
              <span
                className={`text-sm font-bold z-[5] opacity-80 mb-2 ${
                  idx === 3 && `opacity-100 text-[--primary-white]`
                }`}
              >
                {day.split("")[0]}
              </span>
              <div
                className={`text-sm font-bold z-[5] cursor-pointer ${
                  idx === 3 && `bg-white w-7 h-7 center rounded-full`
                }`}
              >
                {dates[idx].split("-")[0]}
              </div>
            </div>
          ))}
        </div>
        {/* upcoming appointment details */}
        <div className="px-4 flex flex-col gap-4 mt-8">
          {upcomingAppointments.map(({ name, time, location }, idx) => (
            <div
              key={`appointment_dets_${idx}`}
              className="flex items-center justify-between"
            >
              <div className="flex items-center relative w-1/2 after:absolute after:contents[''] after:w-[3px] after:rounded-sm after:h-9 after:bg-neutral-300 after:right-0 after:-mr-5">
                <div
                  className={`w-5 h-5 min-w-5 rounded-full relative bg-transparent border-2 mr-3 ${
                    idx === 0 ? `border-[#FF881A]` : `border-[#355A38]`
                  } ${
                    idx === 0 &&
                    `before:absolute before:contents[''] before:w-1 before:h-9 before:bg-gradient-to-b before:border-dotted before:border-2 before:opacity-50 before:from-[#FF881A] before:to-[#355A38] before:top-full before:left-1/2 before:-ml-0.5`
                  }`}
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold">{time}</span>
                  <span className="text-xs min-w-36 line-clamp-1 font-bold opacity-80">
                    {location}
                  </span>
                </div>
              </div>
              <div className="text-center w-1/2 font-bold opacity-80 text-sm 2xl:text-base">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
