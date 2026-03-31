import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Mail, Shield, Users, Target } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import FaqSection from '@/components/home/faq-section'

export const metadata: Metadata = {
  title: 'Rólunk – Hungary Sport Tours',
  description:
    'Ismerjük meg egymást. A Hungary Sport Tours csapata Magyarország legjobb sporttúráit szervezi tapasztalt idegenvezetőkkel.',
}

const values = [
  {
    icon: Target,
    title: 'Hitelesség',
    description:
      'Minden helyszínünk valódi sportlétesítmény. Nincsenek kulisszák – csak eredeti stadionok, pályák és arénák.',
  },
  {
    icon: Users,
    title: 'Személyesség',
    description:
      'Kis csoportokban dolgozunk, hogy minden résztvevő valóban közel kerülhessen az élményhez és az idegenvezetőhöz.',
  },
  {
    icon: Shield,
    title: 'Megbízhatóság',
    description:
      'Gondosan megszervezett programok, pontos időbeosztás és átlátható kommunikáció a foglalástól a túra végéig.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-28">
        <section className="bg-primary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">
              Rólunk
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4 text-balance">
              Kik vagyunk
            </h1>
            <p className="text-primary-foreground/70 text-base max-w-2xl leading-relaxed">
              A Hungary Sport Tours elkötelezett a sport iránt szenvedélyes utazók számára
              szervezett, autentikus élmények iránt.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Sportszeretet és szaktudás egy helyen
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  A Hungary Sport Tours Magyarország egyik vezető sporttúra-szervező vállalata.
                  Célunk, hogy azok számára is elérhetővé tegyük a sport kulisszatitkait, akik
                  nemcsak nézőként, hanem valódi résztvevőként akarják megélni a sportot.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed mb-4">
                  Csapatunk tapasztalt idegenvezetőkből és sportszakértőkből áll. Mindenki,
                  aki túrát vezet nálunk, mélyen ismeri az adott létesítmény történetét, az
                  ott rendezett legfontosabb eseményeket és a magyar sport hagyományait.
                </p>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Büszkék vagyunk arra, hogy minden túránk valódi helyszínen, tényleges
                  sportlétesítményben zajlik – stadionokban, arénákban, versenyköröken.
                  Nem szimulációk, nem másolatok – az eredeti helyszínek.
                </p>
              </div>
              <div className="relative h-80 md:h-[480px] rounded-sm overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="A Hungary Sport Tours csapata idegenvezetés közben"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
                Értékeink
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="bg-card border border-border rounded-sm p-6">
                    <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center mb-4">
                      <Icon size={22} className="text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="bg-secondary border border-border rounded-sm p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Elérhetőségünk
                </h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        FISCUS NOSTRUM FUND SERVICES LIMITED
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Myrianthous Anna, Panagioti Kaspi 5A.
                        <br />
                        Nicosia 1095, Cyprus
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={16} className="text-accent shrink-0" />
                    <a
                      href="mailto:info@hungarysporttours.com"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      info@hungarysporttours.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Készen áll egy túrára?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Vegye fel velünk a kapcsolatot és mi mindent megszervezünk. Túráink
                  Magyarország és Európa legjobb sportlétesítményeibe visznek.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-sm font-semibold px-6 py-3 rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
                >
                  Kapcsolatfelvétel
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
