"use client"

import { useLottie } from "@/hooks/useLottie"
import sceneJSON from "@/lib/dummy/lottie-walking-dog.json"

type Props = {
  className?: string
}

export default function WalkingDog({ className }: Props) {
  const { ref: scene } = useLottie(sceneJSON)
  return <div className={className} ref={scene} />
}
