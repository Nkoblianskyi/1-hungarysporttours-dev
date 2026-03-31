import { Users, MapPin, Star, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Valódi helyszínek',
    description:
      'Minden túránk Magyarország tényleges sportlétesítményeit érinti – stadionokat, arénaokat és versenyköröket.',
  },
  {
    icon: Users,
    title: 'Kis csoportok',
    description:
      'Maximum 15 fős csoportok, hogy mindenki személyes figyelmet kapjon és igazán közel kerülhessen az élményekhez.',
  },
  {
    icon: Star,
    title: 'Tapasztalt idegenvezetők',
    description:
      'Szakképzett idegenvezetőink jól ismerik az egyes sportágak történetét és a látogatott létesítményeket.',
  },
  {
    icon: ShieldCheck,
    title: 'Megbízható szervezés',
    description:
      'Gondosan megtervezett programok, amelyek a kényelmet, a biztonságot és a maximális élményt helyezik előtérbe.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-accent text-xs uppercase tracking-[0.2em] font-semibold">
            Miért válasszon minket
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            A sporttúrák szakértői
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Szervezett és egyéni programjaink lehetővé teszik, hogy Ön is közelről tapasztalja
            meg a sport világát.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col gap-4 p-6 bg-card border border-border rounded-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
