'use client'

import { useContext, useEffect } from 'react'
import { Header } from '@/components/typography'
import { SectionsContext } from './sections-context'

interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
  id?: string
}

const Section: React.FC<SectionProps> = ({ title, children, className, id }) => {
  const sectionId = id || title.toLowerCase().replace(/\s+/g, '-')
  const { registerSection } = useContext(SectionsContext)
  
  // Register this section with the context once on mount
  useEffect(() => {
    registerSection(sectionId, title)
  }, [sectionId, title, registerSection])
  
  return (
    <section 
      className={`scroll-mt-8 ${className || ''}`} 
      id={sectionId}
    >
      <Header className="mb-3" level={2}>{title}</Header>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  )
}

export default Section
