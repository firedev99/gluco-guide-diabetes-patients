import { Variants } from "framer-motion"

export const fadingAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export const slideInAnimation: Variants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.15,
    },
  },

  exit: {
    opacity: 0,
    x: -100,
    transition: {
      duration: 0.15,
    },
  },
}

export const visibleAnimation: Variants = {
  visible: {
    y: "0%",
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
  hidden: {
    y: "-100%",
    transition: {
      duration: 0.35,
      ease: "easeInOut",
    },
  },
}
