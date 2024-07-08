import {
  FoodRecommendations,
  Icon,
  NutrientsRecommendationChart,
} from "@/components"
import { recommendationOptions } from "@/lib/dummy/diets"
import Image from "next/image"

export default function DietPage() {
  return (
    <div>
      {/* page */}
      <div className="flex flex-col">
        <span className="text-sm font-bold opacity-70 ml-[1px]">
          for 17th, April
        </span>
        <h3 className="text-2xl font-extrabold leading-7">Daily Plan</h3>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:gap-2 lg:items">
        {/* daily recommendation options */}
        <div className="mt-7 grid grid-cols-2 2xl:grid-cols-4 gap-2 lg:w-full min-h-[324px] lg:items-center lg:mt-6">
          {recommendationOptions.map((option, idx) => (
            <div
              key={`recommendation_option_${idx}`}
              className={`cursor-pointer relative border-2 rounded-2xl  lg:h-full lg:max-h-full center flex-col ${
                option.title === "Exercise" && "flex-col-reverse"
              }`}
            >
              <div className="center flex-col">
                {option.info && (
                  <span className="font-bold opacity-70 text-sm">
                    {option.info}
                  </span>
                )}
                <span className="font-bold mb-1">{option.title}</span>
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
                  <Icon name="rotated-arrow" />
                </div>
              )}
            </div>
          ))}
        </div>
        {/* customize btn mobile */}
        <div className="flex lg:hidden items-center justify-end mr-1 mt-3">
          <div>
            <Icon name="edit-icon" className="w-[18px] h-[18px] opacity-80" />
          </div>
          <span className="text-sm ml-1 -mt-1 font-semibold opacity-80">
            customize preference
          </span>
        </div>
        {/* Nutrition Chart */}
        <NutrientsRecommendationChart />
      </div>

      {/* customize btn desktop */}
      <div className="hidden lg:flex items-center justify-end mr-1 mt-3">
        <div>
          <Icon name="edit-icon" className="w-5 h-5" />
        </div>
        <span className="ml-1 -mt-1 font-semibold opacity-80">
          customize preference
        </span>
      </div>

      {/* food recommendations */}
      <FoodRecommendations />
    </div>
  )
}
