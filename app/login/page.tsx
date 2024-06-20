"use client"

import { useState } from "react"

export default function LoginPage() {
  const [active, setActive] = useState(1)

  function handleClick() {
    setActive(active === 1 ? 2 : 1)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-5xl font-bold">Login Page</h2>
    </div>
  )
}
