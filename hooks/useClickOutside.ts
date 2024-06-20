import { RefObject, useEffect } from "react"

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    if (typeof window === "undefined") return

    function listener(event: MouseEvent | TouchEvent) {
      // do nothing if the click was inside the ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }

      handler(event)
    }

    window.addEventListener("mousedown", listener)
    window.addEventListener("touchstart", listener)

    return () => {
      window.removeEventListener("mousedown", listener)
      window.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

// how to use it
// useClickOutside takes two params, one for the reference and the other one is a callback function
// e.g -> useClickOutside(ref, () => {})
