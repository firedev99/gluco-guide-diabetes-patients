"use client"

import { Menu, Header, Sidebar } from "@/components"
import { useClickOutside } from "@/hooks/useClickOutside"
import { AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { useAppContext } from "@/hooks/useAppContext"

export default function Navigation() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const { showMenu, closeMenu } = useAppContext()
  useClickOutside(containerRef, () => closeMenu())

  let pathname = usePathname()

  // close menu on route change
  useEffect(() => {
    closeMenu()
    //eslint-disable-next-line
  }, [pathname])

  return (
    <>
      {/* header */}
      <Header />

      {/* menu */}
      <AnimatePresence>
        {showMenu && <Menu ref={containerRef} />}
      </AnimatePresence>

      <Sidebar />
    </>
  )
}
