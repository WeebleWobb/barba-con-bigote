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
    <Container className='lg:items-stretch'>
      <Row justifyXs='center'>
        <Column xl={8}>
          <ContentTransition>
            <Header level={1} className='my-12 text-center'>
              Over a decade of crafting <br />intuitive digital experiences
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