"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { fadingAnimation, slideInAnimation } from "@/lib/animations"
import { userContent as content } from "@/lib/dummy/routes"
import { Icon } from "@/components"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = forwardRef<HTMLDivElement>((_, ref) => {
  const pathname = usePathname()

  return (
    <>
      <motion.aside
        variants={slideInAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        ref={ref}
        className="py-6 max-h-screen overflow-y-auto flex flex-col prevent-scroll px-4 bg-[--primary-white] fixed z-50 top-0 left-0 min-h-full w-60"
      >
        {/* logo */}
        <div className="center gap-2">
          <Icon className="w-8 h-8 -ml-4" name="gluco-guide" />
          <h3 className="font-bold text-[#0067FF]">GlucoGuide</h3>
        </div>

        {/* overview routes */}
        <div className="flex flex-col gap-3">
          <span className="text-xs text-opacity-70 ml-2 mt-8 font-medium">
            Overview
          </span>
          {content.slice(0, 7).map(({ name, icon, dest }, idx) => (
            <Link
              href={dest ?? "#"}
              className={`group flex transition duration-200 items-center py-2 px-2 gap-2 rounded-md hover:bg-[--primary-blue] hover:text-[--primary-white] ${
                pathname === dest &&
                `bg-[--primary-blue] text-[--primary-white]`
              }`}
              key={`sidebar_upper_link_${idx}`}
            >
              <div>
                <Icon
                  name={icon}
                  pathClassName={`group-hover:stroke-[--primary-white] transition duration-200 ${
                    pathname === dest && `stroke-[--primary-white]`
                  }`}
                />
              </div>
              <span className="text-sm font-bold">{name}</span>
            </Link>
          ))}
        </div>

        {/* support routes */}
        <div className="flex flex-col gap-3 mt-auto pt-6">
          <span className="text-xs text-opacity-70 ml-2  font-medium">
            Support
          </span>
          {content.slice(7, content.length).map(({ name, icon }, idx) => (
            <button key={`sidebar_bottom_link_${idx}`}>
              <div
                className={`flex items-center py-2 px-2 gap-2 rounded-md ${
                  idx === 2 && `mt-8`
                }`}
              >
                <div>
                  <Icon name={icon} />
                </div>
                <span className="text-sm font-bold">{name}</span>
              </div>
            </button>
          ))}
        </div>
      </motion.aside>
      <motion.div
        className="min-h-full min-w-full bg-black/35 backdrop-blur contrast-75 fixed z-40 top-0 right-0 bottom-0 left-0"
        variants={fadingAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </>
  )
})

Sidebar.displayName = `ForwardedSidebar`

export default Sidebar
