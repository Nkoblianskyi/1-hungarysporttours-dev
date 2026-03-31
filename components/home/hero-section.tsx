import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-hungary.jpg"
        alt="Budapest panorámakép sportteljesítménnyel"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block text-accent text-xs uppercase tracking-[0.2em] font-semibold mb-6 border border-accent/40 px-3 py-1 rounded-sm">
          Sporttúrák Magyarországon
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 text-balance">
          Fedezze fel a sport
          <br />
          Magyarországát
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-pretty">
          Vezérelt túrák Magyarország legjobb stadionjain, motorsport-pályáin és sportlétesítményein
          át. Nem csak néző – részese lesz a történelemnek.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/catalog"
            className="bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-sm uppercase tracking-wide text-sm hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            Túrák böngészése
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/about"
            className="border border-primary-foreground/40 text-primary-foreground font-medium px-8 py-4 rounded-sm uppercase tracking-wide text-sm hover:border-primary-foreground/80 transition-colors"
          >
            Rólunk
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-primary-foreground/30 animate-pulse" />
        <span className="text-primary-foreground/40 text-xs uppercase tracking-widest">
          Görgessen le
        </span>
      </div>
    </section>
  )
}
