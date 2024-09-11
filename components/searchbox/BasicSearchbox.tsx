"use client"

import { Icon } from "@/components"
import { useClicksOutside } from "@/hooks/useClicksOutside"
import { doctors } from "@/lib/dummy/doctors"
import { useDeferredValue, useMemo, useRef, useState } from "react"

type Props = {
  contents: string[]
  name: string
  containerClassName?: string
  placeholder?: string
}

export default function FilterSearchboxImg({
  contents,
  name,
  containerClassName,
  placeholder,
}: Props) {
  const [isTouched, setIsTouched] = useState<boolean>(false)
  const itemRef = useRef<HTMLInputElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const [searchKey, setSearchKey] = useState<string>("")
  const deferredSearchKey = useDeferredValue(searchKey)

  const newFilteredList = useMemo(() => {
    if (!deferredSearchKey.length) return doctors
    return contents.filter((item) =>
      item.toLowerCase().includes(deferredSearchKey.toLowerCase())
    )
  }, [contents, deferredSearchKey])

  const openModal = () => setIsTouched(true)
  const closeModal = () => setIsTouched(false)

  // close modal on click outside of the searchbox
  useClicksOutside([containerRef, itemRef], closeModal)

  return (
    <div>
      {/* type input */}
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
          <Icon name="search" />
        </div>
        <input
          className="border border-gray-200 rounded-lg text-sm w-full max-w-96 py-3 pe-4 ps-10 focus:border-blue-500  focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          name="name"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder={placeholder ? placeholder : `Type a name`}
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
            {contents.map((item) => (
              <div
                key={`booking-${name}-${item.toLowerCase()}`}
                className="flex items-center gap-3 hover:bg-zinc-100 hover:cursor-pointer px-3 py-2"
                onClick={() => {
                  setSearchKey(item)
                  setIsTouched(false)
                }}
              >
                {/* name */}
                <h5 className="text-sm font-medium opacity-90">{item}</h5>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
