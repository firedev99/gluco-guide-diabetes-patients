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
import { Icon } from "@/components"
import { bloodGlucoseData } from "@/lib/dummy/health"

export default function BloodGlucose() {
  return (
    <div className="col-span-2 lg:order-1 lg:row-span-2 border-2  dark:border-neutral-600 rounded-xl flex py-6 md:py-8 px-4 flex-col">
      <div className="flex flex-col px-4">
        <h4 className="text-base md:text-xl font-bold -ml-4 md:ml-0">
          Blood Glucose
        </h4>
        <div className="self-end mt-4 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold leading-8 md:leading-9">
            Daily
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold leading-8  md:leading-9">
            Average
          </h2>
          <div className="flex items-center text-[--primary-red] mt-1 md:mt-2">
            <h1 className="text-5xl md:text-6xl font-extrabold">128</h1>
            <span className="text-xl font-bold self-end">mg/dl</span>
          </div>
        </div>
      </div>
      <div className="w-full h-56 md:h-64 mt-8 md:mt-16 -ml-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={300} height={300} data={bloodGlucoseData}>
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
