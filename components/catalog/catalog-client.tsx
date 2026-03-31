'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, MapPin, SlidersHorizontal } from 'lucide-react'
import { tours, tourCategories } from '@/lib/tours'
import { cn } from '@/lib/utils'

export default function CatalogClient() {
  const [activeCategory, setActiveCategory] = useState('Összes')

  const filtered =
    activeCategory === 'Összes' ? tours : tours.filter((t) => t.category === activeCategory)

  return (
    <>
      <div className="flex items-center gap-3 mb-10 flex-wrap">
        <SlidersHorizontal size={16} className="text-muted-foreground" />
        {tourCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'text-xs font-semibold uppercase tracking-wide px-4 py-2 rounded-sm border transition-colors',
              activeCategory === cat
                ? 'bg-accent text-accent-foreground border-accent'
                : 'bg-transparent text-muted-foreground border-border hover:border-accent hover:text-accent',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((tour) => (
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
              <h2 className="font-serif text-lg font-semibold text-card-foreground mb-2 leading-snug">
                {tour.title}
              </h2>
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

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          Ebben a kategóriában jelenleg nincsenek elérhető túrák.
        </div>
      )}
    </>
  )
}
