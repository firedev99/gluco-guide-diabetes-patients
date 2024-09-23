"use client"

import React, { useState } from "react"
import { BasicSelect, Checkbox, Modal, TextInput } from ".."

type Props = {
  active: boolean
  closeHandler: () => void
  setData: React.Dispatch<React.SetStateAction<Record<string, any>>>
}

export default function AddActivity({ active, closeHandler, setData }: Props) {
  const [values, setValues] = useState({
    type: "Exercise 🏃🏼‍♂️",
    name: "",
    times: ["Morning"],
    duration: "10-15mins",
    description: "",
  })

  // handle times selection
  function handleTimeSelection(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exist = prev.times.includes(value)
      const times = exist
        ? prev.times.filter((item) => item !== value)
        : prev.times.concat(value)
      return { ...prev, times }
    })
  }

  const isExercise = values.type === "Exercise 🏃🏼‍♂️"

  return (
    <Modal
      open={active}
      handler={closeHandler}
      className="w-full max-w-xl"
      direction="center"
    >
      <div className="p-4 overflow-x-hidden overflow-y-auto custom-scroll">
        <div className="flex flex-col gap-2">
          <BasicSelect
            name="Event Type"
            className="ml-0"
            values={["Exercise 🏃🏼‍♂️", "Medicine 💊"]}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, type: e.target.value }))
            }
          />

          <div>
            <TextInput
              name={`${isExercise ? `Exercise` : `Medicine`} Name`}
              value={values.name}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <p className="text-xs font-medium opacity-70 mt-1">
              e.g, {isExercise ? `Cycling` : `Vitamin D`}
            </p>
          </div>

          {/* time */}
          <fieldset>
            <legend className="text-sm font-semibold opacity-90">Time</legend>

            <div className="flex flex-wrap mt-2 -ml-1 gap-2">
              {["Morning", "Afternoon", "Evening", "Night"].map((item, idx) => (
                <Checkbox
                  key={`activity_time_${idx}`}
                  name={`activity_time_${idx}_option`}
                  value={item}
                  active={values.times.includes(item)}
                  onChange={handleTimeSelection}
                  direction="left"
                />
              ))}
            </div>
          </fieldset>

          {/* duration */}
          {values.type === "Exercise 🏃🏼‍♂️" && (
            <fieldset>
              <legend className="text-sm font-semibold opacity-90">
                Duration
              </legend>

              <div className="flex flex-wrap mt-2 -ml-1 gap-2">
                {[
                  "10-15mins",
                  "15min-20mins",
                  "15min-30mins",
                  "30-45mins",
                  "40-50mins",
                  "1-2hrs",
                ].map((item, idx) => (
                  <Checkbox
                    key={`activity_time_${idx}`}
                    name={`activity_time_${idx}_option`}
                    value={item}
                    active={values.duration === item}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, duration: item }))
                    }
                    direction="left"
                  />
                ))}
              </div>
            </fieldset>
          )}

          <div>
            <label htmlFor="notes" className="text-sm font-semibold opacity-90">
              Description
            </label>
            <textarea
              rows={4}
              className="mt-1 p-2 w-full text-sm text-gray-900 dark:text-neutral-400 bg-gray-50 dark:bg-neutral-700 rounded-md border border-gray-300 dark:border-neutral-600 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Write description here..."
              value={values.description}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </div>
        </div>
      </div>
    </Modal>
  )
}
