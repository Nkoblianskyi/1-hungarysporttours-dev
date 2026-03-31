import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-2">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight block mb-4">
            Hungary Sport Tours
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
            Professzionális sporttúrák Magyarország és Európa legjobb sportlétesítményeibe.
            Stadionok, motorsport, vízisport és kézilabda – valódi helyszíneken, tapasztalt
            idegenvezetőkkel.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold text-accent mb-4">
            Navigáció
          </h3>
          <ul className="flex flex-col gap-2">
            {[
              { href: '/', label: 'Főoldal' },
              { href: '/catalog', label: 'Túrakatalógus' },
              { href: '/about', label: 'Rólunk' },
              { href: '/contact', label: 'Kapcsolat' },
              { href: '/cookie-policy', label: 'Cookie Szabályzat' },
              { href: '/privacy-policy', label: 'Adatvédelmi Szabályzat' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold text-accent mb-4">
            Kapcsolat
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="text-accent mt-0.5 shrink-0" />
              <span className="text-sm text-primary-foreground/70 leading-relaxed">
                FISCUS NOSTRUM FUND SERVICES LIMITED
                <br />
                Panagioti Kaspi 5A.
                <br />
                Nicosia 1095, Cyprus
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-accent shrink-0" />
              <a
                href="mailto:info@hungarysporttours.com"
                className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                info@hungarysporttours.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
          <span>
            &copy; {new Date().getFullYear()} Hungary Sport Tours. Minden jog fenntartva.
          </span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">
              Adatvédelem
            </Link>
            <Link href="/cookie-policy" className="hover:text-accent transition-colors">
              Cookie Szabályzat
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
