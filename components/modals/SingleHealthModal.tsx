"use client"

import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useClicksOutside } from "@/hooks/useClicksOutside"
import Button from "../buttons/Button"
import Icon from "../icons"
import { TYPEMONITORING } from "@/lib/dummy/health"
import { firey } from "@/utils"

type Props = {
  activeIndex: number
  idx: number
  open: boolean
  openHandler: (idx: number) => void
  closeHandler: () => void
  direction: "left" | "right"
  name: string
  value: string
  unit?: string
  setValues: React.Dispatch<React.SetStateAction<TYPEMONITORING>>
}

export default function SingleHealthModal({
  open,
  activeIndex,
  idx,
  closeHandler,
  openHandler,
  direction,
  name,
  value,
  unit,
  setValues,
}: Props) {
  const [allowNext, setAllowNext] = useState<boolean>(false)
  const [doneEditing, setDoneEditing] = useState<boolean>(false)

  const container = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  // handle click outside of the modal
  useClicksOutside([container, indicatorRef], closeHandler)

  // handle input change
  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, value: e.target.value } : item
      )
    )
  }

  useEffect(() => {
    if (doneEditing) {
      closeHandler()
      setDoneEditing(false)
    }
  }, [doneEditing, closeHandler])

  const isTemperature = idx === 2
  const isOxygen = idx === 3
  const isWeight = idx === 4

  // item value ranges for each items
  const tempRange: [number, number] = [35.15, 37.9]
  const oxygenRange: [number, number] = [92, 100]
  const weightRange: [number, number] = [125, 168]

  // get the min value for each items
  function getMinVal() {
    if (isTemperature) return tempRange[0]
    if (isOxygen) return oxygenRange[0]
    if (isWeight) return weightRange[0]
    return 0
  }

  // get the max value for each items
  function getMaxVal() {
    if (isTemperature) return tempRange[1]
    if (isOxygen) return oxygenRange[1]
    if (isWeight) return weightRange[1]
    return 0
  }

  // get the min, max value for each items
  const minVal = getMinVal()
  const maxVal = getMaxVal()

  // generate a random value
  function generateValue() {
    if (isTemperature) {
      return firey.generateRandomNum(tempRange, true, 2)
    }

    if (isOxygen) {
      return firey.generateRandomNum(oxygenRange)
    }

    if (isWeight) {
      return firey.generateRandomNum(weightRange)
    }

    return 0
  }

  // generate a random value and store it
  function handleGenerateValue() {
    const value = generateValue()
    setValues((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, value: String(value) } : item
      )
    )
  }

  return (
    <div
      onClick={() => openHandler(idx)}
      ref={indicatorRef}
      className={`absolute ${open && `z-30`} ${
        idx === 2 && `top-24 left-32 xs:top-28 xs:left-36 sm:top-44 sm:left-52`
      } ${
        idx === 3 &&
        `top-32 right-32 xs:top-36 xs:right-36 sm:top-52 sm:right-60`
      } ${
        idx === 4 &&
        `top-52 right-36 xs:top-56 xs:right-40 sm:top-80 sm:right-64`
      } ${
        idx === 5 && `hidden`
      } size-6 sm:size-6 center bg-neutral-950/25 dark:bg-neutral-400/25 backdrop-blur-sm sm:backdrop-blur-md rounded-full`}
    >
      <div className="size-1.5 sm:size-2 rounded-full bg-gray-200 dark:bg-neutral-950 hover:cursor-pointer" />
      <AnimatePresence>
        {open && (
          <motion.div
            className={`absolute w-44 sm:w-52 h-56 rounded-lg bg-[--primary-white] dark:bg-neutral-800 top-4 origin-top center shadow-[inset_0_0_0_1px_rgba(17,17,17,0.25)] dark:shadow-[inset_0_0_0_1px_rgba(248,248,248,0.3)] overflow-hidden ${
              direction === "left" ? `left-2` : `right-2`
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 224 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.14 }}
            ref={container}
          >
            {/* close btn */}
            <div
              className="absolute z-10 right-2 top-2 size-6 rounded-full bg-neutral-300 hover:bg-neutral-400 transition dark:hover:bg-neutral-600 dark:bg-neutral-700 center hover:cursor-pointer"
              onClick={() => setDoneEditing(true)}
            >
              <Icon name="cross" className="size-4" />
            </div>
            <motion.div
              className="size-full flex"
              animate={{
                x: allowNext ? "-100%" : 0,
              }}
            >
              {/* first container */}
              <div className="min-w-full size-full flex flex-col p-3">
                <h3 className="text-sm max-w-24 font-semibold opacity-80">
                  {name}
                </h3>
                <h1 className="mt-auto text-4xl sm:text-5xl text-right">
                  {`${value}${unit}`}
                </h1>
                <Button
                  className="mt-2 w-full center mx-auto text-xs"
                  onClick={() => setAllowNext(true)}
                >
                  start monitoring
                </Button>
              </div>

              {/* second container (input container) */}
              <div className="min-w-full size-full flex flex-col p-3 gap-2">
                <input
                  type="number"
                  value={value}
                  onChange={handleValueChange}
                  autoComplete="off"
                  className="mt-8 text-4xl text-center bg-neutral-300 dark:bg-neutral-700 rounded-md"
                />
                <p className="text-xs leading-3 text-center font-medium opacity-70">
                  please select a number b/w {minVal} and {maxVal}
                </p>
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
