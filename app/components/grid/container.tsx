"use client"

import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import PageTransition from '@/components/motion/page-transition'

type ContainerProps = { 
  className?: string;
  children: ReactNode;
  pageTransitionClassName?: string;
}

const Container = ({ className = '', children, pageTransitionClassName, }: ContainerProps) => {

  return (
    <main className={
      twMerge(
        'bg-red basis-full flex items-start lg:items-center', 
        className
      )
    }>
      <PageTransition className={pageTransitionClassName}>
        {children}
      </PageTransition>
    </main>
  )
}

export default Container 