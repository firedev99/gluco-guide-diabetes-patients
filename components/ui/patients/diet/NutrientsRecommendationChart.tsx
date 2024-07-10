"use client"

import { useState } from "react"
import Image from "next/image"
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts"
import Icon from "@/components/icons"
import { nutrientsChartData } from "@/lib/dummy/diets"

// recharts component
const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? "start" : "end"

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={6}
        textAnchor="middle"
        fill="#e1e1e1"
        fontWeight="bold"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#0f7ce2"
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill="#e1e1e1"
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#e1e1e1"
      >
        {payload.name}
      </text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#e1e1e1"
      >
        &#8212; {value}g &#x2022; {(percent * 100).toFixed(2)}%
      </text>
    </g>
  )
}

export default function NutrientsRecommendationChart() {
  const [activeNutrient, setActiveNutrient] = useState<number>(2)

  function handleMouseEnter(_: any, index: number, e: React.MouseEvent) {
    setActiveNutrient(index)
  }

  return (
    <div>
      <div className="mt-5 relative overflow-hidden w-full rounded-xl bg-gradient-to-b from-[#8FAEFF] to-[#5574E1] min-h-[324px] lg:mt-3.5 center min-[425px]:block lg:w-[546px]">
        {/* food diet chart */}
        <div className="hidden min-[425px]:block w-full h-[286px] relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart className="-ml-12" width={400} height={400}>
              <Pie
                activeIndex={activeNutrient}
                activeShape={renderActiveShape}
                data={nutrientsChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#efe6e666"
                dataKey="value"
                onMouseEnter={handleMouseEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex w-40 items-center flex-col text-[--primary-white] mt-0 ml-0 mr-0 mb-0 min-[425px]:-mt-28 min-[425px]:mb-4 min-[425px]:ml-auto min-[425px]:mr-2">
          {/* -mt-28 ml-auto mr-2 mb-4 */}
          <div>
            <div className="flex flex-col mb-3">
              {nutrientsChartData.map((nutrient, idx) => (
                <span
                  className="text-nowrap text-sm font-bold"
                  key={`nutrient_${idx}`}
                >
                  &#x2022; {nutrient.name} &#8212; {nutrient.value}g
                </span>
              ))}
            </div>
          </div>
          <div className="flex -ml-4">
            <Icon name="fire" className="w-8 h-8 mr-0.5" />
            <h3 className="text-2xl font-extrabold">2100 Kcal</h3>
          </div>

          <span className="font-semibold text-sm opacity-70 ml-2">
            Goal &#x2022; Today
          </span>
        </div>

        {/* bg images */}
        <div className="absolute top-0 -left-12">
          <div className="relative w-56 h-56 rotate-[55deg] mix-blend-luminosity opacity-25">
            <Image
              fill
              src="https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-stethoscope.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="doctor.png"
              style={{ objectFit: "contain", filter: "contrast(0.9)" }}
              priority
            />
          </div>
        </div>
        <div className="absolute -bottom-14 -rotate-6 -right-10">
          <div className="relative w-64 h-64 mix-blend-luminosity opacity-10">
            <Image
              fill
              src="https://res.cloudinary.com/dwhlynqj3/image/upload/v1720447731/glucoguide/diet/diet-weight-scale.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="doctor.png"
              style={{ objectFit: "contain", filter: "contrast(0.9)" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
