"use client"

import Button from "@/components/buttons/Button"
import { hours } from "@/lib/dummy/health"
import { RECOMMENDATIONS } from "@/lib/dummy/recommendations"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useClickOutside } from "@/hooks/useClickOutside"
import { ActivityModal } from "@/components"

export default function Medications() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isHovering, setIsHovering] = useState<boolean>(false)

  const container = useRef<HTMLDivElement>(null)

  // convert hours as the keys of a new object with an empty array
  const newObj = hours.reduce<Record<string, any>>(
    (acc, key) => ((acc[key] = []), acc),
    {}
  )

  const [data, setData] = useState<Record<string, any>>(newObj)

  function distributeItems(dataObj: any, items: any) {
    // get the keys of the data object
    const keys = Object.keys(dataObj)
    let currentKeyIndex = 0

    // find the next empty array in the data
    const findNextEmptyKey = () => {
      for (let i = 0; i < keys.length; i++) {
        if (dataObj[keys[i]].length === 0) {
          return i
        }
      }
      return -1
    }

    const newData = { ...dataObj }

    // fill empty items first
    for (const item of items) {
      const emptyKeyIndex = findNextEmptyKey()
      if (emptyKeyIndex !== -1) {
        newData[keys[emptyKeyIndex]].push(item)
      } else {
        // distribute in a round-robin manner
        newData[keys[currentKeyIndex]].push(item)
        currentKeyIndex = (currentKeyIndex + 1) % keys.length
      }
    }

    return newData
  }

  // get the size of a nested object which contains arrays
  function countSizeOfNestedArrObject(givenObj: { [key: string]: any }) {
    return Object.keys(givenObj).reduce(
      (acc, key) => acc + givenObj[key].length,
      0
    )
  }

  // split morning hour activities
  const morningActivities = Object.fromEntries(Object.entries(data).slice(0, 3))

  // split afternoon hour activities
  const noonActivities = Object.fromEntries(Object.entries(data).slice(3, 5))

  // split evening hour activities
  const eveningActivies = Object.fromEntries(Object.entries(data).slice(5, 7))

  // split night hour activities
  const nightActivities = Object.fromEntries(Object.entries(data).slice(7, 9))

  // handle activity timings
  useEffect(() => {
    // get length of activities on different hours
    const morningActLen = countSizeOfNestedArrObject(morningActivities)
    const noonActLen = countSizeOfNestedArrObject(noonActivities)
    const eveningActLen = countSizeOfNestedArrObject(eveningActivies)
    const nightActLen = countSizeOfNestedArrObject(nightActivities)

    // get all the recommended exercises
    const exercises = RECOMMENDATIONS.map((item) =>
      item.exercises?.map((item) => item)
    ).flat()

    // get the exercises on morning
    const morningExercises = exercises.filter((item) =>
      item?.times.includes("morning")
    )

    // get the exercises on afternoon
    const noonExercises = exercises.filter((item) =>
      item?.times.includes("afternoon")
    )

    // get the exercises on evening
    const eveningExercises = exercises.filter((item) =>
      item?.times.includes("evening")
    )

    // get the exercises on night
    const nightExercises = exercises.filter((item) =>
      item?.times.includes("night")
    )

    // get all the recommended medicines
    const medicines = RECOMMENDATIONS.map((item) =>
      item.medications?.medicine.map((item) => item)
    ).flat()

    // get the medicines on morning
    const morningMeds = medicines.filter((item) =>
      item?.times.includes("morning")
    )

    // get the medicines on afternoon
    const noonMeds = medicines.filter((item) =>
      item?.times.includes("afternoon")
    )

    // get the medicines on evening
    const eveningMeds = medicines.filter((item) =>
      item?.times.includes("evening")
    )

    // get the medicines on night
    const nightMeds = medicines.filter((item) => item?.times.includes("night"))

    // food intake timings
    const breakfast = RECOMMENDATIONS[0].dietary[0]
    const lunch = RECOMMENDATIONS[0].dietary[1]
    const snack = RECOMMENDATIONS[0].dietary[2]
    const dinner = RECOMMENDATIONS[0].dietary[3]

    // combine the total activities based on different hours
    const totalMorningActivities = [
      ...morningExercises,
      ...morningMeds,
      breakfast,
    ]
    const totalNoonActivities = [...noonExercises, ...noonMeds, lunch]
    const totalEveningActivities = [snack, ...eveningExercises, ...eveningMeds]
    const totalNightActivities = [...nightExercises, dinner, ...nightMeds]

    if (totalMorningActivities.length !== morningActLen) {
      const updatedData = distributeItems(
        morningActivities,
        totalMorningActivities
      )
      setData((prev) => ({ ...prev, ...updatedData }))
    }

    if (totalNoonActivities.length !== noonActLen) {
      const updatedData = distributeItems(noonActivities, totalNoonActivities)
      setData((prev) => ({ ...prev, ...updatedData }))
    }

    if (totalEveningActivities.length !== eveningActLen) {
      const updatedData = distributeItems(
        eveningActivies,
        totalEveningActivities
      )

      setData((prev) => ({ ...prev, ...updatedData }))
    }

    if (totalNightActivities.length !== nightActLen) {
      const updatedData = distributeItems(nightActivities, totalNightActivities)
      setData((prev) => ({ ...prev, ...updatedData }))
    }
  }, [
    data,
    eveningActivies,
    morningActivities,
    noonActivities,
    nightActivities,
  ])

  useClickOutside(container, () => setIsHovering(false))

  return (
    <React.Fragment>
      <motion.div
        className="absolute z-40 right-0 top-0 w-full max-w-xl 2xl:max-w-4xl h-96 border border-gray-300 dark:border-neutral-500 rounded-3xl overflow-hidden bg-[--primary-white] dark:bg-neutral-900 [--slide-to:0px] [--slide-from:336px] 2xl:[--slide-from:250px]"
        initial={{ x: "var(--slide-from)" }}
        animate={{
          x: isHovering ? "var(--slide-to)" : "var(--slide-from)",
        }}
        onHoverStart={() => setIsHovering(true)}
        onHoverEnd={() => setIsHovering(false)}
        onTapStart={() => setIsHovering(true)}
        ref={container}
      >
        {/* headings */}
        <div className="ml-4 mt-5 flex justify-between mr-4">
          <h2 className="text-xl font-semibold opacity-80">Activity</h2>
          <Button
            className="text-xs relative z-10"
            onClick={() => setIsOpen(true)}
          >
            add activity
          </Button>
        </div>

        {/* medications/activities */}
        <div className="h-full overflow-y-auto custom-scroll -mt-2 p-4 pb-16">
          {Object.keys(data).map((item, idx) => (
            <div
              key={`activity-m-${idx}`}
              className="py-3 relative flex items-center"
            >
              {data[item].length !== 0 && (
                <React.Fragment>
                  <div className="after:absolute after:contents[''] after:w-[85%] sm:after:w-[90%] after:h-0.5 after:bg-transparent after:-mt-0.5 after:top-1/2 after:left-12 sm:after:left-14 after:border-b after:border-gray-400/60 dark:after:border-neutral-500 after:border-dashed flex">
                    <span className="text-sm sm:text-base inline-block">
                      {item}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 sm:gap-2.5 mx-auto">
                    {data[item].map((activity: any, aIdx: number) => (
                      <div
                        key={`${
                          activity.name
                            ? activity.name.toLowerCase().trim()
                            : activity.time.toLowerCase().trim()
                        }-${aIdx}`}
                        className={`py-1 px-3.5 text-sm font-medium border rounded-full w-fit z-10 bg-neutral-200 dark:bg-neutral-800 shadow-[inset_0_0_0_1px_rgba(56,56,56,0.3)] ${`ml-${
                          aIdx * 5
                        }`}`}
                      >
                        {activity.name ? activity.name : activity.time}
                      </div>
                    ))}
                  </div>
                </React.Fragment>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* activity adding modal */}
      <ActivityModal
        active={isOpen}
        closeHandler={() => setIsOpen(false)}
        setData={setData}
      />
    </React.Fragment>
  )
}
