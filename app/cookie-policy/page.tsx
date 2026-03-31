import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Cookie Szabályzat – Hungary Sport Tours',
  description:
    'A Hungary Sport Tours cookie (süti) szabályzata. Tájékoztató a weboldalon használt sütikről.',
}

const cookieTable = [
  {
    name: 'cookie-consent',
    type: 'Szükséges',
    duration: '1 év',
    purpose: 'Az Ön cookie-hozzájárulási döntésének tárolása.',
  },
  {
    name: '_ga',
    type: 'Analitikai',
    duration: '2 év',
    purpose: 'Google Analytics – egyedi látogatók megkülönböztetése.',
  },
  {
    name: '_ga_*',
    type: 'Analitikai',
    duration: '2 év',
    purpose: 'Google Analytics – munkamenet állapotának fenntartása.',
  },
  {
    name: '_gid',
    type: 'Analitikai',
    duration: '24 óra',
    purpose: 'Google Analytics – látogatók megkülönböztetése.',
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-28">
        <section className="bg-primary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">
              Jogi dokumentum
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4 text-balance">
              Cookie Szabályzat
            </h1>
            <p className="text-primary-foreground/70 text-sm">
              Utoljára frissítve: 2024. január 1.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col gap-10">

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">1. Mi az a cookie?</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A cookie (süti) egy kis méretű szöveges fájl, amelyet a weboldal az Ön böngészőjében tárol, amikor meglátogatja oldalunkat. A cookie-k segítségével a weboldal megjegyezheti az Ön beállításait, javíthatja a felhasználói élményt és statisztikákat gyűjthet a látogatókról.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">2. Milyen cookie-kat használunk?</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A Hungary Sport Tours weboldala az alábbi típusú cookie-kat alkalmazza:
                </p>
                <ul className="flex flex-col gap-4 pl-4">
                  <li>
                    <p className="text-sm font-semibold text-foreground mb-1">Szükséges cookie-k</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ezek a cookie-k a weboldal alapvető működéséhez szükségesek. Nélkülük a weboldal egyes funkciói nem lennének elérhetők. Ezek a cookie-k nem gyűjtenek személyazonosításra alkalmas adatot.
                    </p>
                  </li>
                  <li>
                    <p className="text-sm font-semibold text-foreground mb-1">Analitikai cookie-k</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ezek a cookie-k anonim statisztikákat gyűjtenek arról, hogy a látogatók hogyan használják weboldalunkat. Az adatokat kizárólag aggregált formában, egyének azonosítása nélkül elemezzük a weboldal javítása céljából.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">3. Az alkalmazott cookie-k részletezése</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-secondary">
                        <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold border border-border">
                          Cookie neve
                        </th>
                        <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold border border-border">
                          Típus
                        </th>
                        <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold border border-border">
                          Élettartam
                        </th>
                        <th className="text-left px-4 py-3 text-xs uppercase tracking-widest text-muted-foreground font-semibold border border-border">
                          Cél
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookieTable.map((row) => (
                        <tr key={row.name} className="border-b border-border hover:bg-secondary/50 transition-colors">
                          <td className="px-4 py-3 text-foreground font-mono text-xs border border-border">{row.name}</td>
                          <td className="px-4 py-3 text-muted-foreground border border-border">{row.type}</td>
                          <td className="px-4 py-3 text-muted-foreground border border-border">{row.duration}</td>
                          <td className="px-4 py-3 text-muted-foreground border border-border">{row.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">4. Cookie-k kezelése és letiltása</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A weboldal első látogatásakor megjelenő cookie-sávon elfogadhatja vagy elutasíthatja a nem szükséges cookie-kat. Döntését bármikor megváltoztathatja a böngésző cookie-beállításain keresztül.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A legtöbb böngészőben a cookie-k kezelése az alábbi helyen érhető el:
                </p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'Chrome: Beállítások / Adatvédelem és biztonság / Cookie-k és egyéb webhelyadatok',
                    'Firefox: Beállítások / Adatvédelem és biztonság / Cookie-k és webhelyadatok',
                    'Safari: Beállítások / Adatvédelem / Cookie-k kezelése',
                    'Edge: Beállítások / Cookie-k és webhelyengedélyek',
                  ].map((item) => (
                    <li key={item} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-1 shrink-0">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Felhívjuk figyelmét, hogy a cookie-k letiltása befolyásolhatja a weboldal bizonyos funkcióinak elérhetőségét.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">5. Harmadik féltől származó cookie-k</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Weboldalunk Google Analytics szolgáltatást használhat a látogatási statisztikák elemzéséhez. A Google Analytics által alkalmazott cookie-kkal kapcsolatos részletes tájékoztatót a Google adatvédelmi oldalán találja: policies.google.com/privacy.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">6. A szabályzat módosítása</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Fenntartjuk a jogot jelen Cookie Szabályzat módosítására. A módosított változatot ezen az oldalon tesszük közzé a hatályba lépés dátumának feltüntetésével. Javasoljuk, hogy rendszeresen ellenőrizze ezt az oldalt.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">7. Kapcsolat</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ha kérdése van a cookie-k használatával kapcsolatban, kérjük, vegye fel velünk a kapcsolatot:{' '}
                  <a href="mailto:info@hungarysporttours.com" className="text-accent hover:underline">
                    info@hungarysporttours.com
                  </a>
                </p>
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
