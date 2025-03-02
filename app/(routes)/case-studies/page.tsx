'use client'

import Container from '@/components/grid/container'
import Row from '@/components/grid/row'
import Column from '@/components/grid/column'
import CaseStudyCard from '@/components/casestudy-card'
import ContentTransition from '@/components/motion/content-transition'

const caseStudyEntries = [
  {
    title: 'Case Study 1',
    image: 'https://placehold.co/600x400',
    link: '/case-studies/case-study-1'
  },
  {
    title: 'Case Study 2',
    image: 'https://placehold.co/600x400',
    link: '/case-studies/case-study-2'
  },
  {
    title: 'Case Study 3',
    image: 'https://placehold.co/600x400',
    link: '/case-studies/case-study-3'
  }
]

const CaseStudies = () => {
  return (
    <Container className='lg:items-stretch'>
      <Row justifyXs='center'>
        <Column md={6}>
          <ContentTransition>
            <h1 className='font-orelega my-12 text-5xl text-center text-brown'>
              Over a decade of crafting intuitive digital experiences
            </h1>
          </ContentTransition>
        </Column>
      </Row>
      <Row>
        {caseStudyEntries.map((caseStudy, index) => (
          <Column md={4} key={caseStudy.link}>
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