import { Metadata } from 'next'
import { CaseStudyLayout } from '@/components/case-study'
import Content, { metadata as caseStudyMeta } from './content.mdx'

export const metadata: Metadata = {
  title: caseStudyMeta.title,
  description: caseStudyMeta.subtitle,
}

export default function CaseStudyPage() {
  return (
    <CaseStudyLayout
      title="From Text to Visual Learning"
      description={caseStudyMeta.subtitle}
      imageText="Markdown+Cheatsheet"
    >
      <Content />
    </CaseStudyLayout>
  )
}
