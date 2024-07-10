import { useClickOutside } from "@/hooks/useClickOutside"
import { useRef } from "react"

type Props = {
  open: boolean
  className?: string
  children?: React.ReactNode
  handler?: () => void
}

export default function Modal({ children }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null)

  useClickOutside(modalRef, () => {})

  return (
    <div className="h-full w-full center p-8">
      <div className="h-full w-full" ref={modalRef}>
        {children}
      </div>
    </div>
  )
}
