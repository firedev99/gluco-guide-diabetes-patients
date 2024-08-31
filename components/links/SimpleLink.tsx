import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import React from "react"

type Props = {
  href?: Url
  className?: string
  content: React.ReactNode
}

export default function SimpleLink({ href = "/#", className, content }: Props) {
  return (
    <Link
      href={href}
      className={`${className} relative after:absolute after:contents[''] after:left-0 after:-bottom-1.5 after:h-0.5 after:rounded-sm after:w-full after:bg-[#0f0f0f]/80 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left`}
    >
      {content}
    </Link>
  )
}
