import { motion, useAnimation } from 'framer-motion'
import { ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const squareVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.5,
      stiffness: 50,
      delay: 0.3,
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, y: -100 },
}

interface props{
  children: ReactNode;
}

function MotionSectionReveal({ children }:props) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
    >
      {children}
    </motion.div>
  )
}

export default MotionSectionReveal
