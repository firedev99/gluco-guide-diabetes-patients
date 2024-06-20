"use client"

import { Navigation } from "@/components"

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
