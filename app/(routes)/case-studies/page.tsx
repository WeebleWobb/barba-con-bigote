'use client'

import Container from '@/components/grid/container'
import Row from '@/components/grid/row'
import Column from '@/components/grid/column'
import { CaseStudyCard } from '@/components/case-study'
import { caseStudyEntries } from '@/data/case-studies'
import ContentTransition from '@/components/motion/content-transition'
import PageHeader from '@/components/page-header'

const CaseStudies = () => {
  return (
    <Container className='lg:items-stretch pb-12'>
      <PageHeader
        title="Featured Case Studies"
        subtitle="Intuitive design through iterative problem-solving"
      />
      <Row>
        {caseStudyEntries.map((caseStudy, index) => (
          <Column md={4} key={caseStudy.slug}>
            <ContentTransition delay={0.3 + index * 0.2}>
              <CaseStudyCard 
                img={{
                  src: caseStudy.image,
                  alt: caseStudy.title
                }}
                title={caseStudy.title}
                cta={{
                  text: "View Project",
                  href: caseStudy.link
                }}
              />
            </ContentTransition>
          </Column>
        ))}
      </Row>  
    </Container>
  )
}

export default CaseStudies;