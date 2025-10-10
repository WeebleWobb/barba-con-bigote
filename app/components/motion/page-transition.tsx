'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className='pt-8 px-6 sm:flex-auto md:pb-10 md:px-16'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition 