"use client"

import { motion } from "framer-motion"

type Props = {
  children: string
  className?: string
}

export default function ShinnyButton({ children, className }: Props) {
  return (
    <motion.button
      className={`radial-gradient-shinny ${className}`}
      initial={{ "--x": "100%" } as any}
      animate={{ "--x": "-100%" } as any}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
      }}
    >
      <span className="linear-mask-shinny block relative text-neutral-100 tracking-wide font-light">
        {children}
      </span>
    </motion.button>
  )
}
