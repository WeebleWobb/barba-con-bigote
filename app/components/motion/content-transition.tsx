'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ContentTransitionProps {
  children: ReactNode
  delay?: number
  index?: number
  className?: string
}

// Default animation variants
export const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5
    }
  }),
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3
    }
  }
}

const ContentTransition = ({ 
  children, 
  delay = 0, 
  index = 0,
  className = '' 
}: ContentTransitionProps) => {
  // Calculate actual delay based on index and base delay
  const actualDelay = delay + (index * 0.2)
  
  return (
    <motion.div
      custom={actualDelay}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={contentVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ContentTransition 