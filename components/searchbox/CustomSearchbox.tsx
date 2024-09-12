"use client"

import { Icon } from "@/components"
import { useClicksOutside } from "@/hooks/useClicksOutside"
import { DoctorType } from "@/lib/dummy/doctors"
import { HospitalType } from "@/lib/dummy/hospitals"
import { LocationType } from "@/types"
import { firey } from "@/utils"
import Image from "next/image"
import { useDeferredValue, useMemo, useRef, useState } from "react"

type Props = {
  name: string
  containerClassName?: string
  selection: (details: DoctorType | HospitalType | LocationType) => void
  contents: DoctorType[] | HospitalType[] | LocationType[]
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  clear: () => void
}

export default function DoctorSearchbox({
  name,
  containerClassName,
  selection: selectionCb,
  contents,
  value,
  onChange,
  clear,
}: Props) {
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined)
  const itemRef = useRef<HTMLInputElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // const [searchKey, setSearchKey] = useState<string>("")
  const deferredSearchKey = useDeferredValue(value)

  const openModal = () => setIsTouched(true)
  const closeModal = () => setIsTouched(false)

  // close modal on click outside of the searchbox
  useClicksOutside([containerRef, itemRef], () => {
    // check if the searched items is correctly prompted
    const doesExists = contents.find((item) => {
      if (firey.isDoctorType(item)) {
        return !!(item.name.toLowerCase() === value.toLowerCase())
      }

      if (firey.isHospitalType(item)) {
        return !!(item.name.toLowerCase() === value.toLowerCase())
      }

      if (firey.isHospitalLocationType(item)) {
        return !!(item.cityName.toLowerCase() === value.toLowerCase())
      }

      return false
    })

    // if not correctly propmted clear search box input
    if (!doesExists) {
      clear()
    }

    // close the searchbox suggestion container
    closeModal()
  })

  function searchItem<T>(
    item: T,
    searchFields: [keyof T, ...Array<keyof T>],
    searchValue: string
  ) {
    return searchFields.some((field) => {
      const fieldValue = item[field] as string
      return fieldValue.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  const result = useMemo(() => {
    return contents.filter((item) => {
      // look for items with the search key if issa a doctor
      if (firey.isDoctorType(item)) {
        return searchItem(item, ["name"], deferredSearchKey)
      }

      // look for items with the search key if issa a hospital
      if (firey.isHospitalType(item)) {
        return searchItem(item, ["name", "city", "address"], deferredSearchKey)
      }

      if (firey.isHospitalLocationType(item)) {
        return searchItem(item, ["cityName"], deferredSearchKey)
      }
    })
  }, [contents, deferredSearchKey])

  function handleSelection(
    details: DoctorType | HospitalType | LocationType,
    imgSrc?: string
  ) {
    setSelectedImg(imgSrc)
    selectionCb(details)
    setIsTouched(false)
  }

  return (
    <div>
      {/* type input */}
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-2.5">
          <Icon name="search" pathClassName="dark:stroke-neutral-500" />
        </div>
        <input
          className="border border-gray-200 dark:border-neutral-500 rounded-lg text-sm w-full py-2.5 pe-4 ps-9 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-neutral-50 dark:bg-neutral-700"
          type="text"
          name="name"
          value={value}
          onChange={(e) => onChange(e)}
          placeholder="Type a name"
          autoComplete="off"
          onFocus={openModal}
          ref={itemRef}
        />

        {/* options */}
        {isTouched && (
          <div
            ref={containerRef}
            className={`absolute w-full max-h-80 py-3 lg:pt-4 bg-white dark:bg-neutral-700 border dark:border-none dark:shadow-[inset_0_0_0_1px_rgba(248,248,248,0.2)] shadow-sm top-full mt-2 rounded-lg left-0 overflow-x-hidden overflow-y-auto flex flex-col custom-scroll-track ${containerClassName}`}
          >
            <h3
              className={`text-xs font-bold opacity-70 mb-1 ${
                result.length === 0 ? `mx-auto` : `ml-3 uppercase`
              }`}
            >
              {result.length === 0 ? `not found` : name}
            </h3>
            {result.map((item) => (
              <div
                key={`booking-doctor-${item.id}`}
                className="flex items-center gap-3 hover:bg-zinc-100 dark:hover:bg-neutral-600 hover:cursor-pointer px-3 py-2"
                onClick={() => {
                  if (!firey.isHospitalLocationType(item)) {
                    handleSelection(item, item.imgSrc)
                  } else {
                    handleSelection(item)
                  }
                }}
              >
                {/* image */}
                {!firey.isHospitalLocationType(item) && (
                  <div className="relative size-9 rounded-full">
                    <Image
                      fill
                      src={item.imgSrc}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="doctor.png"
                      style={{ objectFit: "cover", filter: "contrast(0.9)" }}
                      priority
                      className="rounded-full"
                    />
                    {/* image overlay */}
                    <div className="min-h-full min-w-full bg-black/35 absolute top-0 right-0 bottom-0 left-0 rounded-full" />
                  </div>
                )}

                {/* name */}
                <div className="flex flex-col -mt-0.5">
                  <h5 className="text-sm font-medium opacity-90 dark:text-neutral-300">
                    {!firey.isHospitalLocationType(item)
                      ? item.name
                      : item.cityName}
                  </h5>
                  {firey.isDoctorType(item) && (
                    <p className="text-xs font-semibold opacity-70">
                      {item.availableTimes.split(":")[0]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
