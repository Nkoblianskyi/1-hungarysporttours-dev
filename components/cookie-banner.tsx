'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export default function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShow(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary text-primary-foreground p-4 md:p-6 shadow-2xl border-t border-primary-foreground/20 animate-fade-in-up">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-primary-foreground/90">
            Ez a weboldal cookie-kat használ a jobb felhasználói élmény érdekében. A weboldal
            használatával elfogadja a cookie-k használatát.{' '}
            <Link href="/cookie-policy" className="underline text-accent hover:opacity-80">
              További információ
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={decline}
            className="text-sm font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors px-4 py-2"
          >
            Elutasít
          </button>
          <button
            onClick={accept}
            className="bg-accent text-accent-foreground text-sm font-semibold px-5 py-2 rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Elfogad
          </button>
        </div>
      </div>
    </div>
  )
}
