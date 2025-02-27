import Content from '@/components/grid/container'
import Row from '@/components/grid/row'
import Column from '@/components/grid/column'
import CaseStudyCard from '@/components/casestudy-card'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'A collection of case studies, component specs, and projects that showcase my more than a decades worth of experience in the design industry.',
  openGraph: {
    title: 'Case Studies',
    description: 'A collection of case studies, component specs, and projects that showcase my more than a decades worth of experience in the design industry.'
  }
}

const caseStudyEntries = [
  {
    title: 'Case Study 1',
    image: 'https://placehold.co/600x400',
    link: '/trabajo/case-study-1'
  },
  {
    title: 'Case Study 2',
    image: 'https://placehold.co/600x400',
    link: '/trabajo/case-study-2'
  },
  {
    title: 'Case Study 3',
    image: 'https://placehold.co/600x400',
    link: '/trabajo/case-study-3'
  }
]
const CaseStudies = () => {
  return (
    <Content className='lg:items-stretch'>
      <Row justifyXs='center'>
        <Column md={6}>
          <h1 className='font-orelega mb-4 text-5xl text-center text-brown'>
            Over a decade of crafting intuitive digital experiences
          </h1>
        </Column>
      </Row>
      <Row>
        {caseStudyEntries.map((caseStudy) => (
          <Column md={4} key={caseStudy.link}>
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
          </Column>
        ))}
      </Row>  
    </Content>
  )
}

export default CaseStudies;