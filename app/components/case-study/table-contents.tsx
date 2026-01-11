'use client'

import React, { useContext, useState, useEffect } from 'react'
import { SectionsContext } from './sections-context'

interface TableOfContentsProps {
  className?: string
}

const TableContents: React.FC<TableOfContentsProps> = ({ className }) => {
  const { sections } = useContext(SectionsContext)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0% 0px -95% 0px'
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  if (!sections.length) return null

  return (
    <div className={`sticky top-4 p-4 bg-cerveza-crema rounded-lg shadow-sm ${className}`}>
      <h3 className="text-lg font-bold mb-3 text-brown">Table of Contents</h3>
      <nav>
        <ul className="space-y-1">
          {sections.map(section => (
            <li key={section.id}>
              <a 
                href={`#${section.id}`}
                className={`block px-3 py-1.5 rounded transition-colors duration-200 ${
                  activeId === section.id 
                    ? 'bg-brown text-white' 
                    : 'text-brown hover:bg-brown-100'
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default TableContents
