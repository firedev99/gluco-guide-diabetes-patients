"use client"

import React, { useEffect, useState } from "react"
import Icon from "../icons"
import { useAppContext } from "@/hooks/useAppContext"

export default function ThemeSwitch() {
  const [checked, setChecked] = useState<boolean>(false)
  const { changeTheme } = useAppContext()

  function handleThemeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked)
    if (e.target.checked) {
      changeTheme("dark")
    } else {
      changeTheme("light")
    }
  }

  const toggleInput = () =>
    setChecked((prev) => {
      if (prev) {
        changeTheme("light")
      } else {
        changeTheme("dark")
      }
      return !prev
    })

  useEffect(() => {
    if (typeof document !== "undefined") {
      setChecked(!!document.documentElement.classList.contains("dark"))
    }
  }, [])

  return (
    <div
      className="py-1 px-2 rounded-md flex items-center gap-2 hover:bg-zinc-200/70 dark:hover:bg-neutral-700 hover:cursor-pointer"
      onClick={toggleInput}
    >
      <div className="w-16 relative">
        <input
          type="checkbox"
          id="theme-switch"
          className="appearance-none hover:cursor-pointer w-full disabled:pointer-events-none border border-gray-300 dark:border-neutral-500 h-8 px-1 rounded-full before:inline-block before:size-6 before:mt-1 before:bg-white before:translate-x-0 checked:before:translate-x-[125%] before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-200 dark:checked:before:bg-neutral-200"
          onChange={handleThemeChange}
          checked={checked}
        />
        <label htmlFor="theme-switch" className="sr-only">
          theme
        </label>
        <div className="absolute top-1/2 -translate-y-1/2 -bottom-0.5 left-2 pointer-events-none ">
          <Icon className="size-4 mt-[1px]" name="sun" />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 -bottom-0.5 right-2 pointer-events-none ">
          <Icon className="size-4 mt-[1px]" name="moon" />
        </div>
      </div>
      <span className="-mt-0.5 text-sm font-semibold opacity-80"> Theme</span>
    </div>
  )
}
