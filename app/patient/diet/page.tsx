import {
  DietPreference,
  FoodRecommendations,
  Icon,
  NutrientsRecommendationChart,
} from "@/components"
import { recommendedCategoryOptions } from "@/lib/dummy/recommededOptData"
import Image from "next/image"

export default function DietPage() {
  // recommeded options
  const options = recommendedCategoryOptions({
    activity: 90,
    water: 8,
    sleep: 450,
  })

  return (
    <div className="pb-4 lg:pb-6">
      <div className="flex flex-col ml-1">
        <span className="text-sm font-bold opacity-70">for 17th, April</span>
        <h3 className="text-2xl font-extrabold leading-7">Daily Plan</h3>
      </div>

      {/* preference customization popover modal */}
      <DietPreference />

      {/* meal recommendations */}
      <div className="flex flex-col lg:flex-row w-full lg:gap-2 lg:items">
        {/* recommendation categories */}
        <div className="mt-3 md:mt-4 grid grid-cols-2 2xl:grid-cols-4 gap-2 lg:w-full min-h-[324px] lg:items-center">
          {options.map((option, idx) => (
            <div
              key={`recommendation_option_${idx}`}
              className={`cursor-pointer max-h-40 hover:shadow md:hover:shadow-md relative rounded-2xl lg:h-full lg:max-h-full center flex-col ${
                option.title === "exercises"
                  ? "flex-col-reverse bg-gradient-to-bl from-[#0172AF] from-10% to-[#69dea8] to-90%"
                  : "border shadow-sm"
              }`}
            >
              <div className="center flex-col">
                {option.info && (
                  <span className="font-bold opacity-70 text-sm">
                    {option.info}
                  </span>
                )}
                <span
                  className={`font-bold mb-1 ${
                    option.title === "exercises" && "-mt-3"
                  }`}
                >
                  {option.title}
                </span>
              </div>
              <div
                className={`relative ${
                  option.size === "smaller"
                    ? "w-8 h-8 2xl:w-14 2xl:h-14"
                    : "w-16 h-16 2xl:w-24 2xl:h-24"
                }`}
              >
                <Image
                  fill
                  src={option.imgSrc}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={`${option.title}.png`}
                  style={{ objectFit: "contain", filter: "contrast(0.9)" }}
                />
              </div>
              {option.title === "exercises" && (
                <div className="absolute top-2 right-0 w-8 h-8">
                  <Icon name="rotated-arrow" pathClassName="fill-slate-100" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nutrition Chart */}
        <NutrientsRecommendationChart />
      </div>

      {/* meal details */}
      <FoodRecommendations />
    </div>
  )
}
