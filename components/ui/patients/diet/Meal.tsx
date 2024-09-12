"use client"

import { Button } from "@/components"
import Icon from "@/components/icons"
import { MealType } from "@/lib/dummy/diets"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Props = {
  meal: MealType
  idx: number
}

export default function Meal({ meal, idx }: Props) {
  const [favourite, setFavourite] = useState(false)

  function toggleFav() {
    setFavourite((prev) => !prev)
  }

  return (
    <motion.div
      className="flex flex-col p-1 pb-2 lg:p-2 lg:pb-3 border dark:border-neutral-500 shadow-sm rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: idx * 0.05 } }}
      exit={{ opacity: 0 }}
    >
      {/* meal image */}
      <div className="relative group w-full h-44 xs:h-48 sm:h-64 md:h-56 lg:h-60 2xl:h-64">
        <Image
          fill
          src={meal.imgSrc}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="doctor.png"
          style={{ objectFit: "cover", filter: "contrast(0.9)" }}
          priority
          className="rounded-lg"
        />
        <div className="absolute w-full h-full transition duration-300 bg-black/10 group-hover:bg-black/30 rounded-lg" />
        <div
          className="absolute cursor-pointer right-2 top-2.5 md:right-2.5 w-9 h-9 rounded-full center group-hover:bg-white/10 bg-black/15 backdrop-blur-lg"
          onClick={toggleFav}
        >
          <Icon
            name="heart"
            className={`w-5 h-5 opacity-70 ${favourite && `fill-red-200`}`}
            pathClassName="stroke-slate-100"
          />
        </div>

        {/* nutrition facts */}
        <div className="absolute transition duration-300 z-5 opacity-0 group-hover:opacity-100 bottom-5 left-1/2 -translate-x-1/2 text-[--primary-white] bg-white/10 backdrop-blur-sm p-1 min-[420px]:p-2 rounded-lg">
          <table className="text-xs divide-y divide-gray-200 min-[400px]:text-sm">
            <thead>
              <tr>
                <th className="px-1 py-1 xs:px-2 text-nowrap">Protein</th>
                <th className="px-2 py-1 xs:px-3 text-nowrap">Carbs</th>
                <th className="px-2 py-1 xs:px-3 text-nowrap">Fat</th>
              </tr>
            </thead>
            <tbody className="text-center lg:font-semibold">
              <tr>
                <td className="px-1 py-1 xs:px-2 whitespace-nowrap ">
                  {meal.protein}g
                </td>
                <td className="px-2 xs:px-3 py-1 whitespace-nowrap ">
                  {meal.carbs}g
                </td>
                <td className="px-2 xs:px-3 py-1 whitespace-nowrap ">
                  {meal.fat}g
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* meal details */}
      <div className="mt-1 sm:mt-2 pl-1.5 pr-2 sm:pl-2">
        <h4 className="text-sm line-clamp-2 md:line-clamp-3 font-bold 2xl:text-base">
          {meal.name}
        </h4>
        <p className="text-xs line-clamp-2 opacity-90 md:line-clamp-3 2xl:text-sm">
          {meal.description}
        </p>
      </div>
      <div className="mt-auto pt-2 pl-1.5 pr-2 flex justify-between md:pt-4">
        <div className="flex -ml-0.5 sm:ml-0">
          <Icon
            name="watch"
            className="w-4 h-4 opacity-70 2xl:w-5 2xl:h-5"
            pathClassName="dark:stroke-neutral-500"
          />
          <span className="text-xs text-nowrap font-semibold opacity-80 ml-1 2xl:text-sm 2xl:opacity-75">
            {meal.time}
          </span>
        </div>
        <div className="flex items-center">
          <div className="-mt-1">
            <Icon name="fire" className="w-5 h-5 opacity-70 2xl:w-6 2xl:h-6" />
          </div>
          <span className="text-xs font-semibold opacity-80 2xl:text-sm 2xl:opacity-75">
            {meal.calories}kcal
          </span>
        </div>
      </div>
      <div className="flex justify-end mt-3 mr-1 md:mt-4">
        <Link
          href={meal.blog}
          className="bg-transparent"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button type="secondary">
            <span className="block text-xs font-bold opacity-80">
              see recipe
            </span>
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
