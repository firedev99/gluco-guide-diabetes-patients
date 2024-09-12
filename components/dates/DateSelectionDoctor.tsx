"use client"

import { months } from "@/lib/dummy/calender"
import { addDays, format, isSameDay, startOfToday } from "date-fns"
import { useCallback, useEffect, useRef } from "react"
import { Icon } from "@/components"
import { useTouchSlider } from "@/hooks/useTouchSlider"
import { AppointmentCreationProps } from "@/types"

type Props = {
  values: AppointmentCreationProps
  dateSelection: (date: Date, month?: string) => void
  monthSelection: (month: string) => void
}

export default function DoctorDates({
  values,
  dateSelection,
  monthSelection: handleMonthSelection,
}: Props) {
  const { selectedDate, selectedMonth, selectedMonthDays, doctor } = values

  const monthsContainerRef = useRef<HTMLDivElement | null>(null)
  const monthsRefs = useRef<[HTMLButtonElement | null]>([null])
  const datesContainerRef = useRef<HTMLDivElement | null>(null)
  const datesRefs = useRef<[HTMLDivElement | null]>([null])

  // touch slider controls for months picker
  const {
    hidePrevBtn: hideMonthsPrevBtn,
    hideNextBtn: hideMonthsNextBtn,
    handlePrevBtn: handleMonthsPrevBtn,
    handleNextBtn: handleMonthsNextBtn,
    handleScrollPosition: handleMonthsScrollPosition,
  } = useTouchSlider(monthsContainerRef)

  // touch slider controls for dates picker
  const {
    hidePrevBtn: hideDatesPrevBtn,
    hideNextBtn: hideDatesNextBtn,
    handlePrevBtn: handleDatesPrevBtn,
    handleNextBtn: handleDatesNextBtn,
    handleScrollPosition: handleDatesScrollPosition,
  } = useTouchSlider(datesContainerRef)

  // check date availablity
  const dateAvailable = useCallback(
    (day: string) => values.availableDays.includes(day),
    [values.availableDays]
  )

  function handleDateSelection(date: Date, day: string) {
    if (dateAvailable(day)) {
      dateSelection(date)
    }
  }

  // handle active month navigation
  useEffect(() => {
    if (!monthsRefs.current || !monthsContainerRef.current) return

    let currentRef = monthsRefs.current.find(
      (ref) => ref && ref.innerHTML === selectedMonth
    )

    if (currentRef) {
      monthsContainerRef.current.scroll({
        left: currentRef.offsetLeft - 24,
        behavior: "smooth",
      })
    }
  }, [selectedMonth])

  // handle automatic available date detection
  useEffect(() => {
    if (!dateAvailable(format(selectedDate, "iii"))) {
      const updatedDate = addDays(selectedDate, 1)
      const updatedMonth = format(updatedDate, "MMMM")
      dateSelection(updatedDate, updatedMonth)
    }

    return
  }, [dateAvailable, dateSelection, selectedDate, doctor])

  // handle active date navigation
  useEffect(() => {
    if (!datesRefs.current || !datesContainerRef.current) return

    let currentRef = datesRefs.current.find(
      (ref) => ref && ref.innerText.includes(format(selectedDate, "dd"))
    )

    if (currentRef) {
      return datesContainerRef.current.scroll({
        left: currentRef.offsetLeft - 8,
        behavior: "smooth",
      })
    }
  }, [selectedDate])

  return (
    <div>
      {/* months */}
      <div className="relative group">
        <div
          ref={monthsContainerRef}
          onScroll={handleMonthsScrollPosition}
          className="px-6 flex flex-nowrap gap-7 sm:gap-8 overflow-x-auto no-scrollbar"
        >
          {months.map((name, idx) => (
            <button
              key={`scroll-calender-month-${idx}`}
              ref={(el) => {
                monthsRefs.current[idx] = el
              }}
              className={`${
                selectedMonth === name
                  ? `text-base opacity-100 font-bold `
                  : `text-sm opacity-70 font-semibold`
              }`}
              onClick={() => {
                handleMonthSelection(name)
              }}
            >
              {name}
            </button>
          ))}
        </div>
        <button
          className={`absolute h-10 -mt-2 -ml-0.5 w-12 top-0 left-0 hidden items-center bg-gradient-to-r from-[#f8f8f8] dark:from-neutral-700 ${
            hideMonthsPrevBtn ? `sm:hidden` : `sm:group-hover:flex`
          }`}
          onClick={handleMonthsPrevBtn}
        >
          <Icon name="simple-left-arrow" className="size-5 ml-1" />
        </button>
        <button
          className={`absolute h-10 -mt-2 w-9 top-0 right-0 hidden  items-center justify-end bg-gradient-to-l from-[#f8f8f8] dark:from-neutral-700 ${
            hideMonthsNextBtn ? `sm:hidden` : `sm:group-hover:flex`
          }`}
          onClick={handleMonthsNextBtn}
        >
          <Icon name="simple-right-arrow" className="size-5 mr-1" />
        </button>
      </div>

      {/* dates */}
      <div className="relative group">
        <div
          className="mt-4 -ml-0.5 flex flex-nowrap overflow-x-auto no-scrollbar"
          ref={datesContainerRef}
          onScroll={handleDatesScrollPosition}
        >
          {selectedMonthDays.map((date, idx) => (
            <div
              key={`scroll-calender-month-${idx}`}
              className={`center flex-col min-w-20 size-20 bg-zinc-200/50 dark:bg-neutral-500 hover:cursor-pointer ${
                !dateAvailable(format(date, "iii")) &&
                `opacity-30 hover:cursor-not-allowed`
              }`}
              onClick={() => handleDateSelection(date, format(date, "iii"))}
              ref={(el) => {
                datesRefs.current[idx] = el
              }}
            >
              <span
                className={`text-sm font-bold  ${
                  isSameDay(date, selectedDate)
                    ? `text-blue-600 dark:text-blue-800`
                    : `dark:text-neutral-100`
                }`}
              >
                {format(date, "dd")}
              </span>
              <span
                className={`text-xs font-semibold  ${
                  isSameDay(date, selectedDate)
                    ? `text-blue-600 dark:text-blue-800`
                    : `opacity-60  dark:text-neutral-200`
                }`}
              >
                {format(date, "iii")}
              </span>
            </div>
          ))}
        </div>
        {/* date picker controls */}
        <div
          className={`absolute h-full w-12 top-0 left-0 hidden items-center bg-gradient-to-r from-[#f8f8f8] dark:from-neutral-700 ${
            hideDatesPrevBtn ? `sm:hidden` : `sm:group-hover:flex`
          }`}
          onClick={handleDatesPrevBtn}
        >
          <button className="size-8 bg-zinc-50 ml-1 rounded-full center">
            <Icon
              name="simple-left-arrow"
              className="size-4 -ml-0.5 opacity-70"
              pathClassName="dark:stroke-neutral-500"
            />
          </button>
        </div>
        <div
          className={`absolute h-full w-12 top-0 right-0 hidden items-center justify-end bg-gradient-to-l from-[#f8f8f8] dark:from-neutral-700 ${
            hideDatesNextBtn ? `sm:hidden` : `sm:group-hover:flex`
          }`}
          onClick={handleDatesNextBtn}
        >
          <button className="size-8 bg-zinc-50 mr-1 rounded-full center">
            <Icon
              name="simple-right-arrow"
              className="size-4 -mr-0.5 opacity-70"
              pathClassName="dark:stroke-neutral-700"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
