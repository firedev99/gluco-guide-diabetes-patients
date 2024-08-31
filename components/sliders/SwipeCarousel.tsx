"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  className?: string
}

export default function SwipeCarousel({ children, className }: Props) {
  const wrapper = useRef<HTMLDivElement | null>(null)
  const items = useRef<HTMLDivElement | null>(null)

  const [carouselWidth, setCarouselWidth] = useState<number>(0)
  const [itemsWidth, setItemsWidth] = useState<number>(0)

  // set the widths
  useEffect(() => {
    if (typeof window === "undefined") return

    // handle carousel width
    const handleCarouselWidth = () => {
      if (!wrapper.current) return
      setCarouselWidth(wrapper.current.clientWidth)
    }

    // handle carousel items width
    const handleItemsWidth = () => {
      if (!items.current) return
      const parentNode = items.current.childNodes as NodeListOf<HTMLDivElement>
      const itemArr = Array.from(parentNode)

      const totalWidth = itemArr.reduce(
        (acc, node) => acc + node.clientWidth,
        0
      )

      setItemsWidth(totalWidth)
    }

    handleCarouselWidth()
    handleItemsWidth()

    window.addEventListener("resize", handleCarouselWidth)
    window.addEventListener("resize", handleItemsWidth)

    return () => {
      window.removeEventListener("resize", handleCarouselWidth)
      window.removeEventListener("resize", handleItemsWidth)
    }
  }, [])

  return (
    <div ref={wrapper} className="relative overflow-hidden">
      <motion.div
        ref={items}
        drag="x"
        dragConstraints={{
          left: -(itemsWidth - carouselWidth),
          right: 0,
        }}
        dragElastic={0.2}
        dragTransition={{ bounceDamping: 18 }}
        className={className ? className : `flex`}
      >
        {children}
      </motion.div>
    </div>
  )
}
