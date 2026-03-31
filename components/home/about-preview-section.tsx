import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutPreviewSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-80 md:h-[500px] rounded-sm overflow-hidden">
            <Image
              src="/images/about-team.jpg"
              alt="Tapasztalt idegenvezető vezeti a csoportot egy stadionban"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-primary/90 px-5 py-4 rounded-sm">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '6+', label: 'Túraprofil' },
                  { value: '5+', label: 'Helyszín' },
                  { value: '100%', label: 'Valódi élmény' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-serif text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs text-primary-foreground/70 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">
              Rólunk
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 text-balance">
              Kik vagyunk és mit csinálunk
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              A Hungary Sport Tours Magyarország egyik vezető sporttúra-szervező vállalata.
              Célunk, hogy a sport iránt érdeklődő látogatók közelről megismerhessék azokat a
              helyszíneket, ahol a történelmi sportpillanatok születtek.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Csapatunk tapasztalt idegenvezetőkből áll, akik mélyen ismerik a magyar
              sportkultúrát, a stadionok történetét és az egyes sportágak helyi örökségét.
              Minden túra kis csoportban zajlik a személyes élmény érdekében.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wide hover:gap-3 transition-all"
            >
              Tudjon meg többet rólunk
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
