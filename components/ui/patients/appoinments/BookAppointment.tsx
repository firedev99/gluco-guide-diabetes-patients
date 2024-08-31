"use client"

import { Button, Icon } from "@/components"
import { useMotionValueEvent, useScroll, motion } from "framer-motion"
import { useState } from "react"

export default function BookAppointment() {
  const [hidden, setHidden] = useState<boolean>(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious()

    if (prev && latest > prev && latest > 100) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.div
      variants={{
        hidden: {
          y: "var(--y-from)",
          x: "var(--translate-x)",
        },
        visible: {
          y: "var(--y-to)",
          x: "var(--translate-x)",
        },
      }}
      animate={hidden ? "hidden" : "visible"}
      className="fixed md:relative z-10 bottom-7 left-1/2 -translate-x-1/2 [--translate-x:-50%] md:bottom-0 md:left-0 md:translate-x-0 md:[--translate-x:0%] md:ml-auto md:mt-4 [--y-from:80px] [--y-to:0px] md:[--y-from:0px]"
    >
      <Button className="px-5 py-2.5 md:py-2">
        {/* <Icon name="plus" /> */}
        <span>Book an appointment</span>
      </Button>
    </motion.div>
  )
}
