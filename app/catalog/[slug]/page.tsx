import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, MapPin, Users, Check } from 'lucide-react'
import { getTourBySlug, tours } from '@/lib/tours'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) return {}
  return {
    title: `${tour.title} – Hungary Sport Tours`,
    description: tour.description,
  }
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const tour = getTourBySlug(slug)
  if (!tour) notFound()

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-28">
        <section className="relative h-72 md:h-[420px] overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-10 pb-10">
            <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-sm mb-3 w-fit">
              {tour.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground text-balance">
              {tour.title}
            </h1>
            <div className="flex flex-wrap gap-5 mt-4 text-sm text-primary-foreground/80">
              <span className="flex items-center gap-1.5">
                <Clock size={15} />
                {tour.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={15} />
                {tour.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={15} />
                Kiscsoportos
              </span>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-accent transition-colors mb-10"
            >
              <ArrowLeft size={15} />
              Vissza a katalógushoz
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
              <div className="lg:col-span-2">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  A túráról
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-8">
                  {tour.longDescription}
                </p>

                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Programpontok
                </h2>
                <ul className="flex flex-col gap-3">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <Check size={16} className="text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="bg-secondary border border-border rounded-sm p-6 sticky top-24">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                    A túra tartalmaz
                  </h3>
                  <ul className="flex flex-col gap-3 mb-6">
                    {tour.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5">
                        <Check size={14} className="text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="block w-full bg-accent text-accent-foreground text-sm font-semibold text-center px-5 py-3 rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
                  >
                    Foglalás / Érdeklodés
                  </Link>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Válaszolunk 1–2 munkanapon belül
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
