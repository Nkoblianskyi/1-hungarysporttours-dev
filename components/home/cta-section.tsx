import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">
          Foglaljon most
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6 text-balance">
          Készen áll a sporttörténelemre?
        </h2>
        <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Vegye fel velünk a kapcsolatot, válassza ki a megfelelő túrát, és mi mindent
          megszervezünk. Válaszolunk 1–2 munkanapon belül.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-sm uppercase tracking-wide text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Kapcsolatfelvétel
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/catalog"
            className="border border-primary-foreground/30 text-primary-foreground font-medium px-8 py-4 rounded-sm uppercase tracking-wide text-sm hover:border-primary-foreground/60 transition-colors"
          >
            Túrakatalógus
          </Link>
        </div>
      </div>
    </section>
  )
}
