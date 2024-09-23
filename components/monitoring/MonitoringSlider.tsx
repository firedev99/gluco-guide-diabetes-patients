"use client"

import { Icon, Swiper } from "@/components"
import { motion } from "framer-motion"
import Image from "next/image"
import { monitorings } from "@/lib/dummy/health"
import React, { useState } from "react"

type Props = {
  handlePrompt: (idx: number) => void
  activeIdx: number
}

export default function MonitoringSlider({ handlePrompt, activeIdx }: Props) {
  const [isDragging, setIsDragging] = useState<boolean>(false)

  const handleTargetModalOpen = (idx: number) => {
    if (isDragging) return
    handlePrompt(idx)
  }

  return (
    <React.Fragment>
      <div className="absolute z-10 -right-12 xl:right-16  mix-blend-luminosity dark:mix-blend-overlay brightness-150 dark:brightness-150 bottom-1/4 xl:bottom-2/4 max-w-lg xl:max-w-3xl hidden 2xl:flex items-center gap-3">
        <Icon className="size-96" name="gluco-guide" />
        <h3 className="text-6xl xl:text-8xl font-extrabold text-[#0067FF] opacity-50 dark:opacity-100">
          GlucoGuide
        </h3>
      </div>
      <Swiper
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        className="relative flex z-20"
      >
        {monitorings.map((item, idx) => (
          <div
            key={`health-monitoring-${idx}`}
            className="min-w-48 size-48 md:size-64 md:min-w-64"
          >
            <div className={`size-full p-2`}>
              <motion.div
                className="size-full bg-[--primary-white] shadow-[inset_0_0_0_1px_rgba(56,56,56,0.3)] dark:bg-neutral-800 rounded-lg hover:cursor-pointer active:cursor-grabbing flex flex-col"
                whileTap={{ scale: 0.988 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleTargetModalOpen(idx)}
              >
                <div className="flex items-center gap-3 p-4 h-1/2">
                  {/* icon */}
                  <div
                    // sorry ik this sucks (items have diff dimensions)
                    className={`relative  ${
                      idx === 0 &&
                      `-ml-4 mt-2 min-w-[68px] size-[68px] md:min-w-24 md:size-24`
                    } ${
                      idx === 1 &&
                      `-ml-2 mt-1 md:-ml-0.5 md:mt-1.5 min-w-[68px] size-[68px] md:min-w-20 md:size-20`
                    } ${
                      idx === 2 &&
                      `-ml-2.5 mt-4 min-w-12 size-12 md:min-w-[68px] md:size-[68px]`
                    } ${
                      idx === 3 &&
                      `-ml-2 mt-1 min-w-[68px] size-[68px] md:min-w-24 md:size-24`
                    } ${
                      idx === 4 &&
                      `-ml-2 mt-1 md:-ml-1 md:mt-2.5 min-w-16 size-16 md:min-w-20 md:size-20`
                    } ${
                      idx === 5 &&
                      `-ml-2 mt-1 md:-ml-2 md:mt-2.5 min-w-16 size-16 md:min-w-20 md:size-20`
                    }`}
                  >
                    <Image
                      fill
                      src={item.imgSrc}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="doctor.png"
                      style={{ objectFit: "cover", filter: "contrast(0.9)" }}
                      priority
                    />
                  </div>
                  {/* headings */}
                  <div
                    className={`${idx === 0 && `-ml-3`} ${
                      idx === 1 && `-ml-2`
                    } ${idx === 2 && `-ml-2 mt-2 md:ml-0`} ${
                      idx === 3 && `-ml-1`
                    } ${idx === 4 && `-ml-1`} ${idx === 5 && `-ml-1`}`}
                  >
                    <h4 className="text-xs font-semibold opacity-70">
                      Monitoring
                    </h4>
                    <h2
                      className={`font-semibold opacity-95  ${
                        idx === 2
                          ? `text-base md:text-lg leading-4 md:leading-5`
                          : `text-lg leading-4 md:text-lg md:leading-5`
                      }`}
                    >
                      {item.name}
                    </h2>
                  </div>
                </div>

                {/* monitoring measurements */}
                <div className="mt-auto text-right px-4 pb-4">
                  <h1 className="text-3xl leading-6 md:text-5xl font-bold opacity-80">
                    {idx === 0 || idx === 1 || idx === 5
                      ? item.value
                      : `${item.value}${item.unit}`}
                    {item.unit && (idx === 0 || idx === 1) && (
                      <p className="text-sm md:text-base opacity-80">
                        {item.unit}
                      </p>
                    )}
                  </h1>
                  <p className="mt-2 text-xs font-semibold opacity-70">
                    {item.time}
                  </p>
                </div>

                {/* time */}
              </motion.div>
            </div>
          </div>
        ))}
      </Swiper>
    </React.Fragment>
  )
}
