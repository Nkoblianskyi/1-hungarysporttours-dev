'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'Kell-e előre foglalni a túrát?',
    a: 'Igen, minden túrára előzetes foglalás szükséges. Kiscsoportos rendszerben dolgozunk, így korlátozott férőhely áll rendelkezésre. A foglalást a kapcsolati űrlapon keresztül vagy e-mailben intézheti.',
  },
  {
    q: 'Milyen nyelveken zajlanak a túrák?',
    a: 'Túráink alapértelmezetten magyar és angol nyelven elérhetők. Kérésre más nyelvű kísérésről is tájékozódhat – kérjük, a foglaláskor jelezze igényét.',
  },
  {
    q: 'Hány fő vesz részt egy-egy túrán?',
    a: 'A csoportos túrák maximális létszáma túratípustól függően 10–15 fő. Ez biztosítja az egyéni figyelmet és a közvetlen élményt. Privát csoportos foglalásra is van lehetőség.',
  },
  {
    q: 'Mit tartalmaz a túra ára?',
    a: 'Minden túra tartalmazza a szakképzett idegenvezető kísérését, a belépőjegyeket a látogatott létesítménybe, valamint a kiscsoportos élményt. A részletes tartalom az egyes túraoldalon olvasható.',
  },
  {
    q: 'Gyerekek részt vehetnek-e a túrákon?',
    a: 'A legtöbb túra gyerekbarát, azonban az ajánlott életkori határokat az egyes túraoldalon jelöljük. Kisgyermekek esetén kérjük, vegye fel velünk a kapcsolatot az optimális program érdekében.',
  },
  {
    q: 'Mi történik rossz időjárás esetén?',
    a: 'A beltéri létesítménytúrák időjárástól függetlenül megvalósulnak. Outdoor helyszínek esetén (pl. golf, F1-pálya) szélsőséges körülmények esetén alternatív időpontot ajánlunk fel.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">
            Kérdések és válaszok
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 text-balance">
            Gyakori kérdések
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-card-foreground text-sm md:text-base pr-4">
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus size={18} className="text-accent shrink-0" />
                ) : (
                  <Plus size={18} className="text-muted-foreground shrink-0" />
                )}
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  openIndex === i ? 'max-h-60' : 'max-h-0',
                )}
              >
                <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
