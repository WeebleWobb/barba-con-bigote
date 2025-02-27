"use client"

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type ContainerProps = {
  className?: string;
  children: ReactNode;
}

const Container = ({ className = '', children }: ContainerProps) => {

  return (
    <main className={
      twMerge(
        'bg-red basis-full flex items-start lg:items-center', 
        className
      )
    }>
      <div className='pt-8 px-6 sm:flex-auto md:pb-10 md:px-16'>
        {children}
      </div>
    </main>
  )
}

export default Container 