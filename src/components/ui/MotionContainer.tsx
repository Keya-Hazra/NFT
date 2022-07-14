import { motion, useAnimation } from 'framer-motion'
import { ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { container } from '../../utils/animation'

interface props{
  children: ReactNode;
  className: string;
}

function MotionContainer({ children, className }:props) {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.li
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={container}
      className={`list-none ${className}`}
    >
      {children}
    </motion.li>
  )
}

export default MotionContainer
