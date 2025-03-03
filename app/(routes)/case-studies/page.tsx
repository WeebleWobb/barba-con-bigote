'use client'

import Container from '@/components/grid/container'
import Row from '@/components/grid/row'
import Column from '@/components/grid/column'
import { CaseStudyCard } from '@/components/case-study'
import ContentTransition from '@/components/motion/content-transition'
import Header from '@/components/typography/header'

const caseStudyEntries = [
  {
    title: 'A Mobile Editing Experience',
    image: 'https://placehold.co/800x400/e2e8f0/1e293b?text=Digital+Transformation',
    link: '/case-studies/mobile-editing-experience'
  },
  {
    title: 'Element Menu Tooltips',
    image: 'https://placehold.co/800x400/e2e8f0/1e293b?text=Element+Menu+Tooltips',
    link: '/case-studies/element-menu-update'
  },
  {
    title: 'Editor Keyboard Shortcuts',
    image: 'https://placehold.co/800x400/e2e8f0/1e293b?text=Editor+Keyboard+Shortcuts',
    link: '/case-studies/editor-keyboard-shortcuts'
  },
  {
    title: 'Markdown Cheatsheet',
    image: 'https://placehold.co/800x400/e2e8f0/1e293b?text=Markdown+Cheatsheet',
    link: '/case-studies/markdown-cheatsheet'
  },
  {
    title: 'Friendlier Content Editor',
    image: 'https://placehold.co/800x400/e2e8f0/1e293b?text=Friendlier+Content+Editor',
    link: '/case-studies/friendlier-content-editor'
  },
  {
    title: 'HTML Editor',
    image: 'https://placehold.co/800x400/e2e8f0/1e293b?text=HTML+Editor',
    link: '/case-studies/html-editor'
  },
  {
    title: 'Properties Panel UI Update',
    image: 'https://placehold.co/800x400/e2e8f0/1e293b?text=Properties+Panel+UI+Update',
    link: '/case-studies/properties-panel-ui-update'
  }
]

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