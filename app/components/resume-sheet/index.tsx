'use client'

import { useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Header, Paragraph } from '@/components/typography'
import { experienceEntries } from '@/components/experience/data'

interface ResumeSheetProps {
  show: boolean
  onClose: () => void
}

const sheetVariants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const,
      damping: 30,
      stiffness: 300,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn' as const,
    },
  },
}

export default function ResumeSheet({
  show,
  onClose,
}: Readonly<ResumeSheetProps>) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key === 'Tab' && sheetRef.current) {
        const focusableElements = sheetRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (show) {
      previousActiveElement.current = document.activeElement as HTMLElement
      document.addEventListener('keydown', handleKeyDown)
      closeButtonRef.current?.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [show, handleKeyDown])

  useEffect(() => {
    if (!show && previousActiveElement.current) {
      previousActiveElement.current.focus()
    }
  }, [show])

  const sortedEntries = [...experienceEntries].sort((a, b) => b.order - a.order)

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-sheet-heading"
          aria-describedby="resume-sheet-subheading"
          variants={sheetVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="border-3 border-brown border-solid fixed top-0 right-0 z-50 h-[calc(100vh-32px)] w-full max-w-2xl bg-tan rounded-xl mt-4 mr-3 shadow-[-8px_0_30px_rgba(0,0,0,0.25)] overflow-y-auto"
        >
          <div className="sticky top-0 bg-tan z-10 px-6 pt-6 pb-4 border-b-3 border-brown">
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close resume sheet"
              className="absolute top-4 right-4 p-2 rounded-md text-brown hover:bg-brown/10 hover:cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brown"
            >
              <X size={24} aria-hidden="true" />
            </button>

            <Header level={2} id="resume-sheet-heading" className="pr-10 mb-1">
              Resume
            </Header>
            <Paragraph id="resume-sheet-subheading" className="text-red font-medium">
              Sr. UI Designer
            </Paragraph>
          </div>

          <div className="p-6 space-y-6">
            {sortedEntries.map((entry) => (
              <div key={entry.id} className="border-b border-brown/10 pb-6 last:border-b-0">
                <div className="flex justify-between items-end mb-1">
                  <Header level={4} className="mb-0">
                    {entry.jobTitle}
                  </Header>
                  <span className="text-brown/60 text whitespace-nowrap ml-4">
                    {entry.startDate} – {entry.endDate ?? 'Present'}
                  </span>
                </div>
                <Paragraph className="text-red font-medium mb-2">
                  {entry.company}
                </Paragraph>
                <Paragraph className="text-brown text-base">
                  {entry.description.summary}
                </Paragraph>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
