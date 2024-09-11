"use client"

import { Icon } from "@/components"
import { useClicksOutside } from "@/hooks/useClicksOutside"
import { HOSPITALS } from "@/lib/dummy/hospitals"
import Image from "next/image"
import { useDeferredValue, useMemo, useRef, useState } from "react"

type Props = {
  name: string
  containerClassName?: string
}

export default function HospitalSearchbox({ name, containerClassName }: Props) {
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const itemRef = useRef<HTMLInputElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [searchKey, setSearchKey] = useState<string>("")
  const deferredSearchKey = useDeferredValue(searchKey)

  const newFilteredList = useMemo(() => {
    if (!deferredSearchKey.length) return HOSPITALS
    return HOSPITALS.filter((item) =>
      item.name.toLowerCase().includes(deferredSearchKey.toLowerCase())
    )
  }, [deferredSearchKey])

  const openModal = () => setIsTouched(true)
  const closeModal = () => setIsTouched(false)

  // close modal on click outside of the searchbox
  useClicksOutside([containerRef, itemRef], closeModal)

  return (
    <div>
      {/* type input */}
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3.5">
          <Icon name="search" />
        </div>
        <input
          className="border border-gray-200 rounded-lg text-sm w-full max-w-96 py-3 pe-4 ps-10 focus:border-blue-500  focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          name="name"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder="Type a name"
          autoComplete="off"
          onFocus={openModal}
          ref={itemRef}
        />

        {/* options */}
        {isTouched && (
          <div
            ref={containerRef}
            className={`absolute w-full max-w-96 max-h-80 pb-2 bg-white border shadow-sm top-full mt-2 rounded-lg left-0 overflow-x-hidden overflow-y-auto flex flex-col custom-scroll-track ${containerClassName}`}
          >
            <h3
              className={`text-xs font-bold opacity-70 mt-3 ${
                newFilteredList.length === 0 ? `mx-auto` : `ml-3 uppercase`
              }`}
            >
              {newFilteredList.length === 0 ? `not found` : name}
            </h3>
            {newFilteredList.map((item) => (
              <div
                key={`booking-hospital-${item.id}`}
                className="flex items-center gap-3 hover:bg-zinc-100 hover:cursor-pointer px-3 py-2"
                onClick={() => {
                  setSearchKey(item.name)
                  setIsTouched(false)
                }}
              >
                {/* doctor image */}
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

                {/* hospital name */}
                <h5 className="text-sm font-medium opacity-90">{item.name}</h5>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
