import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import CatalogClient from '@/components/catalog/catalog-client'

export const metadata: Metadata = {
  title: 'Túrakatalógus – Hungary Sport Tours',
  description:
    'Fedezze fel összes sporttúránkat Magyarországon. Labdarúgás, motorsport, vízisport, kézilabda, atlétika és golf.',
}

export default function CatalogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-28">
        <section className="bg-primary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">
              Sporttúrák
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4 text-balance">
              Túrakatalógus
            </h1>
            <p className="text-primary-foreground/70 text-base max-w-2xl leading-relaxed">
              Válassza ki érdeklődési körének megfelelő sporttúrát. Minden helyszín valódi
              sportlétesítmény tapasztalt idegenvezetővel.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <CatalogClient />
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
