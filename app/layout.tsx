import { Signika_Negative, Orelega_One } from 'next/font/google'
import './styles/globals.scss'
import Nav from '@/components/navigation/nav'
import { defaultMetadata } from '@/config/metadata'

const signika = Signika_Negative({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-signika',
  preload: true
})

const orelega = Orelega_One({ 
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-orelega',
  preload: true
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${signika.variable} ${orelega.variable}`}>
      <body>
        <div className='flex flex-col justify-between md:justify-start h-screen'>
          <Nav />
          {children}
        </div>
      </body>
    </html>
  )
} 