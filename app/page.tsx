'use client'

import Container from '@/components/grid/container'
import { Column, Row } from '@/components/grid/'
import { Aweber, Logo } from '@/components/icons'
import Carousel from '@/components/carousel'
import ContentTransition from '@/components/motion/content-transition'
import Paragraph from '@/components/typography/paragraph'
import Header from '@/components/typography/header'
import { caseStudyEntries } from '@/components/case-study/data'

const Home = () => (
    <Container pageTransitionClassName='md:px-0 md:pl-16'>
      <Row alignLg='middle' fullbasis>
          <Column className='pr-4' lg={6}>
            <ContentTransition delay={0.1}>
              <div className='w-32 mb-4 sm:hidden'>
                <Logo />
              </div>
              <Header level={1} className='text-7xl mb-1'>
                Juan D. Bolaños
              </Header>
              <Header level={2} className='mb-6'>
                (Barba con Bigote)
              </Header>
              <Header level={4} className='text-3xl mb-2 text-orange'>
                Sr. Product Designer at <a href="https://aweber.com" target="_blank" className='inline-block w-32 -mb-1'><Aweber /></a>
              </Header>
              <Paragraph>For over a decade, I've worked across legal services, e-commerce, and design agencies, creating digital products that balance user needs with business objectives. Now, I'm bridging product strategy and technical implementation at AWeber, where I lead agentic design initiatives while contributing production ready code to ship features end-to-end.</Paragraph>
                          </ContentTransition>
          </Column>
          <Column className='pl-4' lg={6}>
            <ContentTransition delay={0.3}>
              <Carousel items={caseStudyEntries} />
            </ContentTransition>
          </Column>
      </Row>
  </Container>
)

export default Home;