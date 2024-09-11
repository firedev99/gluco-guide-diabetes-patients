import { useEffect } from "react"

interface UseKeyPressType {
  key: string
  onKeyPressed: () => void
  onKeyReleased?: () => void
}

export function useKeyPress({
  key,
  onKeyPressed,
  onKeyReleased,
}: UseKeyPressType) {
  useEffect(() => {
    function keyDownHandler(e: globalThis.KeyboardEvent) {
      if (e.key === key) {
        e.preventDefault()
        onKeyPressed()
      }
    }

    function keyUpHandler() {
      onKeyReleased && onKeyReleased()
    }

    document.addEventListener("keydown", keyDownHandler)
    document.addEventListener("keyup", keyUpHandler)

    return () => {
      document.removeEventListener("keydown", keyDownHandler)
      document.removeEventListener("keyup", keyUpHandler)
    }
  }, [])
}
