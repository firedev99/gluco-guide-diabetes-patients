import { useEffect, RefObject } from "react"

export function useClicksOutside(
  refs: RefObject<HTMLElement>[],
  callback: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent) {
      const isOutside = refs.every(
        (ref) => ref.current && !ref.current.contains(event.target as Node)
      )

      if (isOutside) {
        callback(event)
      }
    }

    window.addEventListener("mousedown", listener)
    window.addEventListener("touchstart", listener)

    return () => {
      window.removeEventListener("mousedown", listener)
      window.removeEventListener("touchstart", listener)
    }
  }, [refs, callback])
}
