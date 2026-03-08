'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Container from '@/components/grid/container'
import Row from '@/components/grid/row'
import Column from '@/components/grid/column'
import Header from '@/components/typography/header'
import ContentTransition from '@/components/motion/content-transition'
import Breadcrumb from '@/components/navigation/breadcrumb'
import TableContents from '@/components/case-study/table-contents'
import OtherCaseStudies from '@/components/case-study/other-case-studies'
import { SectionsContext } from './sections-context'

interface CaseStudyLayoutProps {
  title: string
  description: string
  image: string
  children: React.ReactNode
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  title,
  description,
  image,
  children
}) => {
  const pathname = usePathname()
  const [currentSlug, setCurrentSlug] = useState<string>('')
  const [isClient, setIsClient] = useState(false)
  const [sections, setSections] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    // Set client-side flag and slug to avoid hydration mismatch
    setIsClient(true)
    setCurrentSlug(pathname.split('/').pop() || '')
  }, [pathname])

  const registerSection = (id: string, title: string) => {
    setSections(prev => {
      // Check if section already exists to avoid duplicates
      if (!prev.find(section => section.id === id)) {
        return [...prev, { id, title }];
      }
      return prev;
    });
  };

  return (
    <SectionsContext.Provider value={{ sections, registerSection }}>
      <Container className='pb-12'>
        <ContentTransition>
          <Row>
              <Column xl={12}>
                  <Breadcrumb />
              </Column>
          </Row>
          <Row alignXs="middle" className="border-0 border-b border-brown border-solid pb-12">
              <Column xl={3}>
                  <img
                      src={image}
                      alt={title}
                      className="border-[3px] border-brown border-solid w-full rounded-xl shadow-lg"
                  />
              </Column>
              <Column xl={9} className="pl-9 justify-center" >
                  <Header level={1} className="mb-4 text-7xl">
                      {title}
                  </Header>
                  <Header level={2} className='mb-0'>
                      {description}
                  </Header>
              </Column>
          </Row>
          <Row justifyXs="center" className="py-12">
              <Column xl={8}>
                  <div className="space-y-12 pr-6">
                      {children}
                  </div>
              </Column>
              <Column xl={2}>
                  <div className="sticky top-4 w-full">
                    <TableContents />
                </div>
              </Column>
          </Row>
          <OtherCaseStudies currentCaseStudySlug={isClient ? currentSlug : ''} />
        </ContentTransition>
      </Container>
    </SectionsContext.Provider>
  )
}

export default CaseStudyLayout
