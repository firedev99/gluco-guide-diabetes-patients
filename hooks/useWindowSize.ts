import { useState, useEffect } from "react"

type Sizes = {
  height: number
  width: number
}

export function useWindowSize() {
  const isAvailable = typeof window !== "undefined"

  const [size, setSize] = useState<Sizes>({
    height: isAvailable ? window.innerHeight : 0,
    width: isAvailable ? window.innerWidth : 0,
  })

  useEffect(() => {
    if (!isAvailable) return

    function handleChange(): void {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener("resize", handleChange)

    return () => window.removeEventListener("resize", handleChange)
  }, [isAvailable])

  return size
}
