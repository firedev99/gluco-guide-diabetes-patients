"use client"

import {
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import Icon from "../icons"

const data = [
  { systolic: 120, diastolic: 80, day: "Sunday" },
  { systolic: 129, diastolic: 82, day: "Monday" },
  { systolic: 132, diastolic: 86, day: "Tuesday" },
  { systolic: 136, diastolic: 85, day: "Wednesday" },
  { systolic: 140, diastolic: 80, day: "Thursday" },
  { systolic: 131, diastolic: 83, day: "Friday" },
  { systolic: 128, diastolic: 82, day: "Saturday" },
]

export default function BloodPressure() {
  // bg-gradient-to-tr from-pink-200 to-rose-400
  return (
    // blood pressure informations
    <div className="col-span-2 lg:order-5 lg:row-span-2 py-4 px-4 relative gradient-border">
      <div className="flex flex-col px-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">Blood Pressure</h4>
            <div className="flex items-center mt-1">
              <Icon name="heart-w-pulse" />
              <span className="ml-2 -mt-1 opacity-75 text-sm font-bold">
                Pulse: 78BPM
              </span>
            </div>
          </div>
          <div className="w-10 h-10 bg-neutral-200 rounded-full -mt-4 -mr-4 center transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
            <Icon name="rotated-arrow" className="w-8 h-8" />
          </div>
        </div>
        <div className="self-end">
          <div className="text-[--primary-red] flex">
            <h2 className="text-6xl font-extrabold">128/73</h2>
            <span className="text-xl font-bold self-end mb-1 ml-1">mmHg</span>
          </div>
          <div className="flex flex-col items-end mt-2">
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full bg-[rgb(228,61,61)]/50" />
              <span className="font-bold opacity-80">systolic: 128mmHg</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 rounded-full bg-[rgb(182,216,127)]/50" />
              <span className="font-bold opacity-80">diastolic: 73mmHg</span>
            </div>
          </div>
        </div>
      </div>

      {/* blood pressure graph */}
      <div className="w-full h-64 mt-16 -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            width={300}
            height={300}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="day" name="Day" unit="" tick={{ dy: 8 }} />
            <YAxis
              type="number"
              dataKey="systolic"
              name="Systolic"
              domain={[60, 180]}
              tick={{ dx: -8 }}
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="A school" data={data} fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
