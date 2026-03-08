import type { MDXComponents } from 'mdx/types'
import { Section, Subsection, Table } from '@/components/case-study'
import { Header, Paragraph, List } from '@/components/typography'
import Image, { ImageProps } from 'next/image'

export function useMDXComponents(): MDXComponents {
  return {
    h4: ({ children }) => <Header level={4}>{children}</Header>,
    p: ({ children }) => <Paragraph>{children}</Paragraph>,
    ul: ({ children }) => (
      <ul className="list-disc pl-8 text-brown">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-8 text-brown">{children}</ol>
    ),
    li: ({ children }) => <li className="text-lg">{children}</li>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    // Pass-through custom components for explicit use in MDX
    Section,
    Subsection,
    Table,
    List,
    Paragraph,
    Header,
  }
}
