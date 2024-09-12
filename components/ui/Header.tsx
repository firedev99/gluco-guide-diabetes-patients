"use client"

import { useAppContext } from "@/hooks/useAppContext"
import { Icon, ProfileMenu } from "@/components"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useState } from "react"
import { visibleAnimation } from "@/lib/animations"

export default function Header() {
  const { showMenu, toggleMenu } = useAppContext()
  const [hidden, setHidden] = useState<boolean>(false)
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious()

    if (prev && latest > prev && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const closeProfileMenu = () => setShowProfileMenu(false)
  const toggleProfileMenu = () => setShowProfileMenu((prev) => !prev)

  return (
    <motion.div
      variants={visibleAnimation}
      animate={hidden ? "hidden" : "visible"}
      className={`max-w-7xl lg:w-full lg:max-w-full m-auto sticky top-0 min-h-16 flex items-center justify-between bg-[--primary-white] px-3 xs:px-4 z-30 dark:bg-zinc-900`}
    >
      {/* hamburger menu */}
      <div
        className={`w-8 h-3 relative rounded-sm hover:cursor-pointer before:absolute before:content-[''] before:w-full before:h-[3px] before:bg-[--secondary-black] dark:before:bg-neutral-400 before:top-[1px] after:absolute after:content-[''] after:w-2/3 after:h-[3px] after:bg-[--secondary-black] dark:after:bg-neutral-400 after:rounded-sm before:rounded-sm after:bottom-0 before:ease-in-out before:duration-300 after:ease-in-out after:duration-300 after:delay-75 md:hidden ${
          showMenu
            ? `before:translate-x-3 after:translate-x-2 before:opacity-0 after:opacity-0`
            : `after:translate-x-0 before:translate-x-0 before:opacity-1 after:opacity-1`
        }`}
        onClick={toggleMenu}
      />

      {/* header controls */}
      <div className="center gap-x-3 md:w-full md:justify-end">
        {/* search control */}
        <div className="w-9 h-9 center rounded-full hover:cursor-pointer">
          <Icon
            name="search"
            className="h-7 w-7 opacity-95"
            pathClassName="dark:stroke-neutral-400"
          />
        </div>

        {/* notification control */}
        <div className="w-9 h-9 center rounded-full hover:cursor-pointer">
          <Icon
            name="bell"
            className="h-7 w-7"
            pathClassName="dark:stroke-neutral-400"
          />
        </div>

        {/* profile control */}
        <ProfileMenu
          open={showProfileMenu}
          toggleModal={toggleProfileMenu}
          closeModal={closeProfileMenu}
        />
      </div>
    </motion.div>
  )
}
