import { BookAppointment, Button, Icon } from "@/components"

export const data = [
  {
    doctorName: "Hobbs Shaw",
    appointmentStart: "6:00PM",
    appointmentEnd: "8:00PM",
    appointmentType: "in person",
    appointmentStatus: "completed",
    appointmentDate: "20 Jul, 2024",
    doctorDesc:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed culpa quae non asperiores totam molestias quibusdam voluptas fugit inventore.",
    doctorImg: "",
    hospitalName: "Popular Hospital, Banani",
    hospitalAddress:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere debitis totam reiciendis reprehenderit rerum quas ipsum, doloribus ea modi velit!",
  },
]

export const appointmentDataKeys = [
  "Doctor",
  "Name",
  "Description",
  "Hospital",
  "Status",
  "Address",
  "Type",
  "Time",
  "Date",
  "Tests",
  "Reports",
]

export default function Appointments() {
  return (
    <div className="flex flex-col">
      {/* book appointment option */}
      <BookAppointment />

      <h4 className="text-xl font-bold">Recent appointments</h4>

      {/* appointments for smaller viewports */}
      <div className="flex flex-col gap-3 mt-3 lg:hidden">
        {[...Array(20)].map((_, idx) => (
          <div
            key={`apppointment_i_${idx}`}
            className="border p-3 shadow-sm rounded-md"
          >
            {/* about doctor */}
            <div className="flex justify-between">
              <div className="max-w-[90%]">
                <h5 className="text-sm font-bold">{data[0].doctorName}</h5>
                <p className="text-xs font-medium line-clamp-1 opacity-80 leading-3">
                  {data[0].doctorDesc}
                </p>
              </div>
              {/* doctor img */}
              <div className="size-10 min-w-10 rounded-full bg-blue-200" />
            </div>

            {/* hospital details */}
            <div>
              <h6 className="text-xs max-w-64 line-clamp-1 font-bold opacity-90">
                {data[0].hospitalName}
              </h6>
              <div className="flex items-center -ml-[3px]">
                <Icon name="pin" className="size-4 min-w-4 opacity-90" />
                <span className="text-xs font-medium opacity-80 max-w-64 line-clamp-1 ml-0.5">
                  {data[0].hospitalAddress}
                </span>
              </div>
            </div>

            {/* appointment details */}
            <div className="flex items-center gap-x-2 mt-1 -ml-0.5">
              <div className="px-3 py-1 text-xs font-semibold opacity-90 rounded-md bg-blue-100">{`${data[0].appointmentStart}-${data[0].appointmentEnd}`}</div>
              <div className="px-3 py-1 text-xs font-semibold opacity-90 rounded-md bg-green-200">
                {data[0].appointmentType}
              </div>
              <div className="ml-auto">
                <span className="text-xs font-semibold opacity-90">
                  {data[0].appointmentDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* appointments for larger viewports */}
      <div className="hidden invisible lg:block lg:visible mt-4">
        <table className="w-full">
          <thead className="bg-zinc-200/50 text-sm">
            <tr>
              {appointmentDataKeys.map((label, idx) => (
                <th
                  className={`p-2 opacity-90 ${
                    idx === 0 && `pl-3 rounded-s-sm`
                  } ${
                    idx === appointmentDataKeys.length - 1 &&
                    `pr-3 rounded-e-sm`
                  }`}
                  key={`appointment-key-i-${idx}`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs lg:text-sm">
            {[...Array(20)].map((_, idx) => (
              <tr
                key={`table-d-c-${idx}`}
                className="divide-y hover:cursor-pointer transition duration-300 hover:bg-zinc-200/50"
              >
                <td className="p-2 rounded-s-sm">
                  <div className="size-10 mx-auto min-w-10 bg-blue-200 rounded-full" />
                </td>
                <td className="p-2 min-w-24 text-center font-bold">
                  {data[0].doctorName}
                </td>
                <td className="p-2 max-w-96">
                  <p className="line-clamp-2 opacity-90">
                    {data[0].doctorDesc}
                  </p>
                </td>
                <td className="p-2">
                  <div className="py-1.5 px-2 rounded-2xl bg-green-200 center">
                    <span className="text-xs font-bold opacity-90">
                      {data[0].appointmentStatus}
                    </span>
                  </div>
                </td>
                <td className="p-2 min-w-24 text-center font-bold">
                  {data[0].hospitalName}
                </td>
                <td className="p-2 max-w-96">
                  <p className="line-clamp-3 opacity-90">
                    {data[0].hospitalAddress}
                  </p>
                </td>
                <td className="p-2">
                  <div className="py-1.5 px-2 min-w-[72px] rounded-2xl bg-green-200 center">
                    <span className="text-xs font-bold opacity-90">
                      {data[0].appointmentType}
                    </span>
                  </div>
                </td>
                <td className="p-2 font-bold text-center">{`${data[0].appointmentStart}-${data[0].appointmentEnd}`}</td>
                <td className="p-2 font-bold text-center">
                  {data[0].appointmentDate}
                </td>
                <td className="p-2">
                  <div className="center">
                    <Button>view</Button>
                  </div>
                </td>
                <td className="p-2 rounded-e-sm">
                  <div className="center">
                    <Button className="py-1 px-1">view</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
