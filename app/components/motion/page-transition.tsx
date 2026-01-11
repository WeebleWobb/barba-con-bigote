'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface PageTransitionProps {
  className?: string;
  children: ReactNode
}

const PageTransition = ({ children, className }: PageTransitionProps) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className={
          twMerge(
          'pt-8 px-6 sm:flex-auto md:px-16',
          className
        )
      }>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition 