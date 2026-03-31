'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Főoldal' },
  { href: '/catalog', label: 'Túrakatalógus' },
  { href: '/about', label: 'Rólunk' },
  { href: '/contact', label: 'Kapcsolat' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isHome = pathname === '/'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isHome && !scrolled
          ? 'bg-transparent'
          : 'bg-primary shadow-lg',
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          
        >
          <div className="flex items-center gap-2">
            <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            <p className="font-serif text-xl md:text-2xl font-bold text-primary-foreground tracking-tight">Hungary Sport Tours</p>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide uppercase transition-colors duration-200',
                  pathname === link.href
                    ? 'text-accent'
                    : 'text-primary-foreground/80 hover:text-accent',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground text-sm font-semibold px-5 py-2 rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Foglalás
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-primary-foreground"
          aria-label="Menü megnyitása"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium uppercase tracking-wide',
                pathname === link.href ? 'text-accent' : 'text-primary-foreground/80',
              )}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-accent text-accent-foreground text-sm font-semibold px-5 py-2 rounded-sm uppercase tracking-wide text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Foglalás
          </Link>
        </div>
      )}
    </header>
  )
}
