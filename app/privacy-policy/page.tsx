import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Adatvédelmi Szabályzat – Hungary Sport Tours',
  description:
    'A Hungary Sport Tours adatvédelmi szabályzata. Tájékoztató a személyes adatok kezeléséről.',
}

export default function PrivacyPolicyPage() {
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
              Adatvédelmi Szabályzat
            </h1>
            <p className="text-primary-foreground/70 text-sm">
              Utoljára frissítve: 2024. január 1.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="prose-policy flex flex-col gap-10">

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">1. Adatkezelő adatai</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Az adatkezelő neve: <strong className="text-foreground">FISCUS NOSTRUM FUND SERVICES LIMITED</strong><br />
                  Képviselő: Myrianthous Anna<br />
                  Cím: Panagioti Kaspi 5A., Nicosia 1095, Cyprus<br />
                  E-mail: info@hungarysporttours.com
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">2. Az adatkezelés célja</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A Hungary Sport Tours weboldala (hungarysporttours.com) személyes adatokat kizárólag az alábbi célokra gyűjt és kezel:
                </p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'Kapcsolatfelvételi kérelmek feldolgozása és megválaszolása',
                    'Túrafoglalások kezelése és visszaigazolása',
                    'Az Ön hozzájárulásával hírlevél és promóciós tartalmak küldése',
                    'A weboldal technikai működésének biztosítása',
                  ].map((item) => (
                    <li key={item} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-1 shrink-0">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">3. Kezelt személyes adatok</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A kapcsolatfelvételi form kitöltésekor az alábbi adatokat gyűjthetjük:
                </p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'Teljes neve',
                    'E-mail cím',
                    'Telefonszám (opcionális)',
                    'Az üzenet szöveges tartalma',
                    'Az érdekelt túra neve',
                  ].map((item) => (
                    <li key={item} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-1 shrink-0">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">4. Az adatkezelés jogalapja</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A személyes adatok kezelésének jogalapja az Ön önkéntes hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont), valamint a szerződés teljesítéséhez szükséges adatkezelés (GDPR 6. cikk (1) bekezdés b) pont) a foglalások és megrendelések esetén.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">5. Adatmegőrzési idő</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A kapcsolatfelvételi kérelmekből származó személyes adatokat legfeljebb 2 évig őrizzük meg, kivéve, ha azt jogszabályi kötelezettség hosszabb ideig indokolja. Hírlevél-feliratkozás esetén az adatokat az Ön leiratkozásáig kezeljük.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">6. Az Ön jogai</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Az alkalmazandó adatvédelmi jogszabályok alapján Önt az alábbi jogok illetik meg:
                </p>
                <ul className="flex flex-col gap-2 pl-4">
                  {[
                    'Hozzáférés joga – tájékoztatást kérhet a kezelt adatairól',
                    'Helyesbítés joga – kérheti a pontatlan adatok módosítását',
                    'Törlés joga – kérheti személyes adatainak törlését',
                    'Az adatkezelés korlátozásához való jog',
                    'Adathordozhatóság joga',
                    'Tiltakozás joga az adatkezelés ellen',
                  ].map((item) => (
                    <li key={item} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-1 shrink-0">–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Jogai gyakorlásához vegye fel velünk a kapcsolatot: info@hungarysporttours.com
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">7. Adatok továbbítása harmadik félnek</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Személyes adatait harmadik félnek nem adjuk el, és nem adjuk ki, kivéve, ha azt jogszabály kötelezővé teszi, vagy ha Ön ehhez előzetesen hozzájárult. Egyes technikai szolgáltatások (pl. e-mail küldés) igénybevételéhez szükség lehet adatfeldolgozók bevonására, akik megfelelő adatvédelmi garanciákat nyújtanak.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">8. Adatbiztonság</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Minden szükséges technikai és szervezési intézkedést megteszünk az Ön személyes adatainak védelme érdekében, beleértve a titkosítást, a hozzáférés-korlátozást és a rendszeres biztonsági felülvizsgálatot.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">9. Cookie-k használata</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Weboldalunk cookie-kat (sütiket) alkalmaz. A cookie-k kezelésével kapcsolatos részletes tájékoztatót{' '}
                  <a href="/cookie-policy" className="text-accent hover:underline">
                    Cookie Szabályzatunkban
                  </a>{' '}
                  találja.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">10. Panasz benyújtása</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ha úgy véli, hogy adatainak kezelése sérti az alkalmazandó adatvédelmi jogszabályokat, panaszt nyújthat be a illetékes felügyeleti hatósághoz. Magyarország esetén ez a Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH), amelynek elérhetőségei megtalálhatók a naih.hu weboldalon.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h2 className="font-serif text-2xl font-bold text-foreground">11. A szabályzat módosítása</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Fenntartjuk a jogot jelen Adatvédelmi Szabályzat módosítására. Lényeges változások esetén a weboldalon értesítjük a látogatókat. A szabályzat aktuális változata mindig elérhető ezen az oldalon.
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
