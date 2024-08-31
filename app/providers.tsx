"use client"

import { createContext, useState } from "react"

type AppState = {
  showMenu: boolean
  sidebarExpanded: boolean
  toggleMenu: () => void
  expandSidebar: () => void
  closeMenu: () => void
}

const initialState: AppState = {
  showMenu: false,
  sidebarExpanded: false,
  toggleMenu: () => {},
  expandSidebar: () => {},
  closeMenu: () => {},
}

// create a new context for the counter
export const AppContext = createContext(initialState)

export default function Providers({ children }: { children: React.ReactNode }) {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false)

  // open sidebar
  function toggleMenu() {
    setShowMenu((prev) => !prev)
  }

  // expand sidebar
  function expandSidebar() {
    setSidebarExpanded((prev) => !prev)
  }

  // close menu
  function closeMenu() {
    setShowMenu(false)
  }

  return (
    <AppContext.Provider
      value={{
        showMenu,
        sidebarExpanded,
        toggleMenu,
        expandSidebar,
        closeMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
