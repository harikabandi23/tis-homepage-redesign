import { motion } from 'framer-motion'

function Reveal({ children, delay = 0, direction = 'up' }) {
  const directions = {
    up: { y: 35, x: 0 },
    down: { y: -35, x: 0 },
    left: { y: 0, x: -35 },
    right: { y: 0, x: 35 },
  }

  const initialPosition = directions[direction] || directions.up

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPosition,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal