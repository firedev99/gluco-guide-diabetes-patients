import { RefObject, useState } from "react"

export function useTouchSlider<T extends HTMLElement>(ref: RefObject<T>) {
  const [hidePrevBtn, setHidePrevBtn] = useState<boolean>(false)
  const [hideNextBtn, setHideNextBtn] = useState<boolean>(false)

  // handle previous button
  function handlePrevBtn() {
    if (!ref.current) return

    ref.current.scrollBy({
      left: (ref.current.clientWidth * -1) / 2,
      behavior: "smooth",
    })
  }

  // handle next button
  function handleNextBtn() {
    if (!ref.current) return
    ref.current.scrollBy({
      left: ref.current.clientWidth / 2,
      behavior: "smooth",
    })
  }

  // handle scrolling position of months picker
  function handleScrollPosition() {
    if (!ref.current) return
    const { scrollLeft } = ref.current

    // hide previous button if the scroll amount is 0 or less
    if (scrollLeft <= 0) {
      setHidePrevBtn(true)
    } else {
      setHidePrevBtn(false)
    }

    // hide next button if the scroll amount has crossed
    if (
      Math.ceil(ref.current.scrollLeft) >=
      ref.current.scrollWidth - ref.current.clientWidth
    ) {
      setHideNextBtn(true)
    } else {
      setHideNextBtn(false)
    }
  }

  return {
    hidePrevBtn,
    hideNextBtn,
    handlePrevBtn,
    handleNextBtn,
    handleScrollPosition,
  }
}
