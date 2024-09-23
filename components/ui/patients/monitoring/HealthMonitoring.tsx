"use client"

import React, { useState } from "react"
import { HumanAnatomy, MonitoringSlider } from "@/components"

type Props = {}

export default function HealthMonitoring({}: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(4)

  const handleOpenHandler = (idx: number) => {
    setActiveIndex(idx)
  }

  const handleCloseHandler = () => {
    setActiveIndex(-1)
  }

  return (
    <React.Fragment>
      <HumanAnatomy
        activeIndex={activeIndex}
        openHandler={handleOpenHandler}
        closeHandler={handleCloseHandler}
      />
      <div className="absolute left-6 bottom-6 right-0">
        <MonitoringSlider
          handlePrompt={handleOpenHandler}
          activeIdx={activeIndex}
        />
      </div>
    </React.Fragment>
  )
}
