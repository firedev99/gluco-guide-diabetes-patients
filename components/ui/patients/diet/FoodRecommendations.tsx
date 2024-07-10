"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  foodRecommendationOptions,
  mealRecommendations,
  MealType,
  partsOfDay,
} from "@/lib/dummy/diets"
import { firey } from "@/utils"
import Icon from "@/components/icons"
import Link from "next/link"
import { WalkingDog } from "@/components"

export default function FoodRecommendations() {
  // get current date in hours
  const time = new Date().getHours()

  // get the current part of the day
  const currentPOD = partsOfDay.filter(
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
      <h4 className="text-center text-sm lg:text-xl mt-10 ml-2 font-bold opacity-70 xl:text-start xl:text-base">
        Recommended Foods
      </h4>

      {/* meal options */}
      <div className="mt-3 center gap-4 lg:mt-6 xl:justify-start xl:mt-4">
        {foodRecommendationOptions.map((option, idx) => (
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
      <div className="ml-2 mt-6 overflow-hidden lg:mt-8 xl:mt-9">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          <h3 className="text-2xl uppercase font-extrabold tracking[0.2px]">
            {active}
          </h3>
        </motion.div>
      </div>

      {/* meal recommendation items */}
      <motion.div className="mt-2 mb-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-2 md:gap-2.5 lg:gap-3 2xl:gap-4 xl:mt-3">
        {activeMeals && activeMeals.length > 0 ? (
          activeMeals.map((meal, idx) => (
            <motion.div
              key={`meal-recommendation-${meal.category}-${idx}`}
              className="flex flex-col p-1 pb-3 lg:p-2 lg:pb-4 shadow rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: idx * 0.05 } }}
              exit={{ opacity: 0 }}
            >
              {/* meal image */}
              <div className="relative w-full h-48 xs:h-64 lg:h-72 2xl:h-80">
                <Image
                  fill
                  src={meal.imgSrc}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt="doctor.png"
                  style={{ objectFit: "cover", filter: "contrast(0.9)" }}
                  priority
                  className="rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/10 rounded-lg" />
              </div>

              {/* meal details */}
              <div className="mt-1 sm:mt-2 px-2">
                <h4 className="text-sm font-bold 2xl:text-base">{meal.name}</h4>
                <p className="text-xs line-clamp-2 opacity-90 md:line-clamp-3 2xl:text-sm">
                  {meal.description}
                </p>
              </div>
              <div className="mt-auto pt-2 px-2 flex justify-between md:pt-4">
                <div className="flex -ml-0.5">
                  <Icon
                    name="watch"
                    className="w-4 h-4 opacity-70 2xl:w-5 2xl:h-5"
                  />
                  <span className="text-xs text-nowrap font-semibold opacity-80 ml-0.5 2xl:text-sm 2xl:opacity-75">
                    {meal.time}
                  </span>
                </div>
                <div className="flex items-center mr-1">
                  <div className="-mt-1">
                    <Icon
                      name="fire"
                      className="w-5 h-5 opacity-70 2xl:w-6 2xl:h-6"
                    />
                  </div>
                  <span className="text-xs font-semibold opacity-80 2xl:text-sm 2xl:opacity-75">
                    {meal.calories}kcal
                  </span>
                </div>
              </div>
              <div className="flex justify-end mt-3 mr-2 md:mt-4">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="bg-red-200 py-2 px-3 rounded-md hover:bg-red-300 transition duration-300"
                >
                  <Link
                    className="block text-xs font-bold opacity-80"
                    href={meal.blog}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    see recipe
                  </Link>
                </motion.button>
              </div>
            </motion.div>
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
