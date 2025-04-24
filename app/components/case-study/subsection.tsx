import { Header } from '@/components/typography'

interface SubsectionProps {
  title: string
  children: React.ReactNode
  className?: string
}

const Subsection: React.FC<SubsectionProps> = ({ title, children, className }) => {
  return (
    <div className={className}>
      <Header className="mb-2" level={4}>{title}</Header>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}

export default Subsection
