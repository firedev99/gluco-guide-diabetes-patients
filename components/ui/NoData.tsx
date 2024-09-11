"use client"

import React from "react"
import WalkingDog from "../fancy/WalkingDog"
import { useRouter } from "next/navigation"
import Button from "../buttons/Button"

type Props = {
  content?: string
}

export default function NoData({ content = "Not found 💸" }: Props) {
  const router = useRouter()

  return (
    <div className="center flex-col max-w-80 mx-auto">
      <WalkingDog />
      <h5 className="font-bold text-2xl">{content}</h5>
      <Button className="mt-3" onClick={() => router.back()}>
        Go back
      </Button>
    </div>
  )
}
