declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const metadata: {
    title: string
    subtitle: string
    date: string
    author: string
  }

  const MDXComponent: ComponentType
  export default MDXComponent
}
