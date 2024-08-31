"use client"
import React, { useState } from "react"

type Props = {
  content: React.ReactNode
  children: React.ReactNode
  containerClass?: string
  contentClass?: string
  modalClass?: string
  direction?: "left" | "right"
}

export default function PopoverModal({
  content,
  children,
  containerClass,
  contentClass,
  modalClass,
  direction = "left",
}: Props) {
  return (
    <div className={`${containerClass ? containerClass : ``} relative group`}>
      {/* triggering element */}
      <div className={contentClass}>{content}</div>

      {/* content modal */}
      <div
        className={`${modalClass ? modalClass : `size-56`} ${
          direction === "right" && `right-0`
        } absolute invisible opacity-0 transition duration-300 z-[10] overflow-y-auto custom-scroll shadow-md border bg-neutral-100 rounded-md group-hover:opacity-100 group-hover:visible`}
      >
        {children}
      </div>
    </div>
  )
}
