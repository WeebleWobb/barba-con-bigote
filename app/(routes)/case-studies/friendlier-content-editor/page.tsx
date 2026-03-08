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
      title="Modernizing the Editing Experience"
      description={caseStudyMeta.subtitle}
      image="/images/case-studies/friendlier-content-editor.png"
    >
      <Content />
    </CaseStudyLayout>
  )
}
