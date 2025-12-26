'use client'

import Container from '@/components/grid/container'
import { Column, Row } from '@/components/grid/'
import { Aweber, Logo } from '@/components/icons'
import Carousel from '@/components/carousel'
import ContentTransition from '@/components/motion/content-transition'
import Paragraph from '@/components/typography/paragraph'
import Header from '@/components/typography/header'

const homeImages = [
  {
    src: 'https://placehold.co/1600x1200/orange/white?text=Slide+1',
    alt: 'Design work sample 1'
  },
  {
    src: 'https://placehold.co/1600x1200/blue/white?text=Slide+2',
    alt: 'Design work sample 2'
  },
  {
    src: 'https://placehold.co/1600x1200/green/white?text=Slide+3',
    alt: 'Design work sample 3'
  },
  {
    src: 'https://placehold.co/1600x1200/red/white?text=Slide+4',
    alt: 'Design work sample 4'
  }
]

const Home = () => (
    <Container>
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
                Sr. UI Designer at <a href="https://aweber.com" target="_blank" className='inline-block w-32 -mb-1'><Aweber /></a>
              </Header>
              <Paragraph>For over a decade, I've worked across legal services, e-commerce, and design agencies, creating digital products that balance user needs with business objectives. Currently bridging product strategy and technical implementation at AWeber, where I solve complex user problems through intuitive design and engineering.</Paragraph>
              <Paragraph>I excel in collaborative environments, partnering with product teams and engineers to transform complex requirements into intuitive interfaces. My hybrid expertise in both design and engineering enables me to create compelling solutions while understanding technical constraints, delivering products that drive engagement and business results.</Paragraph>
              <button className='bg-orange text-white px-4 py-2 rounded-md'>Download resume</button>
            </ContentTransition>
          </Column>
          <Column className='pl-4' lg={6}>
            <ContentTransition delay={0.3}>
              <Carousel images={homeImages} />
            </ContentTransition>
          </Column>
      </Row>
  </Container>
)

export default Home;