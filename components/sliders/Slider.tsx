"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Button from "../buttons/Button"
import Icon from "../icons"

type Props = {
  data: string[]
}

export default function Slider({ data }: Props) {
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [originX, setOriginX] = useState<number>(0)
  const [translateX, setTranslateX] = useState<number>(0)
  const [disablePrev, setDisablePrev] = useState<boolean>(true)
  const [disableNext, setDisableNext] = useState<boolean>(false)

  const sliderRef = useRef<HTMLDivElement | null>(null)

  function dragStart(event: React.MouseEvent<HTMLDivElement>) {
    if (!sliderRef.current || isDragging) return
    event.preventDefault()

    sliderRef.current.style.cursor = `grabbing`

    setIsDragging(true)

    setOriginX(event.clientX)
  }

  // function dragMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  //   if (!sliderRef.current || !isDragging) return

  // }

  function dragEnd(event: React.MouseEvent<HTMLDivElement>) {
    if (!sliderRef.current) return
    if (!isDragging) return

    event.preventDefault()
    sliderRef.current.style.transition = `all 0.3s ease-in-out`
    sliderRef.current.style.cursor = `grab`

    setIsDragging(false)

    const currentX = event.clientX

    if (originX > currentX) {
      if (
        translateX <
        -(sliderRef.current.scrollWidth - sliderRef.current.clientWidth * 2)
      ) {
        setTranslateX(
          translateX -
            (translateX +
              (sliderRef.current.scrollWidth - sliderRef.current.clientWidth))
        )
      } else {
        setTranslateX(translateX - sliderRef.current.clientWidth)
      }
    } else {
      if (-sliderRef.current.clientWidth * 2 < translateX * 2) {
        setTranslateX(0)
      } else {
        setTranslateX(translateX + sliderRef.current.clientWidth)
      }
    }
  }

  function touchStart(event: React.TouchEvent<HTMLDivElement>) {
    if (!sliderRef.current || isDragging) return

    setIsDragging(true)
    setOriginX(event.touches[0].clientX)
  }

  function touchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (!sliderRef.current) return
    if (!isDragging) return
    sliderRef.current.style.transition = `all 0.3s ease-in-out`

    const currentX = event.changedTouches[0].clientX

    if (originX > currentX) {
      if (
        translateX <
        -(sliderRef.current.scrollWidth - sliderRef.current.clientWidth * 2)
      ) {
        setTranslateX(
          translateX -
            (translateX +
              (sliderRef.current.scrollWidth - sliderRef.current.clientWidth))
        )
      } else {
        setTranslateX(translateX - sliderRef.current.clientWidth)
      }
    } else {
      if (-sliderRef.current.clientWidth * 2 < translateX * 2) {
        setTranslateX(0)
      } else {
        setTranslateX(translateX + sliderRef.current.clientWidth)
      }
    }
  }

  function handlePrevBtn() {
    if (!sliderRef.current) return
    sliderRef.current.style.transition = `all 0.3s ease-in-out`

    if (-sliderRef.current.clientWidth * 2 < translateX * 2) {
      setTranslateX(0)
    } else {
      setTranslateX(translateX + sliderRef.current.clientWidth)
    }
  }

  function handleNextBtn() {
    if (!sliderRef.current) return
    sliderRef.current.style.transition = `all 0.3s ease-in-out`

    if (
      translateX <
      -(sliderRef.current.scrollWidth - sliderRef.current.clientWidth * 2)
    ) {
      setTranslateX(
        translateX -
          (translateX +
            (sliderRef.current.scrollWidth - sliderRef.current.clientWidth))
      )
    } else {
      setTranslateX(translateX - sliderRef.current.clientWidth)
    }
  }

  function flyTo(idx: number) {
    if (!sliderRef.current || idx > data.length - 1) return
    sliderRef.current.style.transition = `all 0.3s ease-in-out`
    setTranslateX(-sliderRef.current.clientWidth * idx)
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    function setLimitation() {
      if (!sliderRef.current) return

      if (translateX >= 0) {
        setDisablePrev(true)
      } else {
        setDisablePrev(false)
      }

      if (
        translateX <=
        -(sliderRef.current.scrollWidth - sliderRef.current.clientWidth)
      ) {
        setDisableNext(true)
      } else {
        setDisableNext(false)
      }

      if (sliderRef.current.scrollWidth === sliderRef.current.clientWidth) {
        setDisablePrev(true)
        setDisableNext(true)
      }
    }

    setLimitation()

    window.addEventListener("resize", setLimitation)
    return () => window.removeEventListener("resize", setLimitation)
  }, [sliderRef, translateX])

  return (
    <div className="wrapper relative size-full">
      <div className="inner size-full realtive overflow-hidden">
        <div
          className="content flex relative cursor-grab translate-x-0"
          ref={sliderRef}
          onTouchStart={touchStart}
          onTouchEnd={touchEnd}
          onMouseDown={dragStart}
          onMouseUp={dragEnd}
          // onMouseMove={(e) => console.log(e.clientX)}
          // onTouchMove={(e) => console.log(e.changedTouches[0])}
          onMouseLeave={dragEnd}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {data.map((imgSrc, idx) => (
            <div key={`hospital-${idx}`} className="min-w-full flex p-4">
              <div className="hospital center bg-red-500 relative w-full h-96">
                <h1 className="text-7xl font-bold">{idx}</h1>
              </div>
              {/* <Image
                fill
                src={imgSrc}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="device.png"
                style={{ objectFit: "cover", filter: "contrast(0.9)" }}
              /> */}
            </div>
          ))}
        </div>
      </div>
      {/* <Button onClick={() => flyTo(0)}>Go To</Button> */}
      {/* <button
        onClick={handlePrevBtn}
        disabled={disablePrev}
        className="size-12 group bg-blue-500 rounded-full center absolute z-20 top-1/2 left-0 -translate-y-1/2"
      >
        <Icon
          name="chevron-right"
          className="stroke-slate-50 size-6 scale-x-[-1] opacity-70 group-disabled:opacity-30"
        />
      </button>
      <button
        onClick={handleNextBtn}
        disabled={disableNext}
        className="size-12 group bg-blue-500 rounded-full center absolute z-20 top-1/2 right-0 -translate-y-1/2"
      >
        <Icon
          name="chevron-right"
          className="stroke-slate-50 size-6 opacity-70 group-disabled:opacity-30"
        />
      </button> */}
    </div>
  )
}
