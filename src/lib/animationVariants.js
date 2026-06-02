export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 1.0 } },
}

export const slideUp = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export const bigName = {
  hidden: { opacity: 0, y: 90 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
}

export const revealUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  }),
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
}
