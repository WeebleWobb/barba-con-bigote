import Container from '@/components/grid/container'
import Row from '@/components/grid/row'
import Column from '@/components/grid/column'
import Header from '@/components/typography/header'
import ContentTransition from '@/components/motion/content-transition'
import Breadcrumb from '@/components/navigation/breadcrumb'

interface CaseStudyLayoutProps {
  title: string
  description: string
  imageText: string
  children: React.ReactNode
}

const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({
  title,
  description,
  imageText,
  children
}) => {
  return (
    <Container>
      <ContentTransition>
        <Row>
            <Column xl={12}>
                <Breadcrumb />
            </Column>
        </Row>
        <Row alignXs="middle" className="border-0 border-b border-brown border-solid">
            <Column xl={3}>
                <img 
                    src={`https://placehold.co/800x800/e2e8f0/1e293b?text=${encodeURIComponent(imageText)}`}
                    alt={imageText}
                    className="w-full rounded-lg shadow-lg mb-12"
                />
            </Column>
            <Column xl={9} className="pl-9">
                <Header level={1} className="mb-4 text-7xl">
                    {title}
                </Header>
                <Header level={2}>
                    {description}
                </Header>
            </Column>
        </Row>
        <Row justifyXs="center" className="py-12">
            <Column xl={6}>
                <div className="space-y-12">
                    {children}
                </div>
            </Column>
        </Row>
      </ContentTransition>
    </Container>
  )
}

export default CaseStudyLayout
