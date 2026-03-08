"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Home from '../icons/home'
import Trabajo from '../icons/trabajo'
import Musica from '../icons/musica'
import NavItem from './nav-item'
import Logo from '@/components/icons/logo'

export default function Nav() {
  const pathname = usePathname()

  const navLinks = [
    {
      id: 1,
      icon: <Home />,
      link: '/',
      text: 'About'
    },
    {
      id: 2,
      icon: <Trabajo />,
      link: '/case-studies',
      text: 'Case Studies'
    },
    {
      id: 3,
      icon: <Musica />,
      link: '/musica',
      text: 'Music'
    },
  ]

  const socialLinks = [
    {
      id: 5,
      icon: <Image src="/svgs/instagram.svg" width={18} height={18} alt="Instagram"/>,
      link: 'https://www.instagram.com/weeblewobb/',
    },
    {
      id: 6,
      icon: <Image src="/svgs/linkedin.svg" width={18} height={18} alt="LinkedIn"/>,
      link: 'https://www.linkedin.com/in/bolanosjd/',
    },
    {
      id: 7,
      icon: <Image src="/svgs/github.svg" width={18} height={18} alt="GitHub"/>,
      link: 'https://github.com/weeblewobb',
    },
    {
      id: 8,
      icon: <Image src="/svgs/dribbble.svg" width={18} height={18} alt="Dribbble"/>,
      link: 'https://dribbble.com/weeblewobb',
    },
  ]

  return (
    <nav 
      className='bg-grey border-brown border-solid border-y-4 px-2 py-3 w-full md:flex md:items-center md:justify-between sm:px-12'
      aria-label="Main navigation"
    >
      <div className='flex items-center gap-x-8'>
        <div className='hidden sm:block w-28'>
          <Logo />
        </div>
        <ul 
          className='flex items-center justify-between flex-auto list-none px-4 md:px-0 gap-x-2'
          role="menubar"
        >
          {navLinks.map(page => (
            <NavItem 
              key={page.id}
              page={page}
              isActive={page.link === '/' ? pathname === '/' : pathname.startsWith(page.link)}
            />
          ))}
        </ul>
      </div>
      <ul className='hidden list-none space-x-4 md:flex md:items-center'>
        {socialLinks.map(social => (
          <li key={social.id}>
            <Link href={social.link} target='_blank' rel='noopener noreferrer'>
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
} 