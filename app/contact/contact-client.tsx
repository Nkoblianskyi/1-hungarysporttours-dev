'use client'

import { useState } from 'react'
import { MapPin, Mail, CheckCircle } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', tour: '', message: '' })
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-28">
        {/* Hero */}
        <section className="bg-primary py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">
              Kapcsolat
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4 text-balance">
              Írjon nekünk
            </h1>
            <p className="text-primary-foreground/70 text-base max-w-2xl leading-relaxed">
              Kérdése van valamelyik túrával kapcsolatban, vagy csoportos foglalást tervez?
              Vegye fel velünk a kapcsolatot – hamarosan válaszolunk.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                      >
                        Teljes neve <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Kovács János"
                        className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                      >
                        E-mail cím <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="pelda@email.hu"
                        className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                      >
                        Telefonszám
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+36 30 000 0000"
                        className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent transition"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="tour"
                        className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                      >
                        Érdeklelt túra
                      </label>
                      <select
                        id="tour"
                        name="tour"
                        value={form.tour}
                        onChange={handleChange}
                        className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                      >
                        <option value="">Válasszon túrát...</option>
                        <option value="puskas-arena-tour">
                          Puskás Aréna – Stadionlátogatás
                        </option>
                        <option value="hungaroring-f1-tour">
                          Hungaroring – F1 Körverseny Túra
                        </option>
                        <option value="duna-arena-vizisport">
                          Duna Aréna – Vízisport-túra
                        </option>
                        <option value="mvm-dome-kezilabda">
                          MVM Dome – Kézilabda-aréna Túra
                        </option>
                        <option value="nemzeti-atletikai-kozpont">
                          Nemzeti Atlétikai Központ
                        </option>
                        <option value="pannon-golf-tura">Pannon Golf – Sportlátogatás</option>
                        <option value="egyeb">Egyéb / Általános kérdés</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                    >
                      Üzenet <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Írja le kérdését vagy üzenetét..."
                      className="bg-secondary border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-accent text-accent-foreground text-sm font-semibold px-8 py-3 rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60 self-start"
                  >
                    {loading ? 'Küldés...' : 'Üzenet küldése'}
                  </button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                <div className="bg-secondary border border-border rounded-sm p-6">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-5">
                    Elérhetőségeink
                  </h2>
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-start gap-3">
                      <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          FISCUS NOSTRUM FUND SERVICES LIMITED
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
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

                <div className="bg-secondary border border-border rounded-sm p-6">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-3">
                    Válaszidő
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Munkanapokon általában 24 órán belül válaszolunk minden megkeresésre.
                    Csoportos foglalások esetén kérjük, adjon meg minél több részletet az
                    üzenetében.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />

      {/* Success Popup */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onClick={() => setSubmitted(false)}
        >
          <div
            className="bg-card border border-border rounded-sm p-8 max-w-md w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center mb-5">
              <CheckCircle size={48} className="text-accent" />
            </div>
            <h2
              id="success-title"
              className="font-serif text-2xl font-bold text-card-foreground mb-3"
            >
              Üzenete megérkezett
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Köszönjük megkeresését. Csapatunk 1–2 munkanapon belül felveszi Önnel a
              kapcsolatot.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-accent text-accent-foreground text-sm font-semibold px-8 py-3 rounded-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}
    </>
  )
}
