"use client"

import { motion } from "framer-motion"

type Props = {
  children: string
  className?: string
  onClick?: () => void
}

export default function ShinnyButton({ children, className, onClick }: Props) {
  return (
    <motion.button
      className={`radial-gradient-shinny ${className}`}
      initial={{ "--x": "100%" } as any}
      animate={{ "--x": "-100%" } as any}
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: 0.975,
        transition: { ease: "easeInOut", duration: 0.2 },
      }}
      transition={{
        "--x": {
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
        },
      }}
      onClick={onClick}
    >
      <span className="linear-mask-shinny-light block relative tracking-wide font-light">
        {children}
      </span>
    </motion.button>
  )
}
