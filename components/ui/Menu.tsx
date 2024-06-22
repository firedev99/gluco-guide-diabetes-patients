"use client"

import { forwardRef } from "react"
import { motion } from "framer-motion"
import { fadingAnimation, slideInAnimation } from "@/lib/animations"
import { routeLinks as content } from "@/lib/dummy/routes"
import { Icon } from "@/components"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Menu = forwardRef<HTMLDivElement>((_, ref) => {
  const pathname = usePathname()

  return (
    <>
      {/* mobile menu */}
      <motion.nav
        variants={slideInAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        ref={ref}
        className="bg-[--primary-white] fixed z-50 min-h-full h-full w-60 top-0 left-0 pt-6 flex flex-col prevent-scroll md:hidden"
      >
        {/* logo */}
        <div className="center gap-2 mb-8">
          <Icon className="w-8 h-8 -ml-4" name="gluco-guide" />
          <h3 className="font-bold text-[#0067FF]">GlucoGuide</h3>
        </div>

        <div className="h-full w-full flex flex-col px-4 pb-3 justify-between overflow-y-auto custom-scroll">
          {/* overview routes */}
          <div className="flex flex-col gap-3">
            <span className="text-xs text-opacity-70 ml-2 font-medium">
              Overview
            </span>
            {content.slice(0, 7).map(({ name, icon, dest }, idx) => (
              <Link
                href={dest ?? "#"}
                className={`flex transition duration-200 items-center py-2 px-2 gap-2 rounded-md ${
                  pathname === dest
                    ? `bg-[--primary-blue] hover:bg-[--primary-blue] text-[--primary-white]`
                    : `hover:bg-neutral-200`
                }`}
                key={`sidebar_upper_link_${idx}`}
              >
                <div>
                  <Icon
                    name={icon}
                    pathClassName={`transition duration-200 ${
                      pathname === dest && `stroke-[--primary-white]`
                    }`}
                  />
                </div>
                <span className="text-sm font-bold">{name}</span>
              </Link>
            ))}
          </div>

          {/* support routes */}
          <div className="flex flex-col gap-3 mt-6">
            <span className="text-xs text-opacity-70 ml-2  font-medium">
              Support
            </span>
            {content.slice(7, content.length).map(({ name, icon }, idx) => (
              <button key={`sidebar_bottom_link_${idx}`}>
                <div
                  className={`flex items-center transition duration-200 py-2 px-2 gap-2 rounded-md hover:bg-neutral-200 ${
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
        </div>
      </motion.nav>

      {/* overlay */}
      <motion.div
        className="min-h-full min-w-full bg-black/35 backdrop-blur contrast-75 fixed z-40 top-0 right-0 bottom-0 left-0 md:hidden"
        variants={fadingAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
      />
    </>
  )
})

Menu.displayName = `ForwardedSidebar`

export default Menu
