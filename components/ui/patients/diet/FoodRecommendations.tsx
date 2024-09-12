"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  mealRecommendationOptions,
  mealRecommendations,
  MealType,
} from "@/lib/dummy/diets"
import { firey } from "@/utils"
import { Meal, WalkingDog } from "@/components"
import { partsOfDay } from "@/lib/dummy/recommededOptData"

export default function FoodRecommendations() {
  const options = partsOfDay({
    breakfast: 580,
    lunch: 700,
    snacks: 120,
    dinner: 700,
  })
  // get current date in hours
  const time = new Date().getHours()

  // get the current part of the day
  const currentPOD = options.filter(
    (pod) => time >= pod.start && time <= pod.end
  )[0]

  // get the recommeded meals based on category, e.g - breakfast, lunch, dinner
  const mealData = firey.groupByCategory(mealRecommendations, "category")
  const [active, setActive] = useState<string>(currentPOD.status)
  const [activeMeals, setActiveMeals] = useState<MealType[]>(
    mealData[currentPOD.status] || []
  )

  // handle meal selection
  function selectMealCategory(category: string) {
    setActiveMeals(mealData[category])
  }

  return (
    <React.Fragment>
      {/* recommended meals */}
      <h4 className="text-center text-sm lg:text-xl mt-8 lg:mt-10 ml-2 font-bold opacity-70 dark:opacity-100 xl:text-start xl:text-base">
        Recommended Foods
      </h4>

      {/* meal options */}
      <div className="mt-3 center gap-4 lg:mt-6 xl:justify-start xl:mt-4">
        {mealRecommendationOptions.map((option, idx) => (
          <div
            key={`recommended_meal_option_${idx}`}
            onClick={() => {
              setActive(option.category)
              selectMealCategory(option.category)
            }}
            className={`min-w-14 shadow-sm min-h-12 lg:min-w-36 lg:min-h-32 center cursor-pointer rounded-2xl flex items-center ml-1 ${
              active === option.category
                ? `outline outline-offset-4 outline-2 outline-blue-500`
                : `hover:shadow-md`
            }`}
            style={{ background: `${option.bg}` }}
          >
            <div
              className={`relative ${
                option.title === "Breakfast" && "-mb-0.5"
              } ${
                option.size === "smaller"
                  ? "w-7 h-7 lg:w-12 lg:h-12"
                  : "w-12 h-12 lg:w-20 lg:h-20"
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
            <span
              className={`hidden ${option.title === "Breakfast" && "-mt-4"} ${
                option.title === "Snacks" && "mt-1"
              } font-bold`}
            >
              {option.title}
            </span>
          </div>
        ))}
      </div>

      {/* meal recommendations */}
      <div className="ml-2 mt-8 opacity-90 overflow-hidden xl:mt-9">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <h3 className="text-lg uppercase font-extrabold tracking[0.2px]">
            {active}
          </h3>
        </motion.div>
      </div>

      <div className="ml-1.5 overflow-hidden">
        <motion.div
          key={options.filter((opt) => opt.status === active)[0].calories}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          exit={{ opacity: 0 }}
          className="flex items-end"
        >
          <h3 className="text-4xl leading-8 lg:leading-9 font-extrabold tracking[0.2px]">
            {options.filter((opt) => opt.status === active)[0].calories}kcal
          </h3>
          <span className="leading-7 font-bold opacity-80">(goal)</span>
        </motion.div>
      </div>

      <motion.div className="mt-4 mb-4 grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-2 md:gap-2.5 lg:gap-3 2xl:gap-4">
        {activeMeals && activeMeals.length > 0 ? (
          activeMeals.map((meal, idx) => (
            <Meal
              meal={meal}
              idx={idx}
              key={`meal-recommendation-${meal.category}-${idx}`}
            />
          ))
        ) : (
          <div className="center flex-col mb-4">
            <WalkingDog className="w-full h-full max-w-80" />
            <span className="text-sm xxs:text-base font-semibold lg:font-bold text-center opacity-70 -mt-4">
              no {active} recommendations found!
            </span>
          </div>
        )}
      </motion.div>
    </React.Fragment>
  )
}
