'use client'

import Container from '@/components/grid/container'
import Row from '@/components/grid/row'
import Column from '@/components/grid/column'
import { CaseStudyCard } from '@/components/case-study'
import { caseStudyEntries } from '@/components/case-study/data'
import ContentTransition from '@/components/motion/content-transition'
import Header from '@/components/typography/header'

const CaseStudies = () => {
  return (
    <Container className='lg:items-stretch pb-12'>
      <Row justifyXs='center' className='mt-12 mb-8 text-center'>
        <Column xl={10}>
          <ContentTransition>
            <Header level={1} className='mb-2'>Featured Case Studies</Header>
            <Header level={3}>
              Intuitive design through iterative problem-solving
            </Header>
          </ContentTransition>
        </Column>
      </Row>
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