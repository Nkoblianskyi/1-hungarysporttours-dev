import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Clock, MapPin } from 'lucide-react'
import { tours } from '@/lib/tours'

const featured = tours.slice(0, 3)

export default function ToursPreviewSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">
              Kiemelt túrák
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
              Válassza ki a következő kalandját
            </h2>
          </div>
          <Link
            href="/catalog"
            className="flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wide hover:gap-3 transition-all"
          >
            Összes túra megtekintése
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((tour) => (
            <Link
              key={tour.slug}
              href={`/catalog/${tour.slug}`}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors" />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-sm">
                  {tour.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2 leading-snug">
                  {tour.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                  {tour.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {tour.location}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
