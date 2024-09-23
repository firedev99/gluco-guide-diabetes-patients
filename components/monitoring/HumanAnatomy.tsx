"use client"

import { monitorings, TYPEMONITORING } from "@/lib/dummy/health"
import Image from "next/image"
import React, { useState } from "react"
import MultiHealthModal from "../modals/MultiHealthModal"
import SingleHealthModal from "../modals/SingleHealthModal"

type Props = {
  activeIndex: number
  openHandler: (idx: number) => void
  closeHandler(): void
}

export default function HumanAnatomy({
  activeIndex,
  openHandler,
  closeHandler,
}: Props) {
  const [values, setValues] = useState<TYPEMONITORING>(monitorings)

  return (
    <div
      className={`relative min-h-[calc(100vh-164px)] md:min-h-[calc(100vh-124px)] flex`}
    >
      <div className="my-auto relative size-full min-w-[356px] max-w-[356px] xs:max-w-96 sm:max-w-xl">
        <Image
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
          src="https://res.cloudinary.com/dwhlynqj3/image/upload/v1723475365/glucoguide/human-body-anatomy.png"
          alt={`human-body-anatomy-pinterest.png`}
          style={{ objectFit: "cover" }}
          priority
        />
        {values.map((item, idx) =>
          idx === 0 || idx === 1 ? (
            <MultiHealthModal
              key={`monitoring-indicator-${idx}`}
              open={activeIndex >= 0 && activeIndex === idx}
              idx={idx}
              activeIndex={activeIndex}
              openHandler={openHandler}
              closeHandler={closeHandler}
              setValues={setValues}
              direction={idx === 0 ? "right" : "left"}
              contents={{
                name: item.name,
                value: item.value,
                unit: item.unit,
                details: item.details,
              }}
            />
          ) : (
            <SingleHealthModal
              key={`monitoring-indicator-${idx}`}
              open={activeIndex >= 0 && activeIndex === idx}
              idx={idx}
              activeIndex={activeIndex}
              openHandler={openHandler}
              closeHandler={closeHandler}
              direction={idx === 2 ? "left" : "right"}
              name={item.name}
              value={item.value}
              unit={item.unit}
              setValues={setValues}
            />
          )
        )}
      </div>
    </div>
  )
}
