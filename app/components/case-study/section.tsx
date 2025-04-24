import { Header } from '@/components/typography'

interface SectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <section className={className}>
      <Header className="mb-3" level={2}>{title}</Header>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  )
}

export default Section
