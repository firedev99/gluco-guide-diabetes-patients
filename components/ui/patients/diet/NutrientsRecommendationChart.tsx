"use client"

import { useState } from "react"
import Image from "next/image"
import { PieChart, Pie, ResponsiveContainer } from "recharts"
import { nutrientsChartData } from "@/lib/dummy/diets"
import { RenderNutritionChart, Icon } from "@/components"

export default function NutrientsRecommendationChart() {
  const [activeNutrient, setActiveNutrient] = useState<number>(2)

  function handleMouseEnter(_: any, index: number, e: React.MouseEvent) {
    setActiveNutrient(index)
  }

  return (
    <div>
      <div className="mt-1 relative overflow-hidden w-full rounded-xl bg-gradient-to-b from-[#8FAEFF] to-[#5574E1] min-h-56 xs:min-h-[324px] lg:mt-3.5 center xs:block lg:w-[546px]">
        {/* food diet chart */}
        <div className="hidden xs:block w-full h-[286px] relative z-10">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart className="-ml-12" width={400} height={400}>
              <Pie
                activeIndex={activeNutrient}
                activeShape={RenderNutritionChart}
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

        <div className="flex w-40 items-center flex-col text-[--primary-white] mt-0 ml-0 mr-0 mb-0 xs:-mt-36 xs:mb-4 xs:ml-auto xs:mr-4 lg:mr-10">
          <div>
            <div className="flex flex-col mb-3">
              {nutrientsChartData.map((nutrient, idx) => (
                <span
                  className="text-nowrap text-base font-bold leading-5"
                  key={`nutrient_${idx}`}
                >
                  &#x2022; {nutrient.name} &#8212; {nutrient.value}g
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center -ml-4">
            <Icon name="fire" className="w-8 h-8 mr-0.5" />
            <h3 className="text-[24px] lg:text-3xl font-extrabold">
              2100 Kcal
            </h3>
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
