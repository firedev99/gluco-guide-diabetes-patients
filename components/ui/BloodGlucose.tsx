"use client"

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"
import Icon from "../icons"

const data = [
  {
    name: "12AM",
    glucose: 98,
  },
  {
    name: "9AM",
    glucose: 124,
  },
  {
    name: "3PM",
    glucose: 104,
  },
  {
    name: "6PM",
    glucose: 136,
  },
]

export default function BloodGlucose() {
  return (
    <div className="col-span-2 lg:order-1 lg:row-span-2 border-2 rounded-xl flex py-8 px-4 flex-col">
      <div className="flex flex-col px-4">
        <div className="flex justify-between">
          <h4 className="text-xl font-bold">Blood Glucose</h4>
          <div className="w-10 h-10 bg-neutral-200 rounded-full -mt-4 -mr-4 center transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
            <Icon name="rotated-arrow" className="w-8 h-8" />
          </div>
        </div>
        <div className="self-end ">
          <h2 className="text-4xl font-bold leading-9">Daily</h2>
          <h2 className="text-4xl font-bold leading-9">Averege</h2>
          <div className="flex items-center text-[--primary-red] mt-2">
            <h1 className="text-6xl font-extrabold">128</h1>
            <span className="text-xl font-bold self-end">mg/dl</span>
          </div>
        </div>
      </div>
      <div className="w-full h-64 mt-16 -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={300} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ dy: 16 }} />
            <YAxis domain={[0, 200]} tick={{ dx: -8 }} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="glucose"
              stroke="#8884d8"
              fill="url(#splitColor)"
              activeDot={{ r: 6 }}
            />
            <defs>
              <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="33%" stopColor="#3183FD" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#d9d9d9" stopOpacity={0.5} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
