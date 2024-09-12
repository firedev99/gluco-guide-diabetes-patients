"use client"

import { motion } from "framer-motion"

type Props = {
  type?: "primary" | "secondary" | "outline"
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export default function Button({
  type = "primary",
  onClick,
  children,
  className,
  disabled,
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type="button"
      disabled={disabled}
      className={`py-2 px-3 inline-flex items-center font-medium gap-x-2 text-sm rounded-lg border border-gray-200 ${className} ${
        type === "primary" &&
        `bg-blue-600 dark:bg-blue-700 text-white border-transparent hover:bg-blue-700`
      } ${
        type === "outline" &&
        ` bg-white dark:bg-neutral-300 text-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-neutral-100`
      } ${
        type === "secondary" &&
        `text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br dark:border-neutral-300`
      } disabled:opacity-50 disabled:pointer-events-none font-semibold`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
