import type { Metadata } from 'next'
import ContactClient from './contact-client'

export const metadata: Metadata = {
  title: 'Kapcsolat – Hungary Sport Tours',
  description:
    'Vegye fel a kapcsolatot a Hungary Sport Tours csapatával. Csoportos foglalások, kérdések, egyéni programok.',
}

export default function ContactPage() {
  return <ContactClient />
}
