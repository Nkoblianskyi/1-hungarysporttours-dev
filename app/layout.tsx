import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Hungary Sport Tours – Sporttúrák Magyarországon',
  description:
    'Professzionális sporttúrák Magyarországon – stadionok, motorsport, vízi sportok, kézilabda és atlétika. Szervezett csoportos és egyéni túrák.',
  metadataBase: new URL('https://hungarysporttours.com'),
  openGraph: {
    title: 'Hungary Sport Tours',
    description: 'Sporttúrák Magyarországon – stadionok, motorsport, F1 és több.',
    url: 'https://hungarysporttours.com',
    siteName: 'Hungary Sport Tours',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
