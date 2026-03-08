'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface BreadcrumbProps {
  className?: string
}

export default function Breadcrumb({ className = '' }: BreadcrumbProps) {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)
  
  return (
    <nav 
      aria-label="Breadcrumb"
      className={twMerge('text-brown mb-8', className)}
    >
      <ol className="flex items-center font-medium">
        <li>
          <Link 
            href="/"
            className="hover:text-orange transition-colors"
          >
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join('/')}`
          const isLast = index === paths.length - 1
          const label = path.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')
          
          return (
            <li key={path} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-orange">{label}</span>
              ) : (
                <Link 
                  href={href}
                  className="hover:text-orange transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
} 