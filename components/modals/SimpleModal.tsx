"use client"

import { useClickOutside } from "@/hooks/useClickOutside"
import { motion, AnimatePresence } from "framer-motion"
import React, { useRef } from "react"

type Props = {
  open: boolean
  closeModal: () => void
  children?: React.ReactNode
  content?: React.ReactNode
  className?: string
}

export default function SimpleModal({
  open,
  closeModal,
  children,
  className,
  content,
}: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(modalRef, closeModal)

  return (
    <AnimatePresence>
      <div ref={modalRef}>
        {content && content}
        {open && (
          <motion.div
            className={`absolute z-10 px-2 py-1 ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div>{children}</div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  )
}
