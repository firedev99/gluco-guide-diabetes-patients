"use client"

import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useClickOutside } from "@/hooks/useClickOutside"
import { useClicksOutside } from "@/hooks/useClicksOutside"
import { fadingAnimation } from "@/lib/animations"
import Button from "../buttons/Button"
import Icon from "../icons"
import { BasicSelect } from ".."
import { firey } from "@/utils"
import { TYPEMONITORING } from "@/lib/dummy/health"

type TYPEBLOODGLUCOSEDETS = {
  time: string
  value: number
}

type TYPEBLOODPRESSUREDETS = {
  type: string
  data: {
    value: number
    time: string
  }[]
}

function isBloodGlucoseType(item: any): item is TYPEBLOODGLUCOSEDETS {
  return (item as TYPEBLOODGLUCOSEDETS).value !== undefined
}

function isBloodPressureType(item: any): item is TYPEBLOODPRESSUREDETS {
  return (item as TYPEBLOODPRESSUREDETS).data !== undefined
}

type Props = {
  activeIndex: number
  idx: number
  open: boolean
  openHandler: (idx: number) => void
  closeHandler: () => void
  setValues: React.Dispatch<React.SetStateAction<TYPEMONITORING>>
  direction: "left" | "right"
  contents: {
    name: string
    value: string
    unit?: string
    time?: string
    details?: TYPEBLOODGLUCOSEDETS[] | TYPEBLOODPRESSUREDETS[]
  }
}

export default function MultiHealthModal({
  open,
  activeIndex,
  idx,
  closeHandler,
  direction,
  openHandler,
  setValues,
  contents: { name, value, unit, details },
}: Props) {
  const [allowNext, setAllowNext] = useState<boolean>(false)
  const [doneEditing, setDoneEditing] = useState<boolean>(false)
  const [pressure, setPressure] = useState<"systolic" | "diastolic">("systolic")

  const container = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  // get the current date
  const currentDate = new Date()

  // get the current time
  const currentTime = currentDate
    .toLocaleDateString("en-AU", {
      hour: "numeric",
      hour12: true,
    })
    .replaceAll(" ", "")
    .split(",")
    .join(", ")
    .toUpperCase()

  const [inputVal, setInputVal] = useState({
    type: "systolic",
    value: idx === 0 ? "124" : "128",
  })

  // handle click outside of the modal
  useClicksOutside([container, indicatorRef], closeHandler)

  const isGlucose = idx === 0
  const isPressure = idx === 1

  // item value ranges for each items
  const glucoseRange: [number, number] = [77, 138]
  const systolicPressureRange: [number, number] = [110, 135]
  const diastolicPressureRange: [number, number] = [64, 90]

  // generate a random value
  function generateValue() {
    if (isGlucose) {
      return firey.generateRandomNum(glucoseRange)
    }

    if (isPressure && inputVal.type === "systolic") {
      return firey.generateRandomNum(systolicPressureRange)
    }

    if (isPressure && inputVal.type === "diastolic") {
      return firey.generateRandomNum(diastolicPressureRange)
    }

    return 0
  }

  // generate a random value and store it
  function handleGenerateValue() {
    const value = generateValue()
    setInputVal((prev) => ({ ...prev, value: String(value) }))
  }

  // handle pressure switch toggling
  const togglePressure = () => {
    setPressure((prev) => {
      return prev === "systolic" ? "diastolic" : "systolic"
    })
  }

  // handle confirmation
  function handleConfirmation() {
    const newValue = { value: Number(inputVal.value), time: currentTime }
    setValues((prev) =>
      prev.map((item, i) => {
        // handle blood glucose details
        if (activeIndex === 0 && i === 0 && item.details) {
          return { ...item, details: item.details.concat(newValue) as any }
        }

        // handle systolic blood pressures
        if (
          activeIndex === 1 &&
          i === 1 &&
          item.details &&
          inputVal.type === "systolic"
        ) {
          // update the systolic data
          const updatedPressures = item.details.map((item: any, i) =>
            i === 0 ? { ...item, data: item.data.concat(newValue) } : item
          )

          return {
            ...item,
            details: updatedPressures,
          }
        }

        // handle diastolic blood pressures
        if (
          activeIndex === 1 &&
          i === 1 &&
          item.details &&
          inputVal.type === "diastolic"
        ) {
          // update the diastolic data
          const updatedPressures = item.details.map((item: any, i) =>
            i === 1 ? { ...item, data: item.data.concat(newValue) } : item
          )

          return {
            ...item,
            details: updatedPressures,
          }
        }

        return item
      })
    )
  }

  useEffect(() => {
    if (doneEditing) {
      closeHandler()
      setDoneEditing(false)
    }
  }, [doneEditing, closeHandler])

  return (
    <div
      onClick={() => openHandler(idx)}
      ref={indicatorRef}
      className={`absolute ${open && `z-30`} ${
        idx === 0 &&
        `top-56 right-11 xs:top-60 xs:right-14 sm:top-[356px] sm:right-[86px]`
      } ${
        idx === 1 && `top-44 left-20 xs:top-48 xs:left-24 sm:top-72 sm:left-36`
      } size-6 sm:size-6 center bg-neutral-400/25 backdrop-blur-sm sm:backdrop-blur-md rounded-full`}
    >
      <div className="size-1.5 sm:size-2 rounded-full bg-gray-200 dark:bg-neutral-950 hover:cursor-pointer" />
      <AnimatePresence>
        {open && (
          <motion.div
            className={`absolute w-44 sm:w-52 h-56 rounded-lg bg-[--primary-white] dark:bg-neutral-800 top-4 origin-top center shadow-[inset_0_0_0_1px_rgba(17,17,17,0.25)] dark:shadow-[inset_0_0_0_1px_rgba(248,248,248,0.3)] overflow-hidden ${
              direction === "left" ? `left-2` : `right-2`
            }`}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.14 }}
            ref={container}
          >
            {/* close btn */}
            {!allowNext && (
              <div
                className="absolute z-10 right-2 top-2 size-6 rounded-full bg-neutral-300 hover:bg-neutral-400 transition dark:hover:bg-neutral-600 dark:bg-neutral-700 center hover:cursor-pointer"
                onClick={() => setDoneEditing(true)}
              >
                <Icon name="cross" className="size-4" />
              </div>
            )}

            <motion.div
              className="size-full flex"
              animate={{
                x: allowNext ? "-100%" : 0,
              }}
            >
              {/* first container */}
              <div className="min-w-full size-full flex flex-col p-3">
                <div>
                  <h3 className="text-sm max-w-24 leading-4 font-semibold opacity-80">
                    {name}
                  </h3>
                  <div className="flex justify-between">
                    <p className="text-sm mb-1 medium opacity-70">
                      {`${value} ${unit}`}
                    </p>

                    {/* pressure switch control */}
                    {idx === 1 && (
                      <button
                        className="mb-1 text-xs py-0.5 rounded-sm px-1.5 bg-neutral-400/30"
                        onClick={togglePressure}
                      >
                        {pressure === "diastolic" ? "systolic" : "diastolic"}
                      </button>
                    )}
                  </div>
                </div>

                {/* contents */}
                <div className="overflow-y-auto custom-scroll">
                  {/* for blood glucose */}
                  {idx === 1 && (
                    <p className="text-xs mt-1 mb-2 uppercase">
                      {pressure} DATA
                    </p>
                  )}
                  {details &&
                    details.map(
                      (item, idx) =>
                        isBloodGlucoseType(item) && (
                          <div
                            key={`monitoring-blood-glucose-content-${idx}`}
                            className="mt-1 flex gap-2 items-start"
                          >
                            <div className="min-w-2.5 size-2.5 rounded-full bg-blue-500" />
                            <p className="text-xs leading-3 -mt-0.5">{`${item.value}${unit} has been monitored at ${item.time}`}</p>
                          </div>
                        )
                    )}

                  {/* for blood pressure */}
                  {details &&
                    details.map(
                      (item) =>
                        isBloodPressureType(item) &&
                        item["type"] === pressure &&
                        item.data.map((item, _idx) => (
                          <div
                            className="mt-1 flex gap-2 items-start"
                            key={`monitoring-blood-pressure-${pressure}-${_idx}`}
                          >
                            <div className="min-w-2.5 size-2.5 rounded-full bg-blue-500" />
                            <p className="text-xs leading-3 -mt-0.5">{`${item.value}${unit} has been monitored at ${item.time}`}</p>
                          </div>
                        ))
                    )}
                </div>
                <Button
                  className="w-full center mx-auto text-xs mt-2"
                  onClick={() => setAllowNext(true)}
                >
                  start monitoring
                </Button>
              </div>

              {/* second container (input container) */}
              <div className="min-w-full size-full flex flex-col p-3 gap-2">
                <div
                  className={`w-full [&_select]:text-xs flex flex-col gap-2 ${
                    idx === 0 && `my-auto`
                  }`}
                >
                  <input
                    type="number"
                    value={inputVal.value}
                    onChange={(e) =>
                      setInputVal((prev) => ({
                        ...prev,
                        value: e.target.value,
                      }))
                    }
                    autoComplete="off"
                    className={`w-full text-sm ps-2 bg-neutral-300 dark:bg-neutral-700 rounded-sm h-8 border border-neutral-600 ${
                      idx === 0 && `-mb-4`
                    }`}
                  />
                  {idx === 1 && (
                    <BasicSelect
                      name=""
                      values={["systolic", "diastolic"]}
                      onChange={(e) =>
                        setInputVal((prev) => ({
                          ...prev,
                          type: e.target.value,
                        }))
                      }
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <Button
                    className="w-full center mx-auto text-xs"
                    onClick={handleGenerateValue}
                  >
                    generate value
                  </Button>
                  <p className="text-xs leading-3 text-center mt-1 font-medium opacity-70">
                    generate random value for testing
                  </p>
                  <Button
                    className={`${
                      idx === 0 ? `mt-4` : `mt-2`
                    } w-full center text-xs`}
                    onClick={handleConfirmation}
                  >
                    add
                  </Button>
                </div>
                <button
                  className="ml-auto mt-auto text-xs font-semibold opacity-70 leading-3"
                  onClick={() => setAllowNext(false)}
                >
                  back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
