"use client"

import { useClickOutside } from "@/hooks/useClickOutside"
import { AnimatePresence } from "framer-motion"
import React, { useRef } from "react"
import { motion } from "framer-motion"
import { fadingAnimation } from "@/lib/animations"
import Icon from "../icons"
import Button from "../buttons/Button"

type Props = {
  open: boolean
  className?: string
  children?: React.ReactNode
  secondaryBtn?: React.ReactNode
  handler?: void | (() => void)
  title?: string
  direction?: "bottom" | "center"
  disableDivider?: boolean
}

export default function PopupModal({
  children,
  secondaryBtn,
  open,
  className,
  handler,
  title,
  direction = "bottom",
  disableDivider = false,
}: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(modalRef, () => handler && handler())

  return (
    <AnimatePresence>
      {open && (
        <React.Fragment>
          <div
            className={`min-h-full min-w-full fixed top-0 right-0 bottom-0 left-0 z-[70] p-2 center prevent-scroll`}
          >
            {/* modal inner */}
            <motion.div
              ref={modalRef}
              initial={{
                opacity: 0,
                scale: "var(--scale-from)",
                y: "var(--slide-from)",
              }}
              animate={{
                opacity: 1,
                scale: "var(--scale-to)",
                y: "var(--slide-to)",
              }}
              exit={{
                opacity: 0,
                scale: "var(--scale-from)",
                y: "var(--slide-from)",
              }}
              transition={{
                duration: 0.1,
                ease: "easeInOut",
              }}
              className={`${
                className ? `${className}` : "h-3/4 w-full max-w-[720px]"
              } [@media(max-height:400px)]:h-full shadow-2xl bg-[--primary-white] dark:bg-zinc-800 rounded-lg [--scale-to:100%] [--scale-from:100%] sm:[--scale-from:95%] [--slide-to:0px] [--slide-from:80px] sm:[--slide-from:0px] flex flex-col dark:shadow-[inset_0_0_0_1px_rgba(248,248,248,0.2)] ${
                direction === "bottom" && `mt-auto sm:mt-0`
              }`}
            >
              {/* modal header controls */}
              <div
                className={`w-full flex justify-between py-3 items-center px-4 dark:border-neutral-500 ${
                  !disableDivider && `border-b`
                }`}
              >
                <h3 className="font-bold mt-1 text-gray-800">{title}</h3>
                <button
                  type="button"
                  className={`flex mt-1 justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none`}
                  onClick={() => handler && handler()}
                >
                  <span className="sr-only">Close</span>
                  <Icon
                    name="cross"
                    className="size-4"
                    pathClassName="dark:stroke-neutral-300"
                  />
                </button>
              </div>

              {/* modal children */}
              {children}

              {/* modal footer controls */}
              <div
                className={`flex mt-auto w-full justify-end items-center gap-x-2 py-3 px-4 ${
                  !disableDivider && `border-t`
                } dark:border-neutral-500`}
              >
                <Button type="outline" onClick={() => handler && handler()}>
                  Close
                </Button>
                {secondaryBtn}
              </div>
            </motion.div>
          </div>

          {/* overlay */}
          <motion.div
            className="min-h-full min-w-full bg-black/60 contrast-75 dark:bg-black/50 dark:contrast-70 fixed z-50 top-0 right-0 bottom-0 left-0"
            variants={fadingAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </React.Fragment>
      )}
    </AnimatePresence>
  )
}
