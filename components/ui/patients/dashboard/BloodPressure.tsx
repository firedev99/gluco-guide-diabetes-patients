"use client"

import { useState } from "react"
import { Icon } from "@/components"
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { diastolicPressureData, systolicPressureData } from "@/lib/dummy/health"

export default function BloodPressure() {
  const [selected, setSelected] = useState<"systolic" | "diastolic">("systolic")

  function showSystolicRecords() {
    if (selected === "systolic") return
    setSelected("systolic")
  }

  function showDiastolicRecords() {
    if (selected === "diastolic") return
    setSelected("diastolic")
  }

  return (
    // blood pressure informations
    <div className="col-span-2 lg:order-5 lg:row-span-2 py-6 md:py-8 px-4 relative border-2 rounded-xl">
      <div className="flex flex-col px-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start -ml-4 md:ml-0">
            <h4 className="text-base md:text-xl font-bold">Blood Pressure</h4>
            <div className="flex items-center mt-1">
              <Icon name="heart-w-pulse" />
              <span className="ml-2 opacity-75 text-sm font-bold">
                Pulse: 78BPM
              </span>
            </div>
          </div>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-200 rounded-full -mt-2 md:-mt-4 -mr-4 center transition duration-300 hover:cursor-pointer hover:bg-neutral-300">
            <Icon name="rotated-arrow" className="w-7 h-7 md:w-8 md:h-8" />
          </div>
        </div>
        <div className="self-end">
          <div className="mt-4 md:mt-0 text-[--primary-red] flex">
            <h2 className="text-4xl xxs:text-5xl md:text-6xl font-extrabold">
              128/73
            </h2>
            <span className="text-sm xxs:text-xl font-bold self-end mb-0.5 xxs:mb-0 md:mb-1 ml-0.5 md:ml-1">
              mmHg
            </span>
          </div>
          <div className="flex flex-col items-end mt-2 xxs:mt-3 md:mt-2">
            <div
              onClick={showSystolicRecords}
              className="flex items-center cursor-pointer mb-1.5 md:mb-2 relative after:absolute after:contents[''] after:left-0 after:-bottom-1 after:h-0.5 after:rounded-sm after:w-full after:bg-[rgb(228,61,61)]/50 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left"
            >
              <div className="w-4 h-4 mr-2 rounded-full bg-[rgb(228,61,61)]/50" />
              <span className="text-sm xs:text-base font-bold opacity-80">
                systolic: 128mmHg
              </span>
            </div>
            <div
              onClick={showDiastolicRecords}
              className="flex items-center cursor-pointer relative after:absolute after:contents[''] after:left-0 after:-bottom-1.5 md:after:-bottom-1 after:h-0.5 after:rounded-sm after:w-full after:bg-[rgb(182,216,127)]/50 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left"
            >
              <div className="w-4 h-4 mr-2 rounded-full bg-[rgb(182,216,127)]/50" />
              <span className="text-sm xs:text-base font-bold mr-0.5 opacity-80">
                diastolic: 73mmHg
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* blood pressure graph */}
      <div className="w-full h-64 mt-8 -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            width={300}
            height={300}
            margin={{
              top: 20,
              right: 10,
              bottom: 20,
              left: -10,
            }}
          >
            <CartesianGrid />
            <XAxis dataKey="day" name="Day" tick={{ dy: 8 }} />
            <YAxis
              type="number"
              dataKey={selected === "systolic" ? "systolic" : "diastolic"}
              name={selected === "systolic" ? "Systolic" : "Diastolic"}
              domain={selected === "systolic" ? [60, 180] : [70, 110]}
              tick={{ dx: -8 }}
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter
              name={
                selected === "systolic"
                  ? "Systolic Pressures"
                  : "Diastolic Pressures"
              }
              data={
                selected === "systolic"
                  ? systolicPressureData
                  : diastolicPressureData
              }
              fill={selected === "systolic" ? "#e43d3d" : "#b6d87f"}
              fillOpacity="0.7"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
