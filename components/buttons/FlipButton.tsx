"use client"

import { motion } from "framer-motion"
import Link from "next/link"

type Props = {
  children: string
  className?: string
  href?: string
}

const MotionLink = motion(Link)

export default function FlipButton({ children, className, href }: Props) {
  return href ? (
    <MotionLink
      href={href}
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
    >
      <motion.div
        className="w-full h-full center"
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="w-full h-full center absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </MotionLink>
  ) : (
    <motion.button
      initial="initial"
      whileHover="hovered"
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
    >
      <motion.div
        className="w-full h-full center"
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="w-full h-full center absolute inset-0"
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  )
}
