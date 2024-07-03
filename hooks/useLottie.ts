import { useEffect, useRef } from "react"
import lottie from "lottie-web"

export function useLottie<T>(animationData: T) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return

    lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      rendererSettings: {
        // xMidYMid slice
        preserveAspectRatio: "xMinYMin slice", //supports the same options as the svg element's preserveAspectRation property
      },
      loop: true,
      autoplay: true,
      animationData,
    })

    return () => lottie.destroy()
  }, [animationData])

  return { ref }
}
